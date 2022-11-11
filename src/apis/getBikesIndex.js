// axios
import axios from 'axios'
// urls
import { bikesIndex } from '@/urls/index'

export const getBikesIndex = (manufacturerId) => {
  return axios
    .get(bikesIndex(manufacturerId))
    .then((response) => {
      return response.data
    })
    .catch((e) => console.log(e))
}
