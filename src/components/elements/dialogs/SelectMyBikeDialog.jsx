//mui
import { Button, Dialog, DialogTitle, DialogContent, Box } from '@mui/material'

export const SelectMyBikeDialog = (props) => {
  const {
    setIsVisibleMyBikeSelectModal,
    isVisibleMyBikeSelectModal,
    myPageManufacturersIndexData,
    myPageManufacturersApiCall,
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

      <Button onClick={() => setIsVisibleMyBikeSelectModal(false)}>
        閉じる
      </Button>
    </Dialog>
  )
}
