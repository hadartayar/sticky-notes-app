import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ClearIcon from "@mui/icons-material/Clear";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";

export default function Note(props) {
  const [editable, setEditable] = useState(false);
  //const [doneEdit, setDoneEdit] = useState(false);

  const handleEditNote = () => {
    setEditable(true);
  };

  const handleDelete = () => {
    props.onDeleteNote(props.id);
  };
  
  return (
    <Card sx={{ minWidth: 275 }} style={{ backgroundColor: "#ffc" }}>
      <CardHeader
        action={
          props.id !== 0 && (
            <IconButton aria-label="settings" onClick={handleDelete}>
              <ClearIcon />
            </IconButton>
          )
        }
        title={props.id}
      />
      <CardContent>
        <TextField
          style={{ width: "100%" }}
          id="outlined-multiline-static"
          multiline
          rows={4}
          placeholder="Enter New Note"
          text={props.content}
          onChange={(e) => props.onInputChange(e.target.value)}
          disabled={!editable && props.id !== 0}
        />
      </CardContent>

      <CardActions>
        {props.id === 0 ? (
          <Button onClick={props.onAddNote}>
            Add Note
            <AddIcon />
          </Button>
        ) : (
          <Button onClick={handleEditNote}>
            Edit Note
            <EditIcon />
          </Button>
        )}
        {editable === true && (
          <Button>
            <DoneIcon />
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
