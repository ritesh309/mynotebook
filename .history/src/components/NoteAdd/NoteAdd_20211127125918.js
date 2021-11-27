import React,{useState} from "react";
import "./NoteAdd.css";

const NoteAdd = () => {
    const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const addNote = () => {
    if (title !== "" && description !== "") {
      firebase.database().ref("notebook").push({
        title: title,
        description: description,
      });
    }
  };

  return (
    <>
      <div className="noteadd">
        <h1>Add a New Note</h1>
        <div className="form-group">
          <input
            type="text"
            className="noteadd-header"
            name="noteadd-header"
            placeholder="Note Title"
          />
        </div>
        <div className="form-group">
          <textarea
            name="noteadd-description"
            className="noteadd-description"
            placeholder="Note Description"
          ></textarea>
        </div>
        <div className="noteadd-button">
          <button>Add a Note</button>
        </div>
      </div>
    </>
  );
};

export default NoteAdd;