import React from 'react'

import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from 'mdbreact'

import { Image } from 'semantic-ui-react'

const ModalItemHistory = props => {
  return (
    <>
      <MDBContainer>
        <MDBModal
          isOpen={props.openModal}
          toggle={() => props.event()}
          size='lg'
        >
          <MDBModalHeader
            toggle={() => props.event()}
            style={styles.containerHeader}
          >
            <Image src='./assets/logo.png' style={styles.imageHeaderModal} />
          </MDBModalHeader>
          <MDBModalBody>
            <div className='container mt-5 mb-5'>
              <div className='row'>
                <div className='col-md-6 col-12'>
                  <img
                    src='https://www.florespedia.com/Imagenes/flores-bonitas-girasoles.jpg'
                    style={styles.modalImage}
                    alt='floristeria honduras'
                  />
                  <div className='mt-4 mb-2'>
                    <p>
                      <span className='font-weight-bold'>Categoria: </span>
                      Amor
                    </p>
                  </div>
                  <div className='mb-2'>
                    <p>
                      <span className='font-weight-bold'>Destinatario: </span>
                      Ana Moncada
                    </p>
                  </div>
                </div>
                <div className='col-md-6 col-12 '>
                  <div className='mb-2'>
                    <p>
                      <span className='font-weight-bold'>Producto: </span>
                      Girasoles indios
                    </p>
                  </div>
                  <div className='mb-2'>
                    <p>
                      <span className='font-weight-bold'>Total pagado: </span>
                      L.250.00 / $.10.00
                    </p>
                  </div>
                  <div className='mb-2'>
                    <p>
                      <span className='font-weight-bold'>Cantidad: </span>2
                    </p>
                  </div>
                  <div className='mb-2'>
                    <p>
                      <span className='font-weight-bold'>Descripción: </span>
                      Lorem Ipsum es simplemente el texto de relleno de las
                      imprentas y archivos de texto. Lorem Ipsum ha sido el
                      texto de relleno estándar de las industrias desde el año
                      1500, cuando un impresor (N. del T. persona que se dedica
                      a la imprenta) desconocido usó una galería de textos y los
                      mezcló de tal manera que logró hacer un libro de textos
                      especimen.
                    </p>
                  </div>
                  <div className='mb-2'>
                    <p>
                      <span className='font-weight-bold'>
                        Dirección de envio:{' '}
                      </span>
                      Boulevar Los Andres ...
                    </p>
                  </div>
                  <div className='mb-2'>
                    <p>
                      <span className='font-weight-bold'>
                        Fecha de compra:{' '}
                      </span>
                      Mayo Lunes 10, 2019
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color='dark' onClick={() => props.event()}>
              Cerrar
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    </>
  )
}

const styles = {
  modalImage: {
    width: '100%',
    height: 'auto'
  },
  imageHeaderModal: {
    width: 120,
    height: 70
  },
  containerHeader: { backgroundColor: '#E09D55' }
}

export default ModalItemHistory
