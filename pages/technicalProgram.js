import React from 'react'
import HeroSection from '../components/HeroSection';

import {StyledPage, IframeContent} from '../components/styles/PageStyles';

export default () => (
    <>
     <HeroSection t="25rem">
                Book Now
    </HeroSection>
<StyledPage>
    <h1>Book your tickets now</h1>
    <IframeContent src="https://www.eventsforce.net/fisita/14/register" />
</StyledPage>    
</>

) 