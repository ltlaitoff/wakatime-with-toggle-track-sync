import { TimeEntriesType } from '../../../types/ToggleTrack.types'
import { WORKSPACE_ID, APP_NAME } from '../toggle-track.config'

export function getTimeEntriesBody(data: TimeEntriesType): string {
	return JSON.stringify({
		...data,
		workspace_id: WORKSPACE_ID,
		created_with: APP_NAME
	})
}
