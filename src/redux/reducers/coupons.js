import {
  GET_COUPONS,
  TYPES_ERROR,
  ADD_COUPON,
  REMOVE_COUPON
} from "../actions/types";

const initialState = {
  coupons: [],
  loading: true,
  error: {}
};

export default (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case ADD_COUPON:
      return {
        ...state,
        coupons: [payload, ...state.coupons],
        loading: false
      };
    case GET_COUPONS:
      return {
        ...state,
        coupons: payload,
        loading: false
      };
    case REMOVE_COUPON:
      return {
        ...state,
        coupons: state.coupons.filter(coupon => coupon.id !== payload),
        loading: false
      };
    case TYPES_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
};
