<template>
  <div>
    <div>
      <h1>Login Form</h1>
      <hr />
      <ValidationProvider name="email" rules="required|email">
        <div slot-scope="{ errors }">
          <input v-model="email" placeholder="input your email" />
          <p>{{ errors[0] }}</p>
        </div>
      </ValidationProvider>
      <ValidationProvider name="password" rules="required|minmax:5,10">
        <div slot-scope="{ errors }">
          <input v-model="password" placeholder="input your password" />
          <p>{{ errors[0] }}</p>
        </div>
      </ValidationProvider>
      <v-btn @click="userLogin"> Log in </v-btn>
    </div>
  </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
export default {
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
          console.log(success)
          const user = JSON.parse(localStorage.getItem('user'))
          console.log(user.token)
          this.$auth.setUser(user)
          console.log('User : ', this.$store.state.auth)
          this.$auth
            .setUserToken(user.token)
            .then(() => this.$toast.success('User set!'))
          console.log('Login : ', this.$store.auth.loggedIn)
        })
        .catch((error) => {
          alert(error.response.data.error)
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
