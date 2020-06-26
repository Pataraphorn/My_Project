<template>
  <div class="contain">
    <h1>Register Form</h1>
    <hr />
    <div>
      <label for="email">Email : </label>
      <input
        v-model="email"
        type="text"
        placeholder="your email"
        name="email"
        id="email"
        class="form-register"
      />
    </div>
    <div>
      <label for="password">Password : </label>
      <input
        v-model="password"
        type="text"
        placeholder="your password"
        name="password"
        id="password"
        class="form-register"
      />
    </div>
    <div>
      <label for="confirmpassword">Confirm Password : </label>
      <input
        v-model="confirmPassword"
        type="text"
        placeholder="your password"
        name="confirmpassword"
        id="confirmpassword"
        class="form-register"
      />
    </div>
    <div>
      <button type="submit" class="button-form-submit">register</button>
      <button type="submit" class="button-form-cancel">cancel</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/scss/color.scss';
@import '~/assets/scss/input.scss';
@import '~/assets/scss/button.scss';
.contain {
  margin: 10% 20%;
  padding: 2% 2%;
  font-size: 18px;
  background-color: $black5-color;
}
h1 {
  text-align: center;
}
hr {
  margin: 10px 0;
}
$div-content-height: 8vh;
.content {
  margin: 10px 0;
  height: $div-content-height;
}
label {
  padding: 15px 0;
  display: inline-block;
  font-weight: bold;
}
</style>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
    }
  },
}
</script>
