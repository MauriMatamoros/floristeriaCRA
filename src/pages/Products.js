import React from "react";
import {Card, Container} from "semantic-ui-react";
import {useParams} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";
import {withFirebase, useFirestoreConnect} from "react-redux-firebase";

import ProductItem from "../components/Products/ProductItem";
import Spinner from "../components/Spinner/Spinner";

const Products = ({products, firestore}) => {
  const {type} = useParams();
  useFirestoreConnect(() => {
    return [{collection: "products", where: [["type", "==", decodeURI(type)]]}];
  });
  return (
    <Container className="mbt-10em" textAlign="center">
      {firestore.status.requesting[Object.keys(firestore.status.requesting)] ? (
        <Spinner />
      ) : products && products.length > 0 ? (
        <Card.Group className="doubling" stackable itemsPerRow="4" centered>
          {products &&
            products.map(product => {
              return <ProductItem key={product.id} {...product} />;
            })}
        </Card.Group>
      ) : (
        "No existen productos en esta categoría"
      )}
    </Container>
  );
};

export default compose(
  withFirebase,
  connect(({firestore}) => {
    return {
      firestore,
      products: firestore.ordered.products
    };
  })
)(Products);
