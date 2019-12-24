import React from 'react'
import styled from 'styled-components';
import Link from 'next/link';
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



const Al = styled.a`
    padding: 10rem;
    margin: 5rem;
    color: blue;
    cursor: pointer;
    `;


export default () => (
    <>
        <HeroSection t="30rem" max="55%">
            Exhibition and Sponsorship
        </HeroSection>
        <StyledPage>
            <h1>This is the Exhibition and sponsorship section</h1>
            <h1>Here there will be Links to </h1>
            <h1>Registration</h1>
            <h1>List of Exhibitors </h1>
            <h1> T+C's</h1>
            <h1> login to view profile </h1>
            <h1> floor plan ???</h1>
            <h1>Here there will be Links to </h1>
            <Link href="/exhibitors">
                <Al>
                    List of Exhibitors
                </Al>
            </Link>
            <Link href="/exhibitorsRegistration">
                <Al>
                    Register
                </Al>
            </Link>
        </StyledPage>
    </>
)

