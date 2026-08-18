export type EquipmentCategory = "DAWs" | "Plugins" | "Hardware";

export interface Equipment {
	id: string;
	name: string;
	category: EquipmentCategory;
	description: string;
	type: string;
	status: "ONLINE" | "ACTIVE" | "CALIBRATED";
	slug: string;
}
