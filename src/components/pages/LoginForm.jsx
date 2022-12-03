import { Header } from '../elements/layouts/Header'
import { Footer } from '../elements/layouts/Footer'
import { Box, Card } from '@mui/material'

export const LoginForm = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Card
          sx={{
            width: '40%',
            textAlign: 'center',
          }}
        >
          <h1>LOGIN FORM</h1>
        </Card>
      </Box>
      <Footer />
    </>
  )
}
