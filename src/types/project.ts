export interface Project {
	id: string;
	title: string;
	category: string;
	description: string;
	tools: string[];
	year: number;
	status: "COMPLETED" | "IN_PRODUCTION" | "ARCHIVED";
	client: string; // e.g. "Independent Project"
	link?: string;
	badge?: string;
}
