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

export const Top = () => {
  const {
    isLoaded,
    calculatedRoute,
    calculateRoute,
    clearRoute,
    getOriginPoint,
    onLoadSetMap,
    searchAroundDestinationPoint,
    originPoint,
    destinationCenterPosition,
    destinationSearch,
    aroundDestinationPointList,
    zoom,
    isVisibleDestinationSearchButton,
    mouseOveredDestinationPlaceId,
    setMouseOveredDestinationPlaceId,
    setDestinationPoint,
    calculatedRouteDistance,
    calculatedRouteDuration,
    isVisibleAroundOriginPointCircle,
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
          zIndex: 0,
        }}
      >
        <GoogleMap
          pos={window.pos}
          onLoadSetMap={onLoadSetMap}
          calculatedRoute={calculatedRoute}
          onClickCircle={searchAroundDestinationPoint}
          originPoint={originPoint}
          destinationCenterPosition={destinationCenterPosition}
          isVisibleAroundOriginPointCircle={isVisibleAroundOriginPointCircle}
          aroundDestinationPointList={aroundDestinationPointList}
          zoom={zoom}
          isVisibleDestinationSearchButton={isVisibleDestinationSearchButton}
          mouseOveredDestinationPlaceId={mouseOveredDestinationPlaceId}
          setMouseOveredDestinationPlaceId={setMouseOveredDestinationPlaceId}
          setDestinationPoint={setDestinationPoint}
          calculateRoute={calculateRoute}
          destinationSearch={destinationSearch}
        />
      </Box>

      <Box
        sx={{
          p: 4,
          borderRadius: 'lg',
          width: '50%',
          zIndex: 1,
          position: 'absolute',
        }}
      >
        <Stack direction="row" spacing={2}>
          <ButtonGroup>
            <Button aria-label="center back" onClick={clearRoute}>
              ルート削除
            </Button>
            <Button onClick={getOriginPoint}>現在地を取得する</Button>
          </ButtonGroup>
          <Typography>Distance: {calculatedRouteDistance}</Typography>
          <Typography> Duration: {calculatedRouteDuration} </Typography>
        </Stack>
      </Box>
    </Box>
  )
}
