import React from 'react'
import { Container } from 'semantic-ui-react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import ItemsCarousel from 'react-items-carousel'
import axios from 'axios'
import { firebaseConnect } from 'react-redux-firebase'

import CardCategory from './CardCategoty'
import Spinner from '../Spinner/Spinner'

var intervalCarousel

class ArraysCategory extends React.Component {
  constructor() {
    super()
    this.state = {
      index: 0,
      responsive: 1,
      loading: true,
      arraysFlowers: []
    }
  }

  onChangeCarousel = () => {
    this.setState({ index: this.state.index + 1 })
  }

  componentWillUnmount() {
    clearInterval(intervalCarousel)
  }

  _prev = () => {
    this.setState({ index: this.state.index - 1 })
  }
  _next = () => {
    this.setState({ index: this.state.index + 1 })
  }

  onChangeResponsiveCard = () => {
    const quantityResponsive = parseInt(window.screen.width / 300)
    this.setState({ responsive: quantityResponsive })
  }

  async componentDidMount() {
    intervalCarousel = setInterval(() => this.onChangeCarousel(), 4000)
    this.onChangeResponsiveCard()
    const { data } = await axios.post(
      'http://localhost:5001/floristeria-cra/us-central1/getTypes'
    )
    const flowerArray = []
    for (const type of data) {
      const image = await this.props.firebase
        .storage()
        .ref(`types/${type.id}-${type.image}`)
        .getDownloadURL()
      flowerArray.push({ ...type, image })
    }
    this.setState(() => ({ loading: false, arraysFlowers: flowerArray }))
  }

  render() {
    const chevronWidth = 40
    return this.state.loading ? (
      <Spinner />
    ) : (
      <div className='pl-5 pr-5'>
        <Container fluid className='pt-5 pb-5'>
          <div className='text-center pb-5'>
            <h2>Lo que buscas</h2>
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
                style={styles.btnNextPre}
              >
                <ArrowBackIosIcon style={styles.icon} />
              </div>
            }
            rightChevron={
              <div
                onClick={() => this._next()}
                size='lg'
                style={styles.btnNextPre}
              >
                <ArrowForwardIosIcon style={styles.icon} />
              </div>
            }
            outsideChevron
            chevronWidth={chevronWidth}
          >
            {this.state.arraysFlowers.map(array => (
              <CardCategory key={array.id} array={array} />
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
    marginBottom: 15,
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

export default firebaseConnect()(ArraysCategory)
