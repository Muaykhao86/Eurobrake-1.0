import React, { createRef } from 'react';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Dialog from '@material-ui/core/Dialog';

const StyledDialog = styled(Dialog)`
.MuiDialog-paperWidthSm {
    max-width: 60vw;
}
`;


const StyledPopup = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-self: center;
    justify-content: space-between;
    min-width: 55vw;
    background-color: ${props => props.theme.white};
    padding: 2rem;

.MuiPaper-root {
    color:  ${props => props.theme.primary};
    /* transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    background-color: #fff; */
}

.MuiIconButton-root:hover {
    background-color: rgba(0, 0, 0, 0);
}

    a{  cursor: pointer;
          color: ${props => props.theme.primary};
        font-family: ${props => props.theme.MPBold};
        font-size: 2rem;
   
    }

    ol{
      margin: 1rem;
    }

    li{
    color:  ${props => props.theme.primary};
    }
    .popup{
        color: ${props => props.theme.primary};
        font-family: ${props => props.theme.MPLight};
        font-size: 1.5rem;

        width: 55vw;

    &_top-box{
      display: flex;
      justify-content: space-between;
    }
    
  &-closeBtn{
    cursor: pointer;
  transform: rotate(45deg);
  font-size: 4rem;
  color: ${props => props.theme.primary};
}
   
    &-title{
        color: ${props => props.theme.primary};
        font-family: ${props => props.theme.MPSemibold};
        font-size: 3rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
   
    &-bold{
        font-family: ${props => props.theme.MPBold};
    }
    &-it{
        font-family: ${props => props.theme.MPLightIt};
    }
}
`;

export default function InstructionsPopup(props) {
  const [open, setOpen] = React.useState(false);
  

  return (
    <>
        <a style={{ cursor: 'pointer', }} onClick={() => setOpen(open => !open)}>
          {props.children}
        </a>

        <StyledDialog open={open} onClose={() => setOpen(open => !open)} aria-labelledby="dialog-title" >
          <StyledPopup>
            <div className="popup_top-box">
            <Typography className="popup-title">Assignment of copyright of your Technical Paper</Typography>
                  <IconButton aria-label="close" onClick={() => setOpen(open => !open)} style={{ padding: '0' }}>
            <AddCircleOutlineIcon className="popup-closeBtn"/>
                  </IconButton>
                  
            </div>

          
          <Typography gutterBottom className="popup">As the organiser of EuroBrake and publisher of the conference proceedings, FISITA needs to acquire copyright in all Technical Papers. There are two reasons for this:</Typography>
          <ol>
            <li><Typography gutterBottom className="popup">  Ownership of the copyright ensures maximum international protection against infringement</Typography></li>
            <li><Typography gutterBottom className="popup">  It also ensures that requests by third parties to reprint a Technical Paper, or part of it, are handled efficiently and centrally in accordance with FISITA's general policy to encourage the dissemination of technical knowledge inside the framework of copyright.</Typography></li>
          </ol>
          <Typography gutterBottom className="popup">If for any reason your Technical Paper is not published, the rights revert to the present copyright holder.</Typography>
          <Typography gutterBottom className="popup">Your Technical Paper may be published and / or stored electronically by us and then transmitted to meet individual requests. You hereby agree to us making the necessary arrangements to include your Technical Paper in document delivery services and electronic databases.</Typography>
          <Typography gutterBottom className="popup">Where the copyright is held by a number of joint authors, the Principal or Presenting Author must assign copyright to FISITA on behalf of all authors of the Technical Paper, and is responsible for securing any necessary consents from such co-authors to assign copyright of the work to us.</Typography>
          <Typography gutterBottom className="popup">If you are unable to assign copyright to us for any reason, we may be unable to publish your paper. Please contact us immediately at <span className="popup-bold">g.wilkins@fisita.com</span> if you are not able to assign copyright or if you require any clarification about copyright assignment.</Typography>
          <Typography gutterBottom className="popup-title">Liscensing others to use the Copyright Work</Typography>
          <Typography gutterBottom className="popup">We will not withhold permission for any reasonable request from you to publish any part of your Technical Paper in connection with any other work by you.</Typography>
          <Typography gutterBottom className="popup">Should you wish to copy, modify or reproduce all or part of the Copyright Work, please complete the correct license agreement from the downloads below and send this in to Philippa Morrell at <span className="popup-bold">p.morrell@fisita.com.</span></Typography>
          <Typography gutterBottom className="popup">The correct acknowledgements regarding copyright attribution can be found on the license agreement.</Typography>
          </StyledPopup>
        </StyledDialog>
    </>
  );
      {/* <form>
          <DialogTitle id="form-dialog-title">Upload File</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please do not exceed 50mb file size example
          </DialogContentText>
          
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(open => !open)} value="cancel" color="#134381" bcolor="#134381">
              Cancel
          </Button>
            
          </DialogActions>
      </form> */}
}