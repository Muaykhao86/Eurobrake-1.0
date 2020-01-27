import React, { Component } from 'react'
import Link from 'next/link';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import { NavStyles, Burger, TopBun, HiddenNavBG, HiddenContainer } from './styles/NavStyles';
import { Button } from './Button';
import { Dates, Box, MoBox } from './Dates';
import { HeaderLogo } from './Header';
import { FLogoWhite } from './Icons';
import {mobWidth} from '../utils/mixins';



export const NavLogo = styled.img.attrs(props => ({
    src: "/images/logo.png",
    alt: "Logo"
}))`max-width: 40rem;
 @media only screen 
        and (max-device-width: 1500px) 
        and (-webkit-min-device-pixel-ratio: 2) {
      max-width: 20rem;
    }
   
    cursor: pointer;
`;

export default class Nav extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false ,width: 0, height: 0
        }
    }


componentDidMount() {
  this.updateWindowDimensions();
  window.addEventListener('resize', this.updateWindowDimensions);
}

componentWillUnmount() {
  window.removeEventListener('resize', this.updateWindowDimensions);
}

updateWindowDimensions = () => {
  this.setState({ width: window.innerWidth, height: window.innerHeight });
}

    handleClick = () => {
        this.setState(prev => ({ isOpen: !prev.isOpen }));
    }

    render() {
        const {width, height } = this.state;
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
                          <Box MW="35rem" handleClick={this.handleClick}/> 
                        </div>
                        <div className="nav_box-middle">
                            <div className="nav_box-middle-1">
                                <div className="nav-title-box">
                                    <Typography className="nav-title">For Delegates</Typography>
                                    <Typography className="nav-links" style={{ color: '#F9B721' }}>& Visitors</Typography>
                                </div>

                                <div className="nav-links-box">
                                    <Link href="/"><a onClick={this.handleClick} ><Typography className="nav-links">Home</Typography></a></Link>
                                    <Link href="/about"><a onClick={this.handleClick} ><Typography className="nav-links">About</Typography></a></Link>
                                    <Link href="/exhibitorsRegistration"><a onClick={this.handleClick}><Typography className="nav-links">Registration</Typography></a></Link>
                                    <Link href="/technicalProgram"><a onClick={this.handleClick}><Typography className="nav-links">Technical Program</Typography></a></Link>
                                    <Link href="/welcome"><a onClick={this.handleClick}><Typography className="nav-links">Welcome to Barcelona</Typography></a></Link>
                                    <Link href="/f/[id]/[formType]" as={`/f/FISITA/contact`} ><a onClick={this.handleClick} ><Typography className="nav-links">Contact Us</Typography></a></Link>
                                </div>

                                <div className="nav-title-box">
                                    <Typography className="nav-title">For Students</Typography>
                                    <Typography className="nav-links" style={{ color: '#F9B721' }}>& Educators</Typography>
                                </div>

                                <div className="nav-links-box">
                                    <Link href="/esop"><a onClick={this.handleClick}><Typography className="nav-links">ESOP - Student Opportunities Programme</Typography></a></Link>
                                </div>

                            </div>
                            <div className="nav_box-middle-2">

                                <div className="nav-title-box">
                                    <Typography className="nav-title">For Exhibitors</Typography>
                                    <Typography className="nav-links" style={{ color: '#F9B721' }}>& Sponsors</Typography>
                                </div>

                                <div className="nav-links-box">
                                    <Link href="/exhibitAndSponsor"><a onClick={this.handleClick}><Typography className="nav-links">Exhibit And Sponsor</Typography></a></Link>
                                    <Link href="/exhibitors"><a onClick={this.handleClick}><Typography className="nav-links">Exhibitor Directory</Typography></a></Link>
                                </div>

                            </div>
                            <div className="nav_box-middle-3">
                                <div className="nav-title-box">
                                    <Typography className="nav-title">For Authors</Typography>
                                    <Typography className="nav-links" style={{ color: '#F9B721' }}>& Speakers</Typography>
                                </div>

                                <div className="nav-links-box">
                                    <Link href="/authorsArea"><a onClick={this.handleClick}><Typography className="nav-links">Authors Area</Typography></a></Link>
                                    <Link href="/authorsAreaInstructions"><a onClick={this.handleClick}><Typography className="nav-links">Templates</Typography></a></Link>
                                </div>
                            </div>
                            
                        </div>
                        <div className="nav_box-left" style={{}}>
                            <Dates MW="35rem"  />
                        </div>
                    </div>
                    <div className="nav_box-bottom">
                        <Typography className="nav_box-bottom-text">Organised by</Typography>
                        <a href="https://www.fisita.com/"><FLogoWhite width="16rem" height="5rem" /></a>
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
