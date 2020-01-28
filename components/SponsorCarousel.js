import React, { Component } from 'react'
import styled from 'styled-components';
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';
import Typography from '@material-ui/core/Typography';
import { 
Alroko, 
Applus, 
Brembo, 
Fagor, 
Horiba, 
Itaprochim,
Itt, 
Lapinus,
Link, 
Nof, 
Sadeca} from './SponsorIcons';





const SponsorContainer = styled.div`
margin-top: 5rem;
align-self: center;
display: flex;
flex-flow: column;

align-items: center;
        width: ${props => props.theme.minWidth};
          @media only screen 
  and (max-device-width: 1200px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    width: ${props => props.theme.mobileWidth};    
}
        width: ${props => props.theme.minWidth};
          @media only screen 
  and (max-device-width: 768px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    width: ${props => props.theme.mobileWidth};    
}


    .sponsor-top{
    &_title{
        color: ${props => props.theme.primary};
        font-family: ${props => props.theme.MPLightIt};
        font-size: 2rem;

    }
    }
`;



const SponsorBox = styled.div`
        height: 10rem; 
        display: flex;
        flex-flow: wrap;
        border: 1px solid white;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        
    
    .sponsor{
        margin: 1rem ;
        cursor: pointer;
    }
`;





const CarouselUI = ({ children }) => <Container>{children}</Container>;
const Carousel = makeCarousel(CarouselUI);

export default function SponsorCarousel() {
    return (
            <SponsorContainer>
            <div className="sponsor-top">
                <Typography gutterBottom className="sponsor-top_title">Confirmed EuroBrake 2020 Sponsors</Typography>
            </div>
            <SponsorBox>
                <div className="sponsor"><a href="http://www.applusidiada.com/en/"><Applus width="12rem" height="4rem"/></a></div>
                <div className="sponsor"><a href="http://www.itt.com/"><Itt width="12rem" height="5rem"/></a></div>
                <div className="sponsor"><a href="http://www.fagorederlan.es/"><Fagor width="12rem" height="4rem"/></a></div>
                <div className="sponsor"><a href="http://www.horiba.com/"></a><Horiba width="10rem" height="4rem"/></div>
                <div className="sponsor"><a href="http://www.itaprochim.it/"><Itaprochim width="12rem" height="4rem"/> </a></div>
                <div className="sponsor"><a href="http://www.lapinus.com/"><Lapinus width="12rem" height="4rem"/></a></div>
                <div className="sponsor"><a href="http://www.linkeng.com/"><Link width="12rem" height="4rem"/></a></div>
                <div className="sponsor"><a href="http://www.nofmetalcoatings.com/"><Nof width="12rem" height="4rem"/></a></div>
                <div className="sponsor"><a href="https://www.brembo.com/en/"><Brembo width="12rem" height="4rem"/></a></div>
                <div className="sponsor"><a href="http://www.sadeca.com/"></a><Sadeca width="12rem" height="4rem"/></div>
                <div className="sponsor"><a href="http://www.alroko.de/"><Alroko width="12rem" height="4rem"/></a></div>
            </SponsorBox>
            </SponsorContainer>
        
    )
}

