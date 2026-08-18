export type MusicCategory = "ALBUMS" | "SINGLES" | "BEATS" | "INSTRUMENTALS";

export interface MusicTrack {
	id: string;
	title: string;
	type: "ALBUM" | "SINGLE" | "BEAT" | "INSTRUMENTAL";
	category: MusicCategory;
	genre: string;
	year: number;
	duration: string;
	artistId: string;
	artistName: string;
	coverArt: string;
	description: string;
	streamUrl?: string;
	spotifyUrl?: string;
	youtubeUrl?: string;
	bandcampUrl?: string;
	soundcloudUrl?: string;
	featured?: boolean;
	frequency?: string;
	bpm?: number;
	key?: string;
}
