import React, {useState, useEffect} from "react";
import {compose} from "redux";
import {
  Form,
  Input,
  Button,
  Message,
  Header,
  Icon,
  Container
} from "semantic-ui-react";
import axios from "axios";
import {connect} from "react-redux";

import Spinner from "../components/Spinner/Spinner";
import {addCoupon} from "../redux/actions/coupons";

const CreateCoupons = ({addType, userLoading, firebase}) => {
  const INITIAL_TYPE = {
    name: "",
    discount: "",
    expireDate: ""
  };
  const [coupon, setType] = useState(INITIAL_TYPE);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const isCoupon = Object.values(coupon).every(element => Boolean(element));
    isCoupon ? setDisabled(false) : setDisabled(true);
  }, [coupon]);

  const handleChange = e => {
    const {name, value} = e.target;
    setType(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async e => {
    try {
      e.preventDefault();
      setLoading(true);
      setError("");
      const {name, discount, expireDate} = coupon;
      const token = await firebase.auth().currentUser.getIdToken();
      const {
        data
      } = await axios.post(
        "http://localhost:5001/floristeria-cra/us-central1/postCoupon",
        {token, name, discount, expireDate}
      );
      addCoupon(data);
      setType(INITIAL_TYPE);
      setSuccess(true);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return userLoading ? (
    <Spinner />
  ) : (
    <Container className="mbt-10em">
      <Header as="h2" block>
        <Icon name="add" color="orange" />
        Create New Coupon
      </Header>
      <Form
        loading={loading}
        error={Boolean(error)}
        onSubmit={handleSubmit}
        success={success}
      >
        <Message
          success
          icon="check"
          header="Success!"
          content="Your coupon has been posted."
        />
        <Message error header="Oops!" content={error} />
        <Form.Group widths="equal">
          <Form.Field
            control={Input}
            name="name"
            label="Name"
            placeholder="Name"
            type="text"
            onChange={handleChange}
            value={coupon.name}
          />
          <Form.Field
            control={Input}
            name="discount"
            label="Discount"
            placeholder="Discount"
            type="number"
            onChange={handleChange}
            value={coupon.discount}
          />
          <Form.Field
            control={Input}
            name="Expire Date"
            label="Expire Date"
            placeholder="Expire Date"
            type="date"
            onChange={handleChange}
            value={coupon.expireDate}
          />
        </Form.Group>
        <Form.Field
          control={Button}
          color="blue"
          icon="pencil alternate"
          content="Submit"
          type="submit"
          disabled={disabled || loading}
        />
      </Form>
    </Container>
  );
};

const mapStateToProps = ({firebase: {profile}}) => ({
  userLoading: !profile.isLoaded
});

export default compose(connect(mapStateToProps))(CreateCoupons);
