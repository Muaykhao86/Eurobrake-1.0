import React, { Component } from 'react'
import Link from 'next/link';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import { NavStyles, Burger, TopBun, HiddenNavBG, HiddenContainer } from './styles/NavStyles';
import { Button } from './Button';
import { Dates, Box } from './Dates';
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
            isOpen: true
            ,
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
                        <div className="">
                            <NavLogo />
                        </div>
                        <div className="nav-inner">
                            <Typography className="nav-inner-title">Europe's braking technology conference & exhibition</Typography>
                            <Typography className="nav-inner-text">2-4 June 2020, CCIB, Barcelona, Spain</Typography>
                        </div>
                    </div>
                    <div className="nav_container-1">
                        <div className="nav_box-right" style={{}}>
                            <Box MW="35rem" />
                        </div>
                        <div className="nav_box-middle">
                            <div className="nav_box-middle-1">
                                <Typography className="nav-title">For Delegates     <span style={{ color: '#F9B721' }}> & Visitors</span></Typography>
                                <Link href="/"><a onClick={this.handleClick} ><Typography className="nav-links">Home</Typography></a></Link>
                                <Link href="/about"><a onClick={this.handleClick} ><Typography className="nav-links">About</Typography></a></Link>
                                <Link href="/exhibitorsRegistration"><a onClick={this.handleClick}><Typography className="nav-links">Registration</Typography></a></Link>
                                <Link href="/technicalProgram"><a onClick={this.handleClick}><Typography className="nav-links">Technical Program</Typography></a></Link>
                                <Link href="/technicalProgram"><a onClick={this.handleClick}>Technical Program</a></Link>
                                <Link href="/welcome"><a onClick={this.handleClick}><Typography className="nav-links">Welcome to Barcelona</Typography></a></Link>
                                <Link href="/f/[id]/[formType]" as={`/f/FISITA/contact`} ><a onClick={this.handleClick} ><Typography className="nav-links">Contact Us</Typography></a></Link>
                                <Typography className="nav-title">For Students       <span style={{ color: '#F9B721' }}> & Educators</span></Typography>
                                <Link href="/esop"><a onClick={this.handleClick}><Typography className="nav-links">ESOP - Student Opportunities Programme</Typography></a></Link>

                            </div>
                            <div className="nav_box-middle-2">
                                <Typography className="nav-title">For Exhibitors     <span style={{ color: '#F9B721' }}> & Sponsors</span></Typography>
                                <Link href="/exhibitAndSponsor"><a onClick={this.handleClick}><Typography className="nav-links">Exhibit And Sponsor</Typography></a></Link>
                                <Link href="/exhibitors"><a onClick={this.handleClick}><Typography className="nav-links">Exhibitor Directory</Typography></a></Link>

                            </div>
                            <div className="nav_box-middle-3">
                                <Typography className="nav-title">For Authors         <span style={{ color: '#F9B721' }}> & Speakers</span></Typography>
                                <Link href="/authorsArea"><a onClick={this.handleClick}><Typography className="nav-links">Authors Area</Typography></a></Link>

                            </div>

                        </div>

                        <div className="nav_box-left" style={{}}>
                            <Dates MW="35rem" />
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


// <Link href="/"><a onClick={this.handleClick} >Home</a></Link>
//                             <Link href="/about"><a onClick={this.handleClick} >About</a></Link>
//                             <Link href="/authorsArea"><a onClick={this.handleClick}>Authors Area</a></Link>
//                             {/* <Link href="/exhibitorsArea"><a onClick={this.handleClick}>Exhibitors Area</a></Link> */}
//                             <Link href="/f/[id]/[formType]" as={`/f/FISITA/contact`} ><a onClick={this.handleClick} >Contact Us</a></Link>
//                             <Link href="/esop"><a onClick={this.handleClick}>Student Opportunities Programme</a></Link>
//                             <Link href="/exhibitAndSponsor"><a onClick={this.handleClick}>Exhibition And Sponsorship</a></Link>
//                             <Link href="/welcome"><a onClick={this.handleClick}>Welcome to Barcelona</a></Link>
//                             <Link href="/exhibitors"><a onClick={this.handleClick}>Exhibitors List</a></Link>
//                             <Link href="/exhibitorsRegistration"><a onClick={this.handleClick}>Delegate Registration</a></Link>
//                             <Link href="/technicalProgram"><a onClick={this.handleClick}>Technical Program</a></Link>
//                             <Link href="/studentArea" ><a onClick={this.handleClick}>Testing</a></Link>
