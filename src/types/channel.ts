export interface Platform {
	id: string;
	name: string;
	link: string;
	icon: string;
	isSocial?: boolean;
}

export type Channel = Platform;
