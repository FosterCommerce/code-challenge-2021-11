import 'clipboard';
import Prism from 'prismjs';
import Vue from 'vue';

// Prism CSS theme
import 'prismjs/themes/prism.css';

// Languages to support
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-twig';
import 'prismjs/components/prism-graphql';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-sql';

// Plugins
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/toolbar/prism-toolbar.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
import 'prismjs/plugins/show-language/prism-show-language';

Vue.component('Prism', {
	props: {
		lang: {
			type: String,
			default: 'js',
		},
	},
	mounted() {
		Prism.highlightAll();
	},
	template:
		// eslint-disable-next-line no-template-curly-in-string
		'<div class="prism"><pre class="line-numbers" :class="`language-${lang}`"><code><slot /></code></pre></div>',
});
