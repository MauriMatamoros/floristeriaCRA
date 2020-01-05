import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Icon, Table, Button} from 'semantic-ui-react';
import axios from 'axios';

import {firebase} from '../../firebase';
import { removeFeaturedProduct } from '../../redux/actions/featuredProducts';

const FeaturedProductItem = ({id, name, image, removeFeaturedProduct}) => {
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleDelete = async id => {
    try {
      setLoading(true);
      setDisabled(true);
      const token = await firebase.auth().currentUser.getIdToken();
      const {data} = await axios.post(
        'http://localhost:5001/floristeria-cra/us-central1/removeFeaturedProduct',
        {token, id}
      );
      removeFeaturedProduct(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Table.Row>
      <Table.Cell collapsing>
        <Icon name='options' /> {name}
      </Table.Cell>
      <Table.Cell>
        <Button
          negative
          onClick={e => handleDelete(id)}
          disabled={disabled}
          loading={loading}
        >
          <Icon name='delete' />
          Delete
        </Button>
      </Table.Cell>
    </Table.Row>
  );
};

export default connect(
  null,
  {removeFeaturedProduct}
)(FeaturedProductItem);
