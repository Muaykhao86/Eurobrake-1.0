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
         cara
         max="90%"
         src="/images/barcelona.png" 
         >
            EuroBrake 2020
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