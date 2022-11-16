const DEFAULT_IMAGE = import.meta.env.VITE_BIKE_DATA_DEFAULT_IMAGE_URL

import { atom } from 'jotai'
export const bikeDataAtom = atom({
  name: 'CBR250RR',
  image: `${DEFAULT_IMAGE}`,
  cruisingDistance: 561,
  displacement: 249,
})
