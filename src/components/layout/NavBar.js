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
                  <>
                    <Link to='/authorize_products'>
                      <Menu.Item
                        header
                        active={isActive('/authorize_products')}
                        className='text-white'
                      >
                        <Icon name='add square' size='large' />
                        Authorize
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
                {!profile.isEmpty && profile.role === 'admin' && (
                  <Link to='/createCoupon'>
                    <Menu.Item
                      header
                      active={isActive('/createCoupon')}
                      className='text-white'
                    >
                      <Icon name='add square' size='large' />
                      Create Coupon
                    </Menu.Item>
                  </Link>
                )}
              </Sidebar>
            </div>
          </div>
        </Menu>
      </Responsive>
      <Responsive minWidth={750}>
        <nav className='navbar navbar-expand navbar-light'>
          <div className='container-fluid navbar-transparent'>
            <div className='row w-100'>
              <div className='col-12'>
                <div className='d-flex flex-row justify-content-between'>
                  <div className='w-100 padding-left-logo'>
                    <img src='/assets/logo.png' style={styles.logo} />
                  </div>
                  <ul className='navbar-nav pt-3'>
                    <Popup
                      trigger={
                        <li className='nav-item'>
                          <a role='button' className='text-dark'>
                            <Icon name='user' size='large' />
                          </a>
                        </li>
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

                    <li className='nav-item'>
                      <a role='button' className='text-dark'>
                        <Icon name='search' size='large' />
                      </a>
                    </li>

                    <li className='nav-item'>
                      <a
                        role='button'
                        className='text-dark'
                        onClick={() => setOpened2(!opened2)}
                      >
                        <Icon name='cart' size='large' />
                      </a>
                    </li>
                    {!profile.isEmpty && profile.role === 'admin' && (
                      <li className='nav-item'>
                        <a
                          role='button'
                          onClick={() => setOpened(!opened)}
                          className='text-dark'
                        >
                          <Icon name='settings' size='large' />
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
                <div className='d-flex justify-content-center'>
                  <ul className='navbar-nav'>
                    <li className='nav-item'>
                      <Link to='/'>
                        <p className='text-dark font-weight-bold'>INICIO</p>
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link to='/gallery'>
                        <p className='text-dark font-weight-bold'>GALERIA</p>
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link to='/arrays'>
                        <p className='text-dark font-weight-bold'>ARREGLOS</p>
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link to='/blog'>
                        <p className='text-dark font-weight-bold'>NOTICIAS</p>
                      </Link>
                    </li>

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
                        <>
                          <Link to='/authorize_products'>
                            <Menu.Item
                              header
                              active={isActive('/authorize_products')}
                              className='text-white'
                            >
                              <Icon name='add square' size='large' />
                              Authorize
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
                      {!profile.isEmpty && profile.role === 'admin' && (
                        <Link to='/createCoupon'>
                          <Menu.Item
                            header
                            active={isActive('/createCoupon')}
                            className='text-white'
                          >
                            <Icon name='add square' size='large' />
                            Create Coupon
                          </Menu.Item>
                        </Link>
                      )}
                    </Sidebar>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </Responsive>
    </>
  )
}

const mapStateToProps = ({ firebase: { auth, profile } }) => ({
  auth,
  profile
})

const styles = {
  logo: {
    width: 163,
    height: 80
  }
}

export default compose(
  withRouter,
  firebaseConnect(),
  connect(mapStateToProps, null)
)(NavBar)
