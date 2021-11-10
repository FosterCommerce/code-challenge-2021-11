<script>
	export default {
		name: 'BasePagination',
		props: {
			/** The current page */
			page: {
				type: Number,
				required: true,
				default: 1,
			},
			/** The total number of pages */
			numPages: {
				type: Number,
				required: true,
				default: 1,
			},
		},
		methods: {
			/** Creates the page links based on the number of pages */
			createPagingLinks() {
				if (this.page > 3) {
					const pages = [];

					if (this.page - 2 > 0) {
						pages.push(this.page - 2);
					}

					if (this.page - 1 > 0) {
						pages.push(this.page - 1);
					}

					pages.push(this.page);

					if (this.page + 1 <= this.numPages) {
						pages.push(this.page + 1);
					}

					if (this.page + 2 <= this.numPages) {
						pages.push(this.page + 2);
					}

					return pages;
				} else {
					return [1, 2, 3, 4, 5];
				}
			},
		},
	};
</script>

<template>
	<nav aria-label="Pagination">
		<ul class="flex justify-center items-center">
			<li v-if="page > 1">
				<a
					aria-label="Previous page"
					tabindex="0"
					@click.prevent="$emit('paginate', { direction: 'back' })"
					@keyup.space="$emit('paginate', { direction: 'back' })"
					@keyup.enter="$emit('paginate', { direction: 'back' })"
				>
					«
				</a>
			</li>
			<li v-for="n in numPages > 5 ? createPagingLinks() : numPages" :key="n">
				<a
					v-if="n !== page"
					:aria-label="`Page ${n}`"
					tabindex="0"
					@click.prevent="
						$emit('paginate', {
							direction: n < page ? 'back' : 'forward',
							jump: Math.abs(n - page),
						})
					"
					@keyup.space="
						$emit('paginate', {
							direction: n < page ? 'back' : 'forward',
							jump: Math.abs(n - page),
						})
					"
					@keyup.enter="
						$emit('paginate', {
							direction: n < page ? 'back' : 'forward',
							jump: Math.abs(n - page),
						})
					"
				>
					{{ n }}
				</a>
				<span v-else>{{ n }}</span>
			</li>
			<li v-if="page < numPages">
				<a
					aria-label="Next page"
					tabindex="0"
					@click.prevent="$emit('paginate', { direction: 'forward' })"
					@keyup.space="$emit('paginate', { direction: 'forward' })"
					@keyup.enter="$emit('paginate', { direction: 'forward' })"
				>
					»
				</a>
			</li>
		</ul>
	</nav>
</template>

<style lang="postcss" scoped>
	li {
		@apply inline-block;

		&:first-child {
			@apply border-l-0;
		}
	}
	a {
		@apply text-secondary transition-colors duration-300 cursor-pointer;

		&:hover {
			@apply text-highlight-secondary;
		}
	}
	a,
	span {
		@apply block px-3 py-2 min-w-[50px] text-lg text-center;
	}
</style>
