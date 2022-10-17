import { GoogleMap } from '@/components/elements/google'
import { BikePicture } from '@/components/elements/bikes'
// MUI
import {
  Skeleton,
  Box,
  Stack,
  ButtonGroup,
  Button,
  Typography,
  Grid,
} from '@mui/material'

// components
import { useGoogleMap } from '@/hooks/useGoogleMap'
import { CenterFocusStrong } from '@mui/icons-material'

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
    <>
      <Box
        sx={{
          display: 'flex',
        }}
      >
        <Box
          sx={{
            width: '40vw',
          }}
        >
          <BikePicture />
        </Box>

        <Box
          sx={{
            height: '100vh',
            width: '60vw',
          }}
        >
          <Box
            sx={{
              p: 4,
              zIndex: 1,
              bgcolor: 'white',
              textAlign: 'center',
            }}
          >
            <Stack direction="row" spacing={2}>
              <Button variant="outlined" onClick={getOriginPoint}>
                現在地を取得する
              </Button>
              <Button
                aria-label="center back"
                variant="outlined"
                onClick={clearRoute}
              >
                ルート削除
              </Button>

              <Typography>Distance: {calculatedRouteDistance}</Typography>
              <Typography> Duration: {calculatedRouteDuration} </Typography>
            </Stack>
          </Box>

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
      </Box>
    </>
  )
}
