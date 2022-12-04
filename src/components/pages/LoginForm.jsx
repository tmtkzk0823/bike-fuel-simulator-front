import { Header } from '../elements/layouts/Header'
import { Footer } from '../elements/layouts/Footer'
import { Box, Card, Button, Divider } from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter'

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
          <h2>ログイン</h2>

          <Button
            variant="contained"
            sx={{
              mb: 2,
            }}
            onClick={console.log('login処理')}
          >
            <TwitterIcon />
            Twitterでログイン
          </Button>
          <Divider variant="middle" />
        </Card>
      </Box>
      <Footer />
    </>
  )
}
