// const client = applyCaseMiddleware(axios.create({
//   baseURL: "http://localhost:3001/api/v1"
// }), options)

// axios
import axios from 'axios'
// Cookie
import Cookies from 'js-cookie'
// URL
import {
  signUpUrl,
  signInUrl,
  signOutUrl,
  getCurrentUserUrl,
  userUpdateUrl,
} from '@/urls/index'

// アカウント作成
export const signUp = (info) => {
  return axios
    .post(signUpUrl, info)
    .then((response) => {
      return response.data
    })
    .catch((e) => console.log(e))
}

export const signIn = (userData) => {
  return axios
    .post(signInUrl, userData)
    .then((res) => {
      return res
    })
    .catch((e) => console.log(e))
}

export const signOut = () => {
  return axios.delete(signOutUrl, {
    headers: {
      'access-token': Cookies.get('_access_token'),
      client: Cookies.get('_client'),
      uid: Cookies.get('_uid'),
    },
  })
}

// 認証済みユーザー取得
export const getCurrentUser = () => {
  if (
    !Cookies.get('_access_token') ||
    !Cookies.get('_client') ||
    !Cookies.get('_uid')
  )
    return
  return axios.get(getCurrentUserUrl, {
    headers: {
      'access-token': Cookies.get('_access_token'),
      client: Cookies.get('_client'),
      uid: Cookies.get('_uid'),
    },
  })
}

export const userUpdate = (updateData) => {
  return axios
    .put(userUpdateUrl, updateData, {
      headers: {
        'access-token': Cookies.get('_access_token'),
        client: Cookies.get('_client'),
        uid: Cookies.get('_uid'),
      },
    })
    .then((res) => {
      return res
    })
    .catch((e) => console.log(e))
}
