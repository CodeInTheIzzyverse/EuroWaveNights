import React from 'react';
import './SectionHeader.scss';

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    tag?: string;
    centered?: boolean;
    className?: string;
    action?: React.ReactNode;
}

const SectionHeader = ({
    title,
    subtitle,
    tag,
    centered = false,
    className = '',
    action,
} : SectionHeaderProps) => {
    return (
        <div className={`sectionHeader ${centered ? 'align-center' : ''} ${className}`}>
            {tag && (
                <div className="header__badge__wrapper">
                    <span className="header__frequency__tag">[ {tag} ]</span>
                </div>
            )}
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: centered ? 'center' : 'space-between', flexWrap: 'wrap', gap: '16px' }}>
                <div>
                    <h2 className="header__title">{title}</h2>
                    {subtitle && (
                        <p className={`header__subtitle ${centered ? 'center' : ''}`}>{subtitle}</p>
                    )}
                </div>
                {action && !centered && (
                    <div className="header__action__wrapper">
                        {action}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SectionHeader;