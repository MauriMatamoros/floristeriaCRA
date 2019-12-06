import React, { useState } from 'react'
import {
  Header,
  Button,
  Popup,
  Grid,
  Icon,
  Menu,
  Responsive,
  Dropdown,
  Sidebar
} from 'semantic-ui-react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { firebaseConnect } from 'react-redux-firebase'
import SideBarCart from '../../components/Cart/SideBarCart'

const NavBar = ({ location, auth, profile, firebase }) => {
  const [opened, setOpened] = useState(false)
  const [opened2, setOpened2] = useState(false)

  const isActive = route => route === location.pathname
  // const isRoot = user && user.role === 'root'
  // const isAdmin = user && user.role === 'admin'
  // const isRootOrAdmin = isRoot || isAdmin

  const handleLogout = async () => {
    try {
      await firebase.auth().signOut()
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <>
      <Responsive maxWidth={750}>
        <Menu
          fluid
          inverted
          stackable
          id='menu'
          className='d-flex flex-row justify-content-between rounded-0'
        >
          <div className='w-25'>
            <Dropdown
              text='Menu'
              style={{ color: 'black' }}
              pointing
              className='link item'
            >
              <Dropdown.Menu>
                <Dropdown.Item className='text-dark' as={Link} to='/'>
                  INICIO
                </Dropdown.Item>
                <Dropdown.Item className='text-dark' as={Link} to='/gallery'>
                  GALERIA
                </Dropdown.Item>
                <Dropdown.Item className='text-dark' as={Link} to='/arrays'>
                  ARREGLOS
                </Dropdown.Item>
                <Dropdown.Item className='text-dark' as={Link} to='/store'>
                  TIENDA
                </Dropdown.Item>
                <Dropdown.Item className='text-dark' as={Link} to='/blog'>
                  BLOG
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Header>CUENTA</Dropdown.Header>
                <Dropdown
                  text='MI CUENTA'
                  pointing='left'
                  className='link item'
                >
                  <Dropdown.Menu>
                    {auth.isEmpty ? (
                      <>
                        <Dropdown.Item as={Link} to='/login'>
                          <Icon name='sign in' size='large' />
                          INGRESAR
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to='/signup'>
                          <Icon name='signup' size='large' />
                          REGISTRARSE
                        </Dropdown.Item>
                      </>
                    ) : (
                      <>
                        <Dropdown.Item as={Link} to='/account'>
                          <Icon name='user' size='large' />
                          CUENTA
                        </Dropdown.Item>
                        <Dropdown.Item onClick={handleLogout}>
                          <Icon name='sign out' size='large' />
                          SALIR
                        </Dropdown.Item>
                      </>
                    )}
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown.Item className='text-dark'>
                  <Icon name='search' size='big' />
                  BUSCAR
                </Dropdown.Item>
                <Dropdown.Item
                  className='text-dark'
                  onClick={() => setOpened2(!opened2)}
                >
                  <Icon name='cart' size='big' />
                  COMPRAS
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <SideBarCart opened={opened2} setOpened={setOpened2} />
          <div className='d-flex justify-content-end w-100'>
            <div>
              {!profile.isEmpty && profile.role === 'admin' && (
                <Menu.Item
                  onClick={() => setOpened(!opened)}
                  className='text-dark'
                >
                  <Icon name='settings' size='large' />
                </Menu.Item>
              )}

              <Sidebar
                as={Menu}
                animation='overlay'
                direction='right'
                icon='labeled'
                inverted
                vertical
                visible={opened}
              >
                {!profile.isEmpty && profile.role === 'admin' && (
                  <>
                    <div className='mt-2 pr-3 d-flex justify-content-end'>
                      <a
                        role='button'
                        className='text-white'
                        onClick={() => setOpened(false)}
                      >
                        <i className='fas fa-times fa-2x' />
                      </a>
                    </div>

                    <Link to='/create'>
                      <Menu.Item
                        header
                        active={isActive('/creates')}
                        className='text-white'
                      >
                        <Icon name='add square' size='large' />
                        Create
                      </Menu.Item>
                    </Link>
                  </>
                )}
                {!profile.isEmpty && profile.role === 'admin' && (
                  <Link to='/createType'>
                    <Menu.Item
                      header
                      active={isActive('/createTypes')}
                      className='text-white'
                    >
                      <Icon name='add square' size='large' />
                      Create Types
                    </Menu.Item>
                  </Link>
                )}
              </Sidebar>
            </div>
          </div>
        </Menu>
      </Responsive>
      <Responsive minWidth={750}>
        <Menu id='menu' stackable inverted className='w-100'>
          <Menu.Menu position='left'></Menu.Menu>
          <Menu.Menu position='right'>
            <div className='d-flex flex-row'>
              <Link to='/'>
                <Menu.Item header active={isActive('/')}>
                  <p className='text-dark font-weight-bold'>INICIO</p>
                </Menu.Item>
              </Link>
              <Link to='/gallery'>
                <Menu.Item header active={isActive('/gallery')}>
                  <p className='text-dark'>GALERIA</p>
                </Menu.Item>
              </Link>
              <Link to='/arrays'>
                <Menu.Item header active={isActive('/arrays')}>
                  <p className='text-dark'>ARREGLOS</p>
                </Menu.Item>
              </Link>

              <Link to='/blog'>
                <Menu.Item header active={isActive('/blog')}>
                  <p className='text-dark'>NOTICIAS</p>
                </Menu.Item>
              </Link>

              {!profile.isEmpty && profile.role === 'admin' && (
                <Menu.Item
                  onClick={() => setOpened(!opened)}
                  className='text-dark'
                >
                  <Icon name='settings' size='large' />
                </Menu.Item>
              )}

              <Popup
                trigger={
                  <Menu.Item
                    header
                    active={isActive('/search')}
                    className='text-dark'
                  >
                    <Icon name='user' size='large' />
                  </Menu.Item>
                }
                flowing
                hoverable
              >
                <Grid centered divided columns={1}>
                  {auth.isEmpty ? (
                    <>
                      <Grid.Column textAlign='center'>
                        <Header as='h4'>INGRESAR</Header>
                        <Button as={Link} to='/login'>
                          <Menu.Item header active={isActive('/login')}>
                            <Icon name='sign in' size='large' />
                            Login
                          </Menu.Item>
                        </Button>
                      </Grid.Column>
                      <Grid.Column textAlign='center'>
                        <Header as='h4'>REGISTRARSE</Header>
                        <Button as={Link} to='/signup'>
                          <Menu.Item header active={isActive('/signup')}>
                            <Icon name='signup' size='large' />
                            Sign Up
                          </Menu.Item>
                        </Button>
                      </Grid.Column>
                    </>
                  ) : (
                    <>
                      <Grid.Column textAlign='center'>
                        <Header as='h4'>CUENTA</Header>
                        <Button as={Link} to='/account'>
                          <Menu.Item header active={isActive('/account')}>
                            <Icon name='user' size='large' />
                            Account
                          </Menu.Item>
                        </Button>
                      </Grid.Column>
                      <Grid.Column textAlign='center'>
                        <Header as='h4'>SALIR</Header>
                        <Button>
                          <Menu.Item header onClick={handleLogout}>
                            <Icon name='sign out' size='large' />
                            Logout
                          </Menu.Item>
                        </Button>
                      </Grid.Column>
                    </>
                  )}
                </Grid>
              </Popup>

              <Menu.Item
                header
                active={isActive('/search')}
                className='text-dark'
              >
                <Icon name='search' size='large' />
              </Menu.Item>

              <Menu.Item
                header
                className='text-dark'
                onClick={() => setOpened2(!opened2)}
              >
                <Icon name='cart' size='large' />
              </Menu.Item>

              <SideBarCart opened={opened2} setOpened={setOpened2} />

              <Sidebar
                as={Menu}
                animation='overlay'
                direction='right'
                icon='labeled'
                inverted
                vertical
                visible={opened}
              >
                {!profile.isEmpty && profile.role === 'admin' && (
                  <>
                    <div className='mt-2 pr-3 d-flex justify-content-end'>
                      <a
                        role='button'
                        className='text-white'
                        onClick={() => setOpened(false)}
                      >
                        <i className='fas fa-times fa-1x' />
                      </a>
                    </div>
                    <Link to='/create'>
                      <Menu.Item
                        header
                        active={isActive('/creates')}
                        className='text-white'
                      >
                        <Icon name='add square' size='large' />
                        Create
                      </Menu.Item>
                    </Link>
                  </>
                )}
                {!profile.isEmpty && profile.role === 'admin' && (
                  <Link to='/createType'>
                    <Menu.Item
                      header
                      active={isActive('/createTypes')}
                      className='text-white'
                    >
                      <Icon name='add square' size='large' />
                      Create Types
                    </Menu.Item>
                  </Link>
                )}
              </Sidebar>
            </div>
          </Menu.Menu>
        </Menu>
      </Responsive>
    </>
  )
}

const mapStateToProps = ({ firebase: { auth, profile } }) => ({
  auth,
  profile
})

export default compose(
  withRouter,
  firebaseConnect(),
  connect(mapStateToProps, null)
)(NavBar)
