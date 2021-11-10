import { print } from 'graphql/language/printer';

export const state = () => ({
	primaryNav: [],
	softwareNav: [],
	footerNav: [],
	socialNav: [],
	metaTitleContainer: 'Foster Commerce',
	metaTagContainer: {},
	metaLinkContainer: {},
	metaScriptContainer: {},
	metaJsonLdContainer: {},
	csrfToken: {},
});

export const mutations = {
	setPrimaryNav(state, payload) {
		state.primaryNav = payload;
	},
	setSoftwareNav(state, payload) {
		state.softwareNav = payload;
	},
	setFooterNav(state, payload) {
		state.footerNav = payload;
	},
	setSocialNav(state, payload) {
		state.socialNav = payload;
	},
	setMetaTitleContainer(state, payload) {
		state.metaTitleContainer = payload;
	},
	setMetaTagContainer(state, payload) {
		state.metaTagContainer = payload;
	},
	setMetaLinkContainer(state, payload) {
		state.metaLinkContainer = payload;
	},
	setMetaScriptContainer(state, payload) {
		state.metaScriptContainer = payload;
	},
	setMetaJsonLdContainer(state, payload) {
		state.metaJsonLdContainer = payload;
	},
	setCsrfToken(state, payload) {
		state.csrfToken = payload;
	},
};

export const actions = {
	/**
	 * Server Init Action. Used to fetch layout-level data.
	 * In static sites like this, runs for every page during generate.
	 * @param {dispatch, commit, state} VuexContext
	 * @param {*} NuxtContext
	 */
	async nuxtServerInit({ dispatch }) {
		// Abstract to Vuex

		const query = await import('@/queries/GlobalNavigation.gql').then((module) => module.default);

		const { data: queryData, queryErrors } = await this.$http.$post('/api', {
			query: print(query),
		});

		dispatch('setNavigationData', queryData);
		dispatch('setCsrfTokenData');
	},
	setNavigationData({ commit }, data) {
		commit('setPrimaryNav', data?.primaryNav);
		commit('setSoftwareNav', data?.softwareNav);
		commit('setFooterNav', data?.footerNav);
		commit('setSocialNav', data?.socialNav);
	},
	setSeoData({ commit }, data) {
		if (data?.metaTitleContainer) {
			const titleContainer = JSON.parse(data.metaTitleContainer);
			commit('setMetaTitleContainer', titleContainer?.title?.title);
		}
		commit('setMetaTagContainer', JSON.parse(data?.metaTagContainer ?? '{}'));
		commit('setMetaLinkContainer', JSON.parse(data?.metaLinkContainer ?? '{}'));
		commit('setMetaScriptContainer', JSON.parse(data?.metaScriptContainer ?? '{}'));
		commit('setMetaJsonLdContainer', JSON.parse(data?.metaJsonLdContainer ?? '{}'));
	},
	async setCsrfTokenData({ commit }) {
		const tokenData = await this.$http.$get('/api/get-csrf-token', {
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		});
		commit('setCsrfToken', tokenData);
	},
	/**
	 *
	 * Imports a GQL file to be used for a fetch request, then
	 * querying the GraphQL API with the relevant query string.
	 *
	 * Utilizes graphql/language/printer to convert from AST to a string for Craft.
	 *
	 * @param {dispatch, commit, state} param0
	 * @param {name, variables} param1
	 * @returns
	 */
	async queryAPI({ commit }, { name, variables }) {
		const query = await import(`@/queries/${name}.gql`).then((module) => module.default);

		const request = this.$http.$post('/api', {
			query: print(query),
			variables,
		});

		return request;
	},
};
