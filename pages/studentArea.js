import React ,{useEffect} from 'react'
import styled from 'styled-components';
import HeroSection from '../components/HeroSection';
import Typography from '@material-ui/core/Typography';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import {StyledPage, StyledBanner, StyledContainer} from '../components/styles/PageStyles';
import {FixedDates} from '../components/Dates';
import { GetForm } from '../components/forms/FormActions';
import {Paper} from '../components/forms/TaskType/Paper';
import {Poster} from '../components/forms/TaskType/Poster';
import {AcceptPoster} from '../components/forms/TaskType/AcceptPoster';
import {Bio} from '../components/forms/TaskType/Bio';
import {PitchVideo} from '../components/forms/TaskType/PitchVideo';
import {PPT} from '../components/forms/TaskType/PPT';
import {Permissions} from '../components/forms/TaskType/Permissions';
import {LoginForm} from '../components/forms/LoginForm';
import {AbstractForm} from '../components/forms/Abstract';




// export default () => (
//     <>
//     <HeroSection>
//         Complete your task
//     </HeroSection>
//     <StyledPage>
//             <PPT/>
//     </StyledPage>
//     </>
// )
        {/* <Paper/> */}

   
export default () => {

  const GetabDef = async (url) => {
            const formData = await  GetForm(`https://prelude.eurobrake.net/test/authors/edit/EB2020-MDS-003?definition=1`);
            const res = await formData;
           return  console.log({res});
    }
  const GetDef = async (url) => {
            const formData = await  GetForm(`https://prelude.eurobrake.net/test/authors/task/pitchvideo/EB2020-MDS-003?definition=1`);
            const res = await formData;
           return  console.log({res});
    }
  const GetesopDef = async () => {
            const formData = await  GetForm(`https://prelude.eurobrake.net/esop?definition=1`);
            const res = await formData;
           return  console.log({res});
    }
  const GetcontactDef = async () => {
            const formData = await  GetForm(`https://prelude.eurobrake.net/signup?definition=1`);
            const res = await formData;
           return  console.log({res});
    }
  const GetsignupDef = async () => {
            const formData = await  GetForm(`https://prelude.eurobrake.net/contact?definition=1`);
            const res = await formData;
           return  console.log({res});
    }
 const GetwithDef = async () => {
            const formData = await  GetForm(`https://prelude.eurobrake.net/withdraw/EB2020-MDS-003?definition=1`);
            const res = await formData;
           return  console.log({res});
    }
 
  

return (
<>
    <HeroSection max="60%"  >
    Testing of the forms     
    </HeroSection>
    <StyledPage >
//         <Typography>Get some definitions</Typography>

        <button onClick={() => GetesopDef()}>esop</button>
        <button onClick={() => GetcontactDef()}>contact</button>
        <button onClick={() => GetsignupDef()}>signup</button>
        <button onClick={() => GetwithDef()}>withdrwn</button>
         {/* <button onClick={() => GetposterDef()}>poster</button> */}
{/* // ? NEED TO TESXT WIOTH A VALID PAPER */}
        <button onClick={() => GetDef()}>pitchvideo</button>
        <button onClick={() => GetabDef()}>abstract</button>
        {/* <button onClick={() => GetpassDef()}>password</button>
        <button onClick={() => GetresetDef()}>passreset</button> */}
        {/* <AbstractForm/> */}
    </StyledPage>
</>
)}  

