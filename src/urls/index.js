const DEFAULT_API_URL = import.meta.env.VITE_DEFAULT_API_URL

export const manufacturersIndex = `${DEFAULT_API_URL}/manufacturers`
export const bikesIndex = (manufacturersId) =>
  `${DEFAULT_API_URL}/manufacturers/${manufacturersId}/bikes`

// 認証
export const signUpUrl = `${DEFAULT_API_URL}/auth`
export const userUpdateUrl = `${DEFAULT_API_URL}/auth`
export const signInUrl = `${DEFAULT_API_URL}/auth/sign_in`
export const signOutUrl = `${DEFAULT_API_URL}/auth/sign_out`
export const getCurrentUserUrl = `${DEFAULT_API_URL}/auth/sessions`
