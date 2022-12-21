// const client = applyCaseMiddleware(axios.create({
//   baseURL: "http://localhost:3001/api/v1"
// }), options)

// axios
import axios from 'axios'
// Cookie
import Cookies from 'js-cookie'
// URL
import { signUpUrl, signInUrl } from '@/urls/index'

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
      return console.log(res)
    })
    .catch((e) => console.log(e))
}

// 認証済みユーザー取得
