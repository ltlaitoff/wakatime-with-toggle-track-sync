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

export const testRequest = () => {
	fetch(
		`${BASE_URL}/users/ltlaitoff/durations?date=2023-07-09&api_key=${process.env.WAKATIME_API_KEY}`
	)
		.then(value => value.json())
		.then(value => {
			console.table(value.data)
		})
}
