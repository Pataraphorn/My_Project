import { extend } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: 'required',
})

// Add a rule.
extend('minmax', {
  validate(value, { min, max }) {
    return value.length >= min && value.length <= max
  },
  params: ['min', 'max'],
  message: (fieldName, placeholders) => {
    return `The ${fieldName} field must have ${placeholders.min} - ${placeholders.max} characters.`
  },
})
extend('email', (value) => {
  const email = /\S+@\S+\.\S/
  if (!email.test(value)) {
    return 'The {_field_} field must be format demo@gmail.com'
  }
})
