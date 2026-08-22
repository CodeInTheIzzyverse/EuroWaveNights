import type { Track, MediaLink, TrackType } from "./track";
import type { Album, AlbumType } from "./album";

export type { Track, MediaLink, TrackType, Album, AlbumType };

// Legacy alias for backwards compatibility during refactor
export type MusicCategory = "ALBUMS" | "SINGLES" | "BEATS" | "INSTRUMENTALS";
export type MusicTrack = Track & {
	category?: MusicCategory;
	spotifyUrl?: string;
	youtubeUrl?: string;
	bandcampUrl?: string;
	soundcloudUrl?: string;
};

