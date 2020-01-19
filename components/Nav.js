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
            isOpen: true,
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
                            <Link href="/exhibitorsArea"><a onClick={this.handleClick}>Exhibitors Area</a></Link>
                            <Link href="/esop"><a onClick={this.handleClick}>Student Opportunities Programme</a></Link>
                            <Link href="/exhibitAndSponsor"><a onClick={this.handleClick}>Exhibition And Sponsorship</a></Link>
                            {/* <Typography gutterBottom className="Nav-title">Quick Links</Typography> */}
                            <Link href="/welcome"><a onClick={this.handleClick}>Welcome to Barcelona</a></Link>
                            <Link href="/exhibitors"><a onClick={this.handleClick}>Exhibitors List</a></Link>
                            <Link href="/exhibitorsRegistration"><a onClick={this.handleClick}>Delegate Registration</a></Link>
                            <Link href=""><a >Technical Program (comming soon)</a></Link>
                            <Link href="/studentArea" ><a onClick={this.handleClick}>Testing</a></Link>
                        </div>
       
                        <div className="nav_box-3" style={{ border: '3px solid #F9B721'  }}>
                            <Dates MW="35rem" />
                            <Link href="/ticketPortal">
                                <Button onClick={this.handleClick} style={{ border: 'none', borderTop: '3px solid #F9B721', color: '#FFF', width: '100%', height: '10rem', margin: '0' }}>
                                    BOOK NOW
                        </Button>
                            </Link>
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


