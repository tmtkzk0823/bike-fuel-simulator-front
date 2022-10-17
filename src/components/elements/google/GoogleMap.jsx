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

const center = {
  lat: 35.689614,
  lng: 139.691585,
}

const containerStyle = {
  width: '60vw',
  height: '100vh',
}

export const GoogleMap = (props) => {
  const {
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
  } = props

  return (
    <BaseGoogleMap
      center={center}
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
          <Circle center={pos} radius={200000} onClick={onClickCircle} />
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
              <Button onClick={destinationSearch}>
                この地点をを中心に探す
              </Button>
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
                    lat: marker.position.lat,
                    lng: marker.position.lng,
                  })
                }
              >
                <Box sx={{ textAlign: 'center' }}>
                  <Box>
                    <img src={marker.photo} width={200} hight={300} />
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
    </BaseGoogleMap>
  )
}
