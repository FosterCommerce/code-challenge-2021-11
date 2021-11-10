import introspectionQueryResultData from '@/fragmentTypes.json';
import { IntrospectionFragmentMatcher, InMemoryCache } from 'apollo-cache-inmemory';

/** This config file for Nuxt/Apollo is setup to read the fragment file created by the
 * schemaQuery.js script file run on dev and generate */

const fragmentMatcher = new IntrospectionFragmentMatcher({ introspectionQueryResultData });

export default (context) => {
	return {
		httpEndpoint: context.env.apiUrl,
		cache: new InMemoryCache({ fragmentMatcher }),
	};
};
