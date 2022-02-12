import React, { Component } from "react";
import { connect } from "react-redux";

class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteTitle: "",
      noteContent: "",
      idCard: 0,
    };
  }

  componentDidMount = () => {
    if (this.props.idCard) {
      this.setState({
        noteTitle: this.props.Title,
        noteContent: this.props.Content,
        idCard: this.props.idCard,
      });
    }
  };

  isChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  isShowButton = () => {
    if (this.props.isShowButon === 1) {
      return (
        <button
          type="reset"
          className="btn btn-primary btn-block"
          onClick={() => this.props.HandleAddData(this.state)}
        >
          Thêm
        </button>
      );
    } else {
      return (
        <button
          type="reset"
          className="btn btn-primary btn-block"
          onClick={() => this.props.HandleUpdateData(this.state)}
        >
          Sửa
        </button>
      );
    }
  };

  isShowTitle = () => {
    if (this.props.isShowButon === 1) {
      return <h3>THÊM NỘI DUNG GHI CHÚ</h3>;
    } else {
      return <h3>SỬA NỘI DUNG GHI CHÚ</h3>;
    }
  };

  render() {
    return (
      <div className="col-4">
        {this.isShowTitle()}
        <form>
          <div className="form-group">
            <label htmlFor="noteTitle">Tiêu đề ghi chú</label>
            <input
              type="text"
              className="form-control"
              name="noteTitle"
              id="noteTitle"
              onChange={(e) => this.isChange(e)}
              aria-describedby="helpNoteTitle"
              placeholder="Tiêu đề ghi chú"
              defaultValue={this.props.Title}
            />
          </div>
          <div className="form-group">
            <label htmlFor="noteContent">Nội dung ghi chú</label>
            <textarea
              type="text"
              className="form-control"
              name="noteContent"
              id="noteContent"
              onChange={(e) => this.isChange(e)}
              aria-describedby="helpNoteTitle"
              placeholder="Nội dung ghi chú"
              defaultValue={this.props.Content}
            />
          </div>
          {this.isShowButton()}
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    Content: state.Content,
    Title: state.Title,
    isShowButon: state.isShowButon,
    idCard: state.idCard,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    HandleAddData: (item) => {
      dispatch({
        type: "ADDNOTE",
        noteContent: item.noteContent,
        noteTitle: item.noteTitle,
      });
    },
    HandleUpdateData: (item) => {
      dispatch({
        type: "UPDATENOTE",
        noteContent: item.noteContent,
        noteTitle: item.noteTitle,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);
