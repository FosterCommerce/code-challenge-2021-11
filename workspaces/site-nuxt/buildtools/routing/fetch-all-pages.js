require('dotenv').config();

const fs = require('fs');
const fetch = require('node-fetch');

const AllPagesQuery = `

query AllPages {
	
	entries(section: ["pages"]) {
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
 * Used generally for static generation to get relevant routes for pages section.
 *
 * @returns
 */
export default async function () {
	const routes = await fetch(process.env.CRAFT_API_URL, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			variables: {},
			query: AllPagesQuery,
		}),
	})
		.then((result) => result.json())
		.then((result) => {
			const entries = [];

			result.data.entries.forEach((entry) => {
				entries.push({
					route: '/' + entry.uri,
					payload: entry,
				});
			});

			return entries;
		});

	return routes;
}
