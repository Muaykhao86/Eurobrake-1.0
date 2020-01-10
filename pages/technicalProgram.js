import React from 'react'
import ExpandTable from '../components/ExpandTable';
import HeroSection from '../components/HeroSection';

import {StyledPage, IframeContent} from '../components/styles/PageStyles';
import {FixedDates} from '../components/Dates';


export default () => (
    <>
     <HeroSection  max="55%">
                Technical Program
    </HeroSection>
<StyledPage>
            <FixedDates/>

    <ExpandTable/>
</StyledPage>    
</>

) 