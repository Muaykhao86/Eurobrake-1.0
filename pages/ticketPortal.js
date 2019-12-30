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
    flex: 1 1 auto;
    margin-top: 5rem;
    min-width: 70vw;
    min-height: 75rem;
    border: 30px solid ${props => props.theme.primary} ;
    background-color: transparent;
    padding: 3rem;
    padding-top: 12rem;
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