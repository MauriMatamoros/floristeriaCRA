import React, {Component} from 'react'
import {compose} from "redux";
import {withFirebase} from "react-redux-firebase";

import './styles/styles.css'

class CarouselNewsItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: ""
    };
  }
  async componentDidMount() {
    const {firebase, id, images} = this.props;
    let productImage = await firebase
      .storage()
      .ref(`products/${id}-${images[0]}`)
      .getDownloadURL();

    if (productImage) {
      this.setState({
        image: productImage
      });
    }
  }
  render () {
    return (
      <>
        <div className='container-fluid' style={styles.container}>
          <div className='row align-items-center'>
            <div className='col-12 col-lg-6 text-right center'>
              <img src={this.state.image} style={styles.image} />
            </div>
            <div className='col-12 col-lg-6'>
              <div className='text-center pt-4'>
                <h3>{this.props.name && this.props.name}</h3>
                <p>L.250.00 / $.4.00</p>
                <button
                  className='btn btn-dark'
                  onClick={() => alert('Ir al detalle del producto')}
                >
                  Ver producto
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

const styles = {
  image: {
    width: 400,
    height: 350,
    ObjectFit: 'cover'
  },
  container: {
    marginBottom: '10rem'
  }
}

export default compose(
  withFirebase
)(CarouselNewsItem);
