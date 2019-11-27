import React from 'react'
import styled from 'styled-components';
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import HeroSection from '../components/HeroSection';

import {StyledPage, StyledBanner, StyledContainer} from '../components/styles/PageStyles';

const FilledBanner = () => (
    <StyledBanner>
        <StyledContainer>

            <Typography className="banner-heading" >Book your tours and accomodation here</Typography>
            <Typography className="banner-sub" >Find out about Barcelona</Typography>
            <div className="banner_bottom">
                <ExpandMoreOutlinedIcon className="banner_bottom-icon" />
                <Typography varient="h3" className="banner_bottom-details">See below for more details</Typography>
            </div>
        </StyledContainer>
    </StyledBanner>
)
   
export default () => (
<>
    <HeroSection t="15rem"  banner={FilledBanner} fs="8.9rem">
        Welcome to Barcelona section
    </HeroSection>
    <StyledPage>
<h1> In here there will be :
        General information
        Information about barcelona
        Acomodation 
        and tours</h1>
    </StyledPage>
</>
);

