import getAllRoutes from './buildtools/routing/get-routes';

export default {
	// Target: https://go.nuxtjs.dev/config-target
	target: 'static',

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'Foster Commerce',
		htmlAttrs: {
			lang: 'en',
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ name: 'apple-mobile-web-app-title', content: 'Foster Commerce' },
			{ name: 'application-name', content: 'Foster Commerce' },
			{ name: 'msapplication-TileColor', content: '#d56541' },
			{ name: 'theme-color', content: '#ffffff' },
		],
		link: [
			{ hid: 'icon', rel: 'icon', type: 'image/x-icon', href: '/favicon.ico?v=2' },
			{
				hid: 'icon-32x32',
				rel: 'icon',
				sizes: '32x32',
				type: 'image/png',
				href: '/app-icons/favicon-32x32.png?v=2',
			},
			{
				hid: 'icon-16x16',
				rel: 'icon',
				sizes: '16x16',
				type: 'image/png',
				href: '/app-icons/favicon-16x16.png?v=2',
			},
			{
				hid: 'apple-touch-icon-180x180',
				rel: 'apple-touch-icon',
				sizes: '180x180',
				href: '/app-icons/apple-touch-icon-180x180.png?v=2',
			},
			{
				hid: 'safari-pinned-tab',
				rel: 'mask-icon',
				color: '#d56541',
				href: '/app-icons/safari-pinned-tab.svg?v=2',
			},
			{
				hid: 'site-webmanifest',
				rel: 'manifest',
				href: '/site.webmanifest?v=2',
			},
		],
	},

	env: {
		baseUrl: process.env.BASE_URL,
		apiUrl: process.env.CRAFT_API_URL,
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		'~/plugins/helpers.js',
		'~/plugins/preview.client.js',
		'~/plugins/click-outside.client.js',
		'~/plugins/focus-visible-polyfill.client.js',
		'~/plugins/prism.client.js',
		'~/plugins/vee-validate.client.js',
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/eslint
		'@nuxtjs/eslint-module',
		// https://go.nuxtjs.dev/stylelint
		'@nuxtjs/stylelint-module',
		'@nuxtjs/tailwindcss',
		'@nuxtjs/svg-sprite',
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: ['@nuxt/http', 'portal-vue/nuxt', 'nuxt-mq', '@nuxtjs/robots', '@nuxtjs/sitemap'],

	// Nuxt http options : https://http.nuxtjs.org/options
	http: {
		headers: {
			'Access-Control-Allow-Origin': '*',
		},
	},

	// Nuxt Media Queries Configuration: https://github.com/vanhoofmaarten/nuxt-mq
	mq: {
		defaultBreakpoint: 'lg',
		breakpoints: {
			sm: 540,
			md: 720,
			lg: 960,
			xl: Infinity,
		},
	},

	robots: [
		{
			UserAgent: ['*'],
			Disallow: () =>
				['https://fostercommerce.com', 'https://www.fostercommerce.com'].includes(
					process.env.NUXT_BASE_URL
				)
					? ['/api/']
					: ['*'],
		},
	],

	sitemap: {
		path: '/sitemap.xml',
		hostname: process.env.NUXT_BASE_URL,
		xmlNs: 'xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
		gzip: true,
		defaults: {
			changefreq: 'daily',
			priority: 1,
			lastmod: new Date(),
		},
		i18n: false,
	},

	// Storybook Configuration: https://storybook.nuxtjs.org/options
	storybook: {
		addons: ['@storybook/addon-a11y'],
		parameters: {
			backgrounds: {
				default: 'body',
				values: [
					{ name: 'body', value: '#F8F2EA' },
					{ name: 'white', value: '#FFFFFF' },
					{ name: 'black', value: '#000000' },
				],
			},
		},
	},

	// SVG Sprite Module Configuration: https://github.com/nuxt-community/svg-sprite-module
	svgSprite: {},

	// Nuxt Apollo Module Configuration: https://github.com/nuxt-community/apollo-module

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		// Include compiled builds for plugins that do not have dist
		extend(config) {
			config.resolve.alias.vue = 'vue/dist/vue.common';

			config.module.rules.push({
				test: /\.(graphql|gql)$/,
				exclude: /node_modules/,
				loader: 'graphql-tag/loader',
			});
		},
		transpile: ['vee-validate/dist/rules'],
		// Add PostCSS plugins
		postcss: {
			plugins: {
				'postcss-mixins': {},
				'postcss-simple-vars': {},
				'postcss-nested': {},
				'postcss-pxtorem': {
					propList: ['*', '!border*'],
				},
				cssnano: {
					preset: [
						'default',
						{
							// Disable this optimization until this fix lands
							// https://github.com/cssnano/cssnano/issues/932
							mergeRules: false,
						},
					],
				},
			},
		},
	},

	generate: {
		routes() {
			const routes = getAllRoutes();

			return routes;
		},
		crawler: false,
		fallback: true,
	},

	router: {
		trailingSlash: false,
	},

	// server-only-runtime-config
	privateRuntimeConfig: {
		// graphQL bearer token for requesting data from Craft
		graphQLBearerToken: process.env.CRAFT_API_TOKEN,
		// runtime-config for @nuxtjs/http
		http: {
			// Allow 5 attempts for a request during build.
			retry: 4,
			baseURL: process.env.BASE_URL || 'https://fcadmin.fosterstaging.com',
		},
	},
	publicRuntimeConfig: {
		baseURL: process.env.BASE_URL || 'http://localhost:3000',
		craftApiUrl: process.env.CRAFT_API_URL || 'https://fcadmin.fosterstaging.com/api',
		http: {
			retry: true,
			browserBaseURL: process.env.BROWSER_BASE_URL,
		},
	},
	ignore: ['**/*.test.*'],
};
