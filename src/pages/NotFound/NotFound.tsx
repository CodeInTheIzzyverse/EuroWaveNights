import useSEO from '@/hooks/useSEO';
import './NotFound.scss';
import CRTPanel from '@/components/Layout/Panels/CRTPanel';
import Button from '@/components/UI/Buttons/Button';
import { PATHS } from '@/constants/routes';

const NotFound = () => {
    useSEO({
        title: '404 Signal Lost | EuroWave Nights',
        description: 'Transmission frequency not found in the EuroWave Nights archives.',
        keywords: '404 not found, lost signal, EuroWave Nights frequency lost',
        favicon: '/images/EuroWaveNightsIsotipo.png',
    });

    return (
        <main className="notFound bg-cyber-grid">
            <div className="container">
                <CRTPanel>
                    <span className="notFound__badge">[ SIGNAL: LOST ]</span>
                    <h1>FREQUENCY NOT FOUND</h1>
                    <p>The transmission frequency you requested does not exist in the EuroWave Nights archives.</p>

                    <section className="notFound__grid">
                        <article className="notFound__item">
                            <span className="lbl">ERROR CODE</span>
                            <span className="val">404_NO_SIGNAL</span>
                        </article>

                        <article className="notFound__item">
                            <span className="lbl">SIGNAL STATUS</span>
                            <span className="val">LOST</span>
                        </article>

                        <article className="notFound__item">
                            <span className="lbl">FREQUENCY</span>
                            <span className="val">UNKNOWN / UNMAPPED</span>
                        </article>

                        <article className="notFound__item">
                            <span className="lbl">LOCATION</span>
                            <span className="val">UNNAMED CITY</span>
                        </article>
                    </section>

                    <Button to={PATHS.HOME} variant="primary" icon={
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m12 19l-7-7l7-7m7 7H5" />
                        </svg>
                    }>
                        RETURN TO TRANSMISSION
                    </Button>
                </CRTPanel>
            </div>
        </main>
    );
}

export default NotFound;