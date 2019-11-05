import styled, {keyframes} from 'styled-components';

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
    100% {
        transform: rotate(360deg);
    }
`;

const BunFun = keyframes`
    100%{
        top: 0;
    }
`;

const Movedown = keyframes`

`;

export const Burger = styled.div `
    margin: 0 1rem;
    width: 4rem;
    height: 4rem; 
    cursor: pointer; 
    display: flex;
    align-items: center;
    z-index: 300;
    /* background-color: salmon; */

`;

export const TopBun = styled.div`
    position: relative;
    width: 100%;
    height: .2rem;
    background-color: ${props => props.sticky ? 
    props.theme.white : props.theme.secondary };
    /* animation:${Rotate360} 2s cubic-bezier(0.22, 0.61, 0.36, 1) 3s ease-in-out; */
    /* animation: name duration timing-function delay iteration-count direction fill-mode; */
            

&:before {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -1.2rem;
    content: '';
    
    border-bottom:2px solid ${props => props.sticky ? 
     props.theme.white : props.theme.secondary };
    
    animation:${BunFun} .2s ease-out;
  
}

&:after {
    border-bottom: 2px solid ${props => props.sticky ? 
     props.theme.white : props.theme.secondary };
    width: 100%;
    height: 100%;
    position: absolute;
    content: '';
    top: 1.2rem;
    animation: ${BunFun} .2s ease-out;

}`;



export const HiddenNavBG = styled.div`
    background-color: ${props => props.theme.primary}; /* Still not sure o this as it goes transparent on the way back instantly => doesnt look great :/*/
    position: absolute;
    top: -4rem;
    right: 0rem;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    transition: transform .8s ease-in-out;
    transform: ${props => props.isOpen ?
     'scale(1000)' : null };
     
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

    transition: transform .8s ease-in-out;
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