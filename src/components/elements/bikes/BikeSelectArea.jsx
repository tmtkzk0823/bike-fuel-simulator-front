import { useState } from 'react'
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material'

export const BikeSelectArea = () => {
  const [isVisibleBikeSelectModal, setIsVisibleBikeSelectModal] =
    useState(false)

  const [bike, setBike] = useState('')

  const handleChange = (event) => {
    setBike(event.target.value)
  }

  const sampleArray = ['YZF-R1', 'YZF-R7', 'YZF-R6']

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
      <Button
        onClick={() => {
          setIsVisibleBikeSelectModal(true)
        }}
      >
        バイクを選択する
      </Button>

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
                value={bike}
                label="BIKE"
                onChange={handleChange}
              >
                {sampleArray.map((bikeName, index) => (
                  <MenuItem
                    onClick={() => setBike(bikeName)}
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
    </Box>
  )
}
