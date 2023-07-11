import { WakatimeDurationElement } from '../types/Wakatime.types'

const swapElements = (
	array: WakatimeDurationElement[],
	index1: number,
	index2: number
) => {
	;[array[index1], array[index2]] = [array[index2], array[index1]]
}

export function removeGapsBetweenEntries(
	data: WakatimeDurationElement[],
	delay = 5
) {
	const elements: Record<string, WakatimeDurationElement[]> = {}

	data.forEach(item => {
		if (!(item.project in elements)) {
			elements[item.project] = []
		}

		elements[item.project].push(item)
	})

	const result = Object.values(elements).reduce(
		(acc: WakatimeDurationElement[], item: WakatimeDurationElement[]) => {
			return [...acc, ...innerRemoveDelay(item, delay)]
		},
		[]
	)

	result.sort((a, b) => {
		return a.time - b.time
	})

	return result
}

function innerRemoveDelay(dataInput: WakatimeDurationElement[], delay = 5) {
	const data = structuredClone(dataInput)

	for (let i = 1; i < data.length; i++) {
		const stopPrev = data[i - 1].time + data[i - 1].duration

		if (data[i].time - stopPrev < delay * 60) {
			data[i - 1].duration =
				data[i - 1].duration + data[i].time - stopPrev + data[i].duration

			delete data[i]

			swapElements(data, i, i - 1)
		}
	}

	return data.filter(item => item !== undefined)
}
