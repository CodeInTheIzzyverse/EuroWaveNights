import { BRAND } from '@/constants/brand';
import TransmissionStatus from '@/components/UI/TransmissionStatus/TransmissionStatus';
import MasterLogo from '@/assets/EuroWaveNights/MasterLogo.png';
import './Footer.scss';
import { TransitionLink } from '@/components/UI/TransitionLink';
import { PATHS } from '@/constants/routes';
import platformsData from '@/data/platforms.json';
import type { Platform } from '@/types/channel';
import PlatformIcon from '@/components/UI/PlatformIcon/PlatformIcon';

const footerPlatforms: Platform[] = (platformsData as Platform[]).filter(
    (p) => p.id !== 'home' && p.id !== 'email'
);

const Footer = () => {
    return (
        <footer>
            <section className='footer__content'>
                <article>
                    <img src={MasterLogo} alt="" />
                    <p className="footer__slogan">"{BRAND.SLOGAN}"</p>
                    <p style={{ fontSize: '0.88rem', maxWidth: '400px' }}>
                        {BRAND.SUBTITLE}
                    </p>

                    <h4>[ BROADCAST PLATFORMS ]</h4>

                    <ul className="footer__icons">
                        {footerPlatforms.map((platform) => (
                            <li key={platform.id}>
                                <a href={platform.link} target="_blank" rel="noopener noreferrer" title={platform.name}>
                                    <PlatformIcon name={platform.icon} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </article>

                <article>
                    <h4>[ TRANSMISSION NETWORK ]</h4>

                    <ul className="footer__links">
                        <li><TransitionLink to={PATHS.HOME}>Home Station</TransitionLink></li>
                        <li><TransitionLink to={PATHS.LATE_PASSENGER}>LatePassenger Archive</TransitionLink></li>
                        <li><a href="/#services">Services & Production</a></li>
                        <li><TransitionLink to={PATHS.CONTACT}>Contact Terminal</TransitionLink></li>
                        <li><TransitionLink to={PATHS.LINKS}>Digital Transmission Links</TransitionLink></li>
                    </ul>
                </article>
            </section>

            <section className='footer__copy'>
                <span>{BRAND.COPYRIGHT}</span>
                <TransmissionStatus compact />
            </section>
        </footer>
    );
}

export default Footer;