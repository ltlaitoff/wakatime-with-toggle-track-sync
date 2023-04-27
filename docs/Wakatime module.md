
## Дані API

Для отримання данних з wakatime буде використанна `Wakatime API`, а конкретно 
[Durations](https://wakatime.com/developers#durations)

Для взаємодії з Wakatime потрібно використовувати [Wakatime API-key](https://wakatime.com/settings/api-key)

GET `https://wakatime.com/api/v1/users/current/durations?date=...&api_key=...`

Формат успішного повернення wakatime даних (200):
```ts
{
  "data": [
    {
      "project": string,
      "time": number,
      "duration": number
    }, 
    …
  ],
  "branches": Array<string>,
  "start": string,
  "end": string,
  "timezone": string
}
```

Формат повернення помилкових даних wakatime
```ts
{
  "error": string
}
```

## Wakatime-module

### Змінні оточення

```sh
WAKATIME_API_HOST = 'https://wakatime.com'
WAKATIME_API_TOKEN = 'WAKATIME_API_TOKEN'
```

### Інтерфейси

```typescript
interface WakatimeDurationsData {
    project: string
	time: number
    duration: number
}

exports interface WakatimeDurations {
	data: Array<WakatimeDurationsData>
	branches: Array<string>
	start: string
	end: string
	timezone: string
  
	error: never
}

exports interface WakatimeDurationsError {
	error: string
}

type InnerWakatimeValidSuccess = {
  valid: true
}

type InnerWakatimeValidError = {
  valid: false,
  message: string
}
```

### Помилки

Example for write errors: [link](https://learn.javascript.ru/oop-errors)

`WakatimeApiInputsError` - Для помилок вхідних даних функцій
`WakatimeApiRequestError` - Для помилок запиту до wakatime
`WakatimeApiResultError` - Для помилок повернених даних з wakatime

### Конфігурації



### Функції

#### isWakatimeDurationsValidInput

```ts
export isWakatimeDurationsValidInput(date: Date): InnerWakatimeValidSuccess | InnerWakatimeValidError {
 return ...
}
```

Функція `isWakatimeDurationsValidInput` повина перевіряти вхідні дані(`date`) на тип(`Date`) та перевіряти чи надана дата більша по дням за сьогоднішню

Якщо все добре - повертати {valid: true}
Якщо є помилка - повертати {valid: false, message: 'Error message'}

##### Тестування isWakatimeDurationsValidInput

not valid input date: Not date, date > now

- isWakatimeDurationsValidInput on not valid input date = $inputDate should return {valid: false, message: '...'}
- isWakatimeDurationsValidInput on valid date = $inputDate should return {valid: true}

#### isWakatimeDurationsValid

```ts
export isWakatimeDurationsValid(date: Date): IsWakatimeDurationsValidInputSuccess | IsWakatimeDurationsValidInputError {
 return ...
}
```

`isWakatimeDurationsValid` перевіряє повернуті wakatime дані на валідність:
...

#### getDurationsByDate

```ts
export getDurationsByDate(date: Date): WakatimeDurations | WakatimeDurationsError {
 return ...
}
```

Функція `getDurationsByDate` повина в собі робити запит на wakatime за допомогою `JS fetch`.

При помилці в переверці вхідних даних функцією `isWakatimeDurationsValidInput` викликається помилка `WakatimeApiInputsError`

При помилці запиту(наприлад, не вірний хост або ж відсутність інтернету) повинна викликатись помилка `WakatimeApiRequestError`

При помилці в перевірці даних на валідність функцією `isWakatimeDurationsValid` викликається помилка `WakatimeApiResultError`

##### Тестування getDurationsByDate

- getDurationsByDate on not valid date = $inputDate should throw WakatimeApiInputsError
- getDurationsByDate with valid date = $inputDate should call fetch
- On fetch error, getDurationsByDate should throw WakatimeApiRequestError
- On fetch return not valid data, getDurationsByDate should throw WakatimeApiResultError
- On fetch return valid data = $validData getDurationsByDate should return valid data = $validData
- On fetch return valid data(WakatimeDurationsError), getDurationsByDate should return valid data(WakatimeDurationsError) = $validData

### Експортовані функції

getDurationsByDate


