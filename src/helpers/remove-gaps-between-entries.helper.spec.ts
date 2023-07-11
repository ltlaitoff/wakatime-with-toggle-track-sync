import { WakatimeDurationElement } from '../types/Wakatime.types'
import { removeGapsBetweenEntries } from './remove-gaps-between-entries.helper'

const TESTCASES: [WakatimeDurationElement[], WakatimeDurationElement[]][] = [
	[
		[
			{
				time: 1688728147,
				project: 'project1',
				duration: 860
			},
			{
				time: 1688729300,
				project: 'project1',
				duration: 20
			}
		],
		[
			{
				time: 1688728147,
				project: 'project1',
				duration: 1173
			}
		]
	],
	[
		[
			{
				time: 1688736767,
				project: 'project2',
				duration: 29
			},
			{
				time: 1688736796,
				project: 'project1',
				duration: 23
			},
			{
				time: 1688736819,
				project: 'project2',
				duration: 13
			},
			{
				time: 1688736832,
				project: 'project1',
				duration: 61
			},
			{
				time: 1688736893,
				project: 'project2',
				duration: 10
			},
			{
				time: 1688736903,
				project: 'project1',
				duration: 21
			},
			{
				time: 1688736924,
				project: 'project2',
				duration: 167.191288
			},
			{
				time: 1688737091.191288,
				project: 'project1',
				duration: 0
			}
		],
		[
			{
				time: 1688736767,
				project: 'project2',
				duration: 324.191288
			},
			{
				time: 1688736796,
				project: 'project1',
				duration: 295.19128799438477
			}
		]
	]
]

describe('remove-gaps-between-entries', () => {
	it.each(TESTCASES)(
		`On data = %j removeGapsBetweenEntries should return result = %j`,
		(data, result) => {
			expect(JSON.stringify(removeGapsBetweenEntries(data))).toBe(
				JSON.stringify(result)
			)
		}
	)
})
