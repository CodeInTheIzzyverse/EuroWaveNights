import type { Artist } from "@/types/artist";
import Button from "@/components/UI/Buttons/Button";
import './ArtistCard.scss';

interface ArtistCardProps {
    artist: Artist;
}

const ArtistCard = ({ artist }: ArtistCardProps) => {
    return (
        <div className="artistCard">
            <div className="artistCard__body">
                <div className="artistCard__badge">
                    <span className="artistCard__type status-badge status-active">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512">
                            <path d="M0 0h512v512H0z" fill="none" />
                            <circle cx="256" cy="256.02" r="32" fill="currentColor" />
                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M184.25 192.25a96 96 0 0 0 0 127.52m143.52 0a96 96 0 0 0 0-127.52m-194.49-50.97a168 168 0 0 0 0 229.44m245.44 0a168 168 0 0 0 0-229.44" />
                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M435 416a240.34 240.34 0 0 0 0-320M77 96a240.34 240.34 0 0 0 0 320" />
                        </svg>
                        {artist.anonymous ? 'ANONYMOUS ARTIST' : 'FEATURED ARTIST'}
                    </span>

                    {artist.transmissionFrequency && (
                        <span className="artistCard__freq">[ {artist.transmissionFrequency} ]</span>
                    )}
                </div>

                <div className="artistCard__tittle">
                    <h3>{artist.name}</h3>
                    <p>{artist.tagline}</p>
                </div>

                <p>{artist.description}</p>

                <div className="artistCard__genres">
                    {artist.genres.map((g) => (
                        <span key={g} className="tag-chip tag-accent">
                            {g}
                        </span>
                    ))}
                </div>
            </div>

            <div className="artistCard__footer">
                <Button to={artist.route} variant="primary" fullWidth icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7l7 7l-7 7" />
                    </svg>
                }>
                    ENTER ARTIST ARCHIVE
                </Button>
            </div>
        </div>
    );
}

export default ArtistCard;