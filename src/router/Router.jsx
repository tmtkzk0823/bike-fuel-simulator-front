import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Top } from '@/components/pages'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Top />} />
      </Routes>
    </BrowserRouter>
  )
}
