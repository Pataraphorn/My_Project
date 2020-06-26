<template>
  <div>
    <RegisterForm />
  </div>
</template>

<script>
import RegisterForm from '~/components/registerForm.vue'
export default {
  layout: 'session',
  components: {
    RegisterForm,
  },
}
</script>
