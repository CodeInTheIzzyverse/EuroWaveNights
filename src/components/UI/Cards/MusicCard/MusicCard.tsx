import type { MusicTrack } from "@/types/music";
import Button from "@/components/UI/Buttons/Button";
import './MusicCard.scss';

interface MusicCardProps {
    track: MusicTrack;
    onPlay?: (track: MusicTrack) => void;
    isPlaying?: boolean;
}

const MusicCard = ({
    track,
    onPlay,
    isPlaying = false,
}: MusicCardProps) => {
    return (
        <div className="musicCard">
            <div className="musicCard__cover">
                <span className="musicCard__type">{track.type}</span>
                {track.frequency && <span className="musicCard__freq">{track.frequency}</span>}

                <svg
                    className="musicCard__graphic"
                    viewBox="0 0 300 170"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label={track.title}
                >
                    <defs>
                        <linearGradient id={`grad-${track.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#0B1022" />
                            <stop offset="50%" stopColor="#10172E" />
                            <stop offset="100%" stopColor="#1B2853" />
                        </linearGradient>
                        <linearGradient id={`neon-${track.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#2D6CFF" />
                            <stop offset="50%" stopColor="#7A6DFF" />
                            <stop offset="100%" stopColor="#FF5FBF" />
                        </linearGradient>
                    </defs>
                    <rect width="300" height="170" fill={`url(#grad-${track.id})`} />

                    {/* Cyber Grid Lines */}
                    <path d="M0 130 L300 130 M0 145 L300 145 M0 160 L300 160" stroke="#36508A" strokeWidth="0.8" opacity="0.4" />
                    <path d="M30 110 L0 170 M90 110 L40 170 M150 110 L150 170 M210 110 L260 170 M270 110 L300 170" stroke="#36508A" strokeWidth="0.8" opacity="0.3" />

                    {/* Sun / Neon Dial */}
                    <circle cx="150" cy="85" r="35" fill="none" stroke={`url(#neon-${track.id})`} strokeWidth="2" opacity="0.8" />
                    <circle cx="150" cy="85" r="28" fill="none" stroke="#4EA1FF" strokeDasharray="4 2" opacity="0.6" />

                    {/* Synth Wave Lines */}
                    <path
                        d="M 20 85 Q 70 40 120 85 T 220 85 T 280 85"
                        fill="none"
                        stroke="#4EA1FF"
                        strokeWidth="2.5"
                        opacity="0.9"
                    />
                    <path
                        d="M 20 92 Q 70 120 120 92 T 220 92 T 280 92"
                        fill="none"
                        stroke="#FF5FBF"
                        strokeWidth="1.5"
                        opacity="0.7"
                    />

                    {/* Title Overlay Text */}
                    <text x="150" y="150" fill="#F2F6FF" fontSize="11" fontFamily="Silkscreen" textAnchor="middle" letterSpacing="1">
                        {track.genre.toUpperCase()}
                    </text>
                </svg>

                <div className="musicCard__overlay">
                    <Button
                        variant="pixel"
                        size="sm"
                        onClick={() => onPlay && onPlay(track)}
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
                            </svg>
                        }
                    >
                        {isPlaying ? 'PAUSE SIGNAL' : 'TUNE IN DEMO'}
                    </Button>
                </div>
            </div>

            <div className="musicCard__info">
                <h3>{track.title}</h3>
                <p className="musicCard__artist">{track.artistName} • {track.year}</p>
                <p className="musicCard__desc">{track.description}</p>

                <div className="musicCard__specs">
                    {track.bpm && (
                        <span>
                            <svg className="text-accent-pink" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
                            </svg>

                            {track.bpm} BPM
                        </span>
                    )}
                    {track.key && (
                        <span className="spec-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <circle cx="12" cy="12" r="2" />
                                </g>
                            </svg>

                            KEY: {track.key}
                        </span>
                    )}
                    <span className="spec-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 6v6l4 2" />
                            </g>
                        </svg>

                        {track.duration}
                    </span>
                </div>
            </div>

            <div className="musicCard__actions">
                <Button
                    variant={isPlaying ? 'accent' : 'secondary'}
                    size="sm"
                    fullWidth
                    onClick={() => onPlay && onPlay(track)}
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                <path d="M16.247 7.761a6 6 0 0 1 0 8.478m2.828-11.306a10 10 0 0 1 0 14.134m-14.15 0a10 10 0 0 1 0-14.134m2.828 11.306a6 6 0 0 1 0-8.478" />
                                <circle cx="12" cy="12" r="2" />
                            </g>
                        </svg>
                    }
                >
                    {isPlaying ? 'PAUSE SIGNAL' : 'LISTEN TO BROADCAST'}
                </Button>
            </div>
        </div>
    );
}

export default MusicCard;