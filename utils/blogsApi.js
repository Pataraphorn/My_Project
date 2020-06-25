import { requestapi } from './api'
const HOSTNAME = 'https://sakko-demo-api.herokuapp.com/api/v1/user/blogs'
export function index() {
  const url = `${HOSTNAME}/api/v1/user/blogs`
  return requestapi('get', url, {}, true)
}
export function show(id) {
  const url = `${HOSTNAME}/api/v1/user/blogs/${id}`
  return requestapi('get', url, {}, true)
}
export function create(title, body) {
  const url = `${HOSTNAME}/api/v1/user/blogs`
  return requestapi('post', url, { blog: { title, body } }, true)
}
export function update(id, title, body) {
  const url = `${HOSTNAME}/api/v1/user/blogs/${id}`
  return requestapi('put', url, { blog: { title, body } }, true)
}
export function destroy(id) {
  const url = `${HOSTNAME}/api/v1/user/blogs/${id}`
  return requestapi('delete', url, {}, true)
}
