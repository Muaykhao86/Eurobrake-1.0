import React from 'react'
import styled from 'styled-components';


const DemoDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center; 
    max-width: ${props => props.theme.maxWidth};
`;


const Demo = styled.h1`
    padding: 10rem;
    margin: 5rem;
    color: orangered;

`;

export default () => (
<DemoDiv>
    <Demo>Login</Demo>
    
</DemoDiv>    

) 