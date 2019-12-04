import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import CountDownBanner from '../components/CountDownBanner';


const StyledHero = styled.div`
    min-width: 100%;
    height: 100vh;  
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


&&.MuiTypography-body1 {
        font-size: ${props => props.fs || '11rem'};
        font-family:${props => props.theme.MPBlack};
        line-height: 1;
}
        align-self: center;
        max-width: ${props => props.max || props.theme.maxWidth};
        position: absolute;
        line-height: 1;
        top: ${props => props.t || '20rem'};
        color: ${props => props.theme.white};
        text-align: left;
        text-shadow: 0px 3px 50px #0000008C;

`;

export default function HeroSection(props) {
    const { t, max, fs } = props;
    return (
        <StyledHero>
            <img src={props.src ? props.src : "/images/pic1.png"} alt="EuroBrake Greating" />
            <StyledText t={t} max={max} fs={fs}>
                {props.children}
            </StyledText>
            <div className="banner">
            {props.banner ? <props.banner  /> : <CountDownBanner />}
            </div>
        </StyledHero>
    )
}


