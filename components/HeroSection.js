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
    display: flex;
    flex-flow: column;

      @media only screen 
        and (max-device-width: 768px) 
        and (-webkit-min-device-pixel-ratio: 2) {
    min-height: ${props => props.h || props.theme.heroHeightSml };
    }
    
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
    top: ${props => props.secondary ? '60%' : '20%'};
    align-self: center;
    width: ${props => props.max ||  '80%'};
    color: ${props => props.color || props.theme.white};
    text-align: center;
    text-shadow: 0px 4px 7px rgba(0,0,0,0.74);
    
&&.MuiTypography-body1 {
        font-size: ${props => props.fs ||  props.sfs || '12rem'};
         @media only screen 
        and (max-device-width: 1200px) 
        and (-webkit-min-device-pixel-ratio: 2) {
        font-size: ${props => props.tfs || props.tsfs || '9rem'};
    top: ${props => props.tt ? props.tt : '20%'};
    }
         @media only screen 
        and (max-device-width: 768px) 
        and (-webkit-min-device-pixel-ratio: 2) {
        font-size: ${props => props.mfs || props.msfs || '10rem'};
         width: ${props =>  props.mmax|| '80%'};
    top: ${props => props.mt ? props.mt : '20%'};
    }

        font-family:${props => props.sfont? props.theme.MPLight : props.theme.MPBlack};
        line-height: 1;
}
`;
export default function HeroSection(props) {
    const { t, tt , mt, st, mst, tst, max, mmax,  smax, msmax, fs, tfs, mfs, sfs, tsfs, msfs, cara, scolor} = props;
    return (
        <StyledHero>
            {/* <div className="styledoverlay"> */}

             {cara ? 
            <StyledCarousel /> :
            <img srcSet={props.src ? props.src : "/images/pic11.png"} alt="EuroBrake Greating" />
             }   
            <StyledText t={t} mt={mt} tt={tt} max={max} mmax={mmax}fs={fs} tfs={tfs} mfs={mfs}  >
                {props.children}
            </StyledText>
            <StyledText  t={st} mt={mst} tt={tst} max={smax} mmax={msmax} fs={sfs} tfs={tsfs} msfs={msfs} color={scolor}  sfont secondary>
                {props.secondary}
            </StyledText>
            <div className="banner">
            {props.banner ? <props.banner  /> : <CountDownBanner />}
            </div>
            {/* </div> */}
        </StyledHero>
    )
}