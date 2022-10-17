import { Button } from '@mui/material'

export const RouteSearchButton = (props) => {
  const { type, buttonName, color, onClick } = props

  return (
    <Button color={color} type={type} onClick={onClick}>
      {buttonName}
    </Button>
  )
}
