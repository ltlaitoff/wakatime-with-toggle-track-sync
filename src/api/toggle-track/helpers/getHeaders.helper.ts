function getAuthorizationHeader(API_TOKEN: string) {
	return `Basic ${Buffer.from(`${API_TOKEN}:api_token`).toString('base64')}`
}

export function getHeaders(API_TOKEN: string): Headers {
	const headers = new Headers()

	headers.append('Content-Type', 'application/json')
	headers.append('Authorization', getAuthorizationHeader(API_TOKEN))

	return headers
}
