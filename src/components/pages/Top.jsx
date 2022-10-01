// @react-google-map/api
import { Autocomplete } from '@react-google-maps/api'
import { GoogleMap } from '@/components/elements/google'
// MUI
import {
  Skeleton,
  Box,
  Stack,
  ButtonGroup,
  Button,
  IconButton,
  Typography,
  Input,
} from '@mui/material'
import { Alarm, AccountBox } from '@mui/icons-material'
import { useGoogleMap } from '@/hooks/useGoogleMap'

export const Top = () => {
  const {
    isLoaded,
    setMap,
    setCurrentLocation,
    currentLocation,
    directionsResponse,
    originRef,
    destinationRef,
    calculateRoute,
    clearRoute,
    getCurrentLocation,
    duration,
    distance,
  } = useGoogleMap()

  if (!isLoaded) {
    return (
      <Box sx={{ width: 300 }}>
        <Skeleton animation="wave" />;
        <Skeleton animation="wave" />;
        <Skeleton animation="wave" />;
      </Box>
    )
  }

  return (
    <Box
      sx={{
        position: 'relative',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          top: 0,
          height: '100vh',
          width: '100%',
        }}
      >
        <GoogleMap
          pos={window.pos}
          setMap={setMap}
          onClick={() => setCurrentLocation(false)}
          currentLocation={currentLocation}
          directionsResponse={directionsResponse}
        />
      </Box>

      <Box
        sx={{
          boxShadow: 1,
          p: 4,
          borderRadius: 'lg',
          bgcolor: 'text.primary',
          width: '50%',
          zIndex: 1,
        }}
      >
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Box sx={{ flexGrow: 1 }}>
            <Autocomplete>
              <Input type="text" placeholder="出発地点" inputRef={originRef} />
            </Autocomplete>
          </Box>

          <Box sx={{ flexGrow: 1 }}>
            <Autocomplete>
              <Input
                type="text"
                placeholder="目的地"
                inputRef={destinationRef}
              />
            </Autocomplete>
          </Box>

          <Box>
            <ButtonGroup>
              <Button color="primary" type="submit" onClick={calculateRoute}>
                ルート検索
              </Button>
              <br />
              <IconButton aria-label="center back" onClick={clearRoute}>
                <Alarm />
              </IconButton>
              <IconButton onClick={getCurrentLocation}>
                <AccountBox />
              </IconButton>
            </ButtonGroup>
          </Box>
        </Stack>

        <Stack
          direction="row"
          spacing={4}
          mt={4}
          justifyContent="space-between"
        >
          <Typography> Distance: {distance} </Typography>;
          <Typography> Duration: {duration} </Typography>;
        </Stack>
      </Box>
    </Box>
  )
}
