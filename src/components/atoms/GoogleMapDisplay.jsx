// @react-google-map/api
import { GoogleMap, LoadScript, Marker, Autocomplete, DirectionsRenderer, useJsApiLoader } from '@react-google-maps/api';

//react
import { useRef, useState } from 'react';

// MUI
import { Skeleton, Box, Stack, ButtonGroup, Button, IconButton, Icon, Typography, Input  } from '@mui/material';
import { Alarm } from '@mui/icons-material';

const center = {
  lat: 36.3515406,
  lng: 140.1850139,
};

const containerStyle = {
  width: "100%",
  height: "100%",
};


export const GoogleMapDisplay = () => {
  // isLoadedにapiKey等オブジェクトを格納
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  });

  const [map, setMap] = useState(/**@type google.maps.Map */(null));
  const [directionsResponse, setDirectionsResponse ] = useState(null);
  const [distance, setDistance] = useState('');  // 出発地点のstate
  const [duration, setDuration] = useState('');  // 到着地点のstate

  /**@type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef(); //出発地点

  /**@type React.MutableRefObject<HTMLInputElement> */
  const destinationRef = useRef(); // 行き先

  if (!isLoaded) {
    return (
      <Box sx={{ width: 300 }}>
        <Skeleton animation="wave" />;
        <Skeleton animation="wave" />;
        <Skeleton animation="wave" />;
      </Box>
    )
  }

  //ルート計算
  const calculateRoute = async() => {
    if (originRef.current.value === '' || destinationRef.current.value === '') {
      return // 出発地点か到着地点が空文字だったら return する
    }
    // eslint-disable-next-line no-undef
    const directionService = new google.maps.DirectionService();
    
    const results = await directionService.route({
      origin: originRef.current.value, // 出発地点に入力された値を取ってくる
      destination: destinationRef.current.value, // 到着地点に入力された値を取ってくる
      travelMode: google.maps.TravelMode.DRIVING,
    });
    
    setDirectionsResponse(results);
    setDistance(results.route[0].legs[0].distance.text);
    setDuration(results.route[0].legs[0].duration.text);
  }

  // stateを初期化する処理
  const clearRoute = () => {
    setDirectionsResponse(null);
    setDistance('');
    setDuration('');
    originRef.current.value = '';
    destinationRef.current.value = ''
  }


  return(

    <Box sx = {{
      position: 'relative',
      flexDirection: 'column',
      alignItems: 'center',
      height: '100vh',
      width: '100vw',
    }}>
      <Box sx={{
        position: 'absolute',
        left: 0,
        top: 0,
        height: '100vh',
        width: '100%',
      }}>
        {/* Google Map Box */}
        <GoogleMap
        center = {center}
        zoom = {15}
        mapContainerStyle = {containerStyle}
        options={{
          zoomControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
        onLoad = { map => setMap(map) } 
        >
          <Marker position={center}/>
          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
        </GoogleMap>
      </Box>
      <Box sx={{
        p: 4,
        borderRadius: 'lg',
        // m: 4,
        bgColor: 'white',
        shadow: 'base',
        // minWidth: 'container.md',
        zIndex: 1,
      }}
      >
      <Stack
        direction="row"
        spacing={2}
        justifyContent='space-between'
        >
          <Box sx={{ flexGrow: 1 }}>
            <Autocomplete>
              <Input type='text' placeholder='出発地点' ref={originRef} />
            </Autocomplete>
          </Box>

          <Box sx={{ flexGrow: 1 }}>
            <Autocomplete>
              <Input type='text' placeholder='目的地' ref={destinationRef} />
            </Autocomplete>
          </Box>
          <ButtonGroup>
            <Button color="primary" type='submit' onClick={calculateRoute}>
              ルート検索
            </Button>
            <IconButton aria-label='center back' onClick={ clearRoute }>
              <Alarm />
            </IconButton>
          </ButtonGroup>
        </Stack>
        
        <Stack 
        direction="row"
        spacing={4}
        mt={4}
        justifyContent='space-between'
        >
          <Typography> Distance: {distance} </Typography>;
          <Typography> Duration: {duration} </Typography>;
        </Stack>
      
      </Box>
      </Box>

    // <LoadScript googleMapsApiKey={ apiKey }>
    //   <GoogleMap
    //   
    //   center={center}
    //   zoom={14}
    //   >
    //   </GoogleMap>
    // </LoadScript>
  )
}


