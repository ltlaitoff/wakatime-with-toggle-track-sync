import { PROJECTS } from '../config/projects.config'
import { TimeEntriesType } from '../types/ToggleTrack.types'
import { WakatimeDurationElement } from '../types/Wakatime.types'

export function transformWakatimeToToggle(
	data: WakatimeDurationElement[]
): TimeEntriesType[] {
	const WAKATIME_DATA: TimeEntriesType[] = []

	data.forEach(item => {
		const description = item.project === 'lapricot' ? '' : item.project
		const start = new Date(item.time * 1000).toISOString()
		const stop = new Date(item.time * 1000 + item.duration * 1000).toISOString()
		const project_id =
			item.project === 'lapricot' ? PROJECTS[1].id : PROJECTS[0].id

		WAKATIME_DATA.push({ start, stop, description, project_id })
	})

	return WAKATIME_DATA
}
