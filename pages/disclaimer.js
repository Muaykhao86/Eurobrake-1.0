import React from 'react'
import styled from 'styled-components';
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import HeroSection from '../components/HeroSection';

import {StyledPage, StyledBanner, StyledContainer} from '../components/styles/PageStyles';

const StyledDiv = styled.div`
    .disclaimer{

        color: ${props => props.theme.primary};
        font-size: 2rem;
        font-family: ${props => props.theme.MPLight};
         &-title{
        color: ${props => props.theme.primary};
        font-family: ${props => props.theme.MPSemibold};
        font-size: 4.4rem;
        margin-top: 3rem;
        margin-bottom: 3rem;
    }
    }
`;
   
export default () => (
<>
    <HeroSection >
        Disclaimer
    </HeroSection>
    <StyledPage>
    <StyledDiv>
    <Typography gutterBottom className="disclaimer-title"> Disclaimer</Typography>
    <Typography gutterBottom className="disclaimer">No liability will be accepted by FISITA (UK) Limited in connection with any web site controlled by a third party that may be accessed from this web site. FISITA (UK) Limited does not endorse or authorise the contents of any such site.</Typography>
    <Typography gutterBottom className="disclaimer">Any material downloaded or otherwise accessed through the use of this web site is obtained entirely at the user's own risk and that the user will be entirely responsible for any resulting damage to software or computer systems and/or any resulting loss of data even if FISITA (UK) Limited has been advised of the possibility of such damage.</Typography>
    <Typography gutterBottom className="disclaimer">Responsibility for the contents of advertisements published on this site rests solely with the Advertiser. In displaying any such advertisement FISITA (UK) Limited does not accept any responsibility for ensuring that material submitted is compliant with all applicable laws and regulations.</Typography>
    <Typography gutterBottom className="disclaimer">FISITA (UK) Limited disclaims all warranties (express and implied), representations or assurances of any kind relating to the accuracy, content or fitness for any purpose of the information that appears on the web site.</Typography>
    <Typography gutterBottom className="disclaimer">FISITA (UK) Limited reserves the right to withdraw, interrupt or restrict access to the web site for any reason whatsoever.</Typography>
    <Typography gutterBottom className="disclaimer">In no circumstances will FISITA (UK) Limited be liable, in contract, tort, (including negligence or breach of statutory duty) or otherwise howsoever and whatever the cause thereof, (i) for any increased costs or expenses, (ii) for any loss of profit, business, contracts, revenues, or anticipated savings, or (iii) for any special, indirect or consequential damage of any nature whatsoever.</Typography>
    </StyledDiv>

    </StyledPage>
</>
);

