<template>
  <div>
    <h6>Email : saklism+demo1@gmail.com // Password : 12341234</h6>
    <v-text-field v-model="email" label="Email"></v-text-field>
    <v-text-field
      v-model="password"
      label="Password"
      type="password"
    ></v-text-field>
    <v-btn @click="handleLoginClick"> Login </v-btn>
  </div>
</template>

<script>
export default {
  layout: 'session',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async handleLoginClick() {
      try {
        const response = await this.$auth.loginWith('local', {
          data: { user: { email: this.email, password: this.password } },
        })
        console.log(response)
        if (response.data.success) {
          this.$router.replace({ name: 'blogs' })
        }
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>
