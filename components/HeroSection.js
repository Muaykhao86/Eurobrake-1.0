import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import CountDownBanner from '../components/CountDownBanner';


const StyledHero = styled.div`
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
        flex: 1 1 20%;
    }
    
`;

const StyledText = styled(Typography)`
    position: absolute;
    top: ${props => props.t || '20rem'};
    align-self: center;
    width: ${props => props.max || props.theme.minWidth };
    line-height: ${props => props.LH || '1'};
    color: ${props => props.theme.white};
    text-align: center;
    text-shadow: 0px 3px 50px #0000008C;

&&.MuiTypography-body1 {
        font-size: ${props => props.fs || '10rem'};
        font-family:${props => props.theme.MPBlack};
        line-height: 1;
}

`;

export default function HeroSection(props) {
    const { t, max, fs } = props;
    return (
        <StyledHero>
            <img srcSet={props.src ? props.src : "/images/pic11.png"} alt="EuroBrake Greating" />
            <StyledText t={t} max={max} fs={fs}>
                {props.children}
            </StyledText>
            <div className="banner">
            {props.banner ? <props.banner  /> : <CountDownBanner />}
            </div>
        </StyledHero>
    )
}


