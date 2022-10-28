// MUI
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material'

//hooks
import { memo, useEffect, useState } from 'react'

export const SelectBikeMakerDialog = memo((props) => {
  const {
    selectBike,
    setSelectBike,
    changeSelectBike,
    sampleBikeArray,
    isVisibleBikeSelectModal,
    setIsVisibleBikeSelectModal,
    getManufacturersIndex,
    manufacturersIndexData,
    setManufacturersIndexData,
  } = props

  const [manufacturersApiCall, setManufacturersApiCall] = useState(false)

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
          display: 'flex',
        }}
      >
        {manufacturersApiCall ? (
          manufacturersIndexData.map((manufacturersIndex) => (
            <Box
              sx={{ minWidth: 120, mr: 2 }}
              key={manufacturersIndex.manufacturer_id}
            >
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  {manufacturersIndex.name}
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectBike}
                  label="BIKE"
                  onChange={changeSelectBike}
                >
                  {sampleBikeArray.map((bikeName, index) => (
                    <MenuItem
                      onClick={() => setSelectBike(bikeName)}
                      value={bikeName}
                      key={index}
                    >
                      {bikeName}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          ))
        ) : (
          <p>ロード中</p>
        )}
      </DialogContent>
    </Dialog>
  )
})
