const DEFAULT_API_URL = import.meta.env.VITE_DEFAULT_API_URL

export const manufacturersIndex = `${DEFAULT_API_URL}/manufacturers`
export const bikesIndex = (manufacturersId) =>
  `${DEFAULT_API_URL}/manufacturers/${manufacturersId}/bikes`

export const signUpUrl = `${DEFAULT_API_URL}/auth`
