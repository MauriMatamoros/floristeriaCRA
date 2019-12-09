import React from 'react'
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer
} from 'mdbreact'
import { Container } from 'semantic-ui-react'

const New = props => {
  return (
    <Container fluid>
      <div className='container mbt-10em text-center'>
        <div className='pb-4'>
          <h2>Nuevo arreglo de San Valentin</h2>
          <p>Blanca | 02/12/2019 - 09:12 pm</p>
        </div>

        <MDBContainer>
          <MDBCarousel
            activeItem={1}
            length={3}
            showControls={true}
            showIndicators={true}
            interval={6000}
            //onHoverStop={false}
          >
            <MDBCarouselInner>
              <MDBCarouselItem itemId='1'>
                <MDBView>
                  <img
                    className='d-block w-100'
                    src='/assets/News/img-1.jpg'
                    alt='First slide'
                  />
                </MDBView>
              </MDBCarouselItem>
              <MDBCarouselItem itemId='2'>
                <MDBView>
                  <img
                    className='d-block w-100'
                    src='/assets/News/img-2.jpg'
                    alt='Second slide'
                  />
                </MDBView>
              </MDBCarouselItem>
              <MDBCarouselItem itemId='3'>
                <MDBView>
                  <img
                    className='d-block w-100'
                    src='/assets/News/img-3.jpg'
                    alt='Third slide'
                  />
                </MDBView>
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
        </MDBContainer>
        <div className='pt-4'>
          <p className='text-justify' style={styles.fontSize}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
      </div>
    </Container>
  )
}

const styles = {
  fontSize: {
    fontSize: 18
  }
}

export default New
