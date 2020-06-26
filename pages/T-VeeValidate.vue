<template>
  <div>
    <div>
      <h1>Test</h1>
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

      <h5>Confirm password</h5>
      <ValidationObserver>
        <ValidationProvider v-slot="{ errors }" rules="confirmed:confirmation">
          <input
            v-model="value"
            type="text"
            placeholder="input your password"
          />
          <span>{{ errors[0] }}</span>
        </ValidationProvider>

        <ValidationProvider v-slot="{ errors }" vid="confirmation">
          <input
            v-model="confirmation"
            type="text"
            placeholder="confirm your password"
          />
          <span>{{ errors[0] }}</span>
        </ValidationProvider>
      </ValidationObserver>

      <div>
        <input
          v-model="password"
          v-validate="'required|min:6|max:35|confirmed'"
          type="password"
          placeholder="Password"
          name="password"
        />
      </div>
      <div>
        <span>{{ errors.first('password') }}</span>
      </div>
      <div>
        <input
          v-model="confirmPassword"
          v-validate="'required|target:password'"
          type="password"
          placeholder="Confirm password"
          name="confirm_password"
        />
      </div>
      <div>
        <span>{{ errors.first('confirm_password') }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      email: '',
      password: '',
    }
  },
}
</script>
