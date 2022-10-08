import { useState } from 'react'
import {
  GoogleMap as BaseGoogleMap,
  Circle,
  DirectionsRenderer,
  Marker,
  InfoWindow,
} from '@react-google-maps/api'

const center = {
  lat: 36.3515406,
  lng: 140.1850139,
}

const containerStyle = {
  width: '100%',
  height: '100%',
}

export const GoogleMap = (props) => {
  const [mouseOveredMarkerPlaceId, setMouseOveredMarkerPlaceId] =
    useState(undefined)

  const {
    pos,
    onLoadSetMap,
    onClick,
    currentLocation,
    directionsResponse,
    onClickCircle,
    originMarker,
    destinationsCenterMarker,
    destinationSearch,
    markedPlaceList,
  } = props

  return (
    <>
      <BaseGoogleMap
        center={center}
        zoom={6}
        mapContainerStyle={containerStyle}
        options={{
          zoomControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
          draggableCursor: 'pointer',
        }}
        onLoad={(map) => onLoadSetMap(map)}
        onClick={onClick}
      >
        {
          // 現在地のメソッドが呼ばれたらサークルを作る
          currentLocation && (
            <Circle center={pos} radius={200000} onClick={onClickCircle} />
          )
        }
        {directionsResponse && (
          <DirectionsRenderer directions={directionsResponse} />
        )}

        {/* 現在地のマーカー情報 */}
        <Marker position={originMarker.position} />

        {/* クリックした箇所のマーカー情報 */}
        <Marker
          position={destinationsCenterMarker.position}
          icon={destinationsCenterMarker.icon}
          onClick={destinationSearch}
        />

        {/* 半径50km以内の観光地のマーカー情報 */}
        {markedPlaceList.length &&
          markedPlaceList.map((marker) => (
            <Marker
              key={marker.placeId}
              position={marker.position}
              onMouseOver={() => setMouseOveredMarkerPlaceId(marker.placeId)}
            >
              {mouseOveredMarkerPlaceId === marker.placeId && (
                <InfoWindow
                  onCloseClick={() => setMouseOveredMarkerPlaceId(undefined)}
                >
                  <div>{marker.name}</div>
                </InfoWindow>
              )}
            </Marker>
          ))}
      </BaseGoogleMap>
    </>
  )
}
