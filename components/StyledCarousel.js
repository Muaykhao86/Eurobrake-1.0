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
 @media only screen 
        and (max-device-width: 768px) 
        and (-webkit-min-device-pixel-ratio: 2) {
    height: ${props => props.h || props.theme.heroHeightSml };
    }  
display: flex;
position: relative;

/* background-position: center; */
background-color: black;
/* object-fit: cover; */
`;

const StyledSlide = styled.img`
/* position: absolute; */
width: 110%;
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
            <Slide ssr left >
                <StyledSlide style={{}} srcSet="/images/pic1.png" alt="EuroBrake Greating"/> 
            </Slide>
            <Slide ssr left>
                <StyledSlide style={{}} srcSet="/images/barcelona.png" alt="EuroBrake Greating"/> 
            </Slide>
        </Carousel>
       
        </Overlay>
        
    )
}
