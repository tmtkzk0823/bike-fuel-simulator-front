//mui
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Card,
  CardActionArea,
  Box,
} from '@mui/material'

export const SelectMyBikeDialog = (props) => {
  const {
    currentUser,
    setIsVisibleMyBikeSelectModal,
    isVisibleMyBikeSelectModal,
    myPageManufacturersIndexData,
    myPageManufacturersApiCall,
    getManufacturersBikeList,
    isVisibleManufacturersBikeList,
    bikeListDisplacement0To50,
    bikeListDisplacement51To125,
    bikeListDisplacement126To250,
    bikeListDisplacement251To400,
    bikeListDisplacement401To750,
    bikeListDisplacementOver750,
  } = props

  return (
    <Dialog
      open={isVisibleMyBikeSelectModal}
      maxWidth={'lg'}
      fullWidth={true}
      onClose={() => setIsVisibleMyBikeSelectModal(false)}
    >
      <DialogTitle
        sx={{
          fontSize: '30px',
          textAlign: 'center',
          pb: '0',
        }}
      >
        メーカー
      </DialogTitle>
      <Box>
        <DialogContent
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 3,
          }}
        >
          {myPageManufacturersApiCall ? (
            myPageManufacturersIndexData.map((manufacturersIndex) => (
              <Button
                key={manufacturersIndex.manufacturer_id}
                onClick={() =>
                  getManufacturersBikeList(manufacturersIndex.manufacturer_id)
                }
                variant="outlined"
              >
                {manufacturersIndex.name}
              </Button>
            ))
          ) : (
            <p>ロード中</p>
          )}
        </DialogContent>
      </Box>
      <DialogContent>
        {isVisibleManufacturersBikeList ? (
          <>
            <DialogContentText>~50cc</DialogContentText>
            <Box
              sx={{
                width: 'auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 3,
              }}
            >
              {bikeListDisplacement0To50.length === 0 ? (
                <p>該当するバイクはありません</p>
              ) : (
                bikeListDisplacement0To50.map((bike) => (
                  <Card
                    key={bike.id}
                    sx={{
                      alignItems: 'center',
                      textAlign: 'center',
                    }}
                  >
                    <CardActionArea
                      onClick={() => console.log(bike, currentUser.id)}
                    >
                      <img src={bike.image} width="90%" />
                      <DialogTitle>{bike.name}</DialogTitle>
                    </CardActionArea>
                  </Card>
                ))
              )}
            </Box>
            <DialogContentText>51cc~125cc</DialogContentText>
            <Box
              sx={{
                width: 'auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 3,
              }}
            >
              {bikeListDisplacement51To125.map((bike) => (
                <Card
                  key={bike.id}
                  sx={{
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                >
                  <CardActionArea onClick={() => console.log(bike)}>
                    <img src={bike.image} width="90%" />
                    <DialogTitle>{bike.name}</DialogTitle>
                  </CardActionArea>
                </Card>
              ))}
            </Box>
            <DialogContentText>126cc~250cc</DialogContentText>
            <Box
              sx={{
                width: 'auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 3,
              }}
            >
              {bikeListDisplacement126To250.map((bike) => (
                <Card
                  key={bike.id}
                  sx={{
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                >
                  <CardActionArea onClick={() => console.log(bike)}>
                    <img src={bike.image} width="90%" />
                    <DialogTitle>{bike.name}</DialogTitle>
                  </CardActionArea>
                </Card>
              ))}
            </Box>
            <DialogContentText>251cc~400cc</DialogContentText>
            <Box
              sx={{
                width: 'auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 3,
              }}
            >
              {bikeListDisplacement251To400.map((bike) => (
                <Card
                  key={bike.id}
                  sx={{
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                >
                  <CardActionArea onClick={() => console.log(bike)}>
                    <img src={bike.image} width="90%" />
                    <DialogTitle>{bike.name}</DialogTitle>
                  </CardActionArea>
                </Card>
              ))}
            </Box>
            <DialogContentText>401cc~750cc</DialogContentText>
            <Box
              sx={{
                width: 'auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 3,
              }}
            >
              {bikeListDisplacement401To750.map((bike) => (
                <Card
                  key={bike.id}
                  sx={{
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                >
                  <CardActionArea onClick={() => console.log(bike)}>
                    <img src={bike.image} width="90%" />
                    <DialogTitle>{bike.name}</DialogTitle>
                  </CardActionArea>
                </Card>
              ))}
            </Box>
            <DialogContentText>750cc~</DialogContentText>
            <Box
              sx={{
                width: 'auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 3,
              }}
            >
              {bikeListDisplacementOver750.map((bike) => (
                <Card
                  key={bike.id}
                  sx={{
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                >
                  <CardActionArea onClick={() => console.log(bike)}>
                    <img src={bike.image} width="90%" />
                    <DialogTitle>{bike.name}</DialogTitle>
                  </CardActionArea>
                </Card>
              ))}
            </Box>
          </>
        ) : (
          <p>バイクのメーカーを選択してください</p>
        )}
      </DialogContent>

      <Button onClick={() => setIsVisibleMyBikeSelectModal(false)}>
        閉じる
      </Button>
    </Dialog>
  )
}
