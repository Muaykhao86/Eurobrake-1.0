import styled from 'styled-components';


export const StyledPage = styled.div`
    display: flex;
    flex-flow: column;
    align-self: center;
    margin-top: ${props => props.mt || '5rem'};
    max-width: ${props => props.theme.maxWidth};
    background-color: ${props => props.theme.white};

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
    width: ${props => props.theme.maxWidth};
    padding: 3rem 0;
    
    .banner-heading{
        font-family: ${props => props.theme.MPBlack};
        font-size: ${props => props.hfs || '4.4rem'};
        padding-bottom: .5rem;
        margin-bottom: .5rem;
        border-bottom: 2px solid ${props => props.theme.white};
    }

    .banner-sub{
        font-family: ${props => props.theme.MPLightIt};
        font-size: 3.8rem;
        font-weight: 50;

    }

    .banner_bottom{
        display: flex;
        align-self: flex-end;
    &-icon{
        color: ${props => props.theme.primary};
        font-size: 1.5rem;
        background-color: white;
        border: 1px solid white;
        border-radius: 50%;
        margin: .5rem;
    } 
    &-details{
        font-family: ${props => props.theme.MPSemibold};
        font-size: 1.6rem;
    }
}
`;