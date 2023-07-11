import 'dotenv/config'

import { timeEntries, getDurations } from './api'
import {
	removeGapsBetweenEntries,
	transformWakatimeToToggle,
	sleep
} from './helpers'
import { PROJECTS } from './config/projects.config'

async function main() {
	const wakatimeDurations = await getDurations()

	const newData = removeGapsBetweenEntries(wakatimeDurations.data)
	const WAKATIME_DATA = transformWakatimeToToggle(newData)

	const toggleTrackResult: unknown[] = []

	for (const item of WAKATIME_DATA) {
		await timeEntries(item).then(data => {
			const project =
				PROJECTS[0].id === data.project_id ? PROJECTS[0].name : PROJECTS[1].name

			toggleTrackResult.push({
				id: data.id,
				project: project,
				start: new Date(data.start).toLocaleTimeString('en-GB', {
					timeZone: 'UTC'
				}),
				stop: new Date(data.stop).toLocaleTimeString('en-GB', {
					timeZone: 'UTC'
				}),
				duration: data.duration,
				description: data.description
			})
		})

		await sleep(500)
	}

	console.table(toggleTrackResult)
}

main()
