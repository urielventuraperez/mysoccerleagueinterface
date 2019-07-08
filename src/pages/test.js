import React, { Component } from "react";
import { connect } from "react-redux";
import { verTorneos } from "../redux/actions/torneos";

class Test extends Component {
  componentDidMount() {
    this.props.verTorneos();
  }

  render() {
    return <div>Test</div>;
  }
}

function mapDispatchToProps(dispatch) {
  return {
    verTorneos: () => {
      dispatch(verTorneos());
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Test);
