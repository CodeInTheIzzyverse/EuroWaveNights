import type { MediaLink, Track } from "./track";

export type AlbumType = "ALBUM" | "EP";

export interface Album {
	id: string;
	title: string;
	type: AlbumType;
	genre: string;
	year: number;
	duration: string;
	artistId: string;
	artistName: string;
	coverArt: string;
	description: string;
	frequency?: string;
	bpm?: number;
	key?: string;
	featured?: boolean;
	tracks?: Track[];
	links?: MediaLink[];
}

