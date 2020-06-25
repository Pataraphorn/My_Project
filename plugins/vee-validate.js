import Vue from 'vue'
import { extend } from 'vee-validate'
import {
  ValidationProvider,
  ValidationObserver,
} from 'vee-validate/dist/vee-validate.full.esm'
import { required, email, confirmed } from 'vee-validate/dist/rules'

// Register it globally
// main.js or any entry file.
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

// No message specified.
extend('email', email)
extend('confirmed', confirmed)

// Override the default message.
extend('required', {
  ...required,
  message: (fieldName, placeholders) => {
    return `The ${fieldName} field is required`
  },
})

extend('minmax', {
  validate(value, { min, max }) {
    return value.length >= min && value.length <= max
  },
  params: ['min', 'max'],
  message: (fieldName, placeholders) => {
    return `The ${fieldName} field must have at least ${placeholders.min} characters and ${placeholders.max} characters at most`
  },
})
