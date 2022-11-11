import { useState, useEffect } from 'react'

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

  const {
    isVisibleBikeSelectModal,
    setIsVisibleBikeSelectModal,
    manufacturersIndexData,
    setManufacturersIndexData,
    manufacturersApiCall,
    setManufacturersApiCall,
    isVisibleManufacturersBikeList,
    stateManufacturerId,
    getManufacturersBikeList,
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
            stateManufacturerId={stateManufacturerId}
            getManufacturersBikeList={getManufacturersBikeList}
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
          />

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
