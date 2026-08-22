import { useEffect, useState } from 'react';
import { PATHS } from '@/constants/routes';
import { useLocation } from 'react-router-dom';
import { TransitionNavLink } from '@/components/UI/TransitionLink';
import './Header.scss';
import Wordmark from '@/assets/EuroWaveNights/Wordmark.png';
import LatePassengerLogo from '@/assets/LatePassenger/Logo.png';

const LATE_PASSENGER_ROUTES = [PATHS.LATE_PASSENGER, '/albums/'];

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    const isLatePassengerRoute = LATE_PASSENGER_ROUTES.some(
        (route) => location.pathname === route || location.pathname.startsWith(route)
    );

    const brandLogo = isLatePassengerRoute ? LatePassengerLogo : Wordmark;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 8);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className={isScrolled ? "header header--scrolled" : "header"}>
            <section className="header__brand">
                <TransitionNavLink to={PATHS.HOME} onClick={closeMenu}>
                    <img src={brandLogo} alt="" />
                </TransitionNavLink>
            </section>

            <section className={`header__content ${isMenuOpen ? "header__content--open" : ""}`}>
                <nav className="header__menu">
                    <ul>
                        <li>
                            <TransitionNavLink
                                to={PATHS.HOME}
                                onClick={closeMenu}
                                className={({ isActive }) => isActive ? "header__link header__link--active" : "header__link"}
                            >
                                Home
                            </TransitionNavLink>
                        </li>

                        <li>
                            <TransitionNavLink
                                to={PATHS.LATE_PASSENGER}
                                onClick={closeMenu}
                                className={({ isActive }) => isActive ? "header__link header__link--active" : "header__link"}
                            >
                                LatePassenger
                            </TransitionNavLink>
                        </li>

                        <li>
                            <TransitionNavLink
                                to={PATHS.CONTACT}
                                onClick={closeMenu}
                                className={({ isActive }) => isActive ? "header__link header__link--active" : "header__link"}
                            >
                                Contact
                            </TransitionNavLink>
                        </li>
                    </ul>
                </nav>
            </section>

            <button className="header__hamburger" onClick={toggleMenu} aria-label="Toggle menu">
                {isMenuOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 6L6 18M6 6l12 12" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5h16M4 12h16M4 19h16" />
                    </svg>
                )}

            </button>
        </header>
    );
}

export default Header;