import { GoogleMap } from '@/components/elements/google'
// MUI
import {
  Skeleton,
  Box,
  Stack,
  ButtonGroup,
  Button,
  Typography,
} from '@mui/material'

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
    mouseOveredMarkerPlaceId,
    setMouseOveredMarkerPlaceId,
    setDestinationsLatLng,
    destinationsLatLng,
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
          mouseOveredMarkerPlaceId={mouseOveredMarkerPlaceId}
          setMouseOveredMarkerPlaceId={setMouseOveredMarkerPlaceId}
          setDestinationsLatLng={setDestinationsLatLng}
          calculateRoute={calculateRoute}
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
          <Box>
            <ButtonGroup>
              <Button aria-label="center back" onClick={clearRoute}>
                ルート削除
              </Button>
              <Button onClick={getCurrentLocation}>現在地を取得する</Button>
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
