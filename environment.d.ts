declare global {
	namespace NodeJS {
		interface ProcessEnv {
			NODE_ENV: 'development' | 'production'
			WAKATIME_API_KEY: string
		}
	}
}

export {}
