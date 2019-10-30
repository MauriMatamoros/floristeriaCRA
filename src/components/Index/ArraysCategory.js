import React from 'react'
import { Container } from 'semantic-ui-react'
import { MDBBtn } from 'mdbreact'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import ItemsCarousel from 'react-items-carousel'

import CardCategory from './CardCategoty'

const arraysFlowers = [
  {
    id: '1',
    image:
      'http://3.bp.blogspot.com/-EHQ7m2jUFIk/VGY6WLi1o8I/AAAAAAAAQc4/MWwFtJQcyYA/s1600/La%2BGazania%2B01.JPG',
    title: 'Titulo de la categoria 1'
  },
  {
    id: '2',
    image:
      'http://3.bp.blogspot.com/-EHQ7m2jUFIk/VGY6WLi1o8I/AAAAAAAAQc4/MWwFtJQcyYA/s1600/La%2BGazania%2B01.JPG',
    title: 'Titulo de la categoria 2'
  },
  {
    id: '3',
    image:
      'http://3.bp.blogspot.com/-EHQ7m2jUFIk/VGY6WLi1o8I/AAAAAAAAQc4/MWwFtJQcyYA/s1600/La%2BGazania%2B01.JPG',
    title: 'Titulo de la categoria 3'
  },
  {
    id: '4',
    image:
      'http://3.bp.blogspot.com/-EHQ7m2jUFIk/VGY6WLi1o8I/AAAAAAAAQc4/MWwFtJQcyYA/s1600/La%2BGazania%2B01.JPG',
    title: 'Titulo de la categoria 4'
  },
  {
    id: '5',
    image:
      'https://s1.significados.com/foto/photo-credit-dora-alis-on-visualhunt_bg.png',
    title: 'Titulo de la categoria 5'
  },
  {
    id: '6',
    image:
      'https://s1.significados.com/foto/photo-credit-dora-alis-on-visualhunt_bg.png',
    title: 'Titulo de la categoria 6'
  },
  {
    id: '7',
    image:
      'https://s1.significados.com/foto/photo-credit-dora-alis-on-visualhunt_bg.png',
    title: 'Titulo de la categoria 7'
  },
  {
    id: '8',
    image:
      'https://s1.significados.com/foto/photo-credit-dora-alis-on-visualhunt_bg.png',
    title: 'Titulo de la categoria 8'
  },
  {
    id: '9',
    image:
      'https://s1.significados.com/foto/photo-credit-dora-alis-on-visualhunt_bg.png',
    title: 'Titulo de la categoria 9'
  },
  {
    id: '10',
    image:
      'https://s1.significados.com/foto/photo-credit-dora-alis-on-visualhunt_bg.png',
    title: 'Titulo de la categoria 10'
  }
]

class ArraysCategory extends React.Component {
  constructor() {
    super()
    this.state = {
      index: 0,
      responsive: 5
    }
  }

  _prev = () => {
    this.setState({ index: this.state.index - 1 })
  }
  _next = () => {
    this.setState({ index: this.state.index + 1 })
  }

  render() {
    const chevronWidth = 40
    return (
      <>
        <Container fluid className='pt-5 pb-5'>
          <div className='text-center pb-5'>
            <h1 className='font-weight-bold'>Lo que buscas</h1>
          </div>
        </Container>
        <div style={{ padding: `0 ${chevronWidth}px` }}>
          <ItemsCarousel
            requestToChangeActive={() => console.log('Hola')}
            activeItemIndex={this.state.index}
            /* numberOfCards es la propiedad donde se agrupara los elementos en el responsive */
            numberOfCards={this.state.responsive}
            gutter={20}
            leftChevron={
              <MDBBtn
                onClick={() => this._prev()}
                size='lg'
                rounded
                color='black'
              >
                <ArrowBackIosIcon />
              </MDBBtn>
            }
            rightChevron={
              <MDBBtn
                onClick={() => this._next()}
                size='lg'
                color='black'
                rounded
              >
                <ArrowForwardIosIcon />
              </MDBBtn>
            }
            outsideChevron
            chevronWidth={chevronWidth}
          >
            {arraysFlowers.map(array => (
              <CardCategory key={array.id} array={array} />
            ))}
          </ItemsCarousel>
        </div>
      </>
    )
  }
}

export default ArraysCategory
