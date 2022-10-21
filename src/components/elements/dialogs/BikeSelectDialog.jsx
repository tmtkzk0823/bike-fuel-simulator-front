// MUI
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material'

export const BikeSelectDialog = (props) => {
  const {
    selectBike,
    setSelectBike,
    changSelectBike,
    sampleBikeArray,
    isVisibleBikeSelectModal,
    setIsVisibleBikeSelectModal,
  } = props

  return (
    <Dialog
      open={isVisibleBikeSelectModal}
      onClose={() => setIsVisibleBikeSelectModal(false)}
    >
      <DialogTitle
        sx={{
          fontSize: '30px',
        }}
      >
        メーカー
      </DialogTitle>
      <DialogContent>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">HONDA</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectBike}
              label="BIKE"
              onChange={changSelectBike}
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
      </DialogContent>
    </Dialog>
  )
}
