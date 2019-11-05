import React from 'react'
import styled from 'styled-components';


const DemoDiv = styled.div`
    display: flex;
    flex-flow: column;
    align-self: center;
    justify-content: center;
    max-width: ${props => props.theme.maxWidth};
`;


const Demo = styled.h1`
    padding: 10rem;
    margin: 5rem; 
    color: orangered;

`;

const Content = styled.iframe`

    margin-top: 2rem;
    width: 100%;
    height: 100rem;
    border: solid 1px black;
    background-color: transparent;
    overflow: hidden;
`;

const Bar = styled.div`
    position: fixed;
    width: 100%;
    height: 10rem;
    background-color: ${props => props.theme.primary};
    z-index: 0;
`;

export default () => (
<DemoDiv>
    <Demo> Ticket Portal</Demo>
    <Content src="https://www.eventsforce.net/fisita/9/register" />
    <Demo>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Saepe asperiores quibusdam facere ipsa reprehenderit possimus necessitatibus id, 
        quisquam sed tempore vel, maiores cupiditate facilis accusamus sunt dolorem amet repellat labore.
    </Demo>
</DemoDiv>    

) 