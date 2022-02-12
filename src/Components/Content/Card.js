import React, { Component } from "react";
import { connect } from "react-redux";

class Card extends Component {
  render() {
    return (
      <div id={this.props.idShow} role="tablist" aria-multiselectable="true">
        <div className="card">
          <div className="card-header" role="tab" id="section1HeaderId">
            <h5 className="mb-0 row ">
              <a
                className="col-9"
                data-toggle="collapse"
                data-parent={"#" + this.props.idShow}
                href={"#" + this.props.section1ContentId}
                aria-expanded="true"
                aria-controls={this.props.section1ContentId}
              >
                {this.props.Title}
              </a>
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-outline-warning"
                  onClick={() =>
                    this.props.HandleUpdateNote(
                      this.props.Content,
                      this.props.Title,
                      this.props.idCard
                    )
                  }
                >
                  Sửa
                </button>
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  onClick={() => this.props.HandleDeleteNote(this.props.idCard)}
                >
                  Xóa
                </button>
              </div>
            </h5>
          </div>
          <div
            id={this.props.section1ContentId}
            className="collapse in"
            role="tabpanel"
            aria-labelledby="section1HeaderId"
          >
            <div className="card-body">{this.props.Content}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    HandleDeleteNote: (id) => {
      dispatch({ type: "DELETENOTE", idNoteItem: id });
    },
    HandleUpdateNote: (Content, Title, idCard) => {
      dispatch({
        type: "SHOWUPDATENOTE",
        idNoteItem: idCard,
        noteContent: Content,
        noteTitle: Title,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
