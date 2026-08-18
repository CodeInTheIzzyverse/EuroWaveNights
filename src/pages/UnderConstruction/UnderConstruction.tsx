import CRTPanel from '@/components/UI/Panels/CRTPanel';
import './UnderConstruction.scss';

const UnderConstruction = () => {
    return (
        <main className='underConstructionPage bg-cyber-grid'>
            <section className="underConstructionPage__container">
                <CRTPanel>
                    <article className="underConstructionPage__header">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 16h.008M12 10v3m-1.425-7.783L3.517 17a1.667 1.667 0 0 0 1.425 2.5h14.116a1.666 1.666 0 0 0 1.425-2.5L13.426 5.217a1.666 1.666 0 0 0-2.85 0" />
                        </svg>

                        [ SIGNAL CODE 503: TRANSMISSION INTERRUPTED ]
                    </article>

                    <h1>FREQUENCY CONFIGURING</h1>

                    <p>This frequency is currently being calibrated by EuroWave Nights broadcast engineers. Check back after midnight.</p>

                    <article className="underConstructionPage__loading">
                        <span className="bar-cell active"></span>
                        <span className="bar-cell active"></span>
                        <span className="bar-cell active"></span>
                        <span className="bar-cell active"></span>
                        <span className="bar-cell active-pink"></span>
                        <span className="bar-cell"></span>
                        <span className="bar-cell"></span>
                        <span className="bar-cell"></span>
                        <span className="bar-cell"></span>
                        <span className="bar-cell"></span>
                    </article>
                </CRTPanel>
            </section>
        </main>
    );
}

export default UnderConstruction;