import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'

export const MakersBikeList = (props) => {
  const {
    bikeMaker,
    selectBike,
    setSelectBike,
    changeSelectBike,
    sampleBikeArray,
  } = props
  return (
    <Box sx={{ minWidth: 120, mr: 2 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{bikeMaker}</InputLabel>
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
  )
}
