<template>
  <div class="contain">
    <h1>Login Form</h1>
    <hr />
    <div class="content">
      <ValidationProvider name="email" rules="required|email">
        <div slot-scope="{ errors }">
          <label for="email">Email : </label>
          <input
            v-model="email"
            type="text"
            placeholder="your email"
            name="email"
            id="email"
            class="form-login"
          />
          <p>{{ errors[0] }}</p>
        </div>
      </ValidationProvider>
    </div>
    <div class="content">
      <ValidationProvider name="password" rules="required|minmax:5,10">
        <div slot-scope="{ errors }">
          <label for="password">Password : </label>
          <input
            v-model="password"
            type="text"
            placeholder="your password"
            name="password"
            id="password"
            class="form-login"
          />
          <p>{{ errors[0] }}</p>
        </div>
      </ValidationProvider>
    </div>
    <div class="content">
      <button type="submit" class="button-form-submit" @click="userLogin">
        Login
      </button>
      <button type="submit" class="button-form-register" @click="userRegister">
        register
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/scss/form.scss';
@import '~/assets/scss/input.scss';
@import '~/assets/scss/button.scss';
</style>

<script>
import { ValidationProvider } from 'vee-validate'
export default {
  layout: 'session',
  components: {
    ValidationProvider,
  },
  data() {
    return {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka',
    }
  },
  methods: {
    userLogin() {
      console.log(this.email, this.password)
      this.$store
        .dispatch('Login', {
          email: this.email,
          password: this.password,
        })
        .then((success) => {
          // console.log(success)
          console.log('Status Login : ', this.$store.state.auth.loggedIn)
          // console.log('Token : ', this.$store.state.token)
        })
        .catch((error) => {
          alert(error.response.data.error)
        })
    },
    userRegister() {
      this.$router.replace({
        name: 'APIreqres-register',
      })
    },
  },
}
</script>
<style lang="scss" scoped></style>
<style scoped>
input {
  color: lightsteelblue;
}
</style>
