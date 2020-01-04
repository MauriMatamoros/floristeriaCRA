import React from "react";
import {Sidebar, Menu} from "semantic-ui-react";
import {compose} from "redux";
import {connect} from "react-redux";
import {withFirebase, firestoreConnect} from "react-redux-firebase";
import ItemCart from "./ItemCart";

const SideBarCart = props => {
  return (
    <>
      <Sidebar
        as={Menu}
        animation="overlay"
        direction="right"
        icon="labeled"
        inverted
        vertical
        visible={props.opened}
        style={styles.containerSideBar}
      >
        <div className="mt-2 pr-3 d-flex justify-content-end">
          <a
            role="button"
            className="text-dark"
            onClick={() => props.setOpened(false)}
          >
            <i className="fas fa-times fa-1x" />
          </a>
        </div>

        {/* En caso de no existir producto en el carro de compras */}
        {props.cart && props.cart.length > 0 ? (
          <ItemCart />
        ) : (
          <div className="text-center p-3">
            <img src="/assets/cart.png" style={{width: 70, height: 50}} />
            <p style={{color: "gray"}}>
              No tiene productos en el carro de compras, favor iniciar sesión y
              agregar arreglos a su carrito.
            </p>
          </div>
        )}
      </Sidebar>
    </>
  );
};

const styles = {
  containerSideBar: {
    backgroundColor: "white",
    width: "40%"
  }
};

export default compose(
  withFirebase,
  connect(({firebase, firestore: {data}}) => ({
    cart: data.carts,
    firebaseReducer: firebase
  })),
  firestoreConnect(props => {
    return [
      {
        collection: "carts",
        where: [
          "user_id",
          "==",
          props.firebaseReducer.auth.uid ? props.firebaseReducer.auth.uid : ""
        ]
      }
    ];
  })
)(SideBarCart);
