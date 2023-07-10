import { describe } from 'node:test'

import { WakatimeDurationElement } from './remove-gaps-between-entries.interfaces'
import { removeGapsBetweenEntries } from './remove-gaps-between-entries.helper'

const DATA: WakatimeDurationElement[] = [
	{
		time: 1688728130,
		project: 'project2',
		duration: 17
	},
	{
		time: 1688728147,
		project: 'project1',
		duration: 834
	},
	{
		time: 1688728981,
		project: 'project2',
		duration: 319
	},
	{
		time: 1688729300,
		project: 'project1',
		duration: 20
	},
	{
		time: 1688735264,
		project: 'project1',
		duration: 254
	},
	{
		time: 1688735518,
		project: 'project2',
		duration: 8
	},
	{
		time: 1688735526,
		project: 'project1',
		duration: 790
	},
	{
		time: 1688736316,
		project: 'project2',
		duration: 85
	},
	{
		time: 1688736401,
		project: 'project1',
		duration: 366
	},
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
	},
	{
		time: 1688740483,
		project: 'project2',
		duration: 5
	},
	{
		time: 1688740488,
		project: 'project1',
		duration: 49
	},
	{
		time: 1688740537,
		project: 'project2',
		duration: 126
	},
	{
		time: 1688740663,
		project: 'project1',
		duration: 90
	},
	{
		time: 1688740753,
		project: 'project2',
		duration: 28
	},
	{
		time: 1688740781,
		project: 'project1',
		duration: 164
	},
	{
		time: 1688740945,
		project: 'project2',
		duration: 33
	},
	{
		time: 1688740978,
		project: 'project1',
		duration: 16
	},
	{
		time: 1688744044,
		project: 'project2',
		duration: 18
	},
	{
		time: 1688744062,
		project: 'project1',
		duration: 895
	},
	{
		time: 1688746607,
		project: 'project1',
		duration: 12
	},
	{
		time: 1688746619,
		project: 'project2',
		duration: 51
	},
	{
		time: 1688746670,
		project: 'project1',
		duration: 0
	},
	{
		time: 1688748538,
		project: 'project2',
		duration: 18
	},
	{
		time: 1688748556,
		project: 'project1',
		duration: 634
	},
	{
		time: 1688749190,
		project: 'project2',
		duration: 231
	},
	{
		time: 1688749421,
		project: 'project1',
		duration: 0
	}
]

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
