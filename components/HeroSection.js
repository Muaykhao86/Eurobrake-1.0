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
    top: ${props => props.mT || '14rem'};
    }
    align-self: center;
    width: ${props => props.max ||  '100%'};
    line-height: ${props => props.LH || '1'};
    color: ${props => props.color || props.theme.white};
    text-align: center;
    text-shadow: 0px 4px 7px rgba(0,0,0,0.74);
    
&&.MuiTypography-body1 {
        font-size: ${props => props.fs ||  props.sfs || '12rem'};
         @media only screen 
        and (max-device-width: 768px) 
        and (-webkit-min-device-pixel-ratio: 2) {
        font-size: ${props => props.mfs || props.msfs || '10rem'};
         width: ${props =>  props.mMax|| '100%'};
    }

        font-family:${props => props.sfont? props.theme.MPLight : props.theme.MPBlack};
        line-height: 1;
}
`;
export default function HeroSection(props) {
    const { t, max, fs, cara, st, smax, sfs, scolor, mfs, msfs, mMax, smt, mT} = props;
    return (
        <StyledHero>
            {/* <div className="styledoverlay"> */}

             {cara ? 
            <StyledCarousel /> :
            <img srcSet={props.src ? props.src : "/images/pic11.png"} alt="EuroBrake Greating" />
             }   
            <StyledText t={t} mt={mT} max={max} fs={fs} mfs={mfs} mMax={mMax}>
                {props.children}
            </StyledText>
            <StyledText t={st} mT={smt} max={smax} fs={sfs} color={scolor} msfs={msfs} sfont="true">
                {props.secondary}
            </StyledText>
            <div className="banner">
            {props.banner ? <props.banner  /> : <CountDownBanner />}
            </div>
            {/* </div> */}
        </StyledHero>
    )
}