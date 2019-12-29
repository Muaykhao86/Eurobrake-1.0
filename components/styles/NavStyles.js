import styled, { keyframes } from 'styled-components';
import BaseAnimation from './BaseAnimation';

export const NavStyles = styled.div`
    
    display: flex;
    position: absolute;
    transform: translateX(-20rem);
    z-index: 200;
    a{  
        font-family: ${props => props.theme.MPBold};
        font-size: 3rem;
        color: ${props => props.sticky ?
        props.theme.white : props.theme.secondary};
        margin: 1rem;
        text-transform: uppercase;
        cursor: pointer;
        z-index: 100;

           @media only screen 
        and (max-device-width: 1200px) 
        and (-webkit-min-device-pixel-ratio: 2) { 
    font-size: 2.3rem;               
}
    }
`;
const Rotate360 = keyframes`
   
    100%{
        transform: rotate(360deg);
    }
`;

export const Rotate = styled(BaseAnimation)`
    animation-name: ${Rotate360};
    transform-origin: center center;
`;

export const Burger = styled.div`
    margin: 0 1rem;
    width: 4rem;
    height: 4rem; 
    cursor: pointer; 
    display: flex;
    align-items: center;
    z-index: 300;
    transition: all 10s linear;
    /* background-color: salmon; */
`;

const trans = {
    up: 'translateY(1.2rem)',
    stay: 'translateY(0)',
    down: 'translateY(-1.2rem)',
    spin0: 'rotate(0)',
    spin90: 'rotate(-90deg)',
    spin315: 'rotate(-315deg)',
    scale100: 'scale(100)',
    scale0: 'scale(0)',
    in: 'transform .6s cubic-bezier(0.22, 0.61, 0.36, 1) .3s',
    out: 'transform .6s cubic-bezier(.55,.055,.675,.19); .3 '
}

export const TopBun = styled.div`
    position: relative;
    width: 100%;
    height: .2rem;
    transition: ${props => props.isOpen ?
        trans.in : trans.out}; 
    background-color: ${props => props.sticky ?
        props.theme.white : props.theme.secondary};
    transform: ${props => props.isOpen ?
        trans.spin315 : trans.spin0};
            
&:before {
    width: 100%;
    height: 100%;
    position: absolute;
    transition: top .2s ease-out, transform .22s cubic-bezier(.215,.61,.355,1) .12s;
    top: ${props => props.isOpen ?
        0 : '-1.2rem'} ;
    content: '';
    transform: ${props => props.isOpen ?
        trans.spin90 : trans.spin0};
    border-bottom:2px solid ${props => props.sticky ?
        props.theme.white : props.theme.secondary};
}

&:after {
    border-bottom: 2px solid ${props => props.sticky ?
        props.theme.white : props.theme.secondary};
    width: 100%;
    height: 100%;
    position: absolute;
    content: '';
    transition: top .2s ease-out;
    top: ${props => props.isOpen ?
        0 : '1.2rem'};
   
}`;


export const HiddenNavBG = styled.div`
    background-color: ${props => props.theme.primary}; 
    position: absolute;
    top: -4rem;
    right: 0rem;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    transition: transform .8s ease-in-out;
    transform: ${props => props.isOpen ?
        trans.scale100 : trans.scale0};
`;


export const HiddenContainer = styled.div`
    position: absolute;
    right: -15rem;
    top: 0;
    display:flex;
    padding: 2rem;
    margin: 2rem;
    transition: all .8s ease-in-out;
    transform: ${props => props.isOpen ?
        null : 'translateX(-200rem)'};
    min-width: 90vw;
    min-height: 90vh;
    /* border: 100px white solid; */
         @media only screen 
        and (max-device-width: 768px) 
        and (-webkit-min-device-pixel-ratio: 2) { 
    min-height: 30rem;                 
}
         @media only screen 
        and (max-device-width: 500px) 
        and (-webkit-min-device-pixel-ratio: 2) { 
    flex-flow: column;        
    margin: 0;
}


   .Nav-title{
        font-size: 4rem;
            @media only screen 
        and (max-device-width: 1200px) 
        and (-webkit-min-device-pixel-ratio: 2) { 
    font-size: 2.3rem;               
}

    }   

    .Nav-title{
        margin-left: 1rem;
    } 
    
    .nav_box-1{
        flex: 1 1 auto;
        border: 2px solid white;
        padding: 2rem;
        margin: 2rem;
        /* background-color: orangered; */
        display: flex;
        flex-flow: column;
        align-items: flex-start;
    }
    .nav_box-2{
        flex: 1 1 auto;
        border: 2px solid white;
        padding: 2rem;
        margin: 2rem;
        display: flex;
        flex-flow: column;
        align-items: flex-start;
    }
    .nav_box-3{
        flex: 1 1 auto;
        border: 2px solid white;
        padding: 2rem;
        margin: 2rem;
        /* background-color: goldenrod; */
         display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: space-around;
    }
    .nav_box-4{
        flex: 1 1 auto;
        border: 2px solid white;
        padding: 2rem;
        margin: 2rem;
        /* background-color: sandybrown; */
        min-height: 15rem;
        min-width: 15rem;
    }
    .nav_box-5{
        flex: 1 1 auto;
        border: 2px solid white;
        padding: 2rem;
        margin: 2rem;
        
        /* background-color: sandybrown; */
        min-height: 15rem;
        min-width: 15rem;
    }
    .nav_box-6{
        border: 2px solid white;
        padding: 2rem;
        margin: 2rem;
        
        min-height: 15rem;
        min-width: 15rem;
    }

`;