// hooks
import { useState } from 'react'

export const useBikeSelect = () => {
  const [manufacturersIndexData, setManufacturersIndexData] = useState([])

  const [isVisibleBikeSelectModal, setIsVisibleBikeSelectModal] =
    useState(false)

  return {
    isVisibleBikeSelectModal,
    setIsVisibleBikeSelectModal,
    manufacturersIndexData,
    setManufacturersIndexData,
  }
}
