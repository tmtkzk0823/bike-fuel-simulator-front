import { useNavigate } from 'react-router-dom'

// component
import { Header } from '../elements/layouts/Header'
import { Footer } from '../elements/layouts/Footer'

// hooks
import { signUp } from '@/apis/auth'

// react-hook-form
import { useForm, Controller } from 'react-hook-form'

// MUI
import { Box, Button, Card, Stack, TextField, Typography } from '@mui/material'

export const SignUpForm = () => {
  const { handleSubmit, control, getValues } = useForm()
  const afterSignUpNavigation = useNavigate()

  // フォーム送信時の処理
  const onSubmit = async (data) => {
    // バリデーションチェックOKなときに行う処理を追加
    try {
      const res = await signUp(data)
      console.log(res)
      if (res.status === 'success') {
        afterSignUpNavigation('/login')
      } else {
        ;(e) => console.log(e)
      }
    } catch (err) {
      console.log(err)
    }
  }

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
              p: 5,
              borderRadius: 10,
              width: '40%',
            }}
          >
            <Typography
              align="center"
              variant="h4"
              sx={{
                mb: 3,
              }}
            >
              新規登録
            </Typography>
            <Box
              sx={{
                textAlign: 'center',
              }}
            >
              <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={3}>
                  <Controller
                    name="name"
                    control={control}
                    defaultValue=""
                    render={({
                      field: { onChange, value },
                      fieldState: { error },
                    }) => (
                      <TextField
                        label="名前"
                        variant="filled"
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        helperText={error ? error.message : null}
                      />
                    )}
                    rules={{ required: '名前を入力してください' }}
                  />
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
                  <Controller
                    name="password_confirmation"
                    control={control}
                    defaultValue=""
                    render={({
                      field: { onChange, value },
                      fieldState: { error },
                    }) => (
                      <TextField
                        label="パスワード（確認）"
                        variant="filled"
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        helperText={error ? error.message : null}
                        type="password"
                      />
                    )}
                    rules={{
                      required: 'パスワード（確認）は必須項目です',
                      validate: (value) => {
                        if (value !== getValues('password')) {
                          return 'メールアドレスが一致しません'
                        }
                      },
                    }}
                  />
                </Stack>

                <Button
                  sx={{
                    width: '50%',
                    mt: 5,
                    fontSize: 20,
                    fontWeight: 'medium',
                  }}
                  type="submit"
                  variant="contained"
                  color="inherit"
                  onClick={handleSubmit(onSubmit)}
                >
                  登録
                </Button>
              </form>
            </Box>
          </Card>
        </Box>
      </Box>
      <Footer />
    </>
  )
}
