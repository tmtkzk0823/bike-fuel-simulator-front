import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Top, LoginForm } from '@/components/pages'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  )
}
