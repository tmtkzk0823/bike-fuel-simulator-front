import { Box } from '@mui/material'

export const BikeCruisingDistanceArea = () => {
  return (
    <Box
      sx={{
        p: 2,
        bgcolor: 'white',
        border: 3,
        borderColor: 'grey.500',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
      }}
    >
      航続距離 : 370km
    </Box>
  )
}
