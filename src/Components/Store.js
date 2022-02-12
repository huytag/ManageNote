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
  AlertShow: false,
  AlertName: "",
  AlertNameStatus: "",
};

const allReducer = (state = noteInitialState, action) => {
  switch (action.type) {
    case "ADDNOTE":
      push(ref(database, "DataNote/"), {
        noteContent: action.noteContent,
        title: action.noteTitle,
      });

      return {
        ...state,
        isEdit: 0,
        AlertShow: true,
        AlertName: "Bạn đã thêm ghi chú thành công",
        AlertNameStatus: "success",
      };
    case "DELETENOTE":
      remove(ref(database, "/DataNote/" + action.idNoteItem));
      return {
        ...state,
        AlertShow: true,
        AlertName: "Bạn đã xóa ghi chú thành công",
        AlertNameStatus: "danger",
      };
    case "SHOWADD":
      return {
        ...state,
        isEdit: !state.isEdit,
        isShowButon: 1,
        Content: "",
        Title: "",
      };
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
      return {
        ...state,
        isEdit: false,
        AlertShow: true,
        AlertName: "Bạn đã cập nhật ghi chú thành công",
        AlertNameStatus: "info",
      };
    case "DISMISSALERT":
      return {
        ...state,
        AlertShow: false,
      };
    default:
      return state;
  }
};

const store = redux.createStore(allReducer);

export default store;
