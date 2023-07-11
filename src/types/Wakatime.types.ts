export interface WakatimeDurationElement {
	time: number
	project: string
	duration: number
}

export type WakatimeDurations = {
	data: WakatimeDurationElement[]
	branches: string[]
	start: string
	end: string
	timezone: string
}
