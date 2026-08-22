import useSEO from '@/hooks/useSEO';
import './Links.scss';
import { BRAND } from '@/constants/brand';
import ChannelCard from '@/components/UI/Cards/ChannelCard/ChannelCard';
import platformsData from '@/data/platforms.json';
import type { Platform } from '@/types/channel';

const LINKS: Platform[] = platformsData as Platform[];

const Links = () => {
    useSEO({
        title: 'Broadcast Frequencies & Links | EuroWave Nights & LatePassenger',
        description:
            'Official streaming links, social channels, and clandestine broadcast frequencies for LatePassenger and EuroWave Nights across Spotify, YouTube, SoundCloud, Bandcamp, Instagram, and TikTok.',
        keywords:
            'LatePassenger links, EuroWave Nights streaming, synthwave Spotify playlist, SoundCloud demos, Bandcamp music, electronic music links',
        favicon: '/images/EuroWaveNightsIsotipo.png',
    });

    return (
        <main className="links bg-cyber-grid">
            <div className="container">
                <section className="links__wrapper">
                    <article className="links__header">
                        <div className="links__avatar">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                    <path d="M16.247 7.761a6 6 0 0 1 0 8.478m2.828-11.306a10 10 0 0 1 0 14.134m-14.15 0a10 10 0 0 1 0-14.134m2.828 11.306a6 6 0 0 1 0-8.478" />
                                    <circle cx="12" cy="12" r="2" />
                                </g>
                            </svg>
                        </div>

                        <h1>LATEPASSENGER</h1>
                        <p className='links__tag'>[ SIGNAL: TRANSMISSION ACTIVE ]</p>
                        <p className='links__bio'>{BRAND.ARTIST_TAGLINE}</p>
                    </article>

                    <article className="links__links">
                        {
                            LINKS.map((link, i) => (
                                <ChannelCard channel={link} key={i} />
                            ))
                        }
                    </article>
                </section>
            </div>
        </main>
    );
}

export default Links;