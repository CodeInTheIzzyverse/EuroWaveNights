import type { Channel } from '@/types/channel';
import './ChannelCard.scss';
import { PATHS } from '@/constants/routes';

interface ChannelCardProps {
    channel: Channel;
}

const ChannelCard = ({ channel }: ChannelCardProps) => {
    let home = false;
    if (channel.link === PATHS.HOME) {
        home = true;
        console.log(channel.link === PATHS.HOME)
    }

    return (
        <a className="channelCard"
            href={channel.link}
            target={home ? '' : '_blank'}
            rel="noopener noreferrer"
        >
            {channel.icon && <span className='channelCard__icon'>{channel.icon}</span>}

            <span className='channelCard__name'>{channel.name}</span>

            <svg className='channelCard__arrow' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none" />
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h10v10M7 17L17 7" />
            </svg>
        </a>
    );
}

export default ChannelCard;