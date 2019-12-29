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
    display: flex;
    
    margin-top: 10rem;
    min-width: 80rem;
    min-height: 70rem;
    border: 5px solid ${props => props.theme.primary};
    background-color: transparent;
    padding: 3rem;
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