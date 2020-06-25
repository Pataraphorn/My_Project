import { represapi } from './api'
const HOSTNAME = 'https://reqres.in'

export function singleuser(id) {
  const url = `${HOSTNAME}/api/users/${id}`
  return represapi('get', url, {}, true)
}

export function listusers(page) {
  const url = `${HOSTNAME}/api/users?page=${page}`
  return represapi('get', url, {}, true)
}

export function createusers(name, job) {
  const url = `${HOSTNAME}/api/users`
  return represapi('post', url, { user: { name, job } }, true)
}

export function updateusers(id, name, job) {
  const url = `${HOSTNAME}/api/users/${id}`
  return represapi('get', url, { user: { name, job } }, true)
}

export function deleteusers(id) {
  const url = `${HOSTNAME}/api/users/${id}`
  return represapi('delete', url, {}, true)
}
