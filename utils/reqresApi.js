import { reqresapi } from './api'

const HOSTNAME = 'https://reqres.in'

export function singleuser(id) {
  const url = `${HOSTNAME}/api/users/${id}`
  return reqresapi('get', url, {}, true)
}

export function listusers(page) {
  const url = `${HOSTNAME}/api/users?page=${page}`
  return reqresapi('get', url, {}, true)
}

export function createusers(name, job) {
  const url = `${HOSTNAME}/api/users`
  return reqresapi('post', url, { user: { name, job } }, true)
}

export function updateusers(name, job) {
  const url = `${HOSTNAME}/api/users/2`
  return reqresapi('get', url, { user: { name, job } }, true)
}

export function deleteusers(id) {
  const url = `${HOSTNAME}/api/users/${id}`
  return reqresapi('delete', url, {}, true)
}
