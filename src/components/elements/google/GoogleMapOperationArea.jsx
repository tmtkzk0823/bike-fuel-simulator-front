import { Box, Stack, Button, Typography } from '@mui/material'

export const GoogleMapOperationArea = (props) => {
  const {
    getOriginPoint,
    clearRoute,
    calculatedRouteDistance,
    calculatedRouteDuration,
  } = props
  return (
    <Box
      sx={{
        p: 2,
        bgcolor: '#ffffdd',
        textAlign: 'center',
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={2}
      >
        <Button variant="outlined" onClick={getOriginPoint}>
          現在地を取得する
        </Button>
        <Button variant="outlined" onClick={clearRoute}>
          ルート削除
        </Button>

        <Typography>走行距離: {calculatedRouteDistance}</Typography>
        <Typography>時間: {calculatedRouteDuration} </Typography>
      </Stack>
    </Box>
  )
}
