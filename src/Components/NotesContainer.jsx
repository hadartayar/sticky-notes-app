import React, { useState, useEffect } from "react";
import Note from "./Note";

export default function NotesContainer() {
  const [notesList, setNotesList] = useState([{ id: 0, content: "" }]);
  const [stickyNotes, setStickyNotes] = useState(null);
  const [noteText, setNoteText] = useState();
  
  
  const handleAddNote = () => {
    let newNote = {
      id: notesList.length,
      content: noteText,
    };
    console.log(newNote);
    setNotesList([...notesList, newNote]); // Add the new note to the notesList
    setNoteText("");
  };

  const handleDeleteNote = (id) =>{
    const updatedNotesList = notesList.filter(note => note.id !== id);
    // Set the state with the updated notes list
    setNotesList(updatedNotesList);
  }
  useEffect(() => {
    console.log(notesList);
    setStickyNotes(
      notesList.map((stickyNote) => (
        <li key={stickyNote.id}>
          <Note
            id={stickyNote.id}
            content={stickyNote.content}
            onInputChange={setNoteText}
            isChecked={false}
            onAddNote={handleAddNote}
            onDeleteNote={handleDeleteNote}
          />
        </li>
      ))
    );
  }, [notesList,noteText]);

  

  // const handleInputText = (text) => {
  //   setNoteText(text);
  // };

  return (
    <div>
      <ul>{stickyNotes}</ul>
    </div>
  );
}
