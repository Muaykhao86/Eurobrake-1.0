import React, { Component } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import Nav from './Nav';



const HeaderBar = styled.div`
    color: white;
    position: fixed;
    background-color: ${props => props.theme.primary};
    /*  "#134381" : "transparent"}; */
    min-width: 100%;
    height: 10rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    z-index: 100;
    border-bottom: 5px solid ${props => props.theme.secondary};

    .logo{
        position: absolute;
        left: 8rem;
        /* margin-left: 10rem; */
        /* margin-right: auto; */
    }


    .head{
        width: 60rem;
        position: absolute;
        top: 2.5rem;
        left: 48rem;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        
        &-title{
        font-size: 1.8rem;
        font-family: ${props => props.theme.MPSemibold};
        color: ${props => props.theme.secondary};
        align-self: flex-start;
        max-width: 90%;
        }
        &-text{
        font-size: 1.8rem;
        font-family: ${props => props.theme.MPLight};
        color: ${props => props.theme.white};
        align-self: flex-start;
        max-width: 90%;
        }
    }
`;

export const HeaderLogo = styled.img.attrs(props => ({
    src: "/images/logo.png",
    alt: "Logo"
}))`max-width: 16.8rem;
    cursor: pointer;
`;


 class Header extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state ={
            sticky: false
        }
    }

    
    headerScroll = () => {
        if(global.window.scrollY === 0) {
            this.setState(prev => ({sticky: false}));
       
        }else{
            this.setState(prev => ({sticky: true}));
          
        }
    }

   componentDidMount(){
       window.addEventListener('scroll', this.headerScroll);
      
   }
   componentWillUnmount(){
       window.addEventListener('scroll', this.headerScroll)
   }

    render(){
        return (

        <HeaderBar sticky={this.state.sticky} ref={this.myRef}>
            <Link href="/"><a className="logo">
            <HeaderLogo />
            </a>
            </Link>
            <div className="head">
                <Typography className="head-title">Europe's braking technology conference & exhibition</Typography>
                <Typography className="head-text">2-4 June 2020, CCIB, Barcelona, Spain</Typography>
            </div>
            <Nav sticky={this.state.sticky} />
            {/* <Link href="/ticketPortal">
            <HeaderButton sticky={this.state.sticky}>Book now</HeaderButton>
            </Link> */}
        </HeaderBar>
    
        )
    }
 };

export default Header;



// const HeaderButton = styled.button`
//     font-size: 1.5rem;
//     font-family: ${props => props.theme.MPBold};
//     margin-left: 2rem;
//     text-transform: uppercase;
//     align-self: flex-end;
//     min-width: 16rem;
//     min-height: 100%;
//     background-color: ${props => props.sticky ?
//     props.theme.secondary : 'transparent'};
//     border: none;
//     color:${props => props.theme.white};
//      /* ${props => props.sticky ? 
//     props.theme.primary : props.theme.white}; */
//     cursor: pointer;
//     outline: none;

//     &:hover{
//         background-color: ${props => props.sticky ?
//         props.theme.primary : props.theme.secondary};
//         color: ${props => props.sticky ?
//         props.theme.secondary : props.theme.primary};
//         border: 2px solid ${props => props.sticky ?
//         props.theme.secondary : 'transparent'};
//         box-shadow: (0, 0, 0, 0.5);
//     }
//     `;
