const dotenvPlugin = require('cypress-dotenv')

module.exports = (on, config) => {
	// Load environment variables from .env file
	config = dotenvPlugin(config, { path: '../../.env' }, true)

	// Allow overriding baseUrl from an environment variable if the environment
	// is not CI and BASE_URL is not already set
	if (process.env.IS_CI === 'true' && process.env.BASE_URL) {
		config.baseUrl = process.env.NUXT_BASE_URL
	} else {
		const baseUrl = config.env.NUXT_BASE_URL || null
		if (baseUrl) {
			config.baseUrl = baseUrl
		}
	}
	return config
}
