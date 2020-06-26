<template>
  <div>
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from '~/components/loginForm.vue'
export default {
  layout: 'session',
  components: {
    LoginForm,
  },
}
</script>
