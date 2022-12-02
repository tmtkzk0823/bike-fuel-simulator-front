import { memo, useState } from 'react'
// mui
import {
  Box,
  Typography,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

export const Header = memo(() => {
  const [sideBarOpenFlag, setSideBarOpenFlag] = useState(false)

  return (
    <>
      <Drawer
        anchor="left"
        open={sideBarOpenFlag}
        onClose={() => setSideBarOpenFlag(false)}
      >
        <Box
          sx={{
            width: 250,
          }}
        >
          <List>
            <ListItem
              sx={{
                color: 'primary.main',
              }}
            >
              <AccountCircleIcon />
              <ListItemButton>Login</ListItemButton>
            </ListItem>
            <ListItem
              sx={{
                color: 'primary.main',
              }}
            >
              <ListItemButton>マイページ</ListItemButton>
            </ListItem>
            <ListItem
              sx={{
                color: 'primary.main',
              }}
            >
              <ListItemButton>プライバシーポリシー</ListItemButton>
            </ListItem>
            <ListItem
              sx={{
                color: 'primary.main',
              }}
            >
              <ListItemButton>利用規約</ListItemButton>
            </ListItem>
            <ListItem
              sx={{
                color: 'primary.main',
              }}
            >
              <ListItemButton>
                お問合せ
                <br />
                （開発者twitter）
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>

      <Box
        sx={{
          color: '#444444',
          backgroundColor: '#d3d3d3',
          p: 2,
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ ml: 1 }}
            onClick={() => setSideBarOpenFlag(true)}
          >
            <MenuIcon />
          </IconButton>
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
            バイク航続距離シミュレーター
          </Typography>
        </Toolbar>
      </Box>
    </>
  )
})
