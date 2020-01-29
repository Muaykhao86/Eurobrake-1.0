import styled, { keyframes } from 'styled-components';
import BaseAnimation from './BaseAnimation';

export const NavStyles = styled.div`
    
    display: flex;
    position: absolute;
    transform: translateX(-20rem);
    z-index: 200;
   
    
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
    position: absolute;
    top:  -4rem;
    left: 5rem;
    margin: 0 1rem;
    width: 6rem;
    height: 8rem; 
    cursor: pointer; 
    display: flex;
    align-items: center;
    z-index: 300;
    transition: all .6s linear;
    /* background-color: salmon; */
     
`;

const trans = {
    up: 'translateY(1.2rem)',
    stay: 'translateY(0)',
    down: 'translateY(-1.2rem)',
    spin0: 'rotate(0)',
    spin90: 'rotate(90deg)',
    spin315: 'rotate(315deg)',
    scale100: 'scale(107)',
    scale0: 'scale(0)',
    in: 'transform .6s cubic-bezier(0.22, 0.61, 0.36, 1) .3s',
    out: 'transform .6s cubic-bezier(.55,.055,.675,.19); .3 '
}

export const TopBun = styled.div`
    position: relative;
    width: 100%;
    height: .3rem;
    transition: ${props => props.isOpen ?
        trans.in : trans.out}; 
    background-color: ${props => props.theme.secondary};
    transform: ${props => props.isOpen ?
        trans.spin315 : trans.spin0};
    
            
&:before {
    width: 100%;
    height: 100%;
    position: absolute;
    transition: top .2s ease-out, transform .22s cubic-bezier(.215,.61,.355,1) .12s;
    top: ${props => props.isOpen ?
        0 : '-1.6rem'} ;
    content: '';
    transform: ${props => props.isOpen ?
        trans.spin90 : trans.spin0};
    border-bottom:3px solid ${props => props.theme.secondary};
    
}

&:after {
    border-bottom: 3px solid ${props => props.theme.secondary};
    width: 100%;
    height: 100%;
    position: absolute;
    content: '';
    transition: top .2s ease-out;
    top: ${props => props.isOpen ?
        0 : '1.6rem'};
   
}`

;


export const HiddenNavBG = styled.div`
    background-color: ${props => props.theme.primary}; 
    position: absolute;
    top: -3rem;
    left: 8rem;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    transition: transform .8s ease-in-out;
    transform: ${props => props.isOpen ?
        trans.scale100 : trans.scale0};
`;


export const HiddenContainer = styled.div`
    position: absolute;
    right: -20rem;
    top: -5rem;
    display:flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-flow: column;
    padding: 2rem;
    transition: all .8s ease-in-out;
    opacity: ${props => props.isOpen ? 
    '1' : '0'};
    transform: ${props => props.isOpen ?
        null : 'translateX(-250rem)'};
    min-width: 99vw;
    min-height: 99vh;

/*          
     @media   only screen and (   min--moz-device-pixel-ratio: 2)      and (min-width: 1300px),
only screen and (     -o-min-device-pixel-ratio: 2/1)    and (min-width: 1300px),
only screen and (        min-device-pixel-ratio: 2)      and (min-width: 1300px),
only screen and (                min-resolution: 192dpi) and (min-width: 1300px),
only screen and (                min-resolution: 2dppx)  and (min-width: 1300px){
 position: absolute;
    right: -20rem;
    top: -5rem;
    display:flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-flow: column;
    padding: 2rem;
    transition: all .8s ease-in-out;
    opacity: ${props => props.isOpen ? 
    '1' : '0'};
    transform: ${props => props.isOpen ?
        null : 'translateX(-250rem)'};
    min-width: 99vw;
    min-height: 99vh;

    } */
         @media only screen 
        and (max-device-width: 768px) 
        and (-webkit-min-device-pixel-ratio: 2) { 
        min-height: 80vh;
    overflow: auto;
     -webkit-overflow-scrolling: touch;

   
}   

    .nav{
    &-title{
        font-size: 2rem;
        font-family: ${props => props.theme.MPLightIt};
        color: ${props => props.theme.white};

        &-box{
            display: flex;
            flex-flow: column;
            align-items: flex-start;
            margin-bottom: 3rem;
        }
/* @media   only screen and (   min--moz-device-pixel-ratio: 2)      and (min-width: 1300px),
only screen and (     -o-min-device-pixel-ratio: 2/1)    and (min-width: 1300px),
only screen and (        min-device-pixel-ratio: 2)      and (min-width: 1300px),
only screen and (                min-resolution: 192dpi) and (min-width: 1300px),
only screen and (                min-resolution: 2dppx)  and (min-width: 1300px){
font-size: 1.3rem

} */
    }
   
    &-links{
        font-size: 2rem;
        font-family: ${props => props.theme.MPBlackIt};
        color: ${props => props.theme.white};
/* @media   only screen and (   min--moz-device-pixel-ratio: 2)      and (min-width: 1300px),
only screen and (     -o-min-device-pixel-ratio: 2/1)    and (min-width: 1300px),
only screen and (        min-device-pixel-ratio: 2)      and (min-width: 1300px),
only screen and (                min-resolution: 192dpi) and (min-width: 1300px),
only screen and (                min-resolution: 2dppx)  and (min-width: 1300px){
font-size: 1.3rem

} */
        &-box{
            display: flex;
            flex-flow: column;
            align-items: flex-start;
            margin-bottom: 3rem;
        }
    }

    &_container-1{
        width: 100%;
        /* border: 10px solid white; */
        height: 100%;
        display: flex;
        flex-flow: row;
        flex: 1 1 auto;
        justify-content: space-between;
         /* @media only screen 
        and (max-device-width: 768px) 
        and (-webkit-min-device-pixel-ratio: 2) { 
        flex-flow: column;
        margin-top: 0;       
        order: 2;      
        } */
    }
  
    
    &-inner{
        display: flex;
        flex-flow: column;
        &-title{
        margin-left: 2rem;
        font-size: 3rem;
        font-family: ${props => props.theme.MPSemibold};
        color: ${props => props.theme.secondary};
        @media only screen 
        and (max-device-width: 1500px) 
        and (-webkit-min-device-pixel-ratio: 2) {
      font-size: 2rem;
    }
    /* @media   only screen and (   min--moz-device-pixel-ratio: 2)      and (min-width: 1300px),
only screen and (     -o-min-device-pixel-ratio: 2/1)    and (min-width: 1300px),
only screen and (        min-device-pixel-ratio: 2)      and (min-width: 1300px),
only screen and (                min-resolution: 192dpi) and (min-width: 1300px),
only screen and (                min-resolution: 2dppx)  and (min-width: 1300px){
font-size: 1.4rem

} */
        }
        &-text{
            margin-left: 2rem;
            font-size: 3rem;
        font-family: ${props => props.theme.MPLight};
        color: ${props => props.theme.white};
         @media only screen 
        and (max-device-width: 1500px) 
        and (-webkit-min-device-pixel-ratio: 2) {
      font-size: 2rem;
    }
       
         /* @media   only screen and (   min--moz-device-pixel-ratio: 2)      and (min-width: 1300px),
only screen and (     -o-min-device-pixel-ratio: 2/1)    and (min-width: 1300px),
only screen and (        min-device-pixel-ratio: 2)      and (min-width: 1300px),
only screen and (                min-resolution: 192dpi) and (min-width: 1300px),
only screen and (                min-resolution: 2dppx)  and (min-width: 1300px){
font-size: 1.4rem

} */
     
       
       }
       


    } 
    
    &_box-1{
        margin-left: 3rem;
        padding: 2rem;
        

         @media only screen 
  and (max-device-width: 768px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
      /* display: flex;
      flex-flow: column; */

}


         @media only screen 
        and (max-device-width: 1700px) 
        and (-webkit-min-device-pixel-ratio: 2) {
        
        width: 80%;
    }
        max-height: 20rem;
        flex: 1 1 auto;
        /* border: 10px solid white; */
        padding-bottom: 4rem;
        /* background-color: orangered; */
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
       
    }
    &_box-middle{
        min-height: 50rem;
        max-width: 95rem;
        flex: 1 1 auto;
        /* border: 10px solid white; */
        margin: 2rem;
        padding: 2rem;
        display: flex;
        flex-flow: row;
        justify-content: space-between
;

      
        &-1{
            display: flex;
            flex-flow: column;
            width: 26rem;
            min-height: 50rem;
            /* background-color: goldenrod; */

        }

        &-2{
            
            width: 26rem;
            min-height: 50rem;
            /* background-color: goldenrod; */
        }
        &-3{
            width: 15rem;
            min-height: 50rem;
            /* background-color: goldenrod; */

        }

         @media only screen 
  and (max-device-width: 768px) 
  and (-webkit-min-device-pixel-ratio: 2) { 

}



    }
    &_box-right{

        /* border: 10px solid white; */
        height: 50rem;
        /* min-height: 85rem; */
        max-width: 26rem;
        flex: 1 1 auto;
        margin: 2rem;
         display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: space-between;
          @media only screen 
        and (max-device-width: 768px) 
        and (-webkit-min-device-pixel-ratio: 2) { 
        /* max-width: 100%;
        align-self: center;
        order: 1; */
        display: none
        }
    }
    
    &_box-left{

        /* border: 10px solid white; */
        height: 50rem;
        /* min-height: 85rem; */
        max-width: 26rem;
        flex: 1 1 auto;
        margin: 2rem;
         display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: space-between;
         @media only screen 
        and (max-device-width: 768px) 
        and (-webkit-min-device-pixel-ratio: 2) { 
        display: none;          
        }
    }

    &_box-bottom{
        margin-left: 5rem;
        display: flex;
        flex-flow: row;
        align-items: flex-end;

        &-text{
            font-size: 1.5rem;
            margin-right: 2rem;
        font-family: ${props => props.theme.MPRegular};

        }

          @media only screen 
  and (max-device-width: 768px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
      align-self: flex-end;

}



    }
}

`;