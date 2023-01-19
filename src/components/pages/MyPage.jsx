import { useContext, useState, useEffect } from 'react'

// components
import { Header } from '@/components/elements/layouts/Header'
import { Footer } from '@/components/elements/layouts/Footer'
import { UserEdit } from '@/components/elements/user'

// MUI
import {
  Box,
  Typography,
  Button,
  Card,
  CardActionArea,
  CardContent,
} from '@mui/material'

//apis
import { getManufacturersIndex } from '@/apis/getManufacturers'
import { createUserBike } from '@/apis/createUserBike'
import { getUsersBikes } from '@/apis/getUsersBikes'

//グローバルstate
import { AuthContext } from '@/App'
// hooks
import { useBikeSelect } from '@/hooks/useBikeSelect'

export const MyPage = () => {
  const { currentUser, isSignedIn, setCurrentUser } = useContext(AuthContext)

  const {
    getManufacturersBikeList,
    isVisibleManufacturersBikeList,
    bikeListDisplacement0To50,
    bikeListDisplacement51To125,
    bikeListDisplacement126To250,
    bikeListDisplacement251To400,
    bikeListDisplacement401To750,
    bikeListDisplacementOver750,
  } = useBikeSelect()

  const [editMyPageFlag, setEditMyPageFlag] = useState(false)
  const [userBikes, setUserBikes] = useState() // 表示用のstate
  const [selectedMyBikeData, setSelectedMyBikeData] = useState(null)
  const [myPageManufacturersIndexData, setMyPageManufacturersIndexData] =
    useState([])
  const [myPageManufacturersApiCall, setMyPageManufacturersApiCall] =
    useState(false)

  useEffect(() => {
    console.log(currentUser.id, 'userBikesテーブルから情報を取ってくる処理')

    getUsersBikes().then((data) => {
      return setUserBikes(data.data)
    })

    getManufacturersIndex().then((data) => {
      const manufacturers = data.manufacturers.map((manufacturer) => {
        return {
          manufacturer_id: manufacturer.id,
          name: manufacturer.name,
        }
      })
      setMyPageManufacturersIndexData(manufacturers)
      setMyPageManufacturersApiCall(true)
    })
  }, [])

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
            <Box>
              <Typography
                variant={'h3'}
                sx={{
                  pt: 5,
                }}
              >
                MyPage
              </Typography>
              {!editMyPageFlag && (
                <Button onClick={() => setEditMyPageFlag(true)}>編集</Button>
              )}
            </Box>

            {isSignedIn && currentUser ? (
              <>
                {!editMyPageFlag ? (
                  <>
                    <img
                      src={
                        currentUser.image
                          ? currentUser.image
                          : 'public/images/myPageImageSample.jpg'
                      }
                      width="90%"
                      alt={'userImage'}
                    />
                    <Typography
                      variant={'h5'}
                      sx={{
                        mt: 2,
                      }}
                    >
                      ユーザー名
                    </Typography>
                    {currentUser.name}
                    <Typography
                      variant={'h5'}
                      sx={{
                        my: 2,
                      }}
                    >
                      Myバイク
                    </Typography>
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
                          </Card>
                        ))
                      ) : (
                        <Typography>バイクを登録していません</Typography>
                      )}
                    </Box>
                  </>
                ) : (
                  <UserEdit
                    currentUser={currentUser}
                    setCurrentUser={setCurrentUser}
                    setEditMyPageFlag={setEditMyPageFlag}
                    userBikes={userBikes}
                    setUserBikes={setUserBikes}
                    selectedMyBikeData={selectedMyBikeData}
                    setSelectedMyBikeData={setSelectedMyBikeData}
                    myPageManufacturersIndexData={myPageManufacturersIndexData}
                    myPageManufacturersApiCall={myPageManufacturersApiCall}
                    getManufacturersBikeList={getManufacturersBikeList}
                    isVisibleManufacturersBikeList={
                      isVisibleManufacturersBikeList
                    }
                    createUserBike={createUserBike}
                    bikeListDisplacement0To50={bikeListDisplacement0To50}
                    bikeListDisplacement51To125={bikeListDisplacement51To125}
                    bikeListDisplacement126To250={bikeListDisplacement126To250}
                    bikeListDisplacement251To400={bikeListDisplacement251To400}
                    bikeListDisplacement401To750={bikeListDisplacement401To750}
                    bikeListDisplacementOver750={bikeListDisplacementOver750}
                  />
                )}
              </>
            ) : (
              <></>
            )}
          </Card>
        </Box>

        <Typography
          variant="h3"
          sx={{
            mt: 5,
          }}
        >
          履歴
        </Typography>
      </Box>
      <Footer />
    </>
  )
}
