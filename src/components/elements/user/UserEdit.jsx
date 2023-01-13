import { useState } from 'react'

// mui
import { Button, Stack, TextField, Box, Dialog } from '@mui/material'

// react-hook-form
import { useForm, Controller } from 'react-hook-form'

// apis
import { userUpdate } from '@/apis/auth'

//components
import { SelectMyBikeDialog } from '@/components/elements/dialogs'

export const UserEdit = (props) => {
  const {
    currentUser,
    setEditMyPageFlag,
    setCurrentUser,
    myPageManufacturersApiCall,
    myPageManufacturersIndexData,
    isVisibleManufacturersBikeList,
    getManufacturersBikeList,
    bikeListDisplacement0To50,
    bikeListDisplacement51To125,
    bikeListDisplacement126To250,
    bikeListDisplacement251To400,
    bikeListDisplacement401To750,
    bikeListDisplacementOver750,
  } = props

  const { handleSubmit, control } = useForm()

  const [isVisibleMyBikeSelectModal, setIsVisibleMyBikeSelectModal] =
    useState(false)

  const handleOnSignInSubmit = async (updateData, userBikeData) => {
    try {
      const updateResponse = await userUpdate(updateData)
      if (updateResponse.status === 200) {
        setCurrentUser(updateResponse.data.data)

        // ここでコンソールがでエラーが発生しているが、https://github.com/reactwg/react-18/discussions/82 この記事でを参照とりあえず保留
        // 挙動に問題なし
        setEditMyPageFlag(false)
      } else {
        console.log('編集に失敗しました')
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(handleOnSignInSubmit)}>
        <Box
          sx={{
            p: 5,
          }}
        >
          <Stack spacing={3}>
            <Controller
              name="name"
              control={control}
              defaultValue={`${currentUser.name}`}
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
                  type="name"
                />
              )}
              rules={{
                required: '名前は必須項目です',
              }}
            />
          </Stack>

          <Button
            variant="contained"
            onClick={() => setIsVisibleMyBikeSelectModal(true)}
            sx={{
              mt: 5,
            }}
          >
            バイクを選ぶ
          </Button>
        </Box>

        <Button
          type="submit"
          variant="contained"
          color="inherit"
          sx={{ mt: 3, mb: 2 }}
        >
          編集完了
        </Button>
      </form>
      <SelectMyBikeDialog
        currentUser={currentUser}
        isVisibleMyBikeSelectModal={isVisibleMyBikeSelectModal}
        setIsVisibleMyBikeSelectModal={setIsVisibleMyBikeSelectModal}
        myPageManufacturersIndexData={myPageManufacturersIndexData}
        myPageManufacturersApiCall={myPageManufacturersApiCall}
        isVisibleManufacturersBikeList={isVisibleManufacturersBikeList}
        getManufacturersBikeList={getManufacturersBikeList}
        bikeListDisplacement0To50={bikeListDisplacement0To50}
        bikeListDisplacement51To125={bikeListDisplacement51To125}
        bikeListDisplacement126To250={bikeListDisplacement126To250}
        bikeListDisplacement251To400={bikeListDisplacement251To400}
        bikeListDisplacement401To750={bikeListDisplacement401To750}
        bikeListDisplacementOver750={bikeListDisplacementOver750}
      />
    </>
  )
}
