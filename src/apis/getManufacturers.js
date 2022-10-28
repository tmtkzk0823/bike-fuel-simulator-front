// axios
import axios from 'axios'
// url
import { manufacturersIndex } from '@/urls/index'

export const getManufacturersIndex = () => {
  return axios
    .get(manufacturersIndex)
    .then((response) => {
      return response.data
    })
    .catch((e) => console.error(e))
}
