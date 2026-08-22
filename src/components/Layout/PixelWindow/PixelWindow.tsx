import './PixelWindow.scss';

interface PixelWindowProps {
    title: string;
    children: React.ReactNode;
    icon?: React.ReactNode;
    className?: string;
    statusText?: string;
}

const PixelWindow = ({
    title,
    children,
    icon,
    className = '',
    statusText = 'SYS_OK',
}: PixelWindowProps) => {
    return (
        <div className={`pixelWindow ${className}`}>
            <div className="pixelWindow__titlebar">
                <div className="pixelWindow__title">
                    {icon}
                    <span>{title}</span>
                </div>

                <div className="pixelWindow__controls">
                    <span style={{ fontSize: '0.65rem', fontFamily: 'Silkscreen', color: '#8A9AC8', marginRight: '8px' }}>
                        [{statusText}]
                    </span>
                    <span className="ctrl-btn ctrl-min" />
                    <span className="ctrl-btn ctrl-max" />
                    <span className="ctrl-btn ctrl-close" />
                </div>
            </div>

            <div className="pixelWindow__content">
                {children}
            </div>
        </div>
    );
}

export default PixelWindow;