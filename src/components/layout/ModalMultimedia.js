import React from 'react'
import { Header, Modal } from 'semantic-ui-react'

const ModalMultimedia = props => (
  <Modal
    trigger={
      <a role='button' style={styles.textDecoration}>
        {props.render}
      </a>
    }
    basic
    closeIcon
    size='large'
  >
    <Header content='Nombre de la imagen' />
    <Modal.Content>{props.render}</Modal.Content>
  </Modal>
)

const styles = {
  textDecoration: {
    textDecoration: 'none'
  }
}

export default ModalMultimedia
