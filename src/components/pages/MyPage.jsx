import { useContext } from 'react'

import { Header } from '@/components/elements/layouts/Header'
import { Footer } from '@/components/elements/layouts/Footer'

// MUI
import { Box, Card, Typography } from '@mui/material'

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
          textAlign: 'center',
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
              pb: 5,
              width: '40%',
              textAlign: 'center',
              borderRadius: 10,
            }}
          >
            <Typography
              variant={'h3'}
              sx={{
                py: 5,
              }}
            >
              MyPage
            </Typography>

            {isSignedIn && currentUser ? (
              <>
                <img src={currentUser.img} alt={'userImage'} />
                <Typography
                  variant={'h6'}
                  sx={{
                    my: 2,
                  }}
                >
                  ユーザー名: {currentUser.name}
                </Typography>
                <Typography variant={'h6'}>Myバイク: 自分のバイク</Typography>
              </>
            ) : (
              <></>
            )}
          </Card>
        </Box>

        {/* <Card
          sx={{
            mt: 0,
            pb: 5,
            width: '40%',
            borderRadius: 10,
          }}
        > */}
        <Typography
          variant="h3"
          sx={{
            mt: 5,
          }}
        >
          履歴
        </Typography>
        {/* </Card> */}
      </Box>

      <Footer />
    </>
  )
}
