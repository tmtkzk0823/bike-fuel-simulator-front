import { useContext, useState, useEffect } from 'react'

// components
import { Header } from '@/components/elements/layouts/Header'
import { Footer } from '@/components/elements/layouts/Footer'
import { UserEdit } from '@/components/elements/user'

// MUI
import { Box, Card, Typography, Button } from '@mui/material'

//グローバルstate
import { AuthContext } from '@/App'

export const MyPage = () => {
  const { currentUser, isSignedIn, setCurrentUser } = useContext(AuthContext)

  const [editMyPageFlag, setEditMyPageFlag] = useState(false)
  const [userBikes, setUserBikes] = useState([])

  useEffect(() => {
    console.log(currentUser.id, 'userBikesテーブルから情報を取ってくる処理')
  })

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
                      variant={'h6'}
                      sx={{
                        mt: 2,
                      }}
                    >
                      ユーザー名
                    </Typography>
                    {currentUser.name}
                    <Typography
                      variant={'h6'}
                      sx={{
                        mt: 2,
                      }}
                    >
                      Myバイク
                    </Typography>
                    userBikesをmapで回す
                  </>
                ) : (
                  <UserEdit
                    currentUser={currentUser}
                    setCurrentUser={setCurrentUser}
                    setEditMyPageFlag={setEditMyPageFlag}
                    setUserBikes={setUserBikes}
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
