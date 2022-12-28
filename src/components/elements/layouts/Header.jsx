import { memo, useContext, useState } from 'react'

// react-router-dom
import { Link, useNavigate } from 'react-router-dom'

// hooks
import { signOut } from '@/apis/auth'

// Cookies
import Cookies from 'js-cookie'

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
  Button,
} from '@mui/material'

// MUI Icon
import MenuIcon from '@mui/icons-material/Menu'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import LogoutIcon from '@mui/icons-material/Logout'

// グローバルstate
import { AuthContext } from '@/App'

export const Header = memo(() => {
  const [sideBarOpenFlag, setSideBarOpenFlag] = useState(false)

  const { loading, isSignedIn, setIsSignedIn } = useContext(AuthContext)

  const topNavigation = useNavigate()
  const afterSignOutNavigation = useNavigate()

  const handleSignOut = async (e) => {
    try {
      const res = await signOut()

      if (res.data.success === true) {
        // サインアウト時には各Cookieを削除
        Cookies.remove('_access_token')
        Cookies.remove('_client')
        Cookies.remove('_uid')

        setIsSignedIn(false)
        afterSignOutNavigation('/login')

        console.log('ログアウトしました')
      } else {
        console.log('ログアウト失敗')
      }
    } catch (err) {
      console.log(err)
    }
  }

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
            mt: 5,
          }}
        >
          <List>
            <ListItem
              sx={{
                color: 'primary.main',
                fontSize: 20,
              }}
            >
              <AccountCircleIcon />
              <ListItemButton component={Link} to="/login">
                Login
              </ListItemButton>
            </ListItem>
            <ListItem
              sx={{
                color: 'primary.main',
                fontSize: 20,
              }}
            >
              <LogoutIcon />
              <ListItemButton
                component={Button}
                onClick={() => handleSignOut()}
              >
                LogOut
              </ListItemButton>
            </ListItem>
            <ListItem
              sx={{
                color: 'primary.main',
                fontSize: 20,
              }}
            >
              <ListItemButton>マイページ</ListItemButton>
            </ListItem>
            <ListItem
              sx={{
                color: 'primary.main',
                fontSize: 20,
              }}
            >
              <ListItemButton>プライバシーポリシー</ListItemButton>
            </ListItem>
            <ListItem
              sx={{
                color: 'primary.main',
                fontSize: 20,
              }}
            >
              <ListItemButton>利用規約</ListItemButton>
            </ListItem>
            <ListItem
              sx={{
                color: 'primary.main',
                fontSize: 20,
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
            align="center"
            sx={{
              flexGrow: 1,
              fontWeight: 'bold',
              fontStyle: 'italic',
              fontSize: 30,
              '&:hover': {
                cursor: 'default',
              },
            }}
            onClick={() => topNavigation('/')}
          >
            バイク航続距離シミュレーター
          </Typography>
        </Toolbar>
      </Box>
    </>
  )
})
