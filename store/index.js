import axios from 'axios'

export const state = () => ({
  token: localStorage.getItem('token_access') || '',
})
export const mutations = {
  catchUser(state, val) {
    state.token = val
    // console.log('Login token >> ', state.token)
  },
  logout(state) {
    localStorage.setItem('token_access', '')
    this.$auth.setUser('')
    state.token = ''
    localStorage.clear()
  },
}
export const actions = {
  Login({ commit }, { email, password }) {
    localStorage.clear()
    console.log('log in access . . .')
    axios
      .post('https://reqres.in/api/login', { email, password })
      .then((response) => {
        if (response.status === 200) {
          // console.log('response token', response.data.token)
          // console.log(response.status)
          const val = response.data.token
          localStorage.setItem('token_access', val)
          this.$auth.setUser(val)
          commit('catchUser', val)
          this.$router.replace({
            name: 'APIreqres-data',
          })
          return true
        }
      })
      .catch((error) => {
        alert('Login FAIL !!!!')
        return error
      })
  },
  Register({ commit }, { email, password }) {
    console.log('Register access . . .')
    axios
      .post('https://reqres.in/api/register', { email, password })
      .then((response) => {
        if (response.status === 200) {
          const val = response.data.token
          localStorage.setItem('token_access', val)
          this.$auth.setUser(val)
          commit('catchUser', val)
          return true
        }
      })
      .catch((error) => {
        alert('Register FAIL !!!!!')
        return error
      })
  },
}
