import React, { Component } from 'react'
import Link from 'next/link';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import { NavStyles, Burger, TopBun, HiddenNavBG, HiddenContainer } from './styles/NavStyles';
import { Button } from './Button';
import { Dates } from './Dates';
import { HeaderLogo } from './Header';


export const NavLogo = styled.img.attrs(props => ({
    src: "/images/logo.png",
    alt: "Logo"
}))`max-width: 40rem;
   
    cursor: pointer;
`;

export default class Nav extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false,
        }
    }

    handleClick = () => {
        this.setState(prev => ({ isOpen: !prev.isOpen }));
    }

    render() {
        return (
            <NavStyles>
                <HiddenNavBG isOpen={this.state.isOpen} />
                <HiddenContainer isOpen={this.state.isOpen}>
                    <div className="nav_box-1">
                        <NavLogo />
                    </div>
                    <div className="nav_container-1">
                        <div className="nav_box-2">
                            <Link href="/"><a onClick={this.handleClick} >Home</a></Link>
                            <Link href="/about"><a onClick={this.handleClick} >About</a></Link>
                            <Link href="/authorsArea"><a onClick={this.handleClick}>Authors Area</a></Link>
                            {/* <Link href="/exhibitorsArea"><a onClick={this.handleClick}>Exhibitors Area</a></Link> */}
                            <Link href="/f/[id]/[formType]" as={`/f/FISITA/contact`} ><a >Contact Us</a></Link>
                            <Link href="/esop"><a onClick={this.handleClick}>Student Opportunities Programme</a></Link>
                            <Link href="/exhibitAndSponsor"><a onClick={this.handleClick}>Exhibition And Sponsorship</a></Link>
                            <Link href="/welcome"><a onClick={this.handleClick}>Welcome to Barcelona</a></Link>
                            <Link href="/exhibitors"><a onClick={this.handleClick}>Exhibitors List</a></Link>
                            <Link href="/exhibitorsRegistration"><a onClick={this.handleClick}>Delegate Registration</a></Link>
                            <Link href="/technicalProgram"><a onClick={this.handleClick}>Technical Program</a></Link>
                            <Link href="/studentArea" ><a onClick={this.handleClick}>Testing</a></Link>
                        </div>
       
                        <div className="nav_box-3" style={{ marginTop: '2rem' }}>
                            <Dates MW="35rem" />
                            {/* <Link href="/ticketPortal">
                                <Button className="nav-button" onClick={this.handleClick} style={{ border: 'none',  color: '#FFF', width: '100%', height: '10rem', margin: '0' }}>
                                    BOOK NOW
                        </Button>
                            </Link> */}
                        </div>
                    </div>
                </HiddenContainer>
                <Burger isOpen={this.state.isOpen} onClick={this.handleClick}>
                    <TopBun isOpen={this.state.isOpen} sticky={this.props.sticky} />
                </Burger>
            </NavStyles>
        )
    }
}


