import React from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import Navbar from './components/Navbar/Navbar'
import NoteAdd from "./components/NoteAdd";
import Notebook from "../"

//firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyCuyM3LZUocMsWKJhfQ2TD-4P4YYXeLo_g",
  authDomain: "mynotebook-51872.firebaseapp.com",
  projectId: "mynotebook-51872",
  storageBucket: "mynotebook-51872.appspot.com",
  messagingSenderId: "578456499562",
  appId: "1:578456499562:web:7aab75d530c5652a51a113",
  measurementId: "G-SR797TMKSJ"
};


firebase.initializeApp( firebaseConfig );

const App = () => {
  const [noteBookData, setNoteBookData] = useState( [] );

  const updateNotes = () => {
    firebase
      .database()
      .ref( "notebook" )
      .on( "child_added", ( snapshot ) => {
        let note = {
          id: snapshot.key,
          title: snapshot.val().title,
          description: snapshot.val().description,
        };
        let notebook = noteBookData;
        notebook.push( note );
        setNoteBookData( [...noteBookData] );
      } );

    firebase
      .database()
      .ref( "notebook" )
      .on( "child_removed", ( snapshot ) => {
        let notebook = noteBookData;
        notebook = noteBookData.filter( ( note ) => note.id !== snapshot.key );
        setNoteBookData( notebook );
      } );
  };

  useEffect( () => {
    updateNotes();
  }, [] );

  return (
    <div>
      <Navbar />
      <div className="note-section">
        <NoteAdd />
      </div>
    </div>
  );
};

export default App;