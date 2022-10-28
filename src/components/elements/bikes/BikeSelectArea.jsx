// components
import { SelectBikeMakerDialog } from '../dialogs'
//MUI
import { Box, Button } from '@mui/material'

export const BikeSelectArea = (props) => {
  const {
    selectBike,
    setSelectBike,
    changeSelectBike,
    sampleBikeArray,
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
        selectBike={selectBike}
        setSelectBike={setSelectBike}
        changSelectBike={changeSelectBike}
        sampleBikeArray={sampleBikeArray}
        isVisibleBikeSelectModal={isVisibleBikeSelectModal}
        setIsVisibleBikeSelectModal={setIsVisibleBikeSelectModal}
        getManufacturersIndex={getManufacturersIndex}
        manufacturersIndexData={manufacturersIndexData}
        setManufacturersIndexData={setManufacturersIndexData}
      />
    </Box>
  )
}
