import React, { useState } from 'react'
import {
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

const widthScreen = window.screen.width
const NavBar = ({ location, auth, profile, firebase }) => {
  const [opened, setOpened] = useState(false)
  const [opened2, setOpened2] = useState(false)
  const [index, setIndex] = useState(true)
  const [visibleSearch, onChangeSearch] = useState(false)

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
                <Dropdown.Item
                  className='text-dark'
                  as={Link}
                  to='/'
                  onClick={() => onChangeSearch(false)}
                >
                  INICIO
                </Dropdown.Item>
                <Dropdown.Item
                  className='text-dark'
                  as={Link}
                  to='/gallery'
                  onClick={() => onChangeSearch(false)}
                >
                  GALERIA
                </Dropdown.Item>
                <Dropdown.Item
                  className='text-dark'
                  as={Link}
                  to='/arrays'
                  onClick={() => onChangeSearch(false)}
                >
                  ARREGLOS
                </Dropdown.Item>
                <Dropdown.Item
                  className='text-dark'
                  as={Link}
                  to='/blog'
                  onClick={() => onChangeSearch(false)}
                >
                  NOTICIAS
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
                        <Dropdown.Item
                          as={Link}
                          to='/login'
                          onClick={() => onChangeSearch(false)}
                        >
                          <Icon name='sign in' size='large' />
                          INGRESAR
                        </Dropdown.Item>
                        <Dropdown.Item
                          as={Link}
                          to='/signup'
                          onClick={() => onChangeSearch(false)}
                        >
                          <Icon name='signup' size='large' />
                          REGISTRARSE
                        </Dropdown.Item>
                      </>
                    ) : (
                      <>
                        <Dropdown.Item
                          as={Link}
                          to='/account'
                          onClick={() => onChangeSearch(false)}
                        >
                          <Icon name='user' size='large' />
                          CUENTA
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => {
                            handleLogout()
                            onChangeSearch(false)
                          }}
                        >
                          <Icon name='sign out' size='large' />
                          SALIR
                        </Dropdown.Item>
                      </>
                    )}
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown.Item
                  className='text-dark'
                  onClick={() => onChangeSearch(!visibleSearch)}
                >
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
                      <button
                        type='button'
                        className='btn text-white'
                        onClick={() => setOpened(false)}
                      >
                        <i className='fas fa-times fa-2x' />
                      </button>
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
                {!profile.isEmpty && profile.role === 'admin' && (
                  <Link to='/authorize_products'>
                    <Menu.Item
                      header
                      active={isActive('/authorize_products')}
                      className='text-white'
                    >
                      <Icon name='add square' size='large' />
                      Authorize products
                    </Menu.Item>
                  </Link>
                )}
              </Sidebar>
            </div>
            {/* Aqui inicia el search */}
            <div style={{ width: '100%' }}>
              {visibleSearch ? (
                <div style={styles.containerSearch}>
                  <div style={styles.containerCloseSearch}>
                    <button
                      className='btn btn-link'
                      onClick={() => onChangeSearch(false)}
                    >
                      <p className='h6'>X</p>
                    </button>
                  </div>
                  <div className='p-3'>
                    <input
                      className='form w-100'
                      placeholder='Buscar...'
                      style={styles.inputSearch}
                    />
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </Menu>
      </Responsive>

      <Responsive minWidth={750}>
        <nav className='navbar navbar-expand navbar-light'>
          <div
            className='container-fluid navbar-transparent'
            style={index ? styles.containerNavbar : null}
          >
            <div className='row w-100 m-0'>
              <div className='col-12 p-0 m-0'>
                <div className='d-flex flex-row justify-content-between'>
                  <div className='w-100 padding-left-logo'>
                    <img
                      src='/assets/logo.png'
                      style={styles.logo}
                      alt='logo-foristeria'
                    />
                  </div>
                  <ul className='navbar-nav pt-3'>
                    <Popup
                      trigger={
                        <li className='nav-item'>
                          <button
                            type='button'
                            className='btn btn-link text-dark p-0 m-0'
                          >
                            <img
                              src={
                                index
                                  ? './assets/icons/icon-user-white.png'
                                  : './assets/icons/icon-user-dark.png'
                              }
                              alt='user-icon'
                              style={styles.icon}
                            />
                          </button>
                        </li>
                      }
                      flowing
                      hoverable
                    >
                      <Grid centered divided columns={1}>
                        {auth.isEmpty ? (
                          <>
                            <Grid.Column textAlign='center'>
                              <Button
                                as={Link}
                                to='/login'
                                style={styles.btnHidden}
                                className='btn btn-outline-dark w-75'
                              >
                                <Menu.Item
                                  header
                                  active={isActive('/login')}
                                  onClick={() => setIndex(false)}
                                >
                                  <p>Ingresar</p>
                                </Menu.Item>
                              </Button>
                            </Grid.Column>
                            <Grid.Column textAlign='center'>
                              <Button
                                as={Link}
                                to='/signup'
                                style={styles.btnHidden}
                                className='btn btn-dark w-75'
                              >
                                <Menu.Item
                                  header
                                  active={isActive('/signup')}
                                  onClick={() => setIndex(false)}
                                >
                                  <p>Registrarse</p>
                                </Menu.Item>
                              </Button>
                            </Grid.Column>
                          </>
                        ) : (
                          <>
                            <Grid.Column textAlign='center'>
                              <Button
                                as={Link}
                                to='/account'
                                onClick={() => setIndex(false)}
                                style={styles.btnHidden}
                                className='btn btn-outline-dark w-75'
                              >
                                <Menu.Item header active={isActive('/account')}>
                                  Cuenta
                                </Menu.Item>
                              </Button>
                            </Grid.Column>
                            <Grid.Column textAlign='center'>
                              <Button
                                style={styles.btnHidden}
                                className='btn btn-dark w-75'
                              >
                                <Menu.Item header onClick={handleLogout}>
                                  Salir
                                </Menu.Item>
                              </Button>
                            </Grid.Column>
                          </>
                        )}
                      </Grid>
                    </Popup>

                    <li className='nav-item'>
                      <button
                        type='button'
                        className='btn btn-link text-dark p-0 m-0'
                        onClick={() => onChangeSearch(!visibleSearch)}
                      >
                        <img
                          src={
                            index
                              ? './assets/icons/icon-search-white.png'
                              : './assets/icons/icon-search-dark.png'
                          }
                          alt='icon-search'
                          style={styles.icon}
                        />
                      </button>
                    </li>

                    <li className='nav-item'>
                      <button
                        type='button'
                        className='btn btn-link text-dark p-0 m-0'
                        style={{ position: 'relative' }}
                        onClick={() => setOpened2(!opened2)}
                      >
                        <div style={styles.containerCount}>
                          <p style={styles.count}>1</p>
                        </div>
                        <img
                          src={
                            index
                              ? './assets/icons/icon-bag-white.png'
                              : './assets/icons/icon-bag-dark.png'
                          }
                          alt='icon-bag'
                          style={styles.icon}
                        />
                      </button>
                    </li>
                    {!profile.isEmpty && profile.role === 'admin' && (
                      <li className='nav-item'>
                        <button
                          type='button'
                          onClick={() => setOpened(!opened)}
                          className='btn btn-link text-dark p-0 m-0'
                        >
                          <img
                            src={
                              index
                                ? './assets/icons/icon-settings-white.png'
                                : './assets/icons/icon-settings-dark.png'
                            }
                            alt='icon-settings'
                            style={styles.icon}
                          />
                        </button>
                      </li>
                    )}
                  </ul>
                </div>
                <div className='d-flex justify-content-center'>
                  <ul className='navbar-nav'>
                    <li className='nav-item'>
                      <Link
                        to='/'
                        onClick={() => {
                          setIndex(true)
                          onChangeSearch(false)
                        }}
                      >
                        <p
                          className={`${
                            index ? 'text-white' : 'text-dark'
                          } font-weight-bold`}
                        >
                          INICIO
                        </p>
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link
                        to='/gallery'
                        onClick={() => {
                          setIndex(false)
                          onChangeSearch(false)
                        }}
                      >
                        <p
                          className={`${
                            index ? 'text-white' : 'text-dark'
                          } font-weight-bold`}
                        >
                          GALERIA
                        </p>
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link
                        to='/arrays'
                        onClick={() => {
                          setIndex(false)
                          onChangeSearch(false)
                        }}
                      >
                        <p
                          className={`${
                            index ? 'text-white' : 'text-dark'
                          } font-weight-bold`}
                        >
                          ARREGLOS
                        </p>
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link
                        to='/blog'
                        onClick={() => {
                          setIndex(false)
                          onChangeSearch(false)
                        }}
                      >
                        <p
                          className={`${
                            index ? 'text-white' : 'text-dark'
                          } font-weight-bold`}
                        >
                          NOTICIAS
                        </p>
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
                            <button
                              type='button'
                              className='btn text-white'
                              onClick={() => {
                                setOpened(false)
                                onChangeSearch(false)
                              }}
                            >
                              <i className='fas fa-times fa-1x' />
                            </button>
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
                      {!profile.isEmpty && profile.role === 'admin' && (
                        <Link to='/authorize_products'>
                          <Menu.Item
                            header
                            active={isActive('/authorize_products')}
                            className='text-white'
                          >
                            <Icon name='add square' size='large' />
                            Authorize products
                          </Menu.Item>
                        </Link>
                      )}
                    </Sidebar>
                  </ul>
                </div>
                {/* Aqui inicia el search */}
                {visibleSearch ? (
                  <div style={styles.containerSearch}>
                    <div style={styles.containerCloseSearch}>
                      <button
                        className='btn btn-link'
                        onClick={() => onChangeSearch(false)}
                      >
                        <p className='h6'>X</p>
                      </button>
                    </div>
                    <div className='p-4'>
                      <input
                        className='form w-100'
                        placeholder='Buscar...'
                        style={styles.inputSearch}
                      />
                    </div>
                  </div>
                ) : null}
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
  },
  icon: {
    width: 30,
    height: 'auto'
  },
  containerNavbar: {
    boxShadow: 'inset 0 50px 70px'
  },
  containerCount: {
    position: 'absolute',
    backgroundColor: 'red',
    left: '60%',
    borderRadius: 50,
    width: 20
  },
  count: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  btnHidden: {
    color: 'white'
  },
  /* Search */
  containerSearch: {
    backgroundColor: '#FFF',
    height: widthScreen < 768 ? 60 : 150
  },
  containerCloseSearch: {
    float: 'right'
  },
  inputSearch: {
    border: 0,
    height: widthScreen < 768 ? 32 : 60,
    paddingLeft: widthScreen < 768 ? 25 : 50,
    fontSize: widthScreen < 768 ? '1rem' : '1.5rem'
  }
}

export default compose(
  withRouter,
  firebaseConnect(),
  connect(mapStateToProps, null)
)(NavBar)
