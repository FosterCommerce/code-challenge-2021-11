import fetchAllPages from './fetch-all-pages.js';
import fetchSections from './fetch-sections.js';

require('dotenv').config();
const fs = require('fs');
const fetch = require('node-fetch');

export default async function () {
	const routes = await aggregateQueryPromises();

	return routes;
}

/** Aggregates queries to fetch routes.
 *
 * This function aggregates promises produced by relevant fetch requests.
 * The rationale is to keep route fetching generally modular.
 *
 * @returns
 */
async function aggregateQueryPromises() {
	const queries = [];

	queries.push(fetchAllPages());
	queries.push(fetchSections('not pages'));

	let routes = (await Promise.all(queries)).flat();

	routes = routes.map((entry) => {
		if (entry.route === '/__home__') entry.route = '/';

		return entry;
	});

	return routes;
}
