import useSEO from '@/hooks/useSEO';
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import albumsData from '@/data/albums.json';
import musicData from '@/data/music.json';
import type { Album } from '@/types/album';
import type { Track } from '@/types/track';
import SectionHeader from '@/components/Layout/SectionHeader/SectionHeader';
import Button from '@/components/UI/Buttons/Button';
import PlatformIcon from '@/components/UI/PlatformIcon/PlatformIcon';
import ShortwaveRadio from '@/components/UI/ShortwaveRadio/ShortwaveRadio';
import PixelWindow from '@/components/Layout/PixelWindow/PixelWindow';
import './AlbumDetails.scss';

const AlbumDetails = () => {
    const { id } = useParams<{ id: string }>();
    const albumsList: Album[] = albumsData as Album[];
    const allTracks: Track[] = musicData as Track[];

    const album = albumsList.find((a) => a.id === id);

    const albumTracks = allTracks.filter((t) => t.albumId === id);

    const [activeTrack, setActiveTrack] = useState<Track | null>(
        albumTracks[0] || (album ? ({
            id: album.id,
            title: album.title,
            type: 'SINGLE',
            genre: album.genre,
            year: album.year,
            duration: album.duration,
            artistId: album.artistId,
            artistName: album.artistName,
            coverArt: album.coverArt,
            description: album.description,
            frequency: album.frequency,
            bpm: album.bpm,
            key: album.key,
        } as Track) : null)
    );

    useSEO({
        title: album ? `${album.title} | EuroWave Nights Album Archive` : 'Album Not Found',
        description: album ? album.description : 'Requested album transmission not found.',
        keywords: album ? `${album.title}, ${album.genre}, EuroWave Nights, LatePassenger` : '',
    });

    if (!album) {
        return (
            <main className="albumDetails bg-cyber-grid section-padding">
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2>ALBUM NOT FOUND</h2>
                    <p className="body-text">The requested transmission album does not exist or has been relocated.</p>
                    <div style={{ marginTop: '24px' }}>
                        <Button to="/latepassenger" variant="primary">RETURN TO DISCOGRAPHY</Button>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="albumDetails bg-cyber-grid">
            <section className="albumDetails__hero section-padding">
                <div className="container">
                    <div className="albumDetails__header">
                        <Link to="/latepassenger" className="back-link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m7 7l-7-7 7-7" />
                            </svg>
                            BACK TO DISCOGRAPHY
                        </Link>

                        <div className="albumDetails__grid">
                            <div className="albumDetails__cover">
                                <svg className="albumDetails__cover__art" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" aria-label={album.title}>
                                    <defs>
                                        <linearGradient id={`album-hero-${album.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#0B1022" />
                                            <stop offset="50%" stopColor="#172043" />
                                            <stop offset="100%" stopColor="#2D6CFF" />
                                        </linearGradient>
                                    </defs>
                                    <rect width="240" height="240" fill={`url(#album-hero-${album.id})`} />
                                    <circle cx="120" cy="120" r="85" fill="#070A16" stroke="#36508A" strokeWidth="3" />
                                    <circle cx="120" cy="120" r="70" fill="none" stroke="#4EA1FF" strokeDasharray="6 3" opacity="0.6" />
                                    <circle cx="120" cy="120" r="50" fill="none" stroke="#7A6DFF" strokeWidth="1.5" />
                                    <circle cx="120" cy="120" r="25" fill="#FF5FBF" opacity="0.8" />
                                    <circle cx="120" cy="120" r="8" fill="#F2F6FF" />
                                </svg>
                            </div>

                            <div className="albumDetails__info">
                                <span className="status-badge status-active" style={{ marginBottom: '12px' }}>
                                    {album.type} • FREQUENCY {album.frequency || '104.8 MHz'}
                                </span>

                                <h1>{album.title}</h1>
                                <p className="artist-subtitle">BY {album.artistName} • RELEASED {album.year}</p>
                                <p className="description">{album.description}</p>

                                <div className="albumDetails__meta">
                                    <div className="meta-chip">
                                        <span className="lbl">GENRE</span>
                                        <span className="val">{album.genre}</span>
                                    </div>
                                    <div className="meta-chip">
                                        <span className="lbl">RUNTIME</span>
                                        <span className="val">{album.duration}</span>
                                    </div>
                                    {album.bpm && (
                                        <div className="meta-chip">
                                            <span className="lbl">TEMPO</span>
                                            <span className="val">{album.bpm} BPM</span>
                                        </div>
                                    )}
                                    {album.key && (
                                        <div className="meta-chip">
                                            <span className="lbl">KEY</span>
                                            <span className="val">{album.key}</span>
                                        </div>
                                    )}
                                </div>

                                <div className="albumDetails__external">
                                    {album.links?.map((link) => (
                                        <Button
                                            key={link.platformId}
                                            variant="outline"
                                            href={link.url}
                                            icon={<PlatformIcon name={link.platformId} />}
                                        >
                                            LISTEN ON {link.name.toUpperCase()}
                                        </Button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="albumDetails__tracklist section-padding">
                <div className="container">
                    <SectionHeader
                        title="ALBUM TRACKLIST"
                        tag="AUDIO ARCHIVE"
                        subtitle={`Complete tracklist specification for ${album.title}`}
                    />

                    <PixelWindow title="TRACKLIST_MANIFEST.LOG" statusText={`${albumTracks.length} TRACKS FOUND`}>
                        {albumTracks.length > 0 ? (
                            <div className="tracklist-table">
                                {albumTracks.map((track, idx) => (
                                    <div
                                        key={track.id}
                                        className={`track-row ${activeTrack?.id === track.id ? 'active' : ''}`}
                                        onClick={() => setActiveTrack(track)}
                                    >
                                        <span className="track-num">{track.trackNumber || idx + 1}</span>
                                        <div className="track-main">
                                            <h4>{track.title}</h4>
                                            <p>{track.description}</p>
                                        </div>
                                        <span className="track-duration">{track.duration}</span>
                                        <Button
                                            variant={activeTrack?.id === track.id ? 'accent' : 'secondary'}
                                            size="sm"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setActiveTrack(track);
                                            }}
                                            icon={
                                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                                    <path d="M0 0h24v24H0z" fill="none" />
                                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
                                                </svg>
                                            }
                                        >
                                            {activeTrack?.id === track.id ? 'PLAYING' : 'TUNE IN'}
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="body-text" style={{ padding: '20px', textAlign: 'center' }}>
                                Full tracklist stream is currently transmitting on main station frequencies.
                            </p>
                        )}
                    </PixelWindow>
                </div>
            </section>

            <section className="albumDetails__player section-padding">
                <div className="container">
                    <SectionHeader
                        title="TRANSMISSION RECEIVER"
                        tag="LIVE STREAM"
                        subtitle="Listen to selected tracks from this album."
                    />
                    <ShortwaveRadio
                        currentTrack={activeTrack}
                        tracks={albumTracks.length > 0 ? albumTracks : [activeTrack!]}
                        onSelectTrack={(t) => setActiveTrack(t)}
                    />
                </div>
            </section>
        </main>
    );
};

export default AlbumDetails;
