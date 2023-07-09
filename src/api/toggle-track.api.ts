const API_TOKEN = process.env.TOGGLE_TRACK_API_TOKEN
const HOST = 'https://api.track.toggl.com/api/v9'

const APP_NAME = 'wakatime-with-toggle-track-sync'
const WORKSPACE_ID = 6741502

interface TimeEntriesType {
	description: string
	start: string
	stop: string
	project_id: number
}

export const timeEntries = async (data: TimeEntriesType) => {
	const body = {
		...data,
		workspace_id: WORKSPACE_ID,
		created_with: APP_NAME
	}

	console.log('%ctoggle-track.api.ts line:21 body', 'color: #007acc;', body)

	return fetch(`${HOST}/workspaces/${WORKSPACE_ID}/time_entries`, {
		method: 'POST',
		body: JSON.stringify(body),
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Basic ${Buffer.from(`${API_TOKEN}:api_token`).toString(
				'base64'
			)}`
		}
	}).then(response => response.text())
}
