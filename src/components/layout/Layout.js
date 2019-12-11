import React from 'react'
import { Container } from 'semantic-ui-react'
import { connect } from 'react-redux'

import NavBar from './NavBar'
import Footer from './Footer'

const Layout = ({ children, isAuthenticated }) => {
  return (
    <>
      <NavBar user={isAuthenticated} />
      <Container fluid style={styles.containerGeneral}>
        {children}
      </Container>
      <Footer />
    </>
  )
}

const styles = {
  containerGeneral: {
    minHeight: '50vh',
    paddingTop: 0.1,
    paddingRight: 0,
    paddingLeft: 0
  }
}

const mapStateToProps = ({ auth: { isAuthenticated } }) => ({ isAuthenticated })

export default connect(mapStateToProps)(Layout)
