import styled, {keyframes} from 'styled-components';
import BaseAnimation from './BaseAnimation';

export const NavStyles = styled.div`
    
    display: flex;
    position: absolute;
    transform: translateX(-20rem);
    z-index: 200;

    a{  
        font-family: ${props => props.theme.MPBold};
        font-size: 1.6rem;
        color: ${props => props.sticky ?
        props.theme.white : props.theme.secondary };
        margin: 1rem;
        text-transform: uppercase;
        cursor: pointer;
        z-index: 100;

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

export const Burger = styled.div `
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
    spin220: 'rotate(-224deg)',
    scale1000 : 'scale(1000)',
    scale0 : 'scale(0)',
    in: 'all .6s cubic-bezier(0.22, 0.61, 0.36, 1) .3s',
    out: 'all .6s cubic-bezier(.55,.055,.675,.19); .3 '
}

export const TopBun = styled.div`
    position: relative;
    width: 100%;
    height: .2rem;
    transition: ${props => props.isOpen ? 
    trans.in : trans.out }; 
    background-color: ${props => props.sticky ? 
    props.theme.white : props.theme.secondary };
    transform: ${props => props.isOpen ?
    trans.spin220 : trans.spin0};
            

&:before {
    width: 100%;
    height: 100%;
    position: absolute;
    transition: top .2s ease-out, transform .22s cubic-bezier(.215,.61,.355,1) .12s;
    top: ${props => props.isOpen ?
    0 : '-1.2rem'} ;
    content: '';
    transform: ${props => props.isOpen ? 
    trans.spin90: trans.spin0};
    border-bottom:2px solid ${props => props.sticky ? 
     props.theme.white : props.theme.secondary };
    
 
  
}

&:after {
    border-bottom: 2px solid ${props => props.sticky ? 
     props.theme.white : props.theme.secondary };
    width: 100%;
    height: 100%;
    position: absolute;
    content: '';
    transition: all .2s ease-out;
    top: ${props => props.isOpen ?
    0 : '1.2rem'};
   

}`;


export const HiddenNavBG = styled.div`
    background-color: ${props => props.theme.primary}; /* Still not sure o this as it goes transparent on the way back instantly => doesnt look great :/*/
    position: absolute;
    top: -4rem;
    right: 0rem;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    transform: ${props => props.isOpen ?
     trans.scale1000 : trans.scale0};
    transition: all 1.2s ease-in-out ;
    
     
`;


export const HiddenContainer = styled.div`
    position: absolute;
    right: -15rem;
    top: 0;
    display:flex;
   
    min-width: 90vw;
    min-height: 90vh;
    /* border: 100px white solid; */
    padding: 2rem;
    margin: 2rem;

    transition: all .8s ease-in-out;
    transform: ${props => props.isOpen ?
        null : 'translateX(-200rem)'};

    .nav_box-1{
        border: 2px solid white;
        padding: 2rem;
        margin: 2rem;

        /* background-color: orangered; */

        display: flex;
        flex-flow: column;
        align-items: flex-start;
    }
    .nav_box-2{
        border: 2px solid white;
        padding: 2rem;
        margin: 2rem;
        margin-right: auto;
        /* background-color: limegreen; */
        display: flex;
        flex-flow: column;
        align-items: flex-start;
    }
    .nav_box-3{

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
        border: 2px solid white;
        padding: 2rem;
        margin: 2rem;

        /* background-color: sandybrown; */
        min-height: 15rem;
        min-width: 15rem;
    }
    .nav_box-5{
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