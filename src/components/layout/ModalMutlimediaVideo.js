import React from 'react'
import { Header, Modal, Embed } from 'semantic-ui-react'

const ModalMultimediaVideo = props => (
  <Modal
    trigger={
      <button className='btn p-0' type='button' style={styles.textDecoration}>
        {props.render}
      </button>
    }
    basic
    closeIcon
    size='large'
  >
    <Header content='Nombre del video' />
    <p className='pl-4'>Fecha del video en que se subio</p>
    <Modal.Content>
      <Embed
        id='gHzPCXTv8pY'
        // Imagen que tambien sera ingresada por el administrador para el placeholder
        placeholder='https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2019/10/22/15717587777250.jpg'
        source='youtube'
      />
    </Modal.Content>
  </Modal>
)

const styles = {
  textDecoration: {
    textDecoration: 'none'
  }
}

export default ModalMultimediaVideo
