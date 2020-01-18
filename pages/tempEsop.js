import React from 'react'
import TechExpandTable from '../components/ExpandTable';
import HeroSection from '../components/HeroSection';
import {Esop} from '../components/forms/Esop';
import {StyledPage, IframeContent} from '../components/styles/PageStyles';
import {FixedDates} from '../components/Dates';


export default () => (
    <>
     <HeroSection  max="55%">
                Technical Program
    </HeroSection>
<StyledPage>
            <FixedDates/>
    <Esop/>
</StyledPage>    
</>

) 