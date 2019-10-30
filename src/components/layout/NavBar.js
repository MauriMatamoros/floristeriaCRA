import React from 'react';
import {
  Header,
  Button,
  Popup,
  Grid,
  Icon,
  Image,
  Menu,
  Responsive,
  Dropdown
} from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { firebase } from '../../firebase';

const NavBar = ({ location, user }) => {
  const isActive = route => route === location.pathname;
  // const isRoot = user && user.role === 'root'
  // const isAdmin = user && user.role === 'admin'
  // const isRootOrAdmin = isRoot || isAdmin

  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Responsive maxWidth={750}>
        <Menu fluid inverted stackable id='menu' className='rounded-0'>
          <div className='w-100'>
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
                    {!user ? (
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
                <Dropdown.Item className='text-dark' as={Link} to='/search'>
                  <Icon name='search' size='big' />
                  BUSCAR
                </Dropdown.Item>
                <Dropdown.Item className='text-dark' as={Link} to='/cart'>
                  <Icon name='cart' size='big' />
                  COMPRAS
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
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
                  <Image
                    size='mini'
                    src='/static/logo.svg'
                    style={{ marginRight: '1em' }}
                  />
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
                  {!user ? (
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

              <Link to='/'>
                <Menu.Item
                  header
                  active={isActive('/search')}
                  className='text-dark'
                >
                  <Icon name='search' size='large' />
                </Menu.Item>
              </Link>

              <Link to='/cart'>
                <Menu.Item
                  header
                  active={isActive('/cart')}
                  className='text-dark'
                >
                  <Icon name='cart' size='large' />
                </Menu.Item>
              </Link>
              {user && (
                <Link to='/create'>
                  <Menu.Item
                    header
                    active={isActive('/create')}
                    className='text-dark'
                  >
                    <Icon name='add square' size='large' />
                    Create
                  </Menu.Item>
                </Link>
              )}
            </div>
          </Menu.Menu>
        </Menu>
      </Responsive>
    </>
  );
};

export default withRouter(NavBar);
