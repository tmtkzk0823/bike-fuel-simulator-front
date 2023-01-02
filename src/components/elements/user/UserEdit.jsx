// react-hook-form
import { Button, Stack, TextField } from '@mui/material'

import { useForm, Controller } from 'react-hook-form'

export const UserEdit = (props) => {
  const { currentUser, setEditMyPageFlag } = props

  const { handleSubmit, control } = useForm()

  const handleOnSignInSubmit = (data) => {
    setEditMyPageFlag(false)
    console.log(data)
  }

  return (
    <>
      <form onSubmit={handleSubmit(handleOnSignInSubmit)}>
        <Stack spacing={3}>
          <Controller
            name="name"
            control={control}
            defaultValue={`${currentUser.name}`}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                label="名前"
                variant="filled"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
                type="name"
              />
            )}
            rules={{
              required: '名前は必須項目です',
            }}
          />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
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
          編集完了
        </Button>
      </form>
    </>
  )
}
