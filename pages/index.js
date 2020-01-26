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


export default () => (
    <>       
        <HeroSection 
        scolor="#F9B721"
        
         cara
         sfs="8rem"
         tsfs="6rem"
         tst="60%"
         mst="60%"
         src="/images/main.jpg" 
         secondary="Secure your tickets by 1 April 2020"
         >
            Book your Early Bird tickets for EuroBrake 2020  
        </HeroSection> 
        <StyledContainer>
            <FixedDates/>
            <FixedBox/>
            <AboutSection />
            <LocationSection />
            <AttendeesSection />
            <ExhibitionSection />
            <StudentSection />
            <AuthorSection />
        </StyledContainer>
    </>

) 