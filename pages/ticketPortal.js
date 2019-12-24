import React from 'react'
import styled from 'styled-components';
import HeroSection from '../components/HeroSection';



const StyledPage = styled.div`
    display: flex;
    flex-flow: column;
    align-self: center;
    margin-top: 5rem;
    width: ${props => props.theme.minWidth};
    background-color: ${props => props.theme.white};

    h1{
        font-family: ${props => props.theme.MPBlack};
        color: ${props => props.theme.primary};
        font-size: 4.4rem;
    }
`;

const Content = styled.iframe`
    align-self: center;
    margin-top: 2rem;
    min-width: 100rem;
    min-height: 100rem;
    border: none;
    background-color: transparent;
    /* overflow: hidden; */
    text-decoration: none;
`;


export default () => (
    <>
     <HeroSection t="30rem">
                Book Now
    </HeroSection>
<StyledPage>
    <h1>Book your tickets now</h1>
    <Content src="https://www.eventsforce.net/fisita/14/register" />
</StyledPage>    
</>

) 