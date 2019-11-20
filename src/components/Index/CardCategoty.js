import React from "react";
import {Card, Image} from "semantic-ui-react";
import {Link} from "react-router-dom";

const CardCategory = props => {
  const {image, name} = props.array;
  return (
    <div style={{height: 250}}>
      <Card as={Link} to={`/products/${name}`}>
        <Image src={image} ui={false} width={"95%"} height={200} />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
        </Card.Content>
      </Card>
    </div>
  );
};

export default CardCategory;
