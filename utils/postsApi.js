import { postsapi } from './api'

const HOSTNAME = 'https://jsonplaceholder.typicode.com'

export function allposts() {
  const url = `${HOSTNAME}/posts`
  return postsapi('get', url, {}, true)
}

export function singlepost(id) {
  const url = `${HOSTNAME}/posts/${{ id }}`
  return postsapi('get', url, {}, true)
}

export function commemtpost(postid) {
  const url = `${HOSTNAME}/comments?postId=${{ postid }}`
  return postsapi('get', url, {}, true)
}

export function userpost(userid) {
  const url = `${HOSTNAME}/posts?userId=${{ userid }}`
  return postsapi('get', url, {}, true)
}

export function deletepost(postid) {
  const url = `${HOSTNAME}/posts/${postid}`
  return postsapi('delete', url, {}, true)
}

// - GET	/posts
// GET	/posts/1
// GET	/posts/1/comments
// - GET	/comments?postId=1
// -   GET	/posts?userId=1
//     POST	/posts
// PUT	/posts/1
// PATCH	/posts/1
// - DELETE	/posts/1
