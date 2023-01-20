// axios
import axios from 'axios'
// urls
import { getUserBikesUrl } from '@/urls/index'
//Cookies
import Cookies from 'js-cookie'

export const getUserBikes = () => {
  return axios
    .get(getUserBikesUrl, {
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
