import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Top, LoginForm, SignUpForm, MyPage } from '@/components/pages'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/sign_up" element={<SignUpForm />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  )
}
