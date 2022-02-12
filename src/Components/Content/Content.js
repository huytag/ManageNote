import React, { Component } from "react";
import NoteForm from "./NoteForm";
import Card from "./Card";
import { firebaseConnect } from "../../firebaseConnect";
import { getDatabase, ref, onValue } from "firebase/database";
import { connect } from "react-redux";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DataNote: [],
    };
  }

  componentDidMount = () => {
    const database = getDatabase(firebaseConnect);
    const starCountRef = ref(database, "DataNote");
    onValue(starCountRef, (snapshot) => {
      var arrData = [];
      snapshot.forEach((element) => {
        arrData.push({
          key: element.key,
          noteContent: element.val().noteContent,
          title: element.val().title,
        });
      });
      this.setState({
        DataNote: arrData,
      });
    });
  };

  isShowData = () => {
    if (this.state.DataNote) {
      return this.state.DataNote.map((value, index) => (
        <Card
          key={value.key}
          Title={value.title}
          Content={value.noteContent}
          idShow={value.key + "1"}
          section1ContentId={value.key}
          idCard={value.key}
        />
      ));
    }
  };

  isShowEdit = () => {
    if (this.props.isEdit === true) {
      return <NoteForm />;
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">{this.isShowData()}</div>
          {this.isShowEdit()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isEdit: state.isEdit,
  };
};

export default connect(mapStateToProps)(Content);
