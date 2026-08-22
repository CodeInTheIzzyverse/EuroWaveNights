import type { Feature } from '@/types/feature';
import './FeatureCard.scss';

interface FeatureCardProps {
    feature: Feature;
}

const FeatureCard = ({feature}: FeatureCardProps) => {
    return (
        <div className="featureCard">
            <span>{feature.num}</span>
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
        </div>
    );
}

export default FeatureCard;