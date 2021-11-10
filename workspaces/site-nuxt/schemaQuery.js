require('dotenv').config();
const fs = require('fs');
const fetch = require('node-fetch');

/** This file is run via Node to fetch the current GraphQL schema from the endpoint
 * and then create a JSON file of it that we can use as a fragment type matcher in Apollo */

fetch(process.env.CRAFT_API_URL, {
	method: 'POST',
	headers: { 'Content-Type': 'application/json' },
	body: JSON.stringify({
		variables: {},
		query: `
      {
        __schema {
          types {
            kind
            name
            possibleTypes {
              name
            }
          }
        }
      }
    `,
	}),
})
	.then((result) => result.json())
	.then((result) => {
		// here we're filtering out any type information unrelated to unions or interfaces
		result.data.__schema.types = result.data.__schema.types.filter(
			(type) => type.possibleTypes !== null
		);
		fs.writeFileSync('./fragmentTypes.json', JSON.stringify(result.data), (err) => {
			if (err) {
				console.error('Error writing fragmentTypes file', err);
			} else {
				console.log('Fragment types successfully extracted!');
			}
		});
	});
