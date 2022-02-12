// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
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

const firebaseConfig = {
  apiKey: "AIzaSyBbC-wejRUiN1TDKK8IvOou9TL6zMA4Abk",
  authDomain: "notemangerreact.firebaseapp.com",
  databaseURL:
    "https://notemangerreact-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "notemangerreact",
  storageBucket: "notemangerreact.appspot.com",
  messagingSenderId: "967618886072",
  appId: "1:967618886072:web:fe34e9988338611b53374d",
  measurementId: "G-85L0D8SX5H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const database = getDatabase(app);

//getdata
const starCountRef = ref(database, "DataNote");
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  //   updateStarCount(postElement, data);
  // console.log(data);
});

// update data
function writeNewPost(idNoteItem, noteContent, title) {
  const database = getDatabase(app);
  const postData = {
    noteContent: noteContent,
    title: title,
  };
  const updates = {};
  updates["/DataNote/" + idNoteItem] = postData;

  return update(ref(database), updates);
}

//  writeNewPost("-MvcUEQlGZSUZJ6wlKro","Bootstrap employs a handful 9888", "Ghi chú mua áo mưa");

// write data
function writeUserData(noteContent, title) {
  const db = getDatabase();
  push(ref(db, "DataNote/"), {
    noteContent: noteContent,
    title: title,
  });
}
//  writeUserData("Hôm nay phải học reactjs nhé","Ghi chú học reactjs nhé")

// delete data
function DeleteNewPost(idNoteItem) {
  const db = getDatabase();
  return remove(ref(db,"/DataNote/" + idNoteItem));
}

//  DeleteNewPost("-MvcWliGHA9q00DV93dK");

export const firebaseConnect = initializeApp(firebaseConfig);
