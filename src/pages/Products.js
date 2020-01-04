import React from "react";
import {Container, Grid, Pagination} from "semantic-ui-react";
import {useParams} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";
import {withFirebase, useFirestoreConnect} from "react-redux-firebase";

import Search from "../components/layout/Search";
import ProductItem from "../components/Products/ProductItem";

const Products = ({products, firestore}) => {
  const {type} = useParams();
  useFirestoreConnect(() => {
    return [{collection: "products", where: [["type", "==", decodeURI(type)]]}];
  });
  return (
    <>
      <Container fluid className="mbt-10em text-center">
        <Search />
        <div className="w-100 mt-5 mb-2">
          <h2 className="text-center">{type}</h2>
        </div>
        <Grid centered className="pb-5">
          <Grid.Row centered>
            {products &&
              products.map(product => {
                return <ProductItem key={product.id} {...product} />;
              })}
          </Grid.Row>
        </Grid>

        <Pagination
          boundaryRange={0}
          defaultActivePage={1}
          ellipsisItem={null}
          firstItem={null}
          lastItem={null}
          siblingRange={1}
          totalPages={10}
        />
      </Container>
    </>
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
