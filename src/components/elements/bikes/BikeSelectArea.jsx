// components
import { BikeSelectDialog } from '@/components/elements/dialogs/BikeSelectDialog'
//MUI
import { Box, Button } from '@mui/material'

export const BikeSelectArea = (props) => {
  const {
    selectBike,
    setSelectBike,
    changSelectBike,
    sampleBikeArray,
    setIsVisibleBikeSelectModal,
    isVisibleBikeSelectModal,
  } = props

  return (
    <Box
      sx={{
        p: 2,
        bgcolor: 'white',
        border: 3,
        borderColor: 'grey.500',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        alignItems: 'center',
      }}
    >
      <Button onClick={() => setIsVisibleBikeSelectModal(true)}>
        バイクを選択する
      </Button>
      <BikeSelectDialog
        selectBike={selectBike}
        setSelectBike={setSelectBike}
        changSelectBike={changSelectBike}
        sampleBikeArray={sampleBikeArray}
        isVisibleBikeSelectModal={isVisibleBikeSelectModal}
        setIsVisibleBikeSelectModal={setIsVisibleBikeSelectModal}
      />
    </Box>
  )
}
