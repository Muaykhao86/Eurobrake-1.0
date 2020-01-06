import React, { Component } from 'react'
import styled from 'styled-components';
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';


const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
position: relative;
overflow: hidden;
flex: 1 1 80%;
object-fit: cover;

`;

const StyledSlide = styled.img`
min-width: 100%;
max-height: 80vh;
       @media only screen 
        and (max-device-width: 768px) 
        and (-webkit-min-device-pixel-ratio: 2) {
    min-height: 40vh;
    } 
  
`;



const CarouselUI = ({ children }) => <Container>{children}</Container>;
const Carousel = makeCarousel(CarouselUI);

export default function StyledCarousel() {
    return (
        
        <Carousel defaultWait={4000} /*wait for 1000 milliseconds*/>
            <Slide right >
                <StyledSlide srcSet="/images/pic11.png" alt="EuroBrake Greating"/> 
            </Slide>
            <Slide right>
                <StyledSlide srcSet="/images/pic2.png" alt="EuroBrake Greating"/> 
            </Slide>
        </Carousel>
       
        
    )
}
