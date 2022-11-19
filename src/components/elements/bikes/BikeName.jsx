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
        borderLeft: 3,
        borderRight: 3,
        borderColor: 'grey.500',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,
      }}
    >
      {bikeData.name}
    </Box>
  )
}
