import { Box, Stack, Button, Typography } from '@mui/material'

export const GoogleMapOperationArea = (props) => {
  const {
    getOriginPoint,
    clearRoute,
    calculatedRouteDistance,
    calculatedRouteDuration,
    isVisibleGetOriginPointButton,
    isVisibleAroundOriginPointCircle,
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
        {isVisibleGetOriginPointButton ? (
          <Button variant="outlined" onClick={getOriginPoint}>
            現在地を取得する
          </Button>
        ) : (
          <>
            {isVisibleAroundOriginPointCircle ? (
              <p>円の中をクリックしてください</p>
            ) : (
              ''
            )}
            <Button variant="outlined" onClick={clearRoute}>
              もう一度検索
            </Button>
          </>
        )}

        <Typography>走行距離: {calculatedRouteDistance}</Typography>
        <Typography>時間: {calculatedRouteDuration} </Typography>
      </Stack>
    </Box>
  )
}
