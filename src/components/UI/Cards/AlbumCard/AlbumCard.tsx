import type { Album } from '@/types/album';
import './AlbumCard.scss';
import Button from '../../Buttons/Button';
import PlatformIcon from '../../PlatformIcon/PlatformIcon';
import { TransitionLink } from '@/components/UI/TransitionLink';

interface AlbumCardProps {
    album: Album;
    onPlay?: (album: Album) => void;
    isPlaying?: boolean;
}

const AlbumCard = ({
    album,
    onPlay,
    isPlaying = false,
}: AlbumCardProps) => {
    return (
        <div className="albumCard">
            <div className="albumCard__cover">
                <span className="albumCard__cover__badge">{album.type === 'EP' ? 'MINI ALBUM / EP' : 'FULL LP RELEASE'}</span>

                <svg className="albumCard__cover__art" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" aria-label={album.title}>
                    <defs>
                        <linearGradient id={`album-grad-${album.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#0B1022" />
                            <stop offset="50%" stopColor="#172043" />
                            <stop offset="100%" stopColor="#2D6CFF" />
                        </linearGradient>
                    </defs>
                    <rect width="240" height="240" fill={`url(#album-grad-${album.id})`} />
                    <circle cx="120" cy="120" r="85" fill="#070A16" stroke="#36508A" strokeWidth="3" />
                    <circle cx="120" cy="120" r="70" fill="none" stroke="#4EA1FF" strokeDasharray="6 3" opacity="0.6" />
                    <circle cx="120" cy="120" r="50" fill="none" stroke="#7A6DFF" strokeWidth="1.5" />
                    <circle cx="120" cy="120" r="25" fill="#FF5FBF" opacity="0.8" />
                    <circle cx="120" cy="120" r="8" fill="#F2F6FF" />

                    <path d="M 30 180 Q 120 120 210 180" stroke="#FF5FBF" strokeWidth="2" fill="none" opacity="0.8" />
                    <path d="M 30 195 Q 120 135 210 195" stroke="#4EA1FF" strokeWidth="2" fill="none" opacity="0.8" />
                </svg>
            </div>

            <div className="albumCard__details">
                <div className="albumCard__details__body">
                    <div className="albumCard__details__top">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                <path d="M16.247 7.761a6 6 0 0 1 0 8.478m2.828-11.306a10 10 0 0 1 0 14.134m-14.15 0a10 10 0 0 1 0-14.134m2.828 11.306a6 6 0 0 1 0-8.478" />
                                <circle cx="12" cy="12" r="2" />
                            </g>
                        </svg>
                        <span>TRANSMISSION LP • {album.frequency || '104.8 MHz'}</span>
                    </div>

                    <h3>
                        <TransitionLink to={`/albums/${album.id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                            {album.title}
                        </TransitionLink>
                    </h3>
                    <p className="albumCard__details__subtitle">{album.artistName} • RELEASED {album.year}</p>
                    <p className="albumCard__details__desc">{album.description}</p>

                    <div className="albumCard__details__specs">
                        <div className="albumCard__details__cell">
                            <span className="spec-lbl">GENRE</span>
                            <span className="spec-val">{album.genre}</span>
                        </div>

                        <div className="albumCard__details__cell">
                            <span className="spec-lbl">RUNTIME</span>
                            <span className="spec-val">{album.duration}</span>
                        </div>

                        {album.bpm && (
                            <div className="albumCard__details__cell">
                                <span className="spec-lbl">TEMPO</span>
                                <span className="spec-val">{album.bpm} BPM</span>
                            </div>
                        )}

                        {album.key && (
                            <div className="albumCard__details__cell">
                                <span className="spec-lbl">KEY</span>
                                <span className="spec-val">{album.key}</span>
                            </div>
                        )}
                    </div>
                </div>

                <div className="albumCard__details__actions">
                    <Button
                        to={`/albums/${album.id}`}
                        variant="primary"
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 18l6-6-6-6" />
                            </svg>
                        }
                    >
                        VIEW TRACKLIST & ALBUM DETAILS
                    </Button>

                    {onPlay && (
                        <Button
                            variant={isPlaying ? 'accent' : 'secondary'}
                            onClick={() => onPlay(album)}
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <circle cx="12" cy="12" r="2" />
                                    </g>
                                </svg>
                            }
                        >
                            {isPlaying ? 'PAUSE SIGNAL' : 'LISTEN TO DEMO'}
                        </Button>
                    )}

                    {album.links?.map((link) => (
                        <Button
                            key={link.platformId}
                            variant="outline"
                            href={link.url}
                            icon={<PlatformIcon name={link.platformId} />}
                        >
                            {link.name.toUpperCase()}
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AlbumCard;
