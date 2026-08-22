import useSEO from '@/hooks/useSEO';
import './Links.scss';
import { SOCIAL } from '@/constants/social';
import { PATHS } from '@/constants/routes';
import { BRAND } from '@/constants/brand';
import ChannelCard from '@/components/UI/Cards/ChannelCard/ChannelCard';

const LINKS = [
    {
        name: 'Spotify',
        link: SOCIAL.SPOTIFY,
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none" />
            <g fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <path strokeLinecap="round" d="M7.5 12.069c1.1-.37 2.276-.569 3.5-.569c2.024 0 3.92.547 5.549 1.5M18 10c-1.85-1.262-4.088-2-6.5-2c-1.597 0-3.118.324-4.5.908M15.129 16a9.04 9.04 0 0 0-6.497-.685" />
            </g>
        </svg>
    },
    {
        name: 'Bandcamp',
        link: SOCIAL.BANDCAMP,
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path fill="currentColor" d="m0 18.75l7.437-13.5H24l-7.438 13.5z" />
        </svg>
    },
    {
        name: 'YouTube',
        link: SOCIAL.YOUTUBE,
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path fill="none" stroke="currentColor" strokeDasharray="60" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5c9 0 9 0 9 7c0 7 0 7 -9 7c-9 0 -9 0 -9 -7c0 -7 0 -7 9 -7Z">
                <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="60;0" />
            </path>
            <path fill="currentColor" d="M10 8.5l6 3.5l-6 3.5Z" opacity="0">
                <set fill="freeze" attributeName="opacity" begin="0.6s" to="1" />
                <animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M12 11l0 1l0 1Z;M10 8.5l6 3.5l-6 3.5Z" />
            </path>
        </svg>
    },
    {
        name: 'Instagram',
        link: SOCIAL.INSTAGRAM,
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" />
        </svg>
    },
    {
        name: 'TikTok',
        link: SOCIAL.TIKTOK,
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path fill="currentColor" d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48" />
        </svg>
    },
    {
        name: 'EuroWave Nights Home',
        link: PATHS.HOME,
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none" />
            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <path d="M16.247 7.761a6 6 0 0 1 0 8.478m2.828-11.306a10 10 0 0 1 0 14.134m-14.15 0a10 10 0 0 1 0-14.134m2.828 11.306a6 6 0 0 1 0-8.478" />
                <circle cx="12" cy="12" r="2" />
            </g>
        </svg>
    },
    {
        name: 'Email',
        link: `mailto:${SOCIAL.EMAIL}`,
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none" />
            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                <rect width="20" height="16" x="2" y="4" rx="2" />
            </g>
        </svg>
    }
]

const Links = () => {
    useSEO({
        title: 'Broadcast Frequencies & Links | EuroWave Nights & LatePassenger',
        description:
            'Official streaming links, social channels, and clandestine broadcast frequencies for LatePassenger and EuroWave Nights across Spotify, YouTube, SoundCloud, Bandcamp, Instagram, and TikTok.',
        keywords:
            'LatePassenger links, EuroWave Nights streaming, synthwave Spotify playlist, SoundCloud demos, Bandcamp music, electronic music links',
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