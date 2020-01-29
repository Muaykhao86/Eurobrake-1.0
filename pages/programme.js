import React from 'react'
import TechExpandTable from '../components/TechExpandTable';
import Typography from '@material-ui/core/Typography';
import HeroSection from '../components/HeroSection';

import {StyledPage, IframeContent} from '../components/styles/PageStyles';
import {FixedDates, FixedBox} from '../components/Dates';


export default () => (
    <>
     <HeroSection  
        scolor="#F9B721"
        max="55%"
        sfs="8rem"
         tsfs="5rem"
         tst="60%"
         mst="65%"
         secondary="Plan your experience for EuroBrake 2020"

 src="https://live.staticflickr.com/65535/48015833213_3a48d1441c_b.jpg"
     >
                Technical Programme
    </HeroSection>
<StyledPage>
                <Typography gutterBottom className="Page-title">Technical Programme</Typography>

            <FixedDates/>
            <FixedBox/>

    <TechExpandTable/>
</StyledPage>    
</>

) 