import React, { Component } from "react";
import { Alert, AlertContainer } from "react-bs-notifier";
import { connect } from "react-redux";

class AlertInfo2 extends Component {
  render() {
    if (this.props.AlertShow === false) return null;
    return (
      <AlertContainer position="top-right">
        <Alert
          type={this.props.AlertNameStatus}
          onDismiss={() => this.props.handleDismiss()}
          timeout={2000}
          headline="Thông báo"
        >
          {this.props.AlertName}
        </Alert>
      </AlertContainer>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    AlertShow: state.AlertShow,
    AlertName: state.AlertName,
    AlertNameStatus: state.AlertNameStatus,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleDismiss: () => {
      dispatch({ type: "DISMISSALERT" });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlertInfo2);
