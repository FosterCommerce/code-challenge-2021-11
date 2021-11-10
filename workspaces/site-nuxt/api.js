import axios from 'axios';
import { stringify } from 'qs';
import merge from 'lodash/merge';

const post = (action, params = {}, config = {}) => {
	fetch('/api/get-csrf-token', {
		method: 'POST',
		headers: {
			'X-Requested-With': 'XMLHttpRequest',
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
	}).then((response) => {
		console.log(response);
	});

	/* axios
		.post(
			'?/api/get-csrf-token',
			{
				hello: 'world',
			},
			{
				headers: {
					'Access-Control-Allow-Origin': '*',
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
			}
		)
		.then((response) => {
			console.log(response);
		}); */

	/* if (params instanceof FormData) {
		params.append(window.Craft.csrfTokenName, window.Craft.csrfTokenValue);
	} else {
		params = {
			...params,
			[window.Craft.csrfTokenName]: window.Craft.csrfTokenValue,
		};
	} */

	/* return axios.post(
		`?${stringify({ action })}`,
		params,
		merge(
			{
				header: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
			},
			config
		)
	); */
};

export default {
	post,
};
