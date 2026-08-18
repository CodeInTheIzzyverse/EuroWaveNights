export interface Service {
	id: string;
	title: string;
	description: string;
	iconName: string;
	featured?: boolean;
	deliverables: string[];
	ctaText?: string;
	category?: string;
}
