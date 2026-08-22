import platformsData from "@/data/platforms.json";
import type { Platform } from "@/types/channel";

const platformsMap = (platformsData as Platform[]).reduce(
	(acc, p) => {
		acc[p.id] = p.link;
		return acc;
	},
	{} as Record<string, string>,
);

export const SOCIAL = {
	INSTAGRAM:
		platformsMap["instagram"] ||
		"https://www.instagram.com/eurowave.nights/",
	TIKTOK: platformsMap["tiktok"] || "https://www.tiktok.com/@eurowave.nights",
	YOUTUBE:
		platformsMap["youtube"] || "https://www.youtube.com/@EuroWaveNights",
	BANDCAMP: platformsMap["bandcamp"] || "https://latepassenger.bandcamp.com/",
	SPOTIFY: platformsMap["spotify"] || "",
	SOUNDCLOUD:
		platformsMap["soundcloud"] ||
		"https://soundcloud.com/latepassengermusic",
	EMAIL: (
		platformsMap["email"] || "mailto:latepassenger.music@outlook.com"
	).replace("mailto:", ""),
} as const;
