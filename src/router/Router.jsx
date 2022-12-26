import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Top, LoginForm, SignUpForm, MyPage } from '@/components/pages'

import { AuthContext } from '@/App'

export const Router = (props) => {
  const {
    loading,
    setLoading,
    isSignedIn,
    setIsSignedIn,
    currentUser,
    setCurrentUser,
  } = props

  // 認証していなかった場合にルーティングを修正
  const Private = (props) => {
    if (!loading) {
      if (isSignedIn) {
        return props.component
      } else {
        return <Navigate to="/login" />
      }
    } else {
      return <></>
    }
  }

  return (
    // 後にjotaを使ってリファクタリングできるか試す
    <AuthContext.Provider
      value={{
        loading,
        setLoading,
        isSignedIn,
        setIsSignedIn,
        currentUser,
        setCurrentUser,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/sign_up" element={<SignUpForm />} />
          <Route
            path="/mypage"
            element={<Private component={<MyPage />} redirect="/login" />}
          />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}
