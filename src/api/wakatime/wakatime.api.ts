import { WakatimeDurations } from '../../types/Wakatime.types'

const BASE_URL = 'https://wakatime.com/api/v1'

export const getDurations = async (): Promise<WakatimeDurations> => {
	const response = await fetch(
		`${BASE_URL}/users/${process.env.WAKATIME_USER_NAME}/durations?date=${process.env.DATA}&api_key=${process.env.WAKATIME_API_KEY}`
	)

	return await response.json()
}
