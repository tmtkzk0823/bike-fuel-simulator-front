import { memo } from 'react'
// mui
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

export const Header = memo(() => {
  return (
    <Box
      sx={{
        color: '#444444',
        backgroundColor: '#d3d3d3',
        p: 2,
      }}
    >
      <Toolbar>
        {/* <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, ml: 3 }}
        > */}
        {/* <MenuIcon /> 後ほど作成 */}
        {/* </IconButton> */}
        <Typography
          variant="h5"
          component="div"
          align="center"
          sx={{
            flexGrow: 1,
            fontWeight: 'bold',
            fontStyle: 'italic',
            fontSize: 30,
          }}
        >
          バイク航続距離シュミレーター
        </Typography>
      </Toolbar>
    </Box>
  )
})
