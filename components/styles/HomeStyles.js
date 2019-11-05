import styled from 'styled-components';

export const StyledContainer = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
`;






export const StyledSection = styled.div`
    max-width: 55%;
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    margin: 0 10rem;
    margin-top: 5rem;
    margin-bottom: 15rem;

    h1{
        font-family: ${props => props.theme.MPSemibold};
        font-size: 4.4rem;
        color: ${props => props.theme.primary};
        line-height: 1.1;
        margin-bottom: 3rem;
    }

    p{  
        font-family: ${props => props.theme.MPLight};
        font-size: 2rem;
        color: ${props => props.theme.primary};
        margin-bottom: 1rem;
    }

    .innerContainer{
        position: relative;
        display: flex;
        flex-flow: column;
        margin-top: 2rem;
    }
    
    
    .mediaBox{
        min-width: 66.4rem;
        max-height: 33rem;
        overflow: hidden;
        
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

