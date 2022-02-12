import React, { Component } from "react";
import { connect } from "react-redux";

class Navbar extends Component {
  HandleShowAdd = (e) => {
    e.preventDefault();
    this.props.HandleShowADD();
  };

  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <a className="navbar-brand" href="#">
          Thang chay
        </a>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Trang chủ
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={(e) => this.HandleShowAdd(e)}
              >
                Thêm ghi chú
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isEdit: state.isEdit,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    HandleShowADD: () => {
      dispatch({type:"SHOWADD"})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)

