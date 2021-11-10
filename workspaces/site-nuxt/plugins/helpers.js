const helpers = (baseUrl) => ({
	/** Extracts a URL from an anchor tag string */
	extractUrl(str) {
		let result = str;

		if (str) {
			result = str.replace(/(?:<a\s+(?:[^>]*?\s+)?href=")(.[^"]+|#)(.+)/gi, '$1');
		}

		return result;
	},

	/** Checks if a URL is internal or not */
	isInternal(url) {
		let result = false;

		if (url) {
			const currentHost = baseUrl;
			const uriAsUrl = new URL(url, baseUrl);
			if (uriAsUrl.origin === currentHost) {
				result = true;
			}
		}

		return result;
	},

	/** Formats a URL as a URI */
	formatUri(uri) {
		const internal = this.isInternal(uri);

		let formatted = uri || '#';

		if (internal) {
			const removeDupes = uri.replace(/^(?:https?:\/\/.+)(https?:\/\/.+)/gi, '$1');
			formatted = removeDupes.replace(/^(?:\/?\$base_url|https?:\/\/(?:[^/]+))(.+)/gi, '$1');
		}

		return formatted;
	},
	/** Removes html tags in a string */
	removeHtml(str) {
		let result = str;

		if (str) {
			result = str.replace(/(<([^>]+)>)/gi, '');
		}

		return result;
	},

	/** Removes paragraphs from an HTML string */
	removeParagraphs(str) {
		return str.replace(/(<p[^>]+?>|<p>|<\/p>)/gim, '');
	},

	/** Parses email addresses int a string to convert them to mailto: links */
	parseEmailLinks(str) {
		return str.replace(/([\w.-]+@\w+\.\w+)/g, '<a href=mailto:$1 class="underline">$1</a>');
	},

	/** Determines if the Vizy node is a text block */
	isTextNode(type) {
		const textNodeTypes = [
			'blockquote',
			'bulletList',
			'codeBlock',
			'hardBreak',
			'horizontal_rule',
			'iframe',
			'listItem',
			'orderedList',
			'paragraph',
		];
		return textNodeTypes.includes(type);
	},

	/** Generates the name of a content builder block component based on the type of Vizy block it is */
	blockName(type) {
		let componentName = '';
		if (this.isTextNode(type)) {
			componentName = 'BlockRichText';
		} else {
			componentName = 'Block' + type.charAt(0).toUpperCase() + type.slice(1);
		}
		return componentName;
	},

	/** Generates the name of page rows for the page row builder component based on the Neo block it is */
	rowName(type) {
		return type.charAt(0).toUpperCase() + type.slice(1);
	},

	/** Generates the name of the hero component based on a string */
	heroName(type) {
		return 'Hero' + type.charAt(0).toUpperCase() + type.slice(1);
	},

	/** Generates the Tailwind margin class string for overriding space-y-* rules */
	elementMarginClass(margin) {
		let classStr = '';
		switch (margin) {
			case 'none':
				classStr = '!mt-0';
				break;
			case 'small':
				classStr = '!mt-3';
				break;
		}
		return classStr;
	},

	/** Generates the Tailwind class string for restricting widths on elements */
	elementWidthClass(width) {
		let classStr = '';
		switch (width) {
			case 'small':
				classStr = 'max-w-lg';
				break;
			case 'medium':
				classStr = 'max-w-[825px]';
				break;
			case 'large':
				classStr = 'max-w-[1230px]';
				break;
		}
		return classStr;
	},

	/** Gets data from local storage */
	getLocalStorage(key) {
		const itemStr = localStorage?.getItem(key);
		if (!itemStr) {
			return null;
		}
		const item = JSON.parse(itemStr);
		const now = new Date();
		if (now.getTime() >= item.expiry) {
			localStorage.removeItem(key);
			return null;
		}
		return item.value;
	},

	/** Sets data in local storage */
	setLocalStorage(key, value, expiry) {
		const now = new Date();
		const item = {
			value,
			expiry: now.getTime() + expiry,
		};
		localStorage?.setItem(key, JSON.stringify(item));
	},

	/** Creates a hash from a string */
	createHash(str) {
		let hash = 0;
		let i;
		let chr;

		if (str.length === 0) return hash;

		for (i = 0; i < str.length; i++) {
			chr = str.charCodeAt(i);
			hash = (hash << 5) - hash + chr;
			hash |= 0;
		}

		return hash;
	},

	/** Cleans a URI by removing the index.html part of it */
	cleanUri(rawPath = '') {
		return rawPath?.replace(/index.html/, '')?.replace(/\/$/, '');
	},
});

export default ({ $config }, inject) => {
	inject('helpers', helpers($config.baseURL));
};
