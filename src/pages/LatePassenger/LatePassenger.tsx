import useSEO from '@/hooks/useSEO';
import './LatePassenger.scss';
import UnderConstructionBox from '@/components/Layout/UnderConstructionBox/UnderConstructionBox';

const LatePassenger = () => {
    useSEO({
        title: 'LatePassenger | Anonymous Electronic Archive & Discography',
        description:
            'Explore the complete discography, nocturnal synthwave releases, collaborative projects, and production gear archive of LatePassenger transmitting on 104.2 FM.',
        keywords:
            'LatePassenger, anonymous electronic music, synthwave albums, retrowave tracks, cyberpunk soundscapes, electronic music projects, analog synth gear',
    });

    return (
        <main className="latePassenger bg-cyber-grid">
            <UnderConstructionBox />
        </main>
    );
}

export default LatePassenger;