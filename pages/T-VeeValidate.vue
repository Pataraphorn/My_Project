<template>
  <div>
    <form>
      <h1>Login Form</h1>
      <hr />
      <br />
      <p>Email :</p>
      <ValidationProvider
        name="email"
        v-slot="{ errors }"
        rules="email|required"
      >
        <input
          class="input-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        <span style="color: crimson;">{{ errors[0] }}</span>
      </ValidationProvider>
      <br />
      <p>Password :</p>
      <ValidationProvider
        name="password"
        v-slot="{ errors }"
        rules="minmax:8,10|required"
      >
        <input
          class="input-field"
          type="text"
          placeholder="Password"
          name="password"
        />
        <span style="color: crimson;">{{ errors[0] }}</span>
      </ValidationProvider>
      <br />
      <button type="submit" class="btn">Login</button>
    </form>
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
}
</script>

<style>
.input-field {
  width: 100%;
  padding: 10px;
  outline: none;
}
input[type='text'] {
  border: 2px solid lightgoldenrodyellow;
  border-radius: 4px;
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  color: indianred;
}
input[type='text']:focus {
  border: 3px solid navajowhite;
}
.btn {
  background-color: dodgerblue;
  color: white;
  padding: 15px 20px;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}
.btn:hover {
  opacity: 1;
}
</style>
