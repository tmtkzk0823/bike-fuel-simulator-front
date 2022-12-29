import { useContext } from 'react'

import { Header } from '@/components/elements/layouts/Header'
import { Footer } from '@/components/elements/layouts/Footer'

// MUI
import { Box, Card } from '@mui/material'

//グローバルstate
import { AuthContext } from '@/App'

export const MyPage = () => {
  const { currentUser, isSignedIn } = useContext(AuthContext)
  return (
    <>
      <Header />
      <Box
        sx={{
          minHeight: '90vh',
        }}
      >
        <Box
          sx={{
            mt: 15,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Card
            sx={{
              mt: 0,
              width: '25%',
              textAlign: 'center',
              borderRadius: 10,
            }}
          >
            <h1>MyPage</h1>

            {isSignedIn && currentUser
              ? console.log(currentUser.name)
              : console.log('ユーザーなし')}
          </Card>
        </Box>
      </Box>

      <Footer />
    </>
  )
}
