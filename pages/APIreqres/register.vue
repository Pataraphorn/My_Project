<template>
  <div class="contain">
    <h1>Register Form</h1>
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
            class="form-register"
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
            class="form-register"
          />
          <p>{{ errors[0] }}</p>
        </div>
      </ValidationProvider>
    </div>
    <!--    <div class="content">-->
    <!--      <label for="confirmpassword">Confirm Password : </label>-->
    <!--      <input-->
    <!--        v-model="confirmPassword"-->
    <!--        type="text"-->
    <!--        placeholder="your password"-->
    <!--        name="confirmpassword"-->
    <!--        id="confirmpassword"-->
    <!--        class="form-register"-->
    <!--      />-->
    <!--    </div>-->
    <div class="content">
      <button type="submit" class="button-form-submit" @click="register">
        register
      </button>
      <button type="submit" class="button-form-cancel" @click="cancel">
        cancel
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
export default {
  layout: 'session',
  data() {
    return {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka',
    }
  },
  methods: {
    cancel() {
      this.$router.replace({
        name: 'APIreqres-login',
      })
    },
    register() {
      console.log(this.email, this.password)
      this.$store
        .dispatch('Register', {
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
  },
}
</script>
