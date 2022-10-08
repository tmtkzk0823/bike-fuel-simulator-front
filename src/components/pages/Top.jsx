import { GoogleMap } from '@/components/elements/google'
// MUI
import {
  Skeleton,
  Box,
  Stack,
  ButtonGroup,
  IconButton,
  Typography,
} from '@mui/material'
import { Alarm, AccountBox } from '@mui/icons-material'
// components
import { useGoogleMap } from '@/hooks/useGoogleMap'
import { RouteSearchButton } from '@/components/elements/Buttons'
import { RouteSearchInput } from '@/components/elements/Inputs'

export const Top = () => {
  const {
    isLoaded,
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
    onLoadSetMap,
    decideDestinationCircleCenter,
    originMarker,
    destinationsCenterMarker,
    destinationSearch,
    markedPlaceList,
    zoom,
    destinationsSearchAction,
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
          onLoadSetMap={onLoadSetMap}
          pearSetCurrentLocation={() => setCurrentLocation(false)}
          currentLocation={currentLocation}
          directionsResponse={directionsResponse}
          onClickCircle={decideDestinationCircleCenter}
          originMarker={originMarker}
          destinationsCenterMarker={destinationsCenterMarker}
          destinationSearch={destinationSearch}
          markedPlaceList={markedPlaceList}
          zoom={zoom}
          destinationsSearchAction={destinationsSearchAction}
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
            <RouteSearchInput
              type={'text'}
              placeholder={'出発地点'}
              inputRef={originRef}
            />
          </Box>

          <Box sx={{ flexGrow: 1 }}>
            <RouteSearchInput
              type={'text'}
              placeholder={'目的地'}
              inputRef={destinationRef}
            />
          </Box>

          <Box>
            <ButtonGroup>
              <RouteSearchButton
                color={'primary'}
                type={'submit'}
                onClick={calculateRoute}
                buttonName={'ルート検索'}
              />
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
