import React, { Component } from 'react'
import styled from 'styled-components';
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';



const Overlay = styled.div`
/* width: 100%;
height:100%; */
    background-color: ${props => props.theme.primary};
    /* opacity: .8; */
`;



const Container = styled.div`

width: 100%;
height: 80vh;
 @media only screen 
        and (max-device-width: 768px) 
        and (-webkit-min-device-pixel-ratio: 2) {
    height: 60vh;
    }
display: flex;
// ? CAROUSEL IS PLAYING UP - CANT SEE IT WITH POISTIONI IN RELATIVE BUT NOT MERGING IN THE DOM 
//? IDEALLY JUST HAVE THE C.D, TIMER @20%  AND CAROUSEL @80VH
// ! WHY TF -- GOT A FEELINB ITS TO DO WITH THE ABSOLUTE POITIONING ON REACT ::-ms-reveal,
 /* SHOULD I JUST BUILD IT MY SELF */
 /* UPDATE NOW OBJECT FIT IS NIT WORKIN G */
 // ! 
position: relative;

overflow: hidden;
flex: 1 1 80%;
background-position: center;
/* object-fit: cover; */
`;

const StyledSlide = styled.img`
min-width: 100%;
min-height: 80vh !important;
       @media only screen 
        and (max-device-width: 768px) 
        and (-webkit-min-device-pixel-ratio: 2) {
    min-height: 60vh !important;
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
