import type { Platform } from '@/types/channel';
import PlatformIcon from '@/components/UI/PlatformIcon/PlatformIcon';
import './PlatformLink.scss';

interface PlatformLinkProps {
    platform: Platform;
}

const PlatformLink = ({ platform }: PlatformLinkProps) => {
    const renderIcon = () => {
        if (!platform.icon) return null;
        if (typeof platform.icon === 'string') {
            return <PlatformIcon name={platform.icon} />;
        }
        return platform.icon;
    };

    return (
        <a
            href={platform.link}
            target="_blank"
            rel="noopener noreferrer"
            className="platformLink"
        >
            <div className="platformLink__left">
                <div className="platformLink__left__icon">{renderIcon()}</div>
                <h4 className="platformLink__left__name">{platform.name}</h4>
            </div>
            <div className="platformLink__arrow">
                <svg style={{ width: '20px', height: '20px' }} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h10v10M7 17L17 7" />
                </svg>
            </div>
        </a>
    );
}

export default PlatformLink;
