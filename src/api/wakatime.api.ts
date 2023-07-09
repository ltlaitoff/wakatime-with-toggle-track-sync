import { PROJECTS } from '../config/projects.config'

const BASE_URL = 'https://wakatime.com/api/v1'

type WakatimeDurationsResult = {
	data: [
		{
			time: 1688885067.284839
			project: 'lapricot'
			duration: 3568.375322
			color: '#fab57f'
		},
		{
			time: 1688892139.778426
			project: 'lapricot'
			duration: 1537.188627
			color: '#fab57f'
		},
		{
			time: 1688896869.36915
			project: 'lapricot'
			duration: 325.905793
			color: '#fab57f'
		},
		{
			time: 1688901265.982789
			project: 'lapricot'
			duration: 1201.718779
			color: '#fab57f'
		},
		{
			time: 1688907903.62609
			project: 'lapricot'
			duration: 2310.402154
			color: '#fab57f'
		},
		{
			time: 1688927340
			project: 'Unknown Project'
			duration: 236.866592
			color: null
		},
		{
			time: 1688927576.866592
			project: 'wakatime-with-toggle-track-sync'
			duration: 773.688688
			color: null
		}
	]
	branches: [
		'10-create-trash-for-delete-categories-and-deleted-statistics-with-auto-deleting-after-30d',
		'main'
	]
	start: '2023-07-08T21:00:00Z'
	end: '2023-07-09T20:59:59Z'
	timezone: 'Europe/Kyiv'
}

interface TimeEntriesType {
	description: string
	start: string
	stop: string
	project_id: number
}

export const testRequest = () => {
	return fetch(
		`${BASE_URL}/users/ltlaitoff/durations?date=${process.env.DATA}&api_key=${process.env.WAKATIME_API_KEY}`
	)
		.then(value => value.json())
		.then(value => {
			const result: TimeEntriesType[] = []

			value.data.map((item: any) => {
				const description = item.project === 'lapricot' ? '' : item.project
				const start = new Date(item.time * 1000).toISOString()
				const stop = new Date(
					item.time * 1000 + item.duration * 1000
				).toISOString()
				const project_id =
					item.project === 'lapricot' ? PROJECTS[1].id : PROJECTS[0].id

				result.push({ start, stop, description, project_id })
			})

			return result
		})

	// const API_TOKEN = process.env.TOGGLE_TRACK_API_TOKEN
	// // const HOST = 'https://api.track.toggl.com/api/v9'
	// // const APP_NAME = 'wakatime-with-toggle-track-sync'

	// const WORKSPACE_ID = 6741502

	// return fetch(
	// 	`https://api.track.toggl.com/api/v9/workspaces/${WORKSPACE_ID}/projects`,
	// 	{
	// 		method: 'GET',
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 			Authorization: `Basic ${Buffer.from(`${API_TOKEN}:api_token`).toString(
	// 				'base64'
	// 			)}`
	// 		}
	// 	}
	// )
	// 	.then(response => response.text())
	// 	.then(value => {
	// 		console.log(value)
	// 	})
}
