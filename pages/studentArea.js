import React ,{useEffect} from 'react'
import styled from 'styled-components';
import HeroSection from '../components/HeroSection';
import Typography from '@material-ui/core/Typography';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import {StyledPage, StyledBanner, StyledContainer} from '../components/styles/PageStyles';
import {FixedDates} from '../components/Dates';
import { GetForm } from '../components/forms/FormActions';



// * NEED TO SORT OUT A PAGE TO TEST FORMSA AND LINKS FORM ONE PAGE WOITH PIUT BEIN ONLINE AL THE TIME


   
export default () => {

  const GetDef = async (type, paper) => {
      console.log({type, paper})
            const formData = await  GetForm(`https://prelude.eurobrake.net/authors/tasks/${type}/${paper}?definition=1`);
            const res = await formData;
           return  console.log({res});

    }

return (

<>
    <HeroSection max="60%"  >
    Testing of the forms we are     
    </HeroSection>
    <StyledPage >
        <Typography>Get some definitions</Typography>
        <button onClick={() => GetDef('paper','EB2020-MDS-002')}>Tech paper</button>
        <button onClick={() => GetDef('ppt','EB2020-MDS-002')}>PPT</button>
        <button onClick={() => GetDef('permissions','EB2020-MDS-002')}>permissions</button>
        <button onClick={() => GetDef('poster-accept','EB2020-MDS-002')}>poster-accept</button>
        <button onClick={() => GetDef('poster','EB2020-MDS-002')}>poster</button>
        <button onClick={() => GetDef('pitchvideo','EB2020-MDS-002')}>pitchvideo</button>


    </StyledPage>
</>


)} 