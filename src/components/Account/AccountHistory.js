import React, { Component } from 'react'

import HistoryItem from '../Account/HistoryItem'
import ModalItemHistory from '../Account/ModalItemHistory'
import Search from '../layout/Search'

class AccountHistory extends Component {
  state = {
    modal: false
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    })
  }

  render() {
    return (
      <>
        <div className='card'>
          <div className='card-header'>
            <Search />
          </div>
          <div style={styles.containerItemHistory}>
            <div style={styles.overflowLimit}>
              <HistoryItem toggle={this.toggle} />
              <HistoryItem toggle={this.toggle} />
              <HistoryItem toggle={this.toggle} />
              <HistoryItem toggle={this.toggle} />
            </div>
          </div>
        </div>
        {/* ------------------- Desde aqui empieza la modal ------------------------- */}
        <ModalItemHistory openModal={this.state.modal} event={this.toggle} />
      </>
    )
  }
}

const styles = {
  containerItemHistory: {
    overflowY: 'scroll',
    overflowX: 'hidden'
  },
  overflowLimit: {
    height: 500
  }
}

export default AccountHistory
