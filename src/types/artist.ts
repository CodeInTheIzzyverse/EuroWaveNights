export interface Artist {
	id: string;
	name: string;
	tagline: string;
	anonymous: boolean;
	description: string;
	longDescription?: string;
	genres: string[];
	route: string;
	featuredTrackId?: string;
	transmissionFrequency?: string;
	status: "ACTIVE" | "TRANSMITTING" | "STANDBY";
	avatarUrl?: string;
}
