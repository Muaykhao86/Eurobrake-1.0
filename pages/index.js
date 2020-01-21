import React from 'react'
import CountDownBanner from '../components/CountDownBanner';
import { StyledContainer } from '../components/styles/HomeStyles';
import AboutSection from '../components/AboutSection';
import LocationSection from '../components/LocationSection';
import AttendeesSection from '../components/AttendeesSection';
import ExhibitionSection from '../components/exhibitors/ExhibitionSection';
import StudentSection from '../components/StudentSection';
import AuthorSection from '../components/AuthorSection';
import HeroSection from '../components/HeroSection';
import {FixedDates} from '../components/Dates';


export default () => (
    <>       
        <HeroSection 
        sfs="8rem"
        st="65rem"
         cara
         max="60%"
         src="/images/main.jpg" 
         secondary="Secure your tickets by this date"
         >
            Book your Early Bird tickets for EuroBrake 2020  
        </HeroSection> 
        <StyledContainer>
            <FixedDates/>
            <AboutSection />
            <LocationSection />
            <AttendeesSection />
            <ExhibitionSection />
            <StudentSection />
            <AuthorSection />
        </StyledContainer>
    </>

) 