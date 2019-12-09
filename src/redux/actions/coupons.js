import axios from "axios";
import {ADD_COUPON, TYPES_ERROR, GET_COUPONS} from "./types";

export const getCoupons = () => async dispatch => {
  try {
    const {data} = await axios.post(
      "http://localhost:5001/floristeria-cra/us-central1/getCoupons"
    );
    dispatch({
      type: GET_COUPONS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: TYPES_ERROR,
      payload: error.message
    });
  }
};

export const addCoupon = payload => dispatch => {
  try {
    dispatch({
      type: ADD_COUPON,
      payload
    });
  } catch (error) {
    dispatch({
      type: TYPES_ERROR,
      payload: error.message
    });
  }
};
