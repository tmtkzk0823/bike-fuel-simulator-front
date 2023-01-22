import { useState } from 'react'

// mui
import {
  Button,
  Stack,
  TextField,
  Box,
  Typography,
  Card,
  CardContent,
  CardActionArea,
} from '@mui/material'

// react-hook-form
import { useForm, Controller } from 'react-hook-form'

// apis
import { userUpdate } from '@/apis/auth'
import { deleteUserBikes } from '@/apis/deleteUserBikes'

//components
import { SelectMyBikeDialog } from '@/components/elements/dialogs'

export const UserEdit = (props) => {
  const {
    currentUser,
    setEditMyPageFlag,
    setCurrentUser,
    userBikes,
    setUserBikes,
    selectedMyBikeData,
    setSelectedMyBikeData,
    myPageManufacturersApiCall,
    myPageManufacturersIndexData,
    isVisibleManufacturersBikeList,
    getManufacturersBikeList,
    createUserBike,
    bikeListDisplacement0To50,
    bikeListDisplacement51To125,
    bikeListDisplacement126To250,
    bikeListDisplacement251To400,
    bikeListDisplacement401To750,
    bikeListDisplacementOver750,
  } = props

  // hooks
  const { handleSubmit, control } = useForm()

  const [isVisibleMyBikeSelectModal, setIsVisibleMyBikeSelectModal] =
    useState(false)

  // 関数

  const processingUpdateUser = async (userData) => {
    const updateResponse = await userUpdate(userData)

    if (updateResponse.status === 200) {
      setCurrentUser(updateResponse.data.data)
      console.log(updateResponse)
      // ここでコンソールがでエラーが発生しているが、https://github.com/reactwg/react-18/discussions/82 この記事でを参照とりあえず保留
      // 挙動に問題なし
    } else {
      console.log('user情報の編集を失敗しました')
    }
  }

  const updateUserBikes = async (bikeData) => {
    const responseUserBikes = await createUserBike(bikeData)
    if (responseUserBikes.status === 200) {
      setUserBikes(responseUserBikes.data)
    } else {
      console.log('API通信失敗')
    }
  }

  const deleteUserBikesAction = (bikeId) => {
    try {
      deleteUserBikes(bikeId)
      setUserBikes(userBikes.filter((bike) => bike.id !== bikeId))
    } catch (err) {
      console.log(err)
    }
  }

  const handleOnEditSubmit = (updateData) => {
    try {
      processingUpdateUser(updateData)

      if (selectedMyBikeData) {
        updateUserBikes(selectedMyBikeData)
      } else {
        return
      }
      setEditMyPageFlag(false)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(handleOnEditSubmit)}>
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
            <Typography> 選択中のバイク </Typography>
            <Box
              sx={{
                width: 'auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 3,
                px: 2,
              }}
            >
              {userBikes ? (
                userBikes.map((bike) => (
                  <Card
                    key={bike.id}
                    sx={{
                      alignItems: 'center',
                      textAlign: 'center',
                    }}
                  >
                    <CardActionArea>
                      <img src={bike.image} width="90%" />
                      <CardContent>{bike.name}</CardContent>
                    </CardActionArea>
                    <Button
                      onClick={() => deleteUserBikesAction(bike.id)}
                      // onClick={() => console.log(currentUser)}
                    >
                      削除
                    </Button>
                  </Card>
                ))
              ) : (
                <Typography>バイクを登録していません</Typography>
              )}
            </Box>
          </Stack>

          <Button
            variant="contained"
            onClick={() => setIsVisibleMyBikeSelectModal(true)}
            sx={{
              mt: 5,
            }}
          >
            バイクを追加する
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
        setSelectedMyBikeData={setSelectedMyBikeData}
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
