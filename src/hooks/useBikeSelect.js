// hooks
import { useState } from 'react'
// api
import { getBikesIndex } from '@/apis/getBikesIndex'
// jotai
import { useAtom } from 'jotai'
import { bikeDataAtom } from '@/jotai/atoms'

export const useBikeSelect = () => {
  const [manufacturersIndexData, setManufacturersIndexData] = useState([])

  const [isVisibleBikeSelectModal, setIsVisibleBikeSelectModal] =
    useState(false)

  const [manufacturersApiCall, setManufacturersApiCall] = useState(false)

  const [isVisibleManufacturersBikeList, setIsVisibleManufacturersBikeList] =
    useState(false)

  // setterだけ使う
  const [, setBakeData] = useAtom(bikeDataAtom)

  const bikeCardClickAction = (bike) => {
    setBakeData({
      name: bike.name,
      image: bike.image,
      cruisingDistance: bike.cruising_distance,
      displacement: bike.displacement,
    }),
      setIsVisibleBikeSelectModal(false)
  }

  // 排気量ごとにバイクの配列を受け取るstate
  const [bikeListDisplacement0To50, setBikeListDisplacement0To50] = useState([])
  const [bikeListDisplacement51To125, setBikeListDisplacement51To125] =
    useState([])
  const [bikeListDisplacement126To250, setBikeListDisplacement126To250] =
    useState([])
  const [bikeListDisplacement251To400, setBikeListDisplacement251To400] =
    useState([])
  const [bikeListDisplacement401To750, setBikeListDisplacement401To750] =
    useState([])
  const [bikeListDisplacementOver750, setBikeListDisplacementOver750] =
    useState([])

  const getManufacturersBikeList = (manufacturerId) => {
    setIsVisibleManufacturersBikeList(true)
    getBikesIndex(manufacturerId).then(
      (data) => (
        setBikeListDisplacement0To50(data.bike_lists_displacement_0_50),
        setBikeListDisplacement51To125(data.bike_lists_displacement_51_125),
        setBikeListDisplacement126To250(data.bike_lists_displacement_126_250),
        setBikeListDisplacement251To400(data.bike_lists_displacement_251_400),
        setBikeListDisplacement401To750(data.bike_lists_displacement_401_750),
        setBikeListDisplacementOver750(data.bike_lists_displacement_over750)
      )
    )
  }

  return {
    isVisibleBikeSelectModal,
    setIsVisibleBikeSelectModal,
    manufacturersIndexData,
    setManufacturersIndexData,
    manufacturersApiCall,
    setManufacturersApiCall,
    isVisibleManufacturersBikeList,
    getManufacturersBikeList,
    bikeListDisplacement0To50,
    bikeListDisplacement51To125,
    bikeListDisplacement126To250,
    bikeListDisplacement251To400,
    bikeListDisplacement401To750,
    bikeListDisplacementOver750,
    bikeCardClickAction,
  }
}
