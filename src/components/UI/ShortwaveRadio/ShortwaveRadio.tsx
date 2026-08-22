import type { Track } from "@/types/track";
import { useEffect, useRef, useState, useCallback } from "react";
import Button from "../Buttons/Button";
import './ShortwaveRadio.scss';

// Extend window for YouTube iFrame API
declare global {
    interface Window {
        onYouTubeIframeAPIReady?: () => void;
        YT?: {
            Player: new (
                elementId: string,
                config: {
                    height: string;
                    width: string;
                    videoId: string;
                    playerVars?: Record<string, unknown>;
                    events?: {
                        onReady?: (event: { target: YTPlayer }) => void;
                        onStateChange?: (event: { data: number }) => void;
                        onError?: () => void;
                    };
                }
            ) => YTPlayer;
            PlayerState: {
                PLAYING: number;
                PAUSED: number;
                ENDED: number;
            };
        };
    }
}

interface YTPlayer {
    playVideo: () => void;
    pauseVideo: () => void;
    mute: () => void;
    unMute: () => void;
    loadVideoById: (id: string) => void;
    destroy: () => void;
}

interface ShortwaveRadioProps {
    currentTrack?: Track | null;
    tracks: Track[];
    onSelectTrack?: (track: Track) => void;
}

const ShortwaveRadio = ({
    currentTrack,
    tracks,
    onSelectTrack,
}: ShortwaveRadioProps) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [ytReady, setYtReady] = useState(false);

    const initialTrack = currentTrack || tracks[0] || {
        id: 'default',
        title: 'Midnight Highway Express',
        type: 'SINGLE' as const,
        genre: 'Eurobeat',
        year: 2026,
        duration: '03:48',
        artistId: 'latepassenger',
        artistName: 'LatePassenger',
        coverArt: 'default',
        description: 'EuroWave Nights broadcast',
        frequency: '104.8 MHz',
        bpm: 155,
    };

    const [selectedTrack, setSelectedTrack] = useState<Track>(initialTrack);

    const audioCtxRef = useRef<AudioContext | null>(null);
    const synthIntervalRef = useRef<number | null>(null);
    const ytPlayerRef = useRef<YTPlayer | null>(null);
    const htmlAudioRef = useRef<HTMLAudioElement | null>(null);

    // Initialize YouTube Iframe API once
    useEffect(() => {
        if (window.YT && window.YT.Player) {
            window.setTimeout(() => setYtReady(true), 0);
            return;
        }

        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

        window.onYouTubeIframeAPIReady = () => {
            setYtReady(true);
        };
    }, []);

    // Create YT Player instance once script is ready
    useEffect(() => {
        if (ytReady && !ytPlayerRef.current && window.YT) {
            ytPlayerRef.current = new window.YT.Player('yt-hidden-player', {
                height: '0',
                width: '0',
                videoId: selectedTrack.youtubeId || '',
                playerVars: {
                    autoplay: 0,
                    controls: 0,
                    disablekb: 1,
                    fs: 0,
                    modestbranding: 1,
                    rel: 0,
                },
                events: {
                    onStateChange: (event) => {
                        if (window.YT) {
                            if (event.data === window.YT.PlayerState.PLAYING) {
                                setIsPlaying(true);
                            } else if (event.data === window.YT.PlayerState.PAUSED || event.data === window.YT.PlayerState.ENDED) {
                                setIsPlaying(false);
                            }
                        }
                    },
                },
            });
        }
    }, [ytReady, selectedTrack.youtubeId]);

    const stopSynthLoop = useCallback(() => {
        if (synthIntervalRef.current) {
            clearInterval(synthIntervalRef.current);
            synthIntervalRef.current = null;
        }
    }, []);

    const startSynthLoop = useCallback(() => {
        if (!audioCtxRef.current) {
            const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
            audioCtxRef.current = new AudioCtx();
        }

        const ctx = audioCtxRef.current;
        if (ctx.state === 'suspended') {
            ctx.resume();
        }

        stopSynthLoop();

        const baseFreqs = [174.61, 220.00, 261.63, 349.23];
        let step = 0;

        synthIntervalRef.current = window.setInterval(() => {
            if (!audioCtxRef.current || isMuted) return;

            try {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                const filter = ctx.createBiquadFilter();

                osc.type = step % 2 === 0 ? 'sawtooth' : 'triangle';
                const noteFreq = baseFreqs[step % baseFreqs.length] * (step % 4 === 0 ? 1 : 1.25);
                osc.frequency.setValueAtTime(noteFreq, ctx.currentTime);

                filter.type = 'lowpass';
                filter.frequency.setValueAtTime(800 + (step % 3) * 400, ctx.currentTime);

                gain.gain.setValueAtTime(0.08, ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);

                osc.connect(filter);
                filter.connect(gain);
                gain.connect(ctx.destination);

                osc.start();
                osc.stop(ctx.currentTime + 0.45);

                step++;
            } catch (e) {
                console.error('Synth audio error', e);
            }
        }, 400);
    }, [isMuted, stopSynthLoop]);

    const startAudioSource = useCallback((track: Track) => {
        stopSynthLoop();
        if (htmlAudioRef.current) {
            htmlAudioRef.current.pause();
        }

        if (track.youtubeId && ytPlayerRef.current) {
            ytPlayerRef.current.loadVideoById(track.youtubeId);
            if (isMuted) ytPlayerRef.current.mute();
            else ytPlayerRef.current.unMute();
            ytPlayerRef.current.playVideo();
        } else if (track.audioUrl) {
            if (ytPlayerRef.current) ytPlayerRef.current.pauseVideo();
            if (!htmlAudioRef.current) {
                htmlAudioRef.current = new Audio(track.audioUrl);
            } else {
                htmlAudioRef.current.src = track.audioUrl;
            }
            htmlAudioRef.current.muted = isMuted;
            htmlAudioRef.current.play();
        } else {
            if (ytPlayerRef.current) ytPlayerRef.current.pauseVideo();
            startSynthLoop();
        }
    }, [isMuted, startSynthLoop, stopSynthLoop]);

    const playAudioForTrack = useCallback((track: Track) => {
        setIsPlaying(true);
        startAudioSource(track);
    }, [startAudioSource]);

    const [prevCurrentTrack, setPrevCurrentTrack] = useState<Track | null>(currentTrack || null);

    if (currentTrack && currentTrack !== prevCurrentTrack) {
        setPrevCurrentTrack(currentTrack);
        setSelectedTrack(currentTrack);
    }

    // Handle audio playback when currentTrack prop changes
    useEffect(() => {
        if (currentTrack && isPlaying) {
            startAudioSource(currentTrack);
        }
    }, [currentTrack, isPlaying, startAudioSource]);




    const pauseAudio = () => {
        stopSynthLoop();
        if (ytPlayerRef.current) {
            ytPlayerRef.current.pauseVideo();
        }
        if (htmlAudioRef.current) {
            htmlAudioRef.current.pause();
        }
        setIsPlaying(false);
    };

    const togglePlayback = () => {
        if (isPlaying) {
            pauseAudio();
        } else {
            playAudioForTrack(selectedTrack);
        }
    };

    const handleMuteToggle = () => {
        const nextMute = !isMuted;
        setIsMuted(nextMute);
        if (ytPlayerRef.current) {
            if (nextMute) ytPlayerRef.current.mute();
            else ytPlayerRef.current.unMute();
        }
        if (htmlAudioRef.current) {
            htmlAudioRef.current.muted = nextMute;
        }
    };

    const handleSelect = (track: Track) => {
        setSelectedTrack(track);
        if (onSelectTrack) onSelectTrack(track);
        if (isPlaying) {
            playAudioForTrack(track);
        }
    };

    useEffect(() => {
        return () => {
            stopSynthLoop();
            if (audioCtxRef.current) audioCtxRef.current.close();
            if (htmlAudioRef.current) htmlAudioRef.current.pause();
        };
    }, [stopSynthLoop]);



    return (
        <div className="shortwaveRadio">
            <div className="shortwaveRadio__screen">
                <div className="screen__header">
                    <span className="screen-title">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                <path d="M16.247 7.761a6 6 0 0 1 0 8.478m2.828-11.306a10 10 0 0 1 0 14.134m-14.15 0a10 10 0 0 1 0-14.134m2.828 11.306a6 6 0 0 1 0-8.478" />
                                <circle cx="12" cy="12" r="2" />
                            </g>
                        </svg>

                        EUROWAVE RECEIVER MK-IV
                    </span>
                    <span className="screen-signal">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 17v2m4-5v5m4-8v8m4-11v11m4-14v14" />
                        </svg>
                        SIGNAL: 98%
                    </span>
                </div>

                <div className="freq-large-display">
                    <div className="freq-number">{selectedTrack.frequency || '104.8 MHz'}</div>
                    <div className="freq-track-title">NOW TRANSMITTING: {selectedTrack.title}</div>
                </div>

                <div className="oscilloscope-canvas">
                    {Array.from({ length: 28 }).map((_, i) => (
                        <span
                            key={i}
                            className="waveform-bar"
                            style={{
                                height: isPlaying ? `${Math.floor(Math.sin(i * 0.8) * 16 + 20)}px` : '4px',
                                opacity: isPlaying ? 0.9 : 0.3,
                                animationDelay: `${(i % 5) * 0.15}s`,
                            }}
                        />
                    ))}
                </div>
            </div>

            <div className="shortwaveRadio__panel">
                <div className="freq-preset-buttons">
                    <span className="preset-lbl">QUICK FREQUENCY PRESETS:</span>
                    <div className="preset-grid">
                        {tracks.slice(0, 4).map((tr) => (
                            <Button
                                key={tr.id}
                                variant={selectedTrack.id === tr.id ? 'accent' : 'outline'}
                                size="sm"
                                onClick={() => handleSelect(tr)}
                            >
                                {tr.frequency || '104.8 MHz'}
                            </Button>
                        ))}
                    </div>
                </div>

                <div className="radio-main-btns">
                    <Button
                        variant={isPlaying ? 'accent' : 'primary'}
                        size="lg"
                        fullWidth
                        onClick={togglePlayback}
                        icon={isPlaying ?
                            (
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                        <rect width="5" height="18" x="14" y="3" rx="1" />
                                        <rect width="5" height="18" x="5" y="3" rx="1" />
                                    </g>
                                </svg>
                            )
                            :
                            (
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
                                </svg>
                            )
                        }
                    >
                        {isPlaying ? 'PAUSE BROADCAST' : 'TUNE IN STATION'}
                    </Button>

                    <Button
                        variant="outline"
                        size="md"
                        onClick={handleMuteToggle}
                        icon={isMuted ?
                            (
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298zM22 9l-6 6m0-6l6 6" />
                                </svg>
                            )
                            :
                            (
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298zM16 9a5 5 0 0 1 0 6m3.364 3.364a9 9 0 0 0 0-12.728" />
                                </svg>
                            )}
                    >
                        {isMuted ? 'UNMUTE' : 'MUTE'}
                    </Button>
                </div>

                <div id="yt-hidden-player" style={{ display: 'none' }} />
            </div>
        </div>
    );
}

export default ShortwaveRadio;
