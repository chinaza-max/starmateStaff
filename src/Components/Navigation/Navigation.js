import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import img1 from '../../Assets/5.jpg'
import Badge from '@mui/material/Badge'
import MailIcon from '@mui/icons-material/Mail'
import GridViewIcon from '@mui/icons-material/GridView'
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong'
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle'
import logo from '../../Assets/logo.png'
import './Navigation.css'
import { NavLink } from 'react-router-dom'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'

const pages = [
  { name: 'Dashboard', link: '/' },
  { name: 'Project', link: '/Project' },
  { name: 'Transaction', link: '/Transaction' },
  { name: 'Report', link: '/Report' },
  { name: 'Message', link: '/Message' }
]
const settings = ['Profile', 'Account', 'Settings', 'Logout']

/**
 *  <div className='imgContainer'  sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
                        <img className='img1' src={logo}  alt='logo'/>
                    </div>
 */

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <div className='Navigation'>
      <AppBar className='NavigationContainer1' position='static'>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <Typography
              variant='h6'
              noWrap
              component='a'
              href='#app-bar-with-responsive-menu'
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none'
              }}
            >
              <div className='imgContainer1'>
                <img className='img1' src={logo} alt='logo' />
              </div>
            </Typography>

            <Box style={{ color: 'green' }} sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleOpenNavMenu}
              ></IconButton>
            </Box>
            <Typography
              variant='h5'
              noWrap
              component='a'
              href='#app-bar-with-responsive-menu'
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none'
              }}
            >
              <div className='imgContainer2'>
                <img className='img2' src={logo} alt='logo' />
              </div>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page, index) => (
                <NavLink
                  key={index}
                  to={page.link}
                  className={(isActive) => (isActive.isActive ? 'nav-link  selected' : ' nav-link unselected')}
                >
                  <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                    {page.name === 'Dashboard' ? (
                      <div className='iconContainer'>
                        <GridViewIcon />
                      </div>
                    ) : page.name === 'Transaction' ? (
                      <div className='iconContainer'>
                        <Badge badgeContent={1} color='error'>
                          <ReceiptLongIcon />
                        </Badge>
                      </div>
                    ) : page.name === 'Report' ? (
                      <div className='iconContainer'>
                        <Badge badgeContent={4} color='error'>
                          <SupervisedUserCircleIcon />
                        </Badge>
                      </div>
                    ) : page.name === 'Project' ? (
                      <div className='iconContainer'>
                        <Badge badgeContent={2} color='error'>
                          <LibraryBooksIcon />
                        </Badge>
                      </div>
                    ) : (
                      <div className='iconContainer'>
                        <Badge badgeContent={2} color='error'>
                          <MailIcon />
                        </Badge>
                      </div>
                    )}

                    <span className='navName'>{page.name}</span>
                  </Button>

                  <span className='lineSelector'></span>
                </NavLink>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title='Open settings'>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt='Remy Sharp' src={img1} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id='menu-appbar'
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign='center'>{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  )
}
export default ResponsiveAppBar
