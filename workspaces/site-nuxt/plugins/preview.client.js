export default function ({ $http, query, enablePreview, ...rest }) {

	// Whether or not we're in live preview mode

	if ('x-craft-live-preview' in query) {

		// console.log('Has live query');

		// If we're in live preview, Craft adds the `token` query parameter to the
		// url which corresponds with a draft that the user is working on. Pass this
		// back to the back-end so that Craft can serve up the draft instead of the
		// actual entry.
		
		$http.setHeader('X-Craft-Token', query.token);
		enablePreview();

	} else {

		// console.log('Has no live query');

	}
	
}