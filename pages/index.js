import React from 'react'
import VideoPLayer from '../components/VideoPlayer';
import CountDownBanner from '../components/CountDownBanner';
import { StyledContainer } from '../components/styles/HomeStyles';
import AboutSection from '../components/AboutSection';
import LocationSection from '../components/LocationSection';
import AttendeesSection from '../components/AttendeesSection';
import ExhibitionSection from '../components/exhibitors/ExhibitionSection';
import StudentSection from '../components/StudentSection';
import AuthorSection from '../components/AuthorSection';
import HeroSection from '../components/HeroSection';


export default () => (
    <>
         <HeroSection src="/images/barcelona.png" max="55%" >
            EuroBrake 2020
        </HeroSection>
        {/* <div className="Hero">
            <VideoPLayer />
            <CountDownBanner />
        </div> */}
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