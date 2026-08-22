import { useEffect, useState } from "react";
import './LinearLoader.scss';

export interface LinearLoaderProps {
    /** Optional custom title text */
    title?: string;
    /** Optional subtitle or descriptive text */
    subtitle?: string;
    /** Fixed progress value (0 to 100). If omitted, an animated scanner loop runs */
    progress?: number;
    /** Total number of bar cells (default: 10) */
    totalBars?: number;
    /** Interval in milliseconds per step (default: 160ms) */
    speedMs?: number;
    /** Fullscreen centering mode (default: true for page loader) */
    fullScreen?: boolean;
    /** Compact styling mode (default: false) */
    compact?: boolean;
}

const LinearLoader = ({
    title = 'SYNCHRONIZING FREQUENCY',
    subtitle = 'RECEIVING CLANDESTINE AUDIO FEED',
    progress,
    totalBars = 10,
    speedMs = 160,
    fullScreen = true,
    compact = false,
}: LinearLoaderProps) => {
    const [internalStep, setInternalStep] = useState<number>(0);

    useEffect(() => {
        if (typeof progress === 'number') return;

        const interval = setInterval(() => {
            setInternalStep((prev) => (prev + 1) % (totalBars + 3));
        }, speedMs);

        return () => clearInterval(interval);
    }, [progress, totalBars, speedMs]);

    // Calculate active bar count
    const activeCount =
        typeof progress === 'number'
            ? Math.min(totalBars, Math.max(0, Math.round((progress / 100) * totalBars)))
            : (internalStep % (totalBars + 1));

    const percentDisplay =
        typeof progress === 'number'
            ? `${Math.round(progress)}%`
            : `${Math.min(100, Math.round(((activeCount + 1) / totalBars) * 100))}%`;

    return (
        <div
            className={`linearLoader ${fullScreen ? 'linearLoader--fullscreen' : ''} ${compact ? 'linearLoader--compact' : ''
                }`}
            role="status"
            aria-live="polite"
            aria-label={title}
        >
            <div className="linearLoader__crt">
                <div className="linearLoader__header">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
                    </svg>

                    <span>[ TRANSMISSION PROTOCOL ACTIVE ]</span>

                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                            <path d="M16.247 7.761a6 6 0 0 1 0 8.478m2.828-11.306a10 10 0 0 1 0 14.134m-14.15 0a10 10 0 0 1 0-14.134m2.828 11.306a6 6 0 0 1 0-8.478" />
                            <circle cx="12" cy="12" r="2" />
                        </g>
                    </svg>
                </div>

                <h3>{title}</h3>
                <p>{subtitle}</p>

                <div className="linearLoader__bars">
                    {Array.from({ length: totalBars }).map((_, index) => {
                        const isActive = index < activeCount;
                        const isLead = index === activeCount - 1 || (activeCount === totalBars && index === totalBars - 1);

                        let cellClass = 'linearLoader__cell';
                        if (isActive) {
                            cellClass += isLead ? ' active-pink' : ' active';
                        }

                        return <span key={index} className={cellClass} />;
                    })}
                </div>

                <div className="linearLoader__footer">
                    <span className="linearLoader__freq">FREQ: 104.2 FM</span>
                    <span className="linearLoader__status">STATUS: STREAMING</span>
                    <span className="linearLoader__percent">{percentDisplay}</span>
                </div>
            </div>
        </div>
    );
}

export default LinearLoader;