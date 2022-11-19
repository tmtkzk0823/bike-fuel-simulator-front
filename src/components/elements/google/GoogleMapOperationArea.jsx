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
        bgcolor: 'white',
        border: 3,
        borderColor: 'grey.500',
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
          <Button variant="contained" onClick={getOriginPoint}>
            現在地を取得する
          </Button>
        ) : (
          <>
            <Button variant="contained" onClick={clearRoute}>
              もう一度検索
            </Button>
            {isVisibleAroundOriginPointCircle ? (
              <Box>円の中をクリックしてください</Box>
            ) : (
              ''
            )}
          </>
        )}

        <Typography>走行距離: {calculatedRouteDistance}</Typography>
        <Typography>時間: {calculatedRouteDuration} </Typography>
      </Stack>
    </Box>
  )
}
