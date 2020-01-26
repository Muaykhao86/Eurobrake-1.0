import React, { createRef, useState } from 'react';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Button } from './Button';
import CancelIcon from '@material-ui/icons/Cancel';
import Dialog from '@material-ui/core/Dialog';
import {SendForm} from  './forms/FormActions';

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
    min-width: 20vw;
    background-color: ${props => props.theme.white};
    padding: 2rem;

.MuiPaper-root {
    color:  ${props => props.theme.primary};
 
}

.MuiIconButton-root:hover {
    background-color: rgba(0, 0, 0, 0);
}

.button-box{
    align-self: center;
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
        font-family: ${props => props.theme.MPSemibold};
        font-size: 3rem;

        width: 20vw;

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
        margin-right: 2rem;
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

export default function WithdrawPopup(props) {
    const [open, setOpen] = React.useState(false);
    const [Loading, setLoading] = useState(false);
    const [Status, setStatus] = useState(null);
    const [Toggle, setToggle] = useState(false);
    let csrf = '';
    const { values, url } = props;


    csrf = values.__csrf_token

    console.log('popup', { values, url, csrf })
    
    
    const onWithdraw = async (values) => {
        await setLoading(true);
        await console.log('submitting')

        let res = await SendForm({ url, values, csrf })
        let resData = await res
        console.log('withdrawn', { resData })
        let dataStatus = await resData && resData.status;
        setStatus(dataStatus)
        let result = async () => {
            await setLoading(false)
            await setToggle(true)
        }

        return result()
    }

    return (
        <>
            <a style={{ cursor: 'pointer', }} onClick={() => setOpen(open => !open)}>
                {props.children}
            </a>

            <StyledDialog open={open} onClose={() => setOpen(open => !open)} aria-labelledby="dialog-title" >
                <StyledPopup>
                    <div className="popup_top-box">
                        <Typography className="popup-title">Are you sure you want to withdraw your submission?</Typography>
                        <IconButton aria-label="close" onClick={() => setOpen(open => !open)} style={{ padding: '0' }}>
                            <AddCircleOutlineIcon className="popup-closeBtn" />
                        </IconButton>
                    </div>
                    {Loading ?
                        <CircularProgress />
                        :
                        Toggle ?
                            <Typography className="popup-title" style={{ alignSelf: 'center', textTransform: 'uppercase' }}>{Status}</Typography>
                            :
                            <div className="button-box">
                                <Button
                                    onClick={() => setOpen(open => !open)}
                                    bcolor="#134381"
                                    background="#134381"
                                    br="100rem"
                                    padding="0.5rem 2rem"
                                    style={{ margin: ".5rem 0", color: '#FFF' }}
                                    fontSize="1.7rem">
                                    <CancelIcon style={{ fontSize: '3rem', marginRight: '1rem', color: '#FFF' }} /> No
                                                </Button>
                                <Button
                                    onClick={onWithdraw}
                                    bcolor="#134381"
                                    background="#134381"
                                    br="100rem"
                                    padding="0.5rem 2rem"
                                    style={{ margin: ".5rem 0", color: '#FFF' }}
                                    fontSize="1.7rem">
                                    <CheckCircleIcon style={{ fontSize: '3rem', marginRight: '1rem', color: '#FFF' }} />
                                    Yes
                                                </Button>

                            </div>
                    }
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