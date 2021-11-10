require('dotenv').config();

const fs = require('fs');
const fetch = require('node-fetch');

const SectionsQuery = `

query Sections {
	
	entries(section: ["{{sections}}"]) {
		id
		title
		slug
		uri
		sectionHandle
		typeHandle
	}
	
}

`;

/**
 *
 * Used generally for static generation to get relevant routes for sections.
 *
 * By default, retrieves all sections that is not "pages".
 *
 * @param {*} sections
 * @param {*} query
 * @returns
 */
export default async function (sections, query) {
	sections = sections ?? 'not pages';
	query = query ?? SectionsQuery.replace('{{sections}}', sections);

	const routes = await fetch(process.env.CRAFT_API_URL, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			variables: {},
			query,
		}),
	})
		.then((result) => result.json())
		.then((result) => {
			const entries = [];

			result.data.entries.forEach((entry) => {
				if (entry.uri) {
					entries.push({
						route: '/' + entry.uri,
						payload: entry,
					});
				}
			});

			return entries;
		});

	return routes;
}
