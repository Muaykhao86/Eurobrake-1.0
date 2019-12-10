import React, { createRef } from 'react';
import { Button } from './Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import GetForm from './Forms';


export default function Popup() {
  const [open, setOpen] = React.useState(false);
  const fileInput = React.createRef();

  const handleClickOpen = () => {
    setOpen(true);
    GetForm('https://prelude.eurobrake.net/upload');
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleSubmit = (event) => { 
    event.preventDefault();
    console.log(fileInput.current.files[0].name);
    alert(
      `Selected file - ${
      fileInput.current.files[0].name
      }`
    );
  }

  return (
    <div>
        <Button
          bcolor="#134381"
          background="#134381"
          br="100rem"
          padding="0.5rem 2rem"
          style={{ margin: ".5rem 0" }}
          fontSize="1.7rem"
          onClick={handleClickOpen}>
          Upload File
      </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <form>
          <DialogTitle id="form-dialog-title">Upload File</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please do not exceed 50mb file size example
          </DialogContentText>
            <input type="file" ref={fileInput}/>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} value="cancel" color="#134381">
              Cancel
          </Button>
            <Button type="submit" onClick={handleSubmit} color="#134381">
              Submit
          </Button>
          </DialogActions>
      </form>
        </Dialog>
    </div>
  );
}