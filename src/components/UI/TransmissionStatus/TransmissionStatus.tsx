import { BRAND } from "@/constants/brand";
import './TransmissionStatus.scss';

interface TransmissionStatusProps {
    compact?: boolean;
    frequency?: string;
    signal?: string;
    hours?: string;
    className?: string;
}

const TransmissionStatus = ({
    compact = false,
    frequency = BRAND.DEFAULT_FREQ,
    signal = BRAND.DEFAULT_SIGNAL,
    hours = BRAND.TRANSMISSION_HOURS,
    className = '',
}: TransmissionStatusProps) => {
    return (
        <div className={`transmissionStatus ${compact ? 'statusCompact' : ''} ${className}`}>
            <div className="statusDot__wrapper">
                <span className="signal__indicator" aria-hidden="true" />
                <span className="status__label">TRANSMISSION ACTIVE</span>
            </div>

            <div className="status__meta hide__mobile">
                <span className="status__divider">|</span>
                <span>{hours}</span>
            </div>

            <div className="status__meta">
                <span className="status__divider">|</span>
                <span>FREQ: {frequency}</span>
                <span className="status__divider">|</span>
                <span>SIGNAL: <span className="signal__val">{signal}</span></span>
            </div>
        </div>
    );
}

export default TransmissionStatus;