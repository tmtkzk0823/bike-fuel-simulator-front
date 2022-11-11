// hooks
import { useState } from 'react'
// api
import { getBikesIndex } from '@/apis/getBikesIndex'

export const useBikeSelect = () => {
  const [manufacturersIndexData, setManufacturersIndexData] = useState([])

  const [isVisibleBikeSelectModal, setIsVisibleBikeSelectModal] =
    useState(false)

  const [manufacturersApiCall, setManufacturersApiCall] = useState(false)

  const [isVisibleManufacturersBikeList, setIsVisibleManufacturersBikeList] =
    useState(false)

  const [stateManufacturerId, setStateManufacturerId] = useState('')

  const getManufacturersBikeList = (manufacturerId) => {
    setIsVisibleManufacturersBikeList(true)
    getBikesIndex(manufacturerId).then((data) => console.log(data))
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
  }
}
