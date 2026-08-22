export interface MediaLink {
	platformId: string;
	name: string;
	url: string;
}

export type TrackType = "SINGLE" | "ALBUM_TRACK" | "BEAT" | "INSTRUMENTAL";

export interface Track {
	id: string;
	title: string;
	type: TrackType;
	genre: string;
	year: number;
	duration: string;
	artistId: string;
	artistName: string;
	coverArt: string;
	description: string;
	albumId?: string;
	trackNumber?: number;
	featured?: boolean;
	frequency?: string;
	bpm?: number;
	key?: string;
	links?: MediaLink[];
}

