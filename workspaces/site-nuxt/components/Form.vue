<script>
	import { ValidationObserver, ValidationProvider } from 'vee-validate';

	/** A component to render, validate, and submit Formie Forms */

	export default {
		name: 'Form',
		components: {
			ValidationObserver,
			ValidationProvider,
		},
		props: {
			/** The Formie Form Object */
			form: {
				type: Object,
				required: true,
			},
		},
		data() {
			return {
				userData: {},
				isSubmitting: false,
				submitted: false,
				formErrors: false,
			};
		},
		computed: {
			/** Sets a default success message if one is not present in the form,
			 * and also converts any email addresses into mailto links in the string */
			successMessage() {
				let message = '<strong>Thank You!</strong><br/>Your message has been received.';
				if (this.form?.settings?.submitActionMessageHtml) {
					message = this.form.settings.submitActionMessageHtml;
				}
				return this.$helpers.parseEmailLinks(message);
			},
			/** Sets a default error message if one is not present in the form,
			 * and also converts any email addresses into mailto links in the string */
			errorMessage() {
				let message =
					'<strong>We are sorry</strong><br/>Your message could not be sent due to an error.';
				if (this.form?.settings?.errorMessageHtml) {
					message = this.form.settings.errorMessageHtml;
				}
				return this.$helpers.parseEmailLinks(message);
			},
		},
		created() {
			// When the component is created lets check for default values in the form fields
			this.initUserData();
		},
		methods: {
			/** Loops through all of the form fields to set any option fields (radios, selects) default values
			 * in the users data scope */
			initUserData() {
				this.userData = {};
				this.form.pages.forEach((page) => {
					page.rows.forEach((row) => {
						row.fields.forEach((field) => {
							if (field?.options?.length) {
								this.userData[field.handle] = field.options[0].value;
							}
						});
					});
				});
			},
			/** Calculates which component to use for the field based on the Formie input types */
			fieldComponentName(type) {
				let componentName = '';
				const fieldTypeHandle = type.split('\\').slice(-1).pop();
				if (fieldTypeHandle === 'MultiLineText') {
					componentName = 'BaseTextarea';
				} else if (fieldTypeHandle === 'Radio') {
					componentName = 'BaseToggle';
				} else {
					componentName = 'BaseInput';
				}
				return componentName;
			},
			/** Calculates the BaseInput "type" prop based om the Formie input types */
			fieldType(type) {
				let fieldType = 'text';
				const fieldTypeHandle = type.split('\\').slice(-1).pop();
				switch (fieldTypeHandle) {
					case 'Email':
						fieldType = 'email';
						break;
					case 'Phone':
						fieldType = 'tel';
						break;
				}
				return fieldType;
			},
			/** Generates the Vee-Validate Rules string for the field */
			fieldRules(field) {
				const rulesArr = [];
				if (field.required) {
					rulesArr.push('required');
				}
				if (this.fieldType(field.type) === 'email') {
					rulesArr.push('email');
				}
				return rulesArr.join('|');
			},
			/*	Submits the form to Formie API endpoint.

				sessionId is passed to let the server know what session ID it should be using for the request,
				as in local environments it won't use the same session ID set in cookies because it's not
				the same origin nor can we tell Craft to use the given domain.

				Similarly, we set the CSRF token name (csrfToken.name) through a variable in case that 
				environment variable changes in the backend.
 
				Mode is required to be set to "cors" explicitly to tell 
				the browser and server this is intended to be a CORS request, 
				otherwise it defaults to same-origin and will fail if sent from localhost.

				See: https://developer.mozilla.org/en-US/docs/Web/API/Request/mode.

				Accept header is required to tell it that it only accepts a JSON response, 
				otherwise it returns a 400 Bad Request respponse.
			*/
			submitForm() {
				const payload = {
					handle: this.form.handle,
					siteId: 1,
					fields: this.userData,
					sessionId: this.$store.state.csrfToken.sessionId,
				};

				payload[this.$store.state.csrfToken.name] = this.$store.state.csrfToken.value;

				this.isSubmitting = true;

				this.$http
					.$post('/actions/formie/submissions/submit', payload, {
						mode: 'cors',
						headers: {
							Accept: 'application/json',
							'Cache-Control': 'no-cache',
						},
					})
					.then((response) => {
						if (response.success) {
							this.submitted = true;
							this.$emit('submitted', this.form.handle);
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
			/** Resets the form (user data, validation errors, and submitted and form error flags)
			 * if it has been submitted already */
			resetForm() {
				if (this.submitted) {
					this.initUserData();
					this.submitted = false;
					this.formErrors = false;
				}
			},
		},
	};
</script>

<template>
	<ValidationObserver v-slot="{ handleSubmit }">
		<transition name="slide">
			<form v-if="!submitted" @submit.prevent="handleSubmit(submitForm)">
				<div v-for="page in form.pages" :key="page.id">
					<fieldset class="space-y-3">
						<div v-for="row in page.rows" :key="row.id">
							<ValidationProvider
								v-for="field in row.fields"
								:key="`${page.id}_${row.id}_${field.handle}`"
								v-slot="{ errors, touched }"
								:name="field.label"
								:rules="fieldRules(field)"
							>
								<component
									:is="fieldComponentName(field.type)"
									v-model="userData[field.handle]"
									:type="fieldType(field.type)"
									:label="field.label"
									:placeholder="field.placeholder"
									:required="field.required"
									:instructions="field.instructions"
									:initial-value="field.options ? field.options[0].value : ''"
									:options="field.options ? field.options : null"
									:field-label="`${page.id}_${row.id}_${field.handle}`"
									:error="errors.length && touched ? errors[0] : ''"
								/>
							</ValidationProvider>
						</div>
					</fieldset>
					<div v-if="page.settings.submitButtonLabel" class="mt-3">
						<BaseButton
							type="submit"
							:rounded="true"
							:disabled="isSubmitting"
							:aria-disabled="isSubmitting"
						>
							{{ isSubmitting ? 'Sending...' : page.settings.submitButtonLabel }}
						</BaseButton>
					</div>
				</div>
			</form>
		</transition>
		<transition name="slide">
			<div v-if="!submitted && formErrors" class="mt-6 text-red-800">
				<p v-html="errorMessage"></p>
			</div>
		</transition>
		<transition name="slide">
			<div v-if="submitted" class="text-tertiery lg:text-lg">
				<p v-html="successMessage"></p>
			</div>
		</transition>
	</ValidationObserver>
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
