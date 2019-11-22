import React from 'react'
import { Header, Modal } from 'semantic-ui-react'

const ModalMultimediaImage = props => (
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
    <p className='pl-4'>Fecha de la image en que se subio</p>
    <Modal.Content>{props.render}</Modal.Content>
  </Modal>
)

const styles = {
  textDecoration: {
    textDecoration: 'none'
  }
}

export default ModalMultimediaImage
