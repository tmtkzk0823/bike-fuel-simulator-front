// components
import { SelectBikeMakerDialog } from '../dialogs'
//MUI
import { Box, Button } from '@mui/material'

export const BikeSelectArea = (props) => {
  const {
    setIsVisibleBikeSelectModal,
    isVisibleBikeSelectModal,
    getManufacturersIndex,
    setManufacturersIndexData,
    manufacturersIndexData,
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
      <SelectBikeMakerDialog
        isVisibleBikeSelectModal={isVisibleBikeSelectModal}
        setIsVisibleBikeSelectModal={setIsVisibleBikeSelectModal}
        getManufacturersIndex={getManufacturersIndex}
        manufacturersIndexData={manufacturersIndexData}
        setManufacturersIndexData={setManufacturersIndexData}
      />
    </Box>
  )
}
