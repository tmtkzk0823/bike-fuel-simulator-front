import { useEffect, useState, createContext } from 'react'

import { Router } from '@/router/Router'

import { getCurrentUser } from '@/apis/auth'

export const AuthContext = createContext() // 後にjotaiを使ってやるようにする

export const App = () => {
  const [loading, setLoading] = useState(true)
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState()

  //認証済みのユーザーがいるかどうかチェック
  // 確認できた場合はそのユーザーの情報を取得
  const handleGetCurrentUser = async () => {
    try {
      const res = await getCurrentUser()
      console.log(res, 'Appコンポーネント')

      if (res?.status === 200) {
        // ?.(オプショナルチェーン) nullかundefinedの場合undefinedが返される
        setIsSignedIn(true)
        setCurrentUser(res?.data.currentUser)
      } else {
        console.log('No current user')
      }
    } catch (err) {
      console.log(err)
    }

    setLoading(false)
  }

  useEffect(() => {
    handleGetCurrentUser()
  }, [setCurrentUser])

  return (
    <Router
      loading={loading}
      setLoading={setLoading}
      isSignedIn={isSignedIn}
      setIsSignedIn={setIsSignedIn}
      currentUser={currentUser}
      setCurrentUser={setCurrentUser}
    />
  )
}
