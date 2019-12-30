import React from 'react'

import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from 'mdbreact'

const ModalBlog = props => {
  return (
    <>
      <MDBContainer>
        <MDBModal
          isOpen={props.openModal}
          toggle={() => props.event()}
          size='xl'
        >
          <MDBModalHeader
            toggle={() => props.event()}
            style={styles.containerHeader}
            closeAriaLabel='text-blue'
          >
            <h1>Título de la noticia</h1>
          </MDBModalHeader>
          <MDBModalBody>
            <div className='container mt-5 mb-5'>
              <div className='row'>
                <div className='col'>
                  <img
                    src='./assets/News/img-2.jpg'
                    alt='new'
                    style={styles.modalImage}
                  />
                  <p className='pt-5 text-left' style={styles.fontSize}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur.
                  </p>
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
    width: '50%',
    height: 'auto'
  },
  fontSize: {
    fontSize: 16
  }
}

export default ModalBlog
