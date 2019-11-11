import React, { Component } from 'react'
import { Grid, Menu, Container } from 'semantic-ui-react'
import { connect } from 'react-redux'

// Components
import AccountDetails from '../components/Account/AccountDetails'
import AccountHeader from '../components/Account/AccountHeader'
import ChangePassword from '../components/Account/ChangePassword'
import AccountHistory from '../components/Account/AccountHistory'
import WishList from '../components/Account/WishList'

class Account extends Component {
  state = { activeItem: 'MI CUENTA', event: null }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  eventAccount = activeItem => {
    switch (activeItem) {
      case 'EDITAR PERFIL':
        return <AccountDetails />
      case 'CAMBIAR CONTRASEÑA':
        return <ChangePassword />
      case 'MIS DIRECCIONES':
        return 'h3'
      case 'MI TARJETA DE CRÉDITO':
        return 'h4'
      case 'WHISH LIST':
        return <WishList />
      case 'HISTORIAL DE COMPRAS':
        return <AccountHistory />
      default:
        return <AccountHeader profile={this.props.profile} />
    }
  }

  render() {
    const { activeItem } = this.state
    const { name, lastName } = this.props.profile

    return (
      <Container className='mbt-10em'>
        <div style={styles.containerWelcome}>
          <h5 className='text-center'>
            Hola {name} {lastName}
          </h5>
          <p className='text-center'>Bienvenido a Floristeria Honduras</p>
        </div>
        <Grid>
          <Grid.Column width={4}>
            <Menu fluid vertical tabular>
              <Menu.Item
                name='MI CUENTA'
                active={activeItem === 'MI CUENTA'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='EDITAR PERFIL'
                active={activeItem === 'EDITAR PERFIL'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='CAMBIAR CONTRASEÑA'
                active={activeItem === 'CAMBIAR CONTRASEÑA'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='MIS DIRECCIONES'
                active={activeItem === 'MIS DIRECCIONES'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='MI TARJETA DE CRÉDITO'
                active={activeItem === 'MI TARJETA DE CRÉDITO'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='WHISH LIST'
                active={activeItem === 'WHISH LIST'}
                onClick={this.handleItemClick}
              />

              <Menu.Item
                name='HISTORIAL DE COMPRAS'
                active={activeItem === 'HISTORIAL DE COMPRAS'}
                onClick={this.handleItemClick}
              />
            </Menu>
          </Grid.Column>

          <Grid.Column stretched width={12}>
            {this.eventAccount(this.state.activeItem)}
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}
const mapStateToProps = ({ firebase: { auth, profile } }) => ({
  auth,
  profile
})

const styles = {
  containerWelcome: {
    backgroundColor: '#D3D3D3',
    paddingTop: '2rem',
    paddingBottom: '2rem'
  }
}

export default connect(mapStateToProps)(Account)

/* 
      <AccountDetails />
      <ChangePassword /> */
