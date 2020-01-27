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
import {FixedDates, FixedBox} from '../components/Dates';


// ?   bfs big font size
// sfs sencondary font size



export default () => (
    <>
        <HeroSection 
         cara
        scolor="#F9B721"
         sfs="8rem"
         tsfs="5rem"
         tst="60%"
         mst="65%"
         src="/images/main.jpg" 
         secondary="Secure your tickets by 1 April 2020"
         >
            Book your Early Bird tickets for EuroBrake 
        </HeroSection> 
        <StyledContainer>
            <FixedDates/>
            <FixedBox/>
            <AboutSection />
            <AttendeesSection />
            <ExhibitionSection />
            <StudentSection />
            <AuthorSection />
            <LocationSection />
        </StyledContainer>
    </>

) 