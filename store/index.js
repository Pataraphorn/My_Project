import * as axios from 'axios'

export const actions = {
  Login: ({ commit }, { email, password }) => {
    console.log('running login')
    return new Promise((resolve, reject) => {
      axios
        .post('https://reqres.in/api/login', { email, password })
        .then((response) => {
          if (response.status === 200) {
            resolve(true)
            console.log('Response : ', response)
            console.log('Token : ', response.data.token)
            localStorage.setItem('user', JSON.stringify(response.data))
          }
        })
        .catch((error) => {
          console.log(error)
          reject(error)
          alert('Login fail !!!!')
        })
    })
  },
}
