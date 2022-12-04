import { memo } from 'react'
// component
import { Header } from '../elements/layouts/Header'
import { Footer } from '../elements/layouts/Footer'
// MUI
import { Box, Card, Button, Divider, TextField, Link } from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter'

export const LoginForm = memo(() => {
  return (
    <>
      <Header />
      <Box
        sx={{
          minHeight: '80vh',
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
            <h2>ログイン</h2>

            <Button
              variant="contained"
              sx={{
                mb: 2,
                py: 1,
              }}
              onClick={() => console.log('login処理')}
            >
              <TwitterIcon />
              Twitter ログイン
            </Button>
            <Divider variant="middle">または</Divider>

            <Box
              component="form"
              sx={{
                mt: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <TextField
                size="small"
                margin="normal"
                required
                id="email"
                label="メールアドレス"
                name="email"
                autoComplete="email"
                focused
              />

              <TextField
                size="small"
                margin="normal"
                required
                name="password"
                label="パスワード"
                type="password"
                id="password"
                autoComplete="current-password"
                focused
              />

              <Button
                type="submit"
                variant="contained"
                color="inherit"
                sx={{ mt: 3, mb: 2 }}
              >
                ログイン
              </Button>

              <Link href="/">新規登録</Link>
              <Link
                href="/"
                sx={{
                  mt: 1,
                  mb: 5,
                }}
              >
                パスワードをお忘れの方はこちら
              </Link>
            </Box>
          </Card>
        </Box>
      </Box>
      <Footer />
    </>
  )
})
