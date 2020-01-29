import React from 'react'
import styled from 'styled-components';
import HeroSection from '../components/HeroSection';
import {FixedDates, FixedBox} from '../components/Dates';




const StyledPage = styled.div`
    display: flex;
    flex-flow: column;
    align-self: center;
    margin-top: 5rem;
    width: ${props => props.theme.minWidth};
    background-color: ${props => props.theme.white};

      @media only screen 
  and (max-device-width: 768px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    width: ${props => props.theme.mobileWidth};    
}

    h1{
        font-family: ${props => props.theme.MPBlack};
        color: ${props => props.theme.primary};
        font-size: 4.4rem;
    }
`;

const Content = styled.div`
    align-self: center;
    display: flex;
    /* MOBILE SCROLLING */
     -webkit-overflow-scrolling: touch;
    overflow: auto;
    justify-content: center;
    margin-top: 5rem;
    width: 70vw;
      /* @media only screen 
  and (max-device-width: 768px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    width: 80vw;     */
/* } */

    min-height: 75rem;
    background-color: transparent;
    /* padding: 3rem; */
    padding-top: 12rem;
    text-decoration: none;
    border: none;

`;




export default () => (
    <>
     <HeroSection 
     t="35%"
    src="https://live.staticflickr.com/65535/48015864661_8301c18ef8_b.jpg"
     >
                Book Now
    </HeroSection>
<StyledPage>
            <FixedDates/>
            <FixedBox/>

    <h1>Book your tickets now</h1>
    <Content>
        <iframe src="https://www.eventsforce.net/fisita/14/register" frameborder="0" style={{width: '100%'}}/>
     
    </Content>
</StyledPage>    
</>

) 