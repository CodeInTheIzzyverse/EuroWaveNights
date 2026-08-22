import './Home.scss';
import { useState } from 'react';
import { BRAND } from '@/constants/brand';
import useSEO from '@/hooks/useSEO';
import TransmissionStatus from '@/components/UI/TransmissionStatus/TransmissionStatus';
import ShortwaveRadio from '@/components/UI/ShortwaveRadio/ShortwaveRadio';
import SectionHeader from '@/components/Layout/SectionHeader/SectionHeader';
import FeatureCard from '@/components/UI/Cards/FeatureCard/FeatureCard';
import ArtistCard from '@/components/UI/Cards/ArtistCard/ArtistCard';
import Button from '@/components/UI/Buttons/Button';
import MusicCard from '@/components/UI/Cards/MusicCard/MusicCard';
import ServiceCard from '@/components/UI/Cards/ServiceCard/ServiceCard';
import PixelWindow from '@/components/Layout/PixelWindow/PixelWindow';
import EquipmentCard from '@/components/UI/Cards/EquipmentCard/EquipmentCard';
import CRTPanel from '@/components/Layout/Panels/CRTPanel';

// Data
import artistsData from '@/data/artists.json';
import musicData from '@/data/music.json';
import servicesData from '@/data/services.json';
import equipmentData from '@/data/equipment.json';
import featuresData from '@/data/features.json';

// Types
import type { Artist } from '@/types/artist';
import type { Track } from '@/types/track';
import type { Service } from '@/types/service';
import type { Equipment } from '@/types/equipment';
import type { Feature } from '@/types/feature';

const Home = () => {
    useSEO({
        title: 'EuroWave Nights | Clandestine Midnight Synth & Electronic Broadcast',
        description:
            'EuroWave Nights - Illegal midnight electronic broadcasts from an unnamed city. Discover nocturnal synthwave, anonymous producer archives, shortwave audio streams, and audio production services.',
        keywords:
            'EuroWave Nights, synthwave, retrowave, electronic music, shortwave radio, cyberpunk audio, music production, stem mastering, LatePassenger, midnight broadcast',
        favicon: '/images/EuroWaveNightsIsotipo.png',
    });

    const artists: Artist[] = artistsData as Artist[];
    const tracks: Track[] = musicData as Track[];
    const services: Service[] = servicesData as Service[];
    const equipment: Equipment[] = equipmentData as Equipment[];
    const features: Feature[] = featuresData as Feature[];

    const [activeTrack, setActiveTrack] = useState<Track | null>(tracks[0] || null);

    const featuredTracks = tracks.filter((t) => t.featured);

    const dawequipment = equipment.filter((e) => e.category === 'DAWs');
    const pluginequipment = equipment.filter((e) => e.category === 'Plugins');
    const hardwareequipment = equipment.filter((e) => e.category === 'Hardware');

    return (
        <main className='home'>
            <section className='home__hero'>
                <div className="container">
                    <article className='home__hero__content'>
                        <TransmissionStatus />

                        <div className='hero__title'>
                            <h1>EUROWAVE</h1>
                            <span>Nights</span>
                        </div>

                        <p className='slogan'>"{BRAND.SLOGAN}"</p>

                        <p className='copy'>
                            A clandestine transmission for forgotten nights, anonymous artists, and nocturnal electronic sounds.
                            Transmitting across unmapped shortwave frequencies when the city sleeps.
                        </p>
                    </article>

                    <article>
                        <ShortwaveRadio
                            currentTrack={activeTrack}
                            tracks={tracks}
                            onSelectTrack={(t) => setActiveTrack(t)}
                        />
                    </article>
                </div>
            </section>

            <section className='home__about section-padding bg-cyber-grid'>
                <div className="container">
                    <SectionHeader
                        title="THE TRANSMISSION"
                        tag="STATION CONCEPT"
                        subtitle="EuroWave Nights appears after midnight. Nobody knows who operates it. Anonymous artists transmit their music to the broadcast."
                        centered
                    />

                    <article>
                        {
                            features.map((feature) => (
                                <FeatureCard key={feature.id} feature={feature} />
                            ))
                        }
                    </article>
                </div>
            </section>

            <section className='home__artists section-padding'>
                <div className="container">
                    <SectionHeader
                        title="TRANSMITTING ARTISTS"
                        tag="STATION ROSTER"
                        subtitle="Anonymous electronic music producers transmitting after midnight through EuroWave Nights."
                    />

                    <article>
                        {artists.map((artist) => (
                            <ArtistCard key={artist.id} artist={artist} />
                        ))}
                    </article>
                </div>
            </section>

            <section className='home__featured section-padding bg-cyber-grid'>
                <div className="container">
                    <SectionHeader
                        title="LATEST TRANSMISSIONS"
                        tag="FEATURED ARCHIVE"
                        subtitle="Recent midnight tracks, singles and EP releases transmitted from Sector 7."
                        action={
                            <Button to="/latepassenger" variant="outline" size="sm" icon={
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512">
                                    <path d="M0 0h512v512H0z" fill="none" />
                                    <circle cx="256" cy="256.02" r="32" fill="currentColor" />
                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M184.25 192.25a96 96 0 0 0 0 127.52m143.52 0a96 96 0 0 0 0-127.52m-194.49-50.97a168 168 0 0 0 0 229.44m245.44 0a168 168 0 0 0 0-229.44" />
                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M435 416a240.34 240.34 0 0 0 0-320M77 96a240.34 240.34 0 0 0 0 320" />
                                </svg>
                            }>
                                VIEW FULL MUSIC ARCHIVE
                            </Button>
                        }
                    />

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
                        {featuredTracks.map((track) => (
                            <MusicCard
                                key={track.id}
                                track={track}
                                isPlaying={activeTrack?.id === track.id}
                                onPlay={(t) => setActiveTrack(t)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section id="services" className='home__services section-padding'>
                <div className="container">
                    <SectionHeader
                        title="SERVICES & PRODUCTION"
                        tag="STUDIO TERMINAL"
                        subtitle="Professional electronic music production, mixing, mastering, composition and vocal editing."
                    />

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
                        {services.map((srv, index) => (
                            <ServiceCard key={srv.id} service={srv} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            <section className='home__workstation section-padding bg-cyber-grid'>
                <div className="container">
                    <SectionHeader
                        title="TOOLS & EQUIPMENT"
                        tag="SYSTEM WORKSTATION"
                        subtitle="Hardware, DAWs, plugins, and acoustic instruments utilized in the EuroWave Nights production workstation."
                    />

                    <PixelWindow title="WORKSTATION_SPECS.LOG" statusText="ONLINE_24/7">
                        <article className="home__workstation__category">
                            <h4>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                        <path d="M12 20v2m0-20v2m5 16v2m0-20v2M2 12h2m-2 5h2M2 7h2m16 5h2m-2 5h2M20 7h2M7 20v2M7 2v2" />
                                        <rect width="16" height="16" x="4" y="4" rx="2" />
                                        <rect width="8" height="8" x="8" y="8" rx="1" />
                                    </g>
                                </svg>

                                PRIMARY DAWs
                            </h4>

                            <div className="home__workstation__grid">
                                {dawequipment.map((eq) => (
                                    <EquipmentCard key={eq.id} equipment={eq} />
                                ))}
                            </div>
                        </article>

                        <article className="home__workstation__category">
                            <h4>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 8h4m-2 13v-9m0-4V3m5 13h4m-2-4V3m0 18v-5M3 14h4m-2-4V3m0 18v-7" />
                                </svg>

                                SOFTWARE SYNTHS & EFFECT PLUGINS
                            </h4>

                            <div className="home__workstation__grid">
                                {pluginequipment.map((eq) => (
                                    <EquipmentCard key={eq.id} equipment={eq} />
                                ))}
                            </div>
                        </article>

                        <article className="home__workstation__category">
                            <h4>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
                                </svg>

                                HARDWARE & ACOUSTIC INSTRUMENTS
                            </h4>

                            <div className="home__workstation__grid">
                                {hardwareequipment.map((eq) => (
                                    <EquipmentCard key={eq.id} equipment={eq} />
                                ))}
                            </div>
                        </article>
                    </PixelWindow>
                </div>
            </section>

            <section className='home__cta section-padding' style={{ backgroundColor: '#070A16' }}>
                <div className="container">
                    <CRTPanel>
                        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
                            <span className="status-badge status-active" style={{ marginBottom: '16px' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                        <path d="M16.247 7.761a6 6 0 0 1 0 8.478m2.828-11.306a10 10 0 0 1 0 14.134m-14.15 0a10 10 0 0 1 0-14.134m2.828 11.306a6 6 0 0 1 0-8.478" />
                                        <circle cx="12" cy="12" r="2" />
                                    </g>
                                </svg>

                                SIGNAL ONLINE
                            </span>

                            <h2 style={{ marginBottom: '12px' }}>INITIATE CONTACT</h2>
                            <p className="body-text" style={{ marginBottom: '24px' }}>
                                Have a music production inquiry, mixing request, or custom track project? Send a transmission to the station.
                            </p>

                            <Button to="/contact" variant="primary" size="lg" icon={
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7l7 7l-7 7" />
                                </svg>
                            }>
                                SEND AN EMAIL TRANSMISSION
                            </Button>
                        </div>
                    </CRTPanel>
                </div>
            </section>
        </main>
    );
}

export default Home;