import { TimeEntriesType } from '../../types/ToggleTrack.types'
import { getHeaders } from './helpers/getHeaders.helper'
import { getTimeEntriesBody } from './helpers/getTimeEntriesBody.helper'
import { HOST, WORKSPACE_ID } from './toggle-track.config'

export const timeEntries = async (data: TimeEntriesType) => {
	const API_TOKEN = process.env.TOGGLE_TRACK_API_TOKEN

	if (API_TOKEN === undefined) {
		console.error('[TOGGLE] API_TOKEN undefined')
		return
	}

	return fetch(`${HOST}/workspaces/${WORKSPACE_ID}/time_entries`, {
		method: 'POST',
		body: getTimeEntriesBody(data),
		headers: getHeaders(API_TOKEN)
	}).then(response => response.json())
}
