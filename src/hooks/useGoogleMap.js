import { useRef, useState, useCallback } from 'react'
import { useJsApiLoader } from '@react-google-maps/api'

export const useGoogleMap = () => {
  // hooks
  const [map, setMap] = useState(null)
  const [currentLocation, setCurrentLocation] = useState(false)
  const [directionsResponse, setDirectionsResponse] = useState(null)
  const [distance, setDistance] = useState('') // 出発地点のstate
  const [duration, setDuration] = useState('') // 到着地点のstate
  const [originMarker, setOriginMarker] = useState({})
  const [destinationsCenterMarker, setDestinationsCenterMarker] = useState({}) //目的地を探す際の半径の中心となる緯度経度
  const [markedPlaceList, setMarkedPlaceList] = useState([])
  const [zoom, setZoom] = useState(6) //mapのzoom
  const [destinationsSearchAction, setDestinationsSearchAction] =
    useState(false)
  const originRef = useRef() //出発地点
  const destinationRef = useRef() // 行き先

  // isLoadedにapiKey等オブジェクトを格納
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  })

  //ルート計算
  const calculateRoute = useCallback(async () => {
    if (originRef.current.value === '' || destinationRef.current.value === '') {
      return // 出発地点か到着地点が空文字だったら return する
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService()

    const results = await directionsService.route({
      origin: originRef.current.value, // 出発地点に入力された値を取ってくる
      destination: destinationRef.current.value, // 到着地点に入力された値を取ってくる
      travelMode: google.maps.TravelMode.DRIVING,
    })

    setDirectionsResponse(results)
    setDistance(results.routes[0].legs[0].distance.text)
    setDuration(results.routes[0].legs[0].duration.text)
  }, [originRef, destinationRef])

  // stateを初期化する処理
  const clearRoute = useCallback(() => {
    setDirectionsResponse(null)
    setDistance('')
    setDuration('')
    originRef.current.value = ''
    destinationRef.current.value = ''
  }, [])

  const onLoadSetMap = useCallback((data) => setMap(data), [])

  const getCurrentLocation = useCallback(() => {
    // const infoWindow = new google.maps.InfoWindow()

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          }
          setOriginMarker({
            position: {
              lat: pos.lat,
              lng: pos.lng,
            },
          })
          window.pos = pos
          setZoom(9)
          !originMarker && map.setCenter(pos)
          setCurrentLocation(true)
        }

        // TODO: この箇所は現時点で挙動が未定(関数が存在しないため)なので、今後確認する
        // @ref: 参考にしたURLをはる
        // () => {
        //   handleLocationError(true, infoWindow, map.getCenter())
        // }
      )
    } else {
      // TODO: この箇所は現時点で挙動が未定(関数が存在しないため)なので、今後確認する
      // @ref: 参考にしたURLをはる
      // Browser doesn't support Geolocation
      // handleLocationError(false, infoWindow, map.getCenter())
    }
  }, [map, navigator])

  const decideDestinationCircleCenter = (event) => {
    setDestinationsSearchAction(true)
    //クリックした位置の座標を取得
    setDestinationsCenterMarker({
      position: {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      },
      icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png',
    })
    let destinationsCenterMarkerLatLng = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    }
    setCurrentLocation(false)

    map.panTo(destinationsCenterMarkerLatLng)
    setZoom(10)
  }

  // クリックしたマーカーをクリックした時に半径50km以内のマーカー情報を取得するメソッド
  const destinationSearch = () => {
    setDestinationsSearchAction(false)
    const searchCenter = destinationsCenterMarker.position
    const request = {
      location: searchCenter,
      radius: '50000',
      query: '観光地',
    }

    const service = new google.maps.places.PlacesService(map)

    // 半径50km以内の観光地情報を取得し、コールバック関数に渡している
    service.textSearch(request, (results, status) => {
      if (status !== google.maps.places.PlacesServiceStatus.OK) return

      const formatResult = results.map((result) => {
        return {
          placeId: result.place_id,
          formattedAddress: result.formatted_address,
          position: {
            lat: result.geometry.location.lat(),
            lng: result.geometry.location.lng(),
          },
          name: result.name,
        }
      })
      setMarkedPlaceList(formatResult)
    })
  }

  return {
    isLoaded,
    setCurrentLocation,
    currentLocation,
    directionsResponse,
    originRef,
    destinationRef,
    calculateRoute,
    clearRoute,
    getCurrentLocation,
    duration,
    distance,
    onLoadSetMap,
    decideDestinationCircleCenter,
    originMarker,
    destinationsCenterMarker,
    destinationSearch,
    markedPlaceList,
    zoom,
    destinationSearch,
    setDestinationsCenterMarker,
    destinationsSearchAction,
  }
}
