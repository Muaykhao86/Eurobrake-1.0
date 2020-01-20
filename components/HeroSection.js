import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import CountDownBanner from './CountDownBanner';
import StyledCarousel from './StyledCarousel';

const StyledHero = styled.div`
    position: relative;
    padding-top: 10rem;
    z-index: 10;
    min-width: 100%;
    min-height: ${props => props.h || props.theme.heroHeightBig };
      @media only screen 
        and (max-device-width: 768px) 
        and (-webkit-min-device-pixel-ratio: 2) {
    min-height: ${props => props.h || props.theme.heroHeightSml };
    }
    display: flex;
    flex-flow: column;
    
    img{
        flex: 2 1 80%;
        object-fit: cover;
    }
     
    .banner{
        display: flex;
        /* flex: 1 1 20%; */
    }
    
`;
const StyledText = styled(Typography)`
    position: absolute;
    z-index: 10;
    top: ${props => props.t || '26rem'};
     @media only screen 
        and (max-device-width: 768px) 
        and (-webkit-min-device-pixel-ratio: 2) {
    top: ${props => props.t || '14rem'};
    }
    align-self: center;
    width: ${props => props.max || props.theme.minWidth };
    line-height: ${props => props.LH || '1'};
    color: ${props => props.theme.white};
    text-align: center;
    text-shadow: 0px 3px 50px #0000008C;
&&.MuiTypography-body1 {
        font-size: ${props => props.fs || '12rem'};
        font-family:${props => props.theme.MPBlack};
        line-height: 1;
}
`;
export default function HeroSection(props) {
    const { t, max, fs, cara } = props;
    return (
        <StyledHero>
             {cara ? 
            <StyledCarousel /> :
            <img srcSet={props.src ? props.src : "/images/pic11.png"} alt="EuroBrake Greating" />
             }   
            <StyledText t={t} max={max} fs={fs}>
                {props.children}
            </StyledText>
            <div className="banner">
            {props.banner ? <props.banner  /> : <CountDownBanner />}
            </div>
        </StyledHero>
    )
}