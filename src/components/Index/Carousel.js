import React from 'react'
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer
} from 'mdbreact'
import ButtonWhatsApp from '../layout/ButtonWhatsApp'

const CarouselPage = () => {
  return (
    <>
      <MDBContainer fluid style={styles.container}>
        <MDBCarousel
          activeItem={1}
          length={3}
          showControls={true}
          showIndicators={true}
          interval={6000}
          //onHoverStop={false}
        >
          <MDBCarouselInner style={{ position: 'relative' }}>
            <MDBCarouselItem itemId='1'>
              <MDBView>
                <img
                  className='d-block w-100'
                  src='https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg'
                  alt='First slide'
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId='2'>
              <MDBView>
                <img
                  className='d-block w-100'
                  src='https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg'
                  alt='Second slide'
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId='3'>
              <MDBView>
                <img
                  className='d-block w-100'
                  src='https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg'
                  alt='Third slide'
                />
              </MDBView>
            </MDBCarouselItem>
            <div style={styles.containerBtnWhatsApp}>
              <ButtonWhatsApp />
            </div>
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
    </>
  )
}

const styles = {
  containerBtnWhatsApp: {
    position: 'absolute',
    width: '100%',
    height: 80,
    zIndex: 3,
    left: '90%',
    top: '83%',
    right: 'auto',
    bottom: 'auto'
  },
  container: {
    paddingRight: 0,
    paddingLeft: 0
  }
}

export default CarouselPage
