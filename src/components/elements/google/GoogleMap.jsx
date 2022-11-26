import { memo } from 'react'
// MUI
import { Button, Box } from '@mui/material'
// ライブラリ
import {
  GoogleMap as BaseGoogleMap,
  Circle,
  DirectionsRenderer,
  Marker,
  InfoWindow,
} from '@react-google-maps/api'

// const center = {
//   lat: 35.689614,
//   lng: 139.691585,
// }

const containerStyle = {
  width: '60vw',
  height: '100vh',
}

export const GoogleMap = memo((props) => {
  const {
    googleMapsCenter,
    pos,
    onLoadSetMap,
    calculatedRoute,
    onClickCircle,
    originPoint,
    destinationCenterPosition,
    destinationSearch,
    aroundDestinationPointList,
    zoom,
    isVisibleDestinationSearchButton,
    mouseOveredDestinationPlaceId,
    setMouseOveredDestinationPlaceId,
    setDestinationPoint,
    calculateRoute,
    isVisibleAroundOriginPointCircle,
    selectBikeCruisingDistance,
    calculatedRouteSetPoints,
  } = props

  return (
    <BaseGoogleMap
      center={googleMapsCenter}
      zoom={zoom}
      mapContainerStyle={containerStyle}
      options={{
        zoomControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
        draggableCursor: 'pointer',
      }}
      onLoad={(map) => onLoadSetMap(map)}
    >
      {
        // 現在地のメソッドが呼ばれたらサークルを作る
        isVisibleAroundOriginPointCircle && (
          <Circle
            center={pos}
            radius={selectBikeCruisingDistance}
            onClick={onClickCircle}
          />
        )
      }
      {calculatedRoute && <DirectionsRenderer directions={calculatedRoute} />}
      {/* 現在地のマーカー情報 */}
      {originPoint && (
        <Marker
          position={originPoint.position}
          icon={'https://maps.google.com/mapfiles/ms/icons/yellow-dot.png'}
        />
      )}
      {/* クリックした箇所のマーカー情報 */}
      <Marker
        position={destinationCenterPosition.position}
        icon={destinationCenterPosition.icon}
      >
        {isVisibleDestinationSearchButton && (
          <InfoWindow>
            <div>
              <Button onClick={destinationSearch}>この地点を中心に探す</Button>
            </div>
          </InfoWindow>
        )}
      </Marker>
      {/* 半径50km以内の観光地のマーカー情報 */}
      {aroundDestinationPointList.length &&
        aroundDestinationPointList.map((marker) => (
          <Marker
            key={marker.placeId}
            position={marker.position}
            onMouseOver={() => setMouseOveredDestinationPlaceId(marker.placeId)}
          >
            {mouseOveredDestinationPlaceId === marker.placeId && (
              <InfoWindow
                onCloseClick={() => setMouseOveredDestinationPlaceId(undefined)}
                onLoad={() =>
                  setDestinationPoint({
                    name: marker.name,
                    position: {
                      lat: marker.position.lat,
                      lng: marker.position.lng,
                    },
                    photo: marker.photo,
                  })
                }
              >
                <Box sx={{ textAlign: 'center' }}>
                  <Box>
                    <img src={marker.photo} width={200} hight={200} />
                  </Box>
                  <Box>{marker.name}</Box>
                  <Button
                    onClick={calculateRoute}
                    color="success"
                    variant="outlined"
                  >
                    目的地に設定
                  </Button>
                </Box>
              </InfoWindow>
            )}
          </Marker>
        ))}

      {calculatedRoute &&
        calculatedRouteSetPoints.map((point) => (
          <Marker
            key={point.position.lat}
            position={point.position}
            zIndex={100}
          >
            <InfoWindow position={point.position}>
              <Box
                sx={{
                  textAlign: 'center',
                }}
              >
                {point.photo ? (
                  <img src={point.photo} width={200} hight={300} />
                ) : null}
                <p>{point.name}</p>
              </Box>
            </InfoWindow>
          </Marker>
        ))}
    </BaseGoogleMap>
  )
})
