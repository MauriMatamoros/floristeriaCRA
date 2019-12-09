import React, {useEffect} from "react";
import {connect} from "react-redux";
import {Icon, Table} from "semantic-ui-react";

import Spinner from "../Spinner/Spinner";
import {getCoupons} from "../../redux/actions/coupons";
import CouponItem from "./CouponItem";

const CouponList = ({coupons, loadingCoupons, getCoupons}) => {
  useEffect(() => {
    getTypes();
  }, [getCoupons]);
  return loadingCoupons ? (
    <Spinner />
  ) : (
    <>
      <Table celled striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan="3">Coupons</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {coupons.length > 0 ? (
            coupons.map(coupon => <CouponItem key={coupon.id} {...coupon} />)
          ) : (
            <Table.Row>
              <Table.Cell collapsing>
                <Icon name="add" /> Add Coupon
              </Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    </>
  );
};

const mapStateToProps = ({coupons}) => ({
  coupons: coupons.coupons,
  loadingCoupons: coupons.loading
});

export default connect(mapStateToProps, {getCoupons})(CouponList);
