import { Input } from '@mui/material'
// @react-google-map/api
import { Autocomplete } from '@react-google-maps/api'

export const RouteSearchInput = (props) => {
  const { type, placeholder, inputRef } = props

  return (
    <Autocomplete>
      <Input type={type} placeholder={placeholder} inputRef={inputRef} />
    </Autocomplete>
  )
}
