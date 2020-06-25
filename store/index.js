import * as axios from 'axios'
export const actions = {
  Login: ({ commit }, { email, password }) => {
    console.log('running login')
    return new Promise((resolve, reject) => {
      axios
        .post('http://reqres.in/api/login', { email, password })
        .then((response) => {
          if (response.status === 200) {
            resolve(true)
          }
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
  },
}
