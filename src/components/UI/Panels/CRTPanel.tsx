import './CRTPanel.scss';

interface CRTPanelProps {
    children: React.ReactNode;
    className?: string;
    showCorners?: boolean;
}

const CRTPanel = ({ children, className = '', showCorners = true }: CRTPanelProps) => {
    return (
        <div className={`crtPanel ${className}`}>
            {
                showCorners && (
                    <>
                        <span className="crtPanel__cornerDecor top-left" aria-hidden="true" />
                        <span className="crtPanel__cornerDecor top-right" aria-hidden="true" />
                        <span className="crtPanel__cornerDecor bottom-left" aria-hidden="true" />
                        <span className="crtPanel__cornerDecor bottom-right" aria-hidden="true" />
                    </>
                )

            }
            <div className="crtPanel_inner">{children}</div>
        </div>
    );
}

export default CRTPanel;