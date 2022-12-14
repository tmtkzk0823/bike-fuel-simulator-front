import { memo } from 'react'
// mui
import { Box } from '@mui/material'
// jotai
import { bikeDataAtom } from '@/jotai/atoms'
import { useAtom } from 'jotai'

export const BikePicture = memo(() => {
  const [bikeData] = useAtom(bikeDataAtom)
  return (
    <Box
      sx={{
        borderLeft: 3,
        borderRight: 3,
        borderColor: 'grey.500',
        bgcolor: 'white',
        textAlign: 'center',
        alignItems: 'center',
      }}
    >
      <img src={bikeData.image} width="95%" />
    </Box>
  )
})
