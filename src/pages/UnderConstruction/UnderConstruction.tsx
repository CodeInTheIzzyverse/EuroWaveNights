import './UnderConstruction.scss';
import useSEO from '@/hooks/useSEO';
import UnderConstructionBox from '@/components/Layout/UnderConstructionBox/UnderConstructionBox';

const UnderConstruction = () => {
    useSEO({
        title: '503 Frequency Calibrating | EuroWave Nights',
        description: 'This transmission frequency is currently being configured by EuroWave Nights broadcast engineers.',
        keywords: 'EuroWave Nights calibration, under construction, signal interrupted',
        favicon: '/images/EuroWaveNightsIsotipo.png',
    });

    return (
        <main className='underConstructionPage bg-cyber-grid'>
            <UnderConstructionBox />
        </main>
    );
}

export default UnderConstruction;