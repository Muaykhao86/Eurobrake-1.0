import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import CountDownBanner from '../components/CountDownBanner';
import {device} from './Page';


const StyledHero = styled.div`
    min-width: 100%;
    @media ${device.tablet} {
    height: ${props => props.h || props.theme.heroHeightSml };
    }
    @media ${device.laptop} {
    height: ${props => props.h || props.theme.heroHeightBig };
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


&&.MuiTypography-body1 {
        font-size: ${props => props.fs || '10rem'};
        font-family:${props => props.theme.MPBlack};
        line-height: 1;
}
        align-self: center;
    @media ${device.tablet} {
    width: ${props => props.theme.laptopWidth };
    top: 15rem;
    }
    @media ${device.laptop} {
    width: ${props => props.max || props.theme.minWidth };
    top: ${props => props.t || '20rem'};
    }
        line-height: ${props => props.LH || '1'};
        color: ${props => props.theme.white};
        text-align: ${props => props.ta || 'left'};
        text-shadow: 0px 3px 50px #0000008C;

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


