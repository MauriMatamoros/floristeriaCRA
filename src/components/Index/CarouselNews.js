import React from 'react'
import { Container } from 'semantic-ui-react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import ItemsCarousel from 'react-items-carousel'

import CarouselNewsItem from './CarouselNewsItem'

const array = [
  {
    id: 1,
    name: 'Nombre',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx_dYh06U7wfZmXF3Ar6d76PXrBx2PzP4emDP8FBKOhT2ka6MXwg&s'
  },
  {
    id: 2,
    name: 'Nombre',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx_dYh06U7wfZmXF3Ar6d76PXrBx2PzP4emDP8FBKOhT2ka6MXwg&s'
  },
  {
    id: 3,
    name: 'Nombre',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx_dYh06U7wfZmXF3Ar6d76PXrBx2PzP4emDP8FBKOhT2ka6MXwg&s'
  },
  {
    id: 4,
    name: 'Nombre',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx_dYh06U7wfZmXF3Ar6d76PXrBx2PzP4emDP8FBKOhT2ka6MXwg&s'
  },
  {
    id: 5,
    name: 'Nombre',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx_dYh06U7wfZmXF3Ar6d76PXrBx2PzP4emDP8FBKOhT2ka6MXwg&s'
  },
  {
    id: 6,
    name: 'Ultimo item',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx_dYh06U7wfZmXF3Ar6d76PXrBx2PzP4emDP8FBKOhT2ka6MXwg&s'
  }
]

const chevronWidth = 40
var intervalCarousel

class CarouselNews extends React.Component {
  constructor() {
    super()
    this.state = {
      index: 0,
      responsive: 1
    }
  }

  componentDidMount() {
    intervalCarousel = setInterval(() => this.onchangeState(), 5000)
  }

  componentWillUnmount() {
    clearInterval(intervalCarousel)
  }

  onchangeState = () => {
    console.log('state: ', this.state.index)
    this.setState({
      index: this.state.index + 1
    })
  }

  _prev = () => {
    this.setState({ index: this.state.index - 1 })
  }
  _next = () => {
    this.setState({ index: this.state.index + 1 })
  }

  render() {
    return (
      <div className='pl-5 pr-5'>
        <Container fluid className='pb-5'>
          <div className='text-center pb-5'>
            <h2>Lo más nuevo</h2>
          </div>
        </Container>
        <div style={{ padding: `0 ${chevronWidth}px` }}>
          <ItemsCarousel
            infiniteLoop={true}
            requestToChangeActive={() => {}}
            activeItemIndex={this.state.index}
            /* numberOfCards es la propiedad donde se agrupara los elementos en el responsive */
            numberOfCards={this.state.responsive}
            gutter={20}
            leftChevron={
              <div
                onClick={() => this._prev()}
                size='lg'
                rounded
                color='black'
                style={styles.btnNextPre}
              >
                <ArrowBackIosIcon style={styles.icon} />
              </div>
            }
            rightChevron={
              <div
                onClick={() => this._next()}
                size='lg'
                color='black'
                style={styles.btnNextPre}
              >
                <ArrowForwardIosIcon style={styles.icon} />
              </div>
            }
            chevronWidth={chevronWidth}
          >
            {array.map(array => (
              <CarouselNewsItem key={array.id} array={array} />
            ))}
          </ItemsCarousel>
        </div>
      </div>
    )
  }
}

const styles = {
  btnNextPre: {
    width: 100,
    height: 40,
    marginBottom: 150,
    borderRadius: 50,
    backgroundColor: 'black',
    opacity: 0.8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    color: '#FFF'
  }
}

export default CarouselNews
