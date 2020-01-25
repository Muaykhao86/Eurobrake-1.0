import React from 'react'
import TechExpandTable from '../components/TechExpandTable';
import Typography from '@material-ui/core/Typography';
import HeroSection from '../components/HeroSection';

import {StyledPage, IframeContent} from '../components/styles/PageStyles';
import {FixedDates, FixedBox} from '../components/Dates';


export default () => (
    <>
     <HeroSection  max="55%"
 src="https://live.staticflickr.com/65535/48015833213_3a48d1441c_b.jpg"
     >
                Technical Program
    </HeroSection>
<StyledPage>
                <Typography gutterBottom className="Page-title">Technical Program</Typography>

            <FixedDates/>
            <FixedBox/>

    <TechExpandTable/>
</StyledPage>    
</>

) 