import './LatePassenger.scss';
import { useState } from 'react';
import useSEO from '@/hooks/useSEO';
// Types
import type { Artist } from '@/types/artist';
import type { Track } from '@/types/track';
import type { Album } from '@/types/album';
import type { Project } from '@/types/project';

// Data
import artistsData from '@/data/artists.json';
import musicData from '@/data/music.json';
import albumsData from '@/data/albums.json';
import projectsData from '@/data/projects.json';
import platformsData from '@/data/platforms.json';
import type { Platform } from '@/types/channel';
import SectionHeader from '@/components/Layout/SectionHeader/SectionHeader';
import PlatformLink from '@/components/UI/PlatformLink/PlatformLink';

import AlbumCard from '@/components/UI/Cards/AlbumCard/AlbumCard';
import MusicCard from '@/components/UI/Cards/MusicCard/MusicCard';
import ProjectCard from '@/components/UI/Cards/ProjectCard/ProjectCard';
import ShortwaveRadio from '@/components/UI/ShortwaveRadio/ShortwaveRadio';
import CRTPanel from '@/components/Layout/Panels/CRTPanel';
import Button from '@/components/UI/Buttons/Button';
import { PATHS } from '@/constants/routes';

const LatePassenger = () => {
    useSEO({
        title: 'LatePassenger | Anonymous Electronic Archive & Discography',
        description:
            'Explore the complete discography, nocturnal synthwave releases, collaborative projects, and production gear archive of LatePassenger transmitting on 104.2 FM.',
        keywords:
            'LatePassenger, anonymous electronic music, synthwave albums, retrowave tracks, cyberpunk soundscapes, electronic music projects, analog synth gear',
    });

    const artist: Artist = artistsData[0] as Artist;
    const tracksList: Track[] = musicData as Track[];
    const albumsList: Album[] = albumsData as Album[];
    const projectsList: Project[] = projectsData as Project[];
    const platformsList: Platform[] = (platformsData as Platform[]).filter(
        (p) => p.id !== 'home' && p.id !== 'email'
    );

    const [activeTab, setActiveTab] = useState<'MUSIC' | 'PROJECTS' | 'PLATFORMS'>('MUSIC');
    const [selectedCategory, setSelectedCategory] = useState<'ALL' | 'ALBUMS' | 'SINGLES' | 'BEATS' | 'INSTRUMENTALS'>('ALL');
    const [currentPlayingTrack, setCurrentPlayingTrack] = useState<Track | null>(tracksList[0]);

    const filteredTracks = tracksList.filter((t) => {
        if (selectedCategory === 'ALL') return true;
        if (selectedCategory === 'SINGLES') return t.type === 'SINGLE';
        if (selectedCategory === 'BEATS') return t.type === 'BEAT';
        if (selectedCategory === 'INSTRUMENTALS') return t.type === 'INSTRUMENTAL';
        if (selectedCategory === 'ALBUMS') return false;
        return true;
    });


    return (
        <main className="latePassenger artist bg-cyber-grid">
            <section className="artist__hero">
                <div className="container">
                    <div className="artist__hero__box">
                        <article className="artist__hero__badge">
                            <span className="status-badge status-active">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                        <path d="M16.247 7.761a6 6 0 0 1 0 8.478m2.828-11.306a10 10 0 0 1 0 14.134m-14.15 0a10 10 0 0 1 0-14.134m2.828 11.306a6 6 0 0 1 0-8.478" />
                                        <circle cx="12" cy="12" r="2" />
                                    </g>
                                </svg>

                                ANONYMOUS TRANSMISSION • FREQ {artist.transmissionFrequency}
                            </span>
                        </article>

                        <h1>
                            LATEPASSENGER
                            <span>Anonymous Electronic Archive</span>
                        </h1>
                        <p className="artist__hero__tagline">"{artist.tagline}"</p>

                        <p className="artist__hero__concept">{artist.description}</p>
                        <p className="body-text" style={{ fontSize: '0.95rem', marginBottom: '24px' }}>
                            {artist.longDescription}
                        </p>

                        <article className="artist__hero__genres">
                            {artist.genres.map((g) => (
                                <span key={g} className="tag-chip tag-accent">
                                    {g}
                                </span>
                            ))}
                        </article>
                    </div>
                </div>
            </section>

            <section className="artist__archive section-padding bg-cyber-grid">
                <div className="container">
                    <article className="artist__archive__tabs">
                        <button
                            className={`tab-btn ${activeTab === 'MUSIC' ? 'active' : ''}`}
                            onClick={() => setActiveTab('MUSIC')}
                        >
                            <svg style={{ display: 'inline', marginRight: '8px', width: '18px', height: '18px' }} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <circle cx="12" cy="12" r="2" />
                                </g>
                            </svg>

                            1. MUSIC ARCHIVE ({albumsList.length + tracksList.length})
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'PROJECTS' ? 'active' : ''}`}
                            onClick={() => setActiveTab('PROJECTS')}
                        >
                            <svg style={{ display: 'inline', marginRight: '8px', width: '18px', height: '18px' }} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                    <path d="M12 20v2m0-20v2m5 16v2m0-20v2M2 12h2m-2 5h2M2 7h2m16 5h2m-2 5h2M20 7h2M7 20v2M7 2v2" />
                                    <rect width="16" height="16" x="4" y="4" rx="2" />
                                    <rect width="8" height="8" x="8" y="8" rx="1" />
                                </g>
                            </svg>
                            2. PROJECTS ({projectsList.length})
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'PLATFORMS' ? 'active' : ''}`}
                            onClick={() => setActiveTab('PLATFORMS')}
                        >
                            <svg style={{ display: 'inline', marginRight: '8px', width: '18px', height: '18px' }} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                    <circle cx="18" cy="5" r="3" />
                                    <circle cx="6" cy="12" r="3" />
                                    <circle cx="18" cy="19" r="3" />
                                    <path d="m8.59 13.51l6.83 3.98m-.01-10.98l-6.82 3.98" />
                                </g>
                            </svg>
                            3. TRANSMISSION PLATFORMS ({platformsList.length})
                        </button>
                    </article>

                    {
                        activeTab === 'MUSIC' && (
                            <article>
                                <div className="artist__archive__filters">
                                    {(['ALL', 'ALBUMS', 'SINGLES', 'BEATS', 'INSTRUMENTALS'] as const).map((cat) => (
                                        <button
                                            key={cat}
                                            className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                                            onClick={() => setSelectedCategory(cat)}
                                        >
                                            [ {cat} ]
                                        </button>
                                    ))}
                                </div>

                                {
                                    selectedCategory === 'ALL' || selectedCategory === 'ALBUMS' ? (
                                        <div style={{ marginBottom: '48px' }}>
                                            <SectionHeader title="ALBUM RELEASES" tag="FULL LP CATALOG" />

                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                                                {albumsList.map((album) => (
                                                    <AlbumCard
                                                        key={album.id}
                                                        album={album}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    )
                                        :
                                        null
                                }

                                {
                                    selectedCategory !== 'ALBUMS' && (
                                        <>
                                            <SectionHeader title="DISCOGRAPHY & SINGLES" tag="TRACK ARCHIVE" />

                                            <div
                                                style={{
                                                    display: 'grid',
                                                    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                                                    gap: '24px',
                                                }}
                                            >
                                                {filteredTracks.map((track) => (
                                                    <MusicCard
                                                        key={track.id}
                                                        track={track}
                                                        isPlaying={currentPlayingTrack?.id === track.id}
                                                        onPlay={(t) => setCurrentPlayingTrack(t)}
                                                    />
                                                ))}
                                            </div>
                                        </>
                                    )
                                }
                            </article>
                        )
                    }

                    {
                        activeTab === 'PROJECTS' && (
                            <article>
                                <SectionHeader
                                    title="TECHNICAL & CREATIVE PROJECTS"
                                    tag="WORK ARCHIVE"
                                    subtitle="Mixing, mastering, sound design and custom composition production sessions."
                                />
                                <div
                                    style={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                                        gap: '24px',
                                    }}
                                >
                                    {projectsList.map((proj) => (
                                        <ProjectCard key={proj.id} project={proj} />
                                    ))}
                                </div>
                            </article>
                        )
                    }

                    {
                        activeTab === 'PLATFORMS' && (
                            <article>
                                <SectionHeader
                                    title="TRANSMISSION PLATFORMS"
                                    tag="BROADCAST CHANNELS"
                                    subtitle="Official streaming networks, video channels and lossless music archives."
                                />
                                <div
                                    style={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                                        gap: '20px',
                                    }}
                                >
                                    {platformsList.map((platform) => (
                                        <PlatformLink key={platform.id} platform={platform} />
                                    ))}
                                </div>
                            </article>
                        )
                    }
                </div>
            </section>

            <section className="artist__shortwave section-padding" >
                <div className="container">
                    <SectionHeader
                        title="LIVE RECEIVER TERMINAL"
                        tag="STATION AUDIO"
                        subtitle="Tune in directly to LatePassenger's broadcast signal."
                    />
                    <ShortwaveRadio
                        currentTrack={currentPlayingTrack}
                        tracks={tracksList}
                        onSelectTrack={(t) => setCurrentPlayingTrack(t)}
                    />
                </div>
            </section>

            <section className="artist__cta section-padding">
                <div className="container">
                    <CRTPanel>
                        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
                            <h2 style={{ marginBottom: '12px' }}>CONNECT WITH LATEPASSENGER</h2>
                            <p className="body-text" style={{ marginBottom: '24px' }}>
                                For custom music production, mixing, score commissions or broadcast inquiries.
                            </p>
                            <Button to={PATHS.CONTACT} variant="primary" size="lg" icon={
                                <svg style={{ width: '18px', height: '18px' }} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7-7l7 7l-7 7" />
                                </svg>
                            }>
                                SEND AN EMAIL
                            </Button>
                        </div>
                    </CRTPanel>
                </div>
            </section>
        </main>
    );
}

export default LatePassenger;