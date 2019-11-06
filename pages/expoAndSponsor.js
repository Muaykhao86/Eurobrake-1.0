import React from 'react'
import styled from 'styled-components';
import Link from 'next/link';


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

const Al = styled.a`
    padding: 10rem;
    margin: 5rem;
    color: blue;
    cursor: pointer;
    `;


export default () => (
<DemoDiv>
    <Demo>Exhibition and Sponsor</Demo>
    <Demo>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Saepe asperiores quibusdam facere ipsa reprehenderit possimus necessitatibus id, 
        quisquam sed tempore vel, maiores cupiditate facilis accusamus sunt dolorem amet repellat labore.
    </Demo>
    <Link href="/exhibitors">
    <Al>
        List of Exphibitors
    </Al>
    </Link>
</DemoDiv>    

) 