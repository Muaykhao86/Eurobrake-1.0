import React from 'react'
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import {ContactForm} from '../components/forms/Contact';
import HeroSection from '../components/HeroSection';
import { Esop } from '../components/forms/Esop';
import { FixedDates, FixedBox } from '../components/Dates';



const StyledPage = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    width: ${props => props.theme.minWidth};
      @media only screen 
        and (max-device-width: 768px) 
        and (-webkit-min-device-pixel-ratio: 2) { 
             
    width: ${props => props.theme.mobileWidth};
        }
    background-color: ${props => props.theme.white};
     margin-top: 3rem;

    a{
          color: ${props => props.theme.primary};
        font-family: ${props => props.theme.MPBold};
        font-size: 2rem;
   
    }
`;


export default () => (
    <>
        <HeroSection 
        t="35rem"
        max="55%"
         tt="35%"
        sfs="8rem"
         tsfs="5rem"
         tst="60%"
         mst="65%"
         secondary="Get in touch to find out more or ask a question"
        >
    
            Contact Us
    </HeroSection>
        <StyledPage>
            <FixedDates />
            <FixedBox />
          <ContactForm/>
        </StyledPage>
    </>

) 