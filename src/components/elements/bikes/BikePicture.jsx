import bikeImage from '@/../public/images/bike-sample1.jpg'

import { bikeDataAtom } from '@/jotai/atoms'
import { useAtom } from 'jotai'

export const BikePicture = () => {
  const [bikeData] = useAtom(bikeDataAtom)
  return <img src={bikeData.image} width="100%" />
}
