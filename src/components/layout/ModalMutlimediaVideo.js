import React from 'react'
import { Header, Modal } from 'semantic-ui-react'

const ModalMultimediaVideo = props => (
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
    <Header content='Nombre del video' />
    <p className='pl-4'>Fecha del video en que se subio</p>
    <Modal.Content>
      <iframe
        width='100%'
        height='600'
        src={props.video}
        frameborder='0'
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      ></iframe>
    </Modal.Content>
  </Modal>
)

const styles = {
  textDecoration: {
    textDecoration: 'none'
  }
}

export default ModalMultimediaVideo
