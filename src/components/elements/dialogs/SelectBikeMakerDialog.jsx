// MUI
import { Dialog, DialogContent, DialogTitle, Button } from '@mui/material'

//hooks
import { memo, useEffect } from 'react'

export const SelectBikeMakerDialog = memo((props) => {
  const {
    isVisibleBikeSelectModal,
    setIsVisibleBikeSelectModal,
    getManufacturersIndex,
    manufacturersIndexData,
    setManufacturersIndexData,
    manufacturersApiCall,
    setManufacturersApiCall,
    isVisibleManufacturersBikeList,
    stateManufacturerId,
    getManufacturersBikeList,
  } = props

  useEffect(() => {
    getManufacturersIndex().then((data) => {
      const manufacturers = data.manufacturers.map((manufacturer) => {
        return {
          manufacturer_id: manufacturer.id,
          name: manufacturer.name,
        }
      })
      setManufacturersIndexData(manufacturers)
      setManufacturersApiCall(true)
    })
  }, [])

  return (
    <Dialog
      open={isVisibleBikeSelectModal}
      maxWidth={'lg'}
      fullWidth={true}
      onClose={() => setIsVisibleBikeSelectModal(false)}
    >
      <DialogTitle
        sx={{
          fontSize: '30px',
          textAlign: 'center',
        }}
      >
        メーカー
      </DialogTitle>
      <DialogContent
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 3,
        }}
      >
        {manufacturersApiCall ? (
          manufacturersIndexData.map((manufacturersIndex) => (
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

        {isVisibleManufacturersBikeList ? (
          stateManufacturerId
        ) : (
          <p>バイクのメーカーを選択してください</p>
        )}
      </DialogContent>
    </Dialog>
  )
})
