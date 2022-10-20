import { useState, useCallback } from 'react'
import { useJsApiLoader } from '@react-google-maps/api'

export const useGoogleMap = () => {
  // isLoadedにapiKey等オブジェクトを格納
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  })
  const [map, setMap] = useState(null)
  const [zoom, setZoom] = useState(5.5) //mapのzoom
  const [originPoint, setOriginPoint] = useState(null) // 現在地の緯度経度を保持するstate
  const [destinationPoint, setDestinationPoint] = useState(null) // 目的地の緯度経度
  const [calculatedRoute, setCalculatedRoute] = useState(null)
  const [destinationCenterPosition, setDestinationCenterPosition] = useState({}) //目的地を探す際の半径の中心となる緯度経度
  const [mouseOveredDestinationPlaceId, setMouseOveredDestinationPlaceId] =
    useState(undefined) // 目的地オブジェクトに格納してある一意のIDを保持
  const [aroundDestinationPointList, setAroundDestinationPointList] = useState(
    []
  ) // APIのレスポンスで返ってきた値をカスタムして配列で保持する
  const [
    isVisibleAroundOriginPointCircle,
    setIsVisibleAroundOriginPointCircle,
  ] = useState(false) // 現在地から行ける範囲を示すサークルを表示するFlag
  const [
    isVisibleDestinationSearchButton,
    setIsVisibleDestinationSearchButton,
  ] = useState(false) // ルート検索ボタンをInfoWindowの中に表示させる時に使うFlag

  const onLoadSetMap = useCallback((data) => setMap(data), [])

  // 現在地を取得後サークルを表示
  const getOriginPoint = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          }
          setOriginPoint({
            position: {
              lat: pos.lat,
              lng: pos.lng,
            },
          })
          window.pos = pos
          setIsVisibleAroundOriginPointCircle(true)
          setZoom(8.3)
          !originPoint && map.setCenter(pos)
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

  // 現在地と目的地のルートを計算する
  const calculateRoute = () => {
    if (originPoint.position === {} || destinationPoint === {}) {
      return
    }

    const waypointsLatLng = {
      lat: (originPoint.position.lat + destinationPoint.lat) / 2,
      lng: (originPoint.position.lng + destinationPoint.lng) / 2,
    }

    // 中間地点の半径3km以内のコンビニを取得するパラメータ
    const waypointRequest = {
      location: waypointsLatLng,
      radius: '30000',
      type: ['convenience_store'],
    }

    // 中間地点の半径3km以内のコンビニを取得
    const waypointService = new google.maps.places.PlacesService(map)
    waypointService.nearbySearch(waypointRequest, async (results, status) => {
      if (status !== google.maps.places.PlacesServiceStatus.OK) return

      const waypointResults = results.map((result) => {
        return {
          placeId: result.place_id,
          formattedAddress: result.formatted_address,
          position: {
            lat: result.geometry.location.lat(),
            lng: result.geometry.location.lng(),
          },
          name: result.name,
          photo: result.photos ? result.photos[0].getUrl() : '',
        }
      })

      // 複数の中継地点からランダムで一つだけを抽出
      const randomWaypointPosition =
        waypointResults[Math.floor(Math.random() * waypointResults.length)]
          .position

      // 中継地点を経路した、現在地と目的地のルートを計算
      const directionsService = new google.maps.DirectionsService()
      const rootResults = await directionsService.route({
        origin: {
          lat: originPoint.position.lat,
          lng: originPoint.position.lng,
        },
        // 現在地のマーカーがある場所の緯度経度を取得
        destination: {
          lat: destinationPoint.lat,
          lng: destinationPoint.lng,
        },
        // 到着地点に入力された値を取ってくる
        travelMode: google.maps.TravelMode.DRIVING,
        avoidHighways: true, // 高速道路除外
        waypoints: [
          {
            location: randomWaypointPosition,
          },
        ],
      })

      setCalculatedRoute(rootResults)
      setMouseOveredDestinationPlaceId(undefined)
      setOriginPoint({})
      setDestinationCenterPosition({})
      setAroundDestinationPointList([])
    })
  }

  ////目的地を探す半径の中心を決める処理
  const searchAroundDestinationPoint = (event) => {
    setIsVisibleDestinationSearchButton(true)
    //クリックした位置の座標を取得
    setDestinationCenterPosition({
      position: {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      },
      icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png',
    })
    let destinationCenterPositionLatLng = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    }
    map.panTo(destinationCenterPositionLatLng)
    setZoom(10.3)
  }

  // Buttonをクリックした時に半径50km以内のマーカー情報を取得するメソッド
  const destinationSearch = () => {
    setIsVisibleDestinationSearchButton(false)
    const searchCenter = destinationCenterPosition.position
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
          photo: result.photos ? result.photos[0].getUrl() : '',
        }
      })
      setAroundDestinationPointList(formatResult)
      setIsVisibleAroundOriginPointCircle(false)
    })
  }

  // stateを初期化する処理
  const clearRoute = useCallback(() => {
    setCalculatedRoute(null)
  }, [])

  const calculatedRouteDistance = calculatedRoute
    ? calculatedRoute.routes[0].legs[0].distance.text
    : null
  const calculatedRouteDuration = calculatedRoute
    ? calculatedRoute.routes[0].legs[0].duration.text
    : null

  return {
    zoom,
    isLoaded,
    onLoadSetMap,
    calculatedRoute,
    originPoint,
    getOriginPoint,
    calculateRoute,
    clearRoute,
    destinationCenterPosition,
    setDestinationCenterPosition,
    destinationSearch,
    searchAroundDestinationPoint,
    aroundDestinationPointList,
    mouseOveredDestinationPlaceId,
    setMouseOveredDestinationPlaceId,
    setDestinationPoint,
    calculatedRouteDistance,
    calculatedRouteDuration,
    isVisibleAroundOriginPointCircle,
    isVisibleDestinationSearchButton,
  }
}
