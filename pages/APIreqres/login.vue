<template>
  <div>
    <div>
      <h1>Login Form</h1>
      <p>email: "eve.holt@reqres.in", password : "cityslicka"</p>
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
      email: '',
      password: '',
    }
  },
  methods: {
    async userLogin() {
      try {
        const response = await this.$auth.loginWith('local', {
          email: this.email,
          password: this.password,
        })
        console.log(this.email, this.password)
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>
<style>
input {
  color: lightsteelblue;
}
</style>
