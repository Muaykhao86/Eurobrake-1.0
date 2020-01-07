import React, { Component } from 'react'
import styled from 'styled-components';
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';



const Overlay = styled.div`
/* width: 100%;
height:100%; */
    /* background-color: ${props => props.theme.primary}; */
    /* opacity: .8; */
`;



const Container = styled.div`

width: 100%;
height: 80vh;
 @media only screen 
        and (max-device-width: 768px) 
        and (-webkit-min-device-pixel-ratio: 2) {
    height: ${props => props.h || props.theme.heroHeightSml };
    }  
display: flex;
position: relative;

overflow: hidden;
flex: 1 1 80%;
background-position: center;
/* object-fit: cover; */
`;

const StyledSlide = styled.img`
/* position: absolute; */
min-width: 100%;
height: 80vh ;
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
       
        <Carousel defaultWait={4000} /*wait for 1000 milliseconds*/>
            <Slide right >
                <StyledSlide style={{}} srcSet="/images/pic1.png" alt="EuroBrake Greating"/> 
            </Slide>
            <Slide right>
                <StyledSlide style={{}} srcSet="/images/pic2.png" alt="EuroBrake Greating"/> 
            </Slide>
        </Carousel>
       
        </Overlay>
        
    )
}
