import React from 'react'
import { Modal, Image } from 'semantic-ui-react'

const ModalProductForm = props => {
  return (
    <>
      <Modal
        trigger={
          <button
            className='btn p-0'
            type='button'
            style={styles.textDecoration}
          >
            <Image src={props.src} style={styles.imageArray} />
          </button>
        }
        basic
        closeIcon
        size='large'
        style={styles.container}
      >
        <Modal.Content style={styles.content}>
          <Image src={props.src} style={styles.imageArrayModal} />
        </Modal.Content>
      </Modal>
    </>
  )
}

const styles = {
  container: {
    width: 'auto',
    height: 1000
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageArray: {
    width: 'auto',
    height: 'auto'
  },
  imageArrayModal: {
    width: 'auto',
    height: 'auto'
  },
  textDecoration: {
    textDecoration: 'none'
  }
}

export default ModalProductForm
