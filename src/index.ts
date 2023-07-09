import { timeEntries } from './api/toggle-track.api'
import { testRequest } from './api/wakatime.api'
import 'dotenv/config'

function sleep(ms: number) {
	return new Promise(resolve => {
		setTimeout(resolve, ms)
	})
}

async function main() {
	const WAKATIME_DATA = await testRequest()

	for (const item of WAKATIME_DATA) {
		await timeEntries(item).then(value => {
			console.log('toggleTrack: ', value)
		})

		await sleep(500)
	}
}

main()
