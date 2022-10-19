import { GoogleMap } from '@/components/elements/google'
import { BikePicture, BikeName } from '@/components/elements/bikes'
// MUI
import { Skeleton, Box, Stack, Button, Typography } from '@mui/material'

// components
import { useGoogleMap } from '@/hooks/useGoogleMap'
import { Header } from '../elements/layouts/Header'
import { Footer } from '../elements/layouts/Footer'

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
      <Header />
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
          <BikeName />
          <BikePicture />
        </Box>

        <Box
          sx={{
            height: '100%',
            width: '60vw',
          }}
        >
          <Box
            sx={{
              p: 2,
              bgcolor: '#ffffdd',
              textAlign: 'center',
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={2}
            >
              <Button variant="outlined" onClick={getOriginPoint}>
                現在地を取得する
              </Button>
              <Button variant="outlined" onClick={clearRoute}>
                ルート削除
              </Button>

              <Typography>走行距離: {calculatedRouteDistance}</Typography>
              <Typography>時間: {calculatedRouteDuration} </Typography>
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
      <Footer />
    </>
  )
}
