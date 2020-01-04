import React, {Component} from "react";
import {Container, Popup, Button} from "semantic-ui-react";
import {compose} from "redux";
import {connect} from "react-redux";
import {withFirebase, firestoreConnect} from "react-redux-firebase";

import "./styles/formProduct.css";

class ProductPay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productImages: []
    };
  }
  async UNSAFE_componentWillUpdate(props) {
    let {product, firebase, match} = props;
    if (product && this.state.productImages.length === 0) {
      let productImages = [];
      for (let image of product.images) {
        let productImage = await firebase
          .storage()
          .ref(`products/${match.params.id}-${image}`)
          .getDownloadURL();
        productImages.push(productImage);
      }
      this.setState({
        productImages
      });
    }
  }
  handleSubmit = async e => {
    e.preventDefault();
    try {
      // setLoading(true);
      // setError("");
      // await firebase
      //   .auth()
      //   .signInWithEmailAndPassword(user.email, user.password);
      // history.push("/");
    } catch (error) {
      // setError(error.message);
    } finally {
      // setLoading(false);
    }
  };
  render() {
    return (
      <>
        <Container className="mbt-10em">
          <div className="row">
            <div className="col-lg-2 justify-content-center grid-images">
              {this.state.productImages.map((productImage, index) => (
                <a key={index} role="button" onClick={() => alert("Modal")}>
                  <img
                    src={productImage}
                    style={styles.imageArray}
                    className="mb-3 images-to-row"
                  />
                </a>
              ))}
            </div>
            <div className="col-lg-5">
              <img
                src={
                  this.state.productImages.length > 0
                    ? this.state.productImages[0]
                    : ""
                }
                style={styles.imageArray}
              />
            </div>
            <div className="col-lg-5 col-12 text-center p-5">
              <div>
                <img src="/assets/logo-spiral.png" style={styles.logo} />
              </div>
              <div className="text-left">
                <h3>{this.props.product ? this.props.product.name : ""}</h3>
                <p>
                  {this.props.product
                    ? `${parseFloat(
                        this.props.product.price
                      ).toLocaleString()} Lps`
                    : ""}
                </p>
              </div>
              <div className="text-left row p-3 container-quantity">
                <p className="pr-4 h5">Cantidad:</p>
                <div className="row">
                  <button className="btn btn-dark btn-custom">
                    <p className="h4">+</p>
                  </button>
                  <input
                    type="numeric"
                    className="form-control input-count mt-2"
                  />
                  <button className="btn btn-dark btn-custom">
                    <p className="h4">-</p>
                  </button>
                </div>
              </div>
              <div className="text-left row p-3">
                <p className="mr-3 h5">
                  Texto personalizado:{" "}
                  <Popup
                    content="Solo puede agregar 4 palabras"
                    trigger={
                      <Button circular icon="info" size="mini" color="grey" />
                    }
                  />
                </p>
                <input type="text" className="form-control" />
              </div>
              <div className="pt-2 pb-2">
                <button
                  className="btn btn-white w-100"
                  style={styles.btnAddCart}
                >
                  Agregar a mi wishlist
                </button>
              </div>
              <div className="pt-2 pb-2">
                <button
                  className="btn btn-grey w-100"
                  style={styles.btnAddCart}
                >
                  Agregar al carrito de compras
                </button>
              </div>
              <div>
                <button
                  className="btn btn-dark w-100"
                  style={styles.btnAddCart}
                >
                  Comprar ahora
                </button>
              </div>
              <div className="pt-5">
                <p className="text-justify">
                  {this.props.product ? this.props.product.description : ""}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </>
    );
  }
}

const styles = {
  logo: {
    width: 72,
    height: 58
  },
  btnAddCart: {
    pading: 30,
    fontSize: 16
  },
  imageArray: {
    width: "100%",
    height: "auto"
  }
};

export default compose(
  withFirebase,
  firestoreConnect(props => {
    return [{collection: "products", doc: props.match.params.id}];
  }),
  connect(({firestore: {data}}, props) => {
    return {
      product: data.products && data.products[props.match.params.id]
    };
  })
)(ProductPay);
