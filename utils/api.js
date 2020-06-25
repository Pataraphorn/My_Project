import axios from 'axios'
const getToken = function () {
  if (process.server) {
    // server side
    return
  }
  if (window.$nuxt) {
    return window.$nuxt.$auth.getToken('local')
  }
}

export async function requestapi(method, url, data, auth = false) {
  const headers = {}
  if (auth) {
    headers['auth-token'] = getToken()
  }
  try {
    // call anime api
    const response = await axios({
      method,
      url,
      data,
      headers,
    })
    return response
  } catch (e) {
    return e
  }
}

export async function reqresapi(method, url, data, auth = false) {
  const headers = {}
  if (auth) {
    headers['auth-token'] = getToken()
  }
  try {
    // call reqres api
    const response = await axios({
      method,
      url,
      data,
      headers,
    })
    return response
  } catch (e) {
    return e
  }
}
