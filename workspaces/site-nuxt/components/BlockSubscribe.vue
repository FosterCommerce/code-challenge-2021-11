<script>
	export default {
		name: 'BlockSubscribe',
		props: {
			block: {
				type: Object,
				required: true,
			},
		},
		data() {
			return {
				email: '',
				isSubmitting: false,
				submitted: false,
				formErrors: false,
			};
		},
		computed: {
			/** Gets the heading from the related entry */
			heading() {
				let headingStr = null;
				if (this.block.subscribeEntry.length) {
					headingStr = this.$helpers.removeParagraphs(this.block.subscribeEntry[0].heading);
				}
				return headingStr;
			},
			/** Gets the summary nodes from tje related entries Vizy field */
			nodes() {
				let nodesArr = [];
				if (this.block.subscribeEntry.length) {
					nodesArr = this.block.subscribeEntry[0].summary.nodes;
				}
				return nodesArr;
			},
			/** Sets a default success message if one is not present,
			 * and also converts any email addresses into mailto links in the string */
			successMessage() {
				let message =
					'<strong>Thank You!</strong><br/>You have been subscribed to Commerce Minded.';
				if (this.block.subscribeEntry.length && this.block.subscribeEntry[0].confirmation) {
					message = this.block.subscribeEntry[0].confirmation;
				}
				return this.$helpers.parseEmailLinks(message);
			},
			/** Sets a default error message  */
			errorMessage() {
				const message =
					'There has been an error subscribing you to the newsletter. You can contact us at support@fostercommerce.com';
				return this.$helpers.parseEmailLinks(message);
			},
		},
		methods: {
			subscribeUser(value) {
				const payload = {
					list: 'Lzh7pX',
					email: value,
					sessionId: this.$store.state.csrfToken.sessionId,
				};

				payload[this.$store.state.csrfToken.name] = this.$store.state.csrfToken.value;

				this.isSubmitting = true;

				this.$http
					.$post('/actions/klaviyoconnect/api/track', payload, {
						mode: 'cors',
						headers: {
							Accept: 'application/json',
							'Cache-Control': 'no-cache',
							'X-Requested-With': 'XMLHttpRequest',
						},
					})
					.then((response) => {
						if (response === 'success') {
							this.submitted = true;
							this.$emit('submitted', value);
						} else {
							this.submitted = false;
							this.formErrors = true;
						}
					})
					.catch(() => {
						this.submitted = false;
						this.formErrors = true;
					})
					.finally(() => {
						this.isSubmitting = false;
					});
			},
		},
	};
</script>

<template>
	<BaseCardPreview alignment="horizontal">
		<div class="space-y-3 lg:space-y-4">
			<BaseHeading v-if="heading" :heading-level="3" theme="h3">
				<span v-html="heading" />
			</BaseHeading>
			<div class="text-primary lg:text-lg">
				<component
					:is="$helpers.blockName(node.type)"
					v-for="(node, index) in nodes"
					:key="index"
					:block="node"
				/>
			</div>
			<BaseFormlet
				v-if="!submitted"
				type="email"
				placeholder="email"
				:button-label="`${isSubmitting ? 'Sending' : 'Submit'}`"
				:disable="isSubmitting"
				class="block"
				@submit="subscribeUser"
			/>
			<transition name="slide">
				<div v-if="!submitted && formErrors" class="mt-6 text-red-800">
					<p v-html="errorMessage"></p>
				</div>
			</transition>
			<transition name="slide">
				<div v-if="submitted" class="mt-6 font-bold text-tertiery lg:text-lg">
					<p v-html="successMessage"></p>
				</div>
			</transition>
		</div>
		<template v-slot:preview>
			<BasePreview>
				<BaseIcon file="microphone" alt="Microphone Icon" classes="w-7 h-7" />
				<BaseHeading :heading-level="4" theme="h2">Commerce Minded</BaseHeading>
				<h3 class="mt-1 text-xs text-highlight-primary font-bold">With Stephen Callender</h3>
				<template v-slot:media>
					<PreviewPodcast />
				</template>
			</BasePreview>
		</template>
	</BaseCardPreview>
</template>

<style lang="postcss" scoped>
	.slide-enter-active {
		transition-duration: 0.3s;
		transition-timing-function: ease-in;
	}

	.slide-leave-active {
		transition-duration: 0.3s;
		transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
	}

	.slide-enter-to,
	.slide-leave {
		max-height: 1000px;
		overflow: hidden;
	}

	.slide-enter,
	.slide-leave-to {
		overflow: hidden;
		max-height: 0;
	}
</style>
