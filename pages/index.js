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
import StyledCarousel from '../components/StyledCarousel';


export default () => (
    <>
        {/* <StyledCarousel ssrFadeout/>
        <CountDownBanner /> */}
            
        <HeroSection 
         cara
         src="/images/barcelona.png" 
         >
            EuroBrake 2020
        </HeroSection> 
        <StyledContainer>
            <AboutSection />
            <LocationSection />
            <AttendeesSection />
            <ExhibitionSection />
            <StudentSection />
            <AuthorSection />
        </StyledContainer>
    </>

) 