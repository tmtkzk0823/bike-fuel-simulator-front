import { useState } from 'react'

export const useBikeSelect = () => {
  const [selectBike, setSelectBike] = useState('')

  const changeSelectBike = (event) => {
    setSelectBike(event.target.value)
  }

  const [isVisibleBikeSelectModal, setIsVisibleBikeSelectModal] =
    useState(false)

  const sampleBikeArray = ['YZF-R1', 'YZF-R7', 'YZF-R6']

  return {
    selectBike,
    setSelectBike,
    changeSelectBike,
    sampleBikeArray,
    isVisibleBikeSelectModal,
    setIsVisibleBikeSelectModal,
  }
}
