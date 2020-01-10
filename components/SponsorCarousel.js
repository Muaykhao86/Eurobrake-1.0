import React, { Component } from 'react'
import styled from 'styled-components';
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';
import Typography from '@material-ui/core/Typography';




const SponsorContainer = styled.div`
margin-top: 1rem;
align-self: center;
display: flex;
flex-flow: column;

align-items: center;
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

                <div className="sponsor"><a href="http://www.applusidiada.com/en/"><img src="https://www.eurobrake.net/res/display/default/chrome/logos/applus-idiada2.png" alt="" style={{ maxHeight: '5rem', width: '10rem' }} /></a></div>
                <div className="sponsor"><a href="http://www.itt.com/"><img src="https://www.eurobrake.net/res/display/default/chrome/logos/itt.png" alt="" style={{ maxHeight: '5rem', width: '8rem' }} /></a></div>
                <div className="sponsor"><a href="http://www.horiba.com/"><img src="https://www.eurobrake.net/res/display/default/chrome/logos/horiba2.png" alt="" style={{ maxHeight: '5rem', width: '10rem' }} /></a></div>
                <div className="sponsor"><a href="http://www.nofmetalcoatings.com/"><img src="https://www.eurobrake.net/res/display/default/chrome/logos/nof2.png" alt="" style={{ maxheight: '5rem', width: '10rem' }} /></a></div>
                <div className="sponsor"><a href="http://www.itaprochim.it/"><img src="https://www.eurobrake.net/res/display/default/chrome/logos/itaprochim3.png" alt="" style={{ maxHeight: '5rem', width: '10rem' }} /></a></div>
                <div className="sponsor"><a href="http://www.linkeng.com/"><img src="https://www.eurobrake.net/res/display/default/chrome/logos/link3.png" alt="" style={{ maxHeight: '5rem', width: '7rem' }} /></a></div>
                <div className="sponsor"><a href="http://www.fagorederlan.es/"><img src="https://www.eurobrake.net/res/display/default/chrome/logos/fagorederlangroup.png" alt="" style={{ maxHeight: '5rem', width: '10rem' }} /></a></div>
                <div className="sponsor"><a href="http://www.lapinus.com/"><img src="https://www.eurobrake.net/res/display/default/chrome/logos/lapinus2.png" alt="" style={{ maxHeight: '5rem', width: '10rem' }} /></a></div>
                <div className="sponsor"><a href="http://www.sadeca.com/"><img src="https://www.eurobrake.net/res/display/default/chrome/logos/sadeca2.png" alt="" style={{ maxHeight: '5rem', width: '10rem' }} /></a></div>
                <div className="sponsor"><a href="http://www.alroko.de/"><img src="https://www.eurobrake.net/res/display/default/chrome/logos/alroko.png" alt="" style={{ maxHeight: '5rem', width: '10rem' }} /></a></div>
            </SponsorBox>
            </SponsorContainer>
        
    )
}

