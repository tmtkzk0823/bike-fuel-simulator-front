import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { styled } from '@mui/material/styles'

export const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <SToolBar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, ml: 3 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <STitle>バイク航続距離シュミレーター </STitle>
          </Typography>
        </SToolBar>
      </AppBar>
    </Box>
  )
}
// MUIのコンポーネントをカスタムしている => リファクタリング(theme等でラップする)
const STitle = styled('p')`
  font-family: cursive;
  text-align: center;
  font-size: 24px;
`

const SToolBar = styled(Toolbar)`
  padding: 16px;
  background-color: #ffffdd;
  color: #444444;
`
