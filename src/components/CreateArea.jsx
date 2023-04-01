import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  // states
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [row, setRow] = useState(1);
  const [zoom, setZoom] = useState(false);

  function handleClick(event) {
    setRow(3);
    setZoom(true);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });

    setRow(1);
    setZoom(false);
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {row !== 1 ? (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        ) : null}

        <textarea
          name="content"
          onClick={handleClick}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={row}
        />
        <Zoom in={zoom}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
