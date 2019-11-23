import React, {Component} from "react";
import {Card, Button} from "semantic-ui-react";
import {firebaseConnect} from "react-redux-firebase";

class ProductItem extends Component {
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
  render() {
    let {name, price, description} = this.props;
    return (
      <Card
        fluid
        image={this.state.image}
        title={name}
        meta={`LPS ${price}`}
        description={description}
      />
    );
  }
}

export default firebaseConnect()(ProductItem);
