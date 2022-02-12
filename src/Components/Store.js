import { firebaseConnect } from "../firebaseConnect";
import {
  getDatabase,
  ref,
  set,
  onValue,
  remove,
  push,
  child,
  update,
} from "firebase/database";
const redux = require("redux");
const database = getDatabase(firebaseConnect);

const noteInitialState = {
  isEdit: false,
  isShowButon: 1,
  Content: "",
  Title: "",
  idCard: 0,
};

const allReducer = (state = noteInitialState, action) => {
  switch (action.type) {
    case "ADDNOTE":
      push(ref(database, "DataNote/"), {
        noteContent: action.noteContent,
        title: action.noteTitle,
      });
      alert("Bạn đã thêm note thành công");
      return { ...state, isEdit: 0 };
    case "DELETENOTE":
      alert("Bạn đã xóa note thành công");
      return remove(ref(database, "/DataNote/" + action.idNoteItem));
    case "SHOWADD":
      return { ...state, isEdit: !state.isEdit, isShowButon: 1, Content: "", Title: "" };
    case "SHOWUPDATENOTE":
      return {
        ...state,
        idCard: action.idNoteItem,
        isEdit: true,
        isShowButon: 0,
        Content: action.noteContent,
        Title: action.noteTitle,
      };
    case "UPDATENOTE":
      const postData = {
        noteContent: action.noteContent,
        title: action.noteTitle,
      };
      const updates = {};
      updates["/DataNote/" + state.idCard] = postData;
      update(ref(database), updates);
      return { ...state, isEdit: false };
    default:
      return state;
  }
};

const store = redux.createStore(allReducer);

export default store;
