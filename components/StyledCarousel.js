import React, { Component } from 'react'
import styled from 'styled-components';
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';



const Overlay = styled.div`
/* transform: translate3d(0,0,0); */
overflow: hidden;
`;



const Container = styled.div`
width: 100%;
height: 80vh;

.react-reveal{
    height: 100%;
}
 @media only screen 
        and (max-device-width: 768px) 
        and (-webkit-min-device-pixel-ratio: 2) {
    height: ${props => props.h || props.theme.heroHeightSml };
    }  
display: flex;
position: relative;

/* background-position: center; */
/* object-fit: cover; */
background-color: black;
`;

const StyledSlide = styled.img`
width: 100%;
height: 100% ;
       @media only screen 
        and (max-device-width: 768px) 
        and (-webkit-min-device-pixel-ratio: 2) {
    height: ${props => props.h || props.theme.heroHeightSml };
    } 
     
`;



const CarouselUI = ({ children }) => <Container>{children}</Container>;
const Carousel = makeCarousel(CarouselUI);

export default function StyledCarousel() {
    return (
        <Overlay>
       
        <Carousel   count={10} defaultWait={3000} /*wait for 1000 milliseconds*/>
            <Slide ssr left style={{height: '100%'}}>
                <StyledSlide  srcSet="/images/main.jpg" alt="EuroBrake Greating"/> 
            </Slide>
            <Slide ssr left style={{height: '100%'}}>
                <StyledSlide src="https://live.staticflickr.com/65535/48016136483_351aca498d_k.jpg" alt="EuroBrake greeting"/>
            </Slide>
            <Slide ssr left style={{height: '100%'}}>
                <StyledSlide src="https://www.flickr.com/photos/eurobrake/48016271432/in/album-72157708965910476/"  alt="EuroBrake greeting"/>
            </Slide>
            <Slide ssr left style={{height: '100%'}}>
                <StyledSlide src="https://www.flickr.com/photos/eurobrake/48016256367/in/album-72157708965910476/"  alt="EuroBrake greeting"/>
            </Slide>
        </Carousel>
       
        </Overlay>
        
    )
}
