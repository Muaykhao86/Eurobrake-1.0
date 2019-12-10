import React, {createRef} from 'react';
import { Button } from '../Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function PopupLogin() {
  const [open, setOpen] = React.useState(false);
  const fileInput = React.createRef();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  
  handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Selected file - ${
        fileInput.current.files[0].name
      }`
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <Button onClick={handleClickOpen}>
        Upload File
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Upload File</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please do not .......
          </DialogContentText>
         <input type="file" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="#134381;">
            Cancel
          </Button>
          <Button type="submit" color="#134381;">
           Submit
          </Button>
        </DialogActions>
      </Dialog>
      </form>
    </div>
  );
}