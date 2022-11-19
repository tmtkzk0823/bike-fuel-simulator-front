import { memo } from 'react'
// components
import { SelectBikeMakerDialog } from '../dialogs'
//MUI
import { Box, Button } from '@mui/material'

export const BikeSelectArea = memo((props) => {
  const {
    setIsVisibleBikeSelectModal,
    isVisibleBikeSelectModal,
    getManufacturersIndex,
    setManufacturersIndexData,
    manufacturersIndexData,
    manufacturersApiCall,
    setManufacturersApiCall,
    isVisibleManufacturersBikeList,
    getManufacturersBikeList,
    bikeListDisplacement0To50,
    bikeListDisplacement51To125,
    bikeListDisplacement126To250,
    bikeListDisplacement251To400,
    bikeListDisplacement401To750,
    bikeListDisplacementOver750,
    bikeCardClickAction,
  } = props

  return (
    <Box
      sx={{
        p: 2,
        bgcolor: 'white',
        borderTop: 3,
        borderLeft: 3,
        borderBottom: 3,
        borderColor: 'grey.500',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        alignItems: 'center',
      }}
    >
      <Button
        variant="contained"
        onClick={() => setIsVisibleBikeSelectModal(true)}
      >
        バイクを選択する
      </Button>
      <SelectBikeMakerDialog
        isVisibleBikeSelectModal={isVisibleBikeSelectModal}
        setIsVisibleBikeSelectModal={setIsVisibleBikeSelectModal}
        getManufacturersIndex={getManufacturersIndex}
        manufacturersIndexData={manufacturersIndexData}
        setManufacturersIndexData={setManufacturersIndexData}
        manufacturersApiCall={manufacturersApiCall}
        setManufacturersApiCall={setManufacturersApiCall}
        isVisibleManufacturersBikeList={isVisibleManufacturersBikeList}
        getManufacturersBikeList={getManufacturersBikeList}
        bikeCardClickAction={bikeCardClickAction}
        bikeListDisplacement0To50={bikeListDisplacement0To50}
        bikeListDisplacement51To125={bikeListDisplacement51To125}
        bikeListDisplacement126To250={bikeListDisplacement126To250}
        bikeListDisplacement251To400={bikeListDisplacement251To400}
        bikeListDisplacement401To750={bikeListDisplacement401To750}
        bikeListDisplacementOver750={bikeListDisplacementOver750}
      />
    </Box>
  )
})
