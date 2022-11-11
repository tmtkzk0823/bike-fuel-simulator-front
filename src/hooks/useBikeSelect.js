// hooks
import { useState } from 'react'

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
    setStateManufacturerId(manufacturerId)
  }

  return {
    isVisibleBikeSelectModal,
    setIsVisibleBikeSelectModal,
    manufacturersIndexData,
    setManufacturersIndexData,
    manufacturersApiCall,
    setManufacturersApiCall,
    isVisibleManufacturersBikeList,
    stateManufacturerId,
    getManufacturersBikeList,
  }
}
