import { GoogleMap, GoogleMapOperationArea } from '@/components/elements/google'
import {
  BikePicture,
  BikeName,
  BikeCruisingDistanceArea,
  BikeSelectArea,
} from '@/components/elements/bikes'
// MUI
import { Skeleton, Box } from '@mui/material'

//api
import { getManufacturersIndex } from '@/apis/getManufacturers'

// components
import { useGoogleMap } from '@/hooks/useGoogleMap'
import { useBikeSelect } from '@/hooks/useBikeSelect'
import { Header } from '../elements/layouts/Header'
import { Footer } from '../elements/layouts/Footer'

export const Top = () => {
  const {
    googleMapsCenter,
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
    calculatedRouteSetPoints,
    isVisibleGetOriginPointButton,
  } = useGoogleMap()

  const {
    isVisibleBikeSelectModal,
    setIsVisibleBikeSelectModal,
    manufacturersIndexData,
    setManufacturersIndexData,
    manufacturersApiCall,
    setManufacturersApiCall,
    isVisibleManufacturersBikeList,
    getManufacturersBikeList,
    bikeListDisplacement0To50,
    bikeListDisplacement51To125,
    bikeListDisplacement126To250,
    bikeListDisplacement251To400,
    bikeListDisplacement401To750,
    bikeListDisplacementOver750,
    bikeCardClickAction,
    selectBikeCruisingDistance,
  } = useBikeSelect()

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
          <BikeSelectArea
            isVisibleBikeSelectModal={isVisibleBikeSelectModal}
            setIsVisibleBikeSelectModal={setIsVisibleBikeSelectModal}
            getManufacturersIndex={getManufacturersIndex}
            manufacturersIndexData={manufacturersIndexData}
            setManufacturersIndexData={setManufacturersIndexData}
            manufacturersApiCall={manufacturersApiCall}
            setManufacturersApiCall={setManufacturersApiCall}
            isVisibleManufacturersBikeList={isVisibleManufacturersBikeList}
            getManufacturersBikeList={getManufacturersBikeList}
            bikeListDisplacement0To50={bikeListDisplacement0To50}
            bikeListDisplacement51To125={bikeListDisplacement51To125}
            bikeListDisplacement126To250={bikeListDisplacement126To250}
            bikeListDisplacement251To400={bikeListDisplacement251To400}
            bikeListDisplacement401To750={bikeListDisplacement401To750}
            bikeListDisplacementOver750={bikeListDisplacementOver750}
            bikeCardClickAction={bikeCardClickAction}
          />
          <BikeName />
          <BikePicture />
          <BikeCruisingDistanceArea />
        </Box>

        <Box
          sx={{
            height: '100%',
            width: '60vw',
          }}
        >
          <GoogleMapOperationArea
            getOriginPoint={getOriginPoint}
            clearRoute={clearRoute}
            calculatedRouteDistance={calculatedRouteDistance}
            calculatedRouteDuration={calculatedRouteDuration}
            isVisibleGetOriginPointButton={isVisibleGetOriginPointButton}
            isVisibleAroundOriginPointCircle={isVisibleAroundOriginPointCircle}
          />

          <GoogleMap
            googleMapsCenter={googleMapsCenter}
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
            selectBikeCruisingDistance={selectBikeCruisingDistance}
            calculatedRouteSetPoints={calculatedRouteSetPoints}
          />
        </Box>
      </Box>
      <Footer />
    </>
  )
}
