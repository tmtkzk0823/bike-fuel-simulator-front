import { memo } from 'react'

// component
import { Header } from '../elements/layouts/Header'
import { Footer } from '../elements/layouts/Footer'
// MUI
import {
  Box,
  Card,
  Button,
  Divider,
  TextField,
  Link,
  Stack,
} from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter' // twitter用アイコン

// hooks
import { signIn } from '@/apis/auth'

// react-hook-form
import { useForm, Controller } from 'react-hook-form'

export const LoginForm = memo(() => {
  const { handleSubmit, control, getValues } = useForm()

  const onSubmit = (formData) => {
    // signIn(formData)
    console.log(formData)
  }
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

            {/* twitterログインは後に実装 */}
            {/* <Button
              variant="contained"
              sx={{
                mb: 2,
                py: 1,
              }}
              onClick={() => console.log('login処理')}
            >
              <TwitterIcon />
              Twitter ログイン
            </Button>s
            <Divider variant="middle">または</Divider> */}

            <Box
              sx={{
                mt: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={3}>
                  <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    render={({
                      field: { onChange, value },
                      fieldState: { error },
                    }) => (
                      <TextField
                        label="メールアドレス"
                        variant="filled"
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        helperText={error ? error.message : null}
                        type="email"
                        placeholder="xxx@example.com"
                      />
                    )}
                    rules={{
                      required: 'メールアドレスは必須項目です',
                      pattern: {
                        value: /^[\w\-._]+@[\w\-._]+\.[A-Za-z]+/,
                        message: '入力形式がメールアドレスではありません。',
                      },
                    }}
                  />
                  <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    render={({
                      field: { onChange, value },
                      fieldState: { error },
                    }) => (
                      <TextField
                        label="パスワード"
                        variant="filled"
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        helperText={error ? error.message : null}
                        type="password"
                      />
                    )}
                    rules={{
                      required: 'パスワードは必須項目です',
                    }}
                  />
                </Stack>

                <Button
                  type="submit"
                  variant="contained"
                  color="inherit"
                  sx={{ mt: 3, mb: 2 }}
                >
                  ログイン
                </Button>
              </form>

              <Link href="/sign_up">新規登録</Link>
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
