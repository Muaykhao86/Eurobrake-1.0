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
   
       <Demo>Welcome</Demo>

    <Demo>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Saepe asperiores quibusdam facere ipsa reprehenderit possimus necessitatibus id, 
        quisquam sed tempore vel, maiores cupiditate facilis accusamus sunt dolorem amet repellat labore.
    </Demo>
   
</DemoDiv>    

) 