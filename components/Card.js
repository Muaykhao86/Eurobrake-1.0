import styled from 'styled-components';

export const Card = styled.div`
    position: absolute;
    bottom:  -12rem;
    left: ${props  => 
    props.right && 'null' ||
    props.left && '-5rem'||
    props.center && 'null'};
    right: ${props  => 
    props.right && '-5rem' ||
    props.left && 'null'||
    props.center && 'null'};
    

    max-width: ${props => props.MW || '33rem'};
    min-height: ${props => props.MW ||'33rem'};
    background-color: ${props => props.theme.primary};
    padding: 4rem;
    padding-bottom: 3.5rem;

    align-self: ${props  => 
    props.right && 'flex-end' ||
    props.left && 'flex-start'||
    props.center && 'center'};

    display: flex;
    flex-flow: column;
    justify-content: space-between;

    h1{
        font-size: 4rem;
        font-family: ${props => props.theme.MPBlack};
        color: ${props => props.theme.white};
        align-self: flex-start;
        max-width: 90%;
    }
`;