import { extend } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';

extend('required', {
	...required,
	message: 'The {_field_} field is required.',
});

extend('email', {
	...email,
	message: 'The {_field_} field requires a valid email address.',
});
