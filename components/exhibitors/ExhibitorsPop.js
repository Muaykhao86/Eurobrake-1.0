import React , {useEffect, useState, useRef} from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import styled, { keyframes } from 'styled-components'
import { Button } from '../Button';
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Typography from '@material-ui/core/Typography';
import { MailIcon, PhoneIcon, GlobeIcon, EBFloorPlan } from '../Icons';


const StyledModal = styled.div`
width: 100%;
height: 100%;
display: flex;
flex: 1;
flex-flow: column;
align-items: center;
margin-top: 5rem;
justify-content: stretch;

.paper{
padding: 2rem;
margin: 2rem;
width: 30vw;

  @media only screen 
  and (max-device-width: 768px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    width: 70vw;  
}


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
  font-size: 2.1rem;
  color: ${props => props.theme.primary};
}
 .ModalContact{
  font-family: ${props => props.theme.MPLight};
  font-size: 1.4rem;
  margin-right: .5rem;
 }
 .ModalIcon{
   transform: translateY(-.3rem);
   width: 70%;
   height: 70%;
 }
 .ModalSummary{
  max-height: 15rem;
  font-family: ${props => props.theme.MPSemiLight};
  font-size: 1.4rem;
  padding-top: 1rem;
  overflow: auto;
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

`;
const fadeIn = keyframes`
  0% {
    opacity: 1;
  }
  
  20%{
    opacity: .8;
  }
  50%{
    opacity: .6;
  }
  80%{
    opacity: .2;
  }

  100% {
    opacity: 0;
  }
`
const StyledMapBox = styled.div`
position: ${props => props.full ? 'Fixed' : 'relative'};
top: 0;
/* left: 0;  */
left: ${props => props.full ? '50%' : ''};
right: ${props => props.full ? '50%' : ''};
margin-left: ${props => props.full ?  '-50vw': '0'};
margin-right: ${props => props.full ?  '-50vw': '0' };
 

 background-color: ${props => props.theme.white};
 width: ${props => props.width || '100%'};
  height: ${props => props.width ||'100%'} ;
   @media only screen 
   and (max-device-width: 768px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
  height: '100%' ;
}
   border: 1px solid ${props => props.theme.primary};
  align-self: center;
  overflow: hidden;
  svg{
    	.findMe{
      fill: #134381;
      animation: 1s ${fadeIn} ease-in-out infinite ;
      
    }
  }
`;


export default function ServerModal(props) {
  const rootRef = useRef(null);
  const mapRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [full, setFull] = useState(false)

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

const svgWidth = full ? '100vw' : '';
const svgHeight = full ? '100vh' : '';

const selectedSvg = `#prefix__booth-${booth}`;

  const handleOpen = () => {
    setOpen(true);
    handleSvg()
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSvg = () => {
    console.log({booth});
    // const svg = document.querySelector("#MapBox");

    }
  //Image handler Component
  const addDefaultSrc = (e) => {
    e.target.src = "/images/logo.png"
    e.target.onerror = null;
    return
  }

  
  

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
                spacing={1}
                direction="row"
                wrap= "wrap"
                justify="flex-start"
              >

                <Grid item xs={6}>
                  <img className="ModalLogo" src={img} alt="logo" onError={(e) => addDefaultSrc(e)} />
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
                  <PhoneIcon  className="ModalIcon" />
                </Grid>
                <Grid  item xs={5} >
                  <Typography gutterBottom className="ModalContact" id="server-modal-description">{phone}</Typography>
                </Grid>
                <Grid item xs={1}  style={{}}>
                  <GlobeIcon className="ModalIcon"/>
                </Grid>
                <Grid  item xs={5} >
                  <Typography gutterBottom className="ModalContact" id="server-modal-description">{website}</Typography>
                </Grid>
                <Grid  item xs={1}  style={{transform: 'translateY(.4rem)'}}>
                  <MailIcon  className="ModalIcon" />
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
                  <a onClick={() => console.log('HEY')}><Typography className="ModalMapTitle" id="server-modal-description" style={{ textAlign: 'end' }}>Click map for full screen</Typography></a>
                </Grid>
                <Grid item xs={12}>
                  <StyledMapBox width={svgWidth} height={svgHeight} full={full}>
                    <EBFloorPlan id="FP" booth={booth} height={svgHeight} width={svgWidth} onClick={() => setFull(full => !full)} />
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




