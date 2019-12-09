import React, {useState} from "react";
import {Icon, Table, Button} from "semantic-ui-react";

const CouponItem = ({id, name}) => {
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleDelete = async id => {
    try {
      setLoading(true);
      setDisabled(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Table.Row>
      <Table.Cell collapsing>
        <Icon name="options" /> {name}
      </Table.Cell>
      <Table.Cell>
        <Button
          negative
          onClick={e => handleDelete(id)}
          disabled={disabled}
          loading={loading}
        >
          <Icon name="delete" />
          Delete
        </Button>
      </Table.Cell>
    </Table.Row>
  );
};

export default CouponItem;
