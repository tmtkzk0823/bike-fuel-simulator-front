import { Header } from './components/atoms/layouts/Header'
import { Footer } from './components/atoms/layouts/Footer'
import { GoogleMapDisplay } from './components/atoms/GoogleMapDisplay'

export const App = () => {
  return (
    <>
      <Header/>
      <GoogleMapDisplay/>
      <Footer/>
    </>
  )
}
