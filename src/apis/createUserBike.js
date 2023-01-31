// axios
import axios from 'axios'
// urls
import { createUserBikeUrl } from '@/urls/index'

//Cookies
import Cookies from 'js-cookie'

export const createUserBike = (bikeId) => {
  return axios
    .post(createUserBikeUrl, bikeId, {
      headers: {
        'access-token': Cookies.get('_access_token'),
        client: Cookies.get('_client'),
        uid: Cookies.get('_uid'),
      },
    })
    .then((response) => {
      return response
    })
    .catch((e) => console.log(e))
}
