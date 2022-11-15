import { Box } from '@mui/material'
import { bikeDataAtom } from '@/jotai/atoms'
import { useAtom } from 'jotai'

export const BikeName = () => {
  const [bikeData] = useAtom(bikeDataAtom)
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
      {bikeData.name}
    </Box>
  )
}
