// axios
import axios from 'axios'
// urls
import { deleteUserBikesUrl } from '@/urls/index'

//Cookies
import Cookies from 'js-cookie'

export const deleteUserBikes = (bikeId) => {
  axios
    .delete(deleteUserBikesUrl, {
      headers: {
        'access-token': Cookies.get('_access_token'),
        client: Cookies.get('_client'),
        uid: Cookies.get('_uid'),
      },
      data: { bike_id: bikeId },
    })
    .then((response) => {
      return response
    })
    .catch((e) => console.log(e))
}
