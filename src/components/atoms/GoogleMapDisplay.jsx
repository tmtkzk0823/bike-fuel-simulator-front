import { GoogleMap, LoadScript } from '@react-google-maps/api'

const containerStyle = {
  width: "600px",
  height: "600px",
};

const center = {
  lat: 36.3515406,
  lng: 140.1850139,
};

export const GoogleMapDisplay = () => {

  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  return(
    <LoadScript googleMapsApiKey={ apiKey }>
      <GoogleMap
      mapContainerStyle = {containerStyle}
      center={center}
      zoom={14}
      >
      </GoogleMap>
    </LoadScript>
  )
}
