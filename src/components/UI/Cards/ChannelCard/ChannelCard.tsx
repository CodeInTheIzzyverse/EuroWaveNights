import type { Channel } from '@/types/channel';
import './ChannelCard.scss';
import { PATHS } from '@/constants/routes';
import PlatformIcon from '@/components/UI/PlatformIcon/PlatformIcon';

interface ChannelCardProps {
    channel: Channel;
}

const ChannelCard = ({ channel }: ChannelCardProps) => {
    let home = false;
    if (channel.link === PATHS.HOME) {
        home = true;
    }

    const renderIcon = () => {
        if (!channel.icon) return null;
        if (typeof channel.icon === 'string') {
            return <PlatformIcon name={channel.icon} />;
        }
        return channel.icon;
    };

    return (
        <a className="channelCard"
            href={channel.link}
            target={home ? '' : '_blank'}
            rel="noopener noreferrer"
        >
            <span className='channelCard__icon'>{renderIcon()}</span>

            <span className='channelCard__name'>{channel.name}</span>

            <svg className='channelCard__arrow' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none" />
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h10v10M7 17L17 7" />
            </svg>
        </a>
    );
}

export default ChannelCard;