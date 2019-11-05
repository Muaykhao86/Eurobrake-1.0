import React, { Component } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';

const HeaderBar = styled.div`
    color: white;
    position: fixed;
    background-color: ${props => props.sticky ? 
    "#134381" : "transparent"};
    min-width: 100vw;
    height: 10rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    z-index: 100;

    /* a{color: white} */
`;

const HeaderLogo = styled.img.attrs(props => ({
    src: "/images/logo.png",
    alt: "Logo"
}))`max-width: 16.8rem;
    margin-left: 10rem;
    margin-right: auto;
    cursor: pointer;
`;

const HeaderButton = styled.button`
    font-size: 1.5rem;
    font-family: ${props => props.theme.MPBold};
    margin-left: 2rem;
    text-transform: uppercase;
    align-self: flex-end;
    min-width: 16rem;
    min-height: 100%;
    background-color: ${props => props.sticky ?
    props.theme.secondary : 'transparent'};
    border: none;
    color:${props => props.theme.white};
     /* ${props => props.sticky ? 
    props.theme.primary : props.theme.white}; */
    cursor: pointer;
    outline: none;
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
            <Link href="/">
            <HeaderLogo />
            </Link>
            <Nav sticky={this.state.sticky} />
            <HeaderButton sticky={this.state.sticky}>Book now</HeaderButton>
        </HeaderBar>
    
        )
    }
 };

export default Header;



