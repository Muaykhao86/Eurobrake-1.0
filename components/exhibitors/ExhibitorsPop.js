import React , {useEffect, useState, useRef} from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import Snap from 'snapsvg-cjs';
import { Button } from '../Button';
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Typography from '@material-ui/core/Typography';
import { MailIcon, PhoneIcon, GlobeIcon, EBFloorPlan } from '../Icons';


const StyledModal = styled.div`
display: flex;
flex: 1;
flex-flow: column;
justify-content: center;
align-items: center;
margin-top: 9rem;
.paper{
max-width: 42rem;
max-height: 70rem;
padding: 2rem;
}
.closeBtn{
  transform: rotate(45deg);
  font-size: 2.5rem;
}
.ModalLogo{
  width: 50%;
  margin-bottom: 2rem;
}
.ModalTitle{
  font-family: ${props => props.theme.MPSemibold};
  font-size: 3.1rem;
  color: ${props => props.theme.primary};
}
 .ModalContact{
  font-family: ${props => props.theme.MPSemiLight};
  font-size: 1.1rem;
  margin-right: .5rem;
 }
 .ModalIcon{
   transform: translateY(-1rem);
   width: 80%;
 }
 .ModalSummary{
  max-height: 15rem;
  font-family: ${props => props.theme.MPSemiLight};
  font-size: 1.1rem;
  padding-top: 1rem;
  overflow: scroll;
 }
 .ModalBooth{
  font-family: ${props => props.theme.MPBlack};
  font-size: 1.7rem;
  color: ${props => props.theme.primary};
  padding: 1rem 0 ;
 }
 .ModalMapTitle{
  font-family: ${props => props.theme.MPLightIt};
  font-size: 1.7rem;
  color: ${props => props.theme.primary};
  padding: 1rem 0 ;
 }
 .ModalMapBox{
 }
`;
const StyledMapBox = styled.div`
 min-width: 37.9rem;
  min-height: 22.9rem;
   border: 1px solid ${props => props.theme.primary};
  /* background-color: goldenrod; */
  align-self: center;
  svg{
    	.findMe{
      fill: #134381;
      /* &:before{
        content: 'look at me!';
        font-size: 10rem;
        border: 2px solid black;
        display: absolute;
        color: goldenrod;     
      } */
    }
  }
`;
export default function ServerModal(props) {
  const rootRef = useRef(null);
  const mapRef = useRef(null);
  const [snap, setSnap] = useState();
  const [open, setOpen] = useState(false);
  const {
    name,
    img,
    booth,
    country,
    height,
    summary,
    website,
    phone,
    email,
  } = props;

const selectedSvg = `#prefix__booth-${booth}`;

  const handleOpen = (e) => {
    setOpen(true);
    handleSvg(e)
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSvg = (e) => {
    console.log({booth});
    const svg = document.querySelector("#MapBox");

    }
  //Image handler Component
  const addDefaultSrc = (e) => {
    e.target.src = "/images/logo.png"
    e.target.onerror = null;
    return
  }

console.log({Snap})
  

  return (
    <div className="" ref={rootRef}>
      <Button
        fontSize="1.1rem" background="#134381" bcolor="#134381" padding=".8rem " type="button" onClick={handleOpen} >
        Learn more
      </Button>
      <Modal
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        open={open}
        onClose={handleClose}
        disablePortal
        disableEnforceFocus
        disableAutoFocus
        aria-labelledby="server-modal-title"
        aria-describedby="server-modal-description"
        className="modal"
        container={() => rootRef.current}
      >
        <Fade in={open}>
          <StyledModal>
            <Paper className="paper">
              <Grid
                container
                spacing={12}
                direction="row"
                wrap= "wrap"
                justify="flex-start"
              >

                <Grid item xs={6}>
                  <img className="ModalLogo" src={img} alt="logo" onError={addDefaultSrc} />
                </Grid>
                <Grid item xs={6} style={{ textAlign: 'end' }}>
                  <IconButton aria-label="close" onClick={handleClose} style={{ padding: '0' }}>
                    <AddCircleOutlineIcon fontSize="large" className="closeBtn" />
                  </IconButton>
                </Grid>
                <Grid  item xs={12}>
                  <Typography gutterBottom className="ModalTitle" id="server-modal-title">{name}</Typography>
                </Grid>
                <Grid  item xs={1}  style={{}}>
                  <PhoneIcon gutterBottom className="ModalIcon" />
                </Grid>
                <Grid  item xs={5} >
                  <Typography gutterBottom className="ModalContact" id="server-modal-description">{phone}</Typography>
                </Grid>
                <Grid item xs={1}  style={{}}>
                  <GlobeIcon gutterBottom className="ModalIcon"/>
                </Grid>
                <Grid  item xs={5} >
                  <Typography gutterBottom className="ModalContact" id="server-modal-description">{website}</Typography>
                </Grid>
                <Grid  item xs={1}  style={{transform: 'translateY(.3rem)'}}>
                  <MailIcon gutterBottom className="ModalIcon" />
                </Grid>
                <Grid  item xs={5} >
                  <Typography gutterBottom className="ModalContact" id="server-modal-description">{email}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className="ModalSummary" id="server-modal-description">{summary}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography className="ModalBooth" id="server-modal-description">Booth #{booth}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography className="ModalMapTitle" id="server-modal-description" style={{ textAlign: 'end' }}>View on map below</Typography>
                </Grid>
                <Grid item xs={12}>
                  <StyledMapBox >
                    {/* <EBFloorPlan id="FP" booth={booth} open mapref={mapRef}/> */}
                    <SnapMap booth={booth} open mapref={mapRef}/>
                  </StyledMapBox>
                </Grid>
              </Grid>
            </Paper>
          </StyledModal>
        </Fade>
      </Modal>
    </div>
  );
}




