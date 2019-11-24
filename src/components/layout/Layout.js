import React from "react";
import {Container} from "semantic-ui-react";
import {connect} from "react-redux";

import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = ({children, isAuthenticated}) => {
  return (
    <>
      <NavBar user={isAuthenticated} />
      <Container fluid style={{minHeight: "50vh", paddingTop: "5em"}}>
        {children}
      </Container>
      <Footer />
    </>
  );
};

const mapStateToProps = ({auth: {isAuthenticated}}) => ({isAuthenticated});

export default connect(mapStateToProps)(Layout);
