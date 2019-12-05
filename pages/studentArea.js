import React from 'react'
import styled from 'styled-components';
import HeroSection from '../components/HeroSection';
import Typography from '@material-ui/core/Typography';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import {StyledPage, StyledBanner, StyledContainer} from '../components/styles/PageStyles';





const FilledBanner = () => (

    <StyledBanner>
        <StyledContainer>

            <Typography className="banner-heading" >Apply now for a sponsored student pass</Typography>
            <Typography className="banner-sub" >Deadline for applications is Friday 1 February 2020</Typography>
            <div className="banner_bottom">
                <ExpandMoreOutlinedIcon className="banner_bottom-icon" />
                <Typography varient="h3" className="banner_bottom-details">See below for more details</Typography>
            </div>
        </StyledContainer>
    </StyledBanner>
)
   
export default () => (
<>
    <HeroSection fs="10rem" max="60%" t="13rem" banner={FilledBanner}>
        EuroBrake Student Opportunities Programme (ESOP)
    </HeroSection>
    <StyledPage mt="10rem">

    </StyledPage>
</>


) 