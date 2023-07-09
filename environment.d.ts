declare global {
	namespace NodeJS {
		interface ProcessEnv {
			NODE_ENV: 'development' | 'production'
			WAKATIME_API_KEY: string
			TOGGLE_TRACK_API_TOKEN: string
		}
	}
}

export {}
