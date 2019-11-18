import React, {Component} from "react";
import {Card} from "semantic-ui-react";
import {useParams} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";
import {withFirebase, useFirestoreConnect} from "react-redux-firebase";

import ProductItem from "../components/Products/ProductItem";

const Products = ({products}) => {
  const {type} = useParams();
  useFirestoreConnect(() => {
    return [{collection: "products", where: [["type", "==", decodeURI(type)]]}];
  });
  return (
    <Card.Group stackable itemsPerRow="3" centered>
      {products &&
        products.map(product => {
          return <ProductItem key={product.id} {...product} />;
        })}
    </Card.Group>
  );
};

export default compose(
  withFirebase,
  connect(({firestore}) => {
    return {
      products: firestore.ordered.products
    };
  })
)(Products);
