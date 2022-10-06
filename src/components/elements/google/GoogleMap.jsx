import { useGoogleMap } from '@/hooks/useGoogleMap'
import {
  GoogleMap as BaseGoogleMap,
  Circle,
  DirectionsRenderer,
  Marker,
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
    placeInfo,
  } = props

  return (
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

      <Marker position={originMarker.position} />
      <Marker
        position={destinationsCenterMarker.position}
        icon={destinationsCenterMarker.icon}
        onClick={destinationSearch}
      />
      {placeInfo.length
        ? placeInfo.map((marker) => (
            <Marker key={marker.formattedAddress} position={marker.position} />
          ))
        : null}
    </BaseGoogleMap>
  )
}
