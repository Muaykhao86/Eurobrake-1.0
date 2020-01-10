import React from 'react'
import styled from 'styled-components';
import Link from 'next/link';

export const Button = styled.a`
&,
&:link, 
&:visited{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    font-size: ${props => props.fontSize ||
    '2.1rem'};
    color: ${props => 
    props.color || 
    props.theme.white};
    background: ${props => 
    props.background || 
    'transparent'};
    border: 1px solid ${props => props.bcolor 
    ||props.theme.white};
    border-radius: ${props => props.br ||
    '0'};
    font-family: ${props => props.theme.MPBold};
    letter-spacing: 0;
    padding: ${props => props.padding ||
     '1.5rem 4rem' } ;
    transition: all .2s;
    cursor: pointer;
}
&:hover{
    box-shadow: ${props => props.bs ? 
    props.bs : '0 2.5rem 4rem rgba(0, 0, 0, 0.5)'};
    transform: ${props => props.transform ?
    props.transform : 'translateY(-.3rem)'};
    color: ${props => props.HColor ? 
    props.Hcolor : '#FFF'};
    background-color: ${props => props.HBColor ? 
    props.HBColor : '#12377D'};
}
&::after{
    transform: scalex(1.4) scaleY(1.6);
     opacity: 0;
        }
    
/* TAKEN OUT FOCUS BECAUSE CHROME DOESNT LIKE IT...SEE IF IT CAUSES AGRO OR NOT */
/* put it back in as was causing outline so just seperated it from translate up! */
&:focus{
        outline: none;
    }
&:active{
        outline: none; 
        transform: translateY(-.1rem);
        box-shadow: ${props => props.abs || '0 2rem 2rem rgba(0, 0, 0, 0.5)'};
    }
`;

// const ButtonLink = React.forwardRef(({ className, href, hrefAs, children, prefetch }, ref) => (
//     <Link href={href} as={hrefAs} prefetch ref={ref}>
//         <a className={className}>
//             {children}
//         </a>
//     </Link>
// ));

//TODO ADJUST BOX SHADOWS FOR DIFFERENT BUTTONS