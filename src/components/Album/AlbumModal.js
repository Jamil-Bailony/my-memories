import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import db from "../../firebaseConfig";
//create a new collection in the database
export default function AlbumModal() {
  const [albums, setalbum] = useState([]);

    
  

  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.target.value)
  }
  console.log(userInput)
  const handleSubmit = (e) => {
    handleClose();
    addAlbum(e)
  }
  const addAlbum= e => {
    e.preventDefault()
    db.collection('AllCollections').doc(userInput).set({name: userInput})
    setUserInput("")
  }

  // useEffect(()=>{
  //   fetchData()
  // },[email])
  


    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    

    return (
        <div>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Start a new album
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Start a new album</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To create a new collection of memories, please enter a name for your album here.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Album name"
              type="text"
              fullWidth
              onChange = {e=>handleChange(e)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={e => handleSubmit(e)} color="primary">
              Start
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
}


