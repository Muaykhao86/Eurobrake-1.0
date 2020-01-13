import styled from 'styled-components';
import {device} from '../Page';


export const StyledPage = styled.div`
    display: flex;
    flex-flow: column;
    align-self: center;
    width: ${props => props.theme.minWidth};
    min-height: 50rem;
    background-color: ${props => props.theme.white};
    margin-top: 7rem;
   @media only screen 
  and (max-device-width: 768px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    width: ${props => props.theme.mobileWidth};    
}

    h1{
        font-family: ${props => props.theme.MPBlack};
        color: ${props => props.theme.primary};
        font-size: 4.4rem;
    }
`;

export const IframeContent = styled.iframe`
    align-self: center;
    margin-top: 2rem;
    min-width: 100rem;
    min-height: 100rem;
    border: none;
    background-color: transparent;
    /* overflow: hidden; */
    text-decoration: none;
`;


export const StyledBanner = styled.div`
    background-color: #134381;
    min-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white; 
`;

export const StyledContainer = styled.div`
    display: flex;
    flex-flow: column;
    /* align-items: flex-start; */
    min-width: ${props => props.theme.minWidth};
    padding: 3rem 0;
    
    .banner-heading{
        font-family: ${props => props.theme.MPBlack};
        font-size: ${props => props.hfs || '4.4rem'};
        padding-bottom: .5rem;
        margin-bottom: .5rem;
        border-bottom: 2px solid ${props => props.theme.white};
        /* align-self: flex-start; */
    }

    .banner-sub{
        font-family: ${props => props.theme.MPLightIt};
        font-size: ${props => props.sfs || '3.8rem'};
        font-weight: 50;
        /* align-self: flex-start; */

    }

    .banner_bottom{
        display: flex;
        /* align-self: flex-start; */

    &-icon{
        color: ${props => props.theme.primary};
        font-size: 1.5rem;
        background-color: white;
        border: 1px solid white;
        border-radius: 50%;
        margin: .5rem .5rem 0 0 ;
    }  
    &-details{
        font-family: ${props => props.theme.MPSemibold};
        font-size: 1.6rem;
    }
}
`;