import { useState, useCallback } from 'react'
import { useJsApiLoader } from '@react-google-maps/api'

export const useGoogleMap = () => {
  // hooks
  const [map, setMap] = useState(null)
  const [currentLocation, setCurrentLocation] = useState(false) // 現在地のマーカーが立っているか判断する
  const [directionsResponse, setDirectionsResponse] = useState(null)
  const [distance, setDistance] = useState('') // 出発地点のstate
  const [duration, setDuration] = useState('') // 到着地点のstate
  const [originMarker, setOriginMarker] = useState({}) // 現在地の緯度経度を保持するstate
  const [destinationsCenterMarker, setDestinationsCenterMarker] = useState({}) //目的地を探す際の半径の中心となる緯度経度
  const [markedPlaceList, setMarkedPlaceList] = useState([]) // APIのレスポンスで返ってきた値をカスタムして配列で保持する
  const [destinationsLatLng, setDestinationsLatLng] = useState({}) // 目的地の緯度経度
  const [zoom, setZoom] = useState(6) //mapのzoom
  const [mouseOveredMarkerPlaceId, setMouseOveredMarkerPlaceId] =
    useState(undefined) // 目的地オブジェクトに格納してある一意のIDを保持
  const [destinationsSearchAction, setDestinationsSearchAction] =
    useState(false)

  // isLoadedにapiKey等オブジェクトを格納
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  })

  //ルート計算
  const calculateRoute = useCallback(async () => {
    if (originMarker.position === {} || destinationsLatLng === {}) {
      return
    }

    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService()
    console.log(destinationsLatLng)
    const results = await directionsService.route({
      origin: {
        lat: originMarker.position.lat,
        lng: originMarker.position.lng,
      }, // 現在地のマーカーがある場所の緯度経度を取得
      destination: {
        lat: destinationsLatLng.lat,
        lng: destinationsLatLng.lng,
      }, // 到着地点に入力された値を取ってくる
      travelMode: google.maps.TravelMode.DRIVING,
      avoidHighways: true, //高速道路除外
    })

    setDirectionsResponse(results)
    setDistance(results.routes[0].legs[0].distance.text)
    setDuration(results.routes[0].legs[0].duration.text)
    setMouseOveredMarkerPlaceId(undefined)
    setOriginMarker({})
    setDestinationsCenterMarker({})
    setMarkedPlaceList([])
  })

  // stateを初期化する処理
  const clearRoute = useCallback(() => {
    setDirectionsResponse(null)
    setDistance('')
    setDuration('')
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

  //目的地を探す半径の中心を決める処理
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
      type: ['tourist_attraction'],
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
          photo: result.photos[0].getUrl(),
        }
      })
      console.log(results) // オブジェクト確認用（最後に消す）
      setMarkedPlaceList(formatResult)
    })
  }

  return {
    isLoaded,
    setCurrentLocation,
    currentLocation,
    directionsResponse,
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
    mouseOveredMarkerPlaceId,
    setMouseOveredMarkerPlaceId,
    setDestinationsLatLng,
  }
}
