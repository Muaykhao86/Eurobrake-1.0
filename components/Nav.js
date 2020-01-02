import React, { Component } from 'react'
import Link from 'next/link';
import { Typography } from '@material-ui/core';
import { NavStyles, Burger, TopBun, HiddenNavBG, HiddenContainer } from './styles/NavStyles';
import {Button} from './Button';
import Dates from './Dates';



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
                        <Typography gutterBottom className="Nav-title">Main</Typography>
                        <Link href="/"><a onClick={this.handleClick} >Home</a></Link>
                        <Link href="/about"><a onClick={this.handleClick} >About</a></Link>
                        <Link href="/authorsArea"><a onClick={this.handleClick}>Authors Area</a></Link>
                        <Link href="/exhibitorsArea"><a onClick={this.handleClick}>Exhibitors Area</a></Link>
                        <Link href="/studentArea"><a onClick={this.handleClick}>Student Area</a></Link>
                        <Link href="/exhibitAndSponsor"><a onClick={this.handleClick}>Exhibition And Sponsorship</a></Link>
                        <Link href="/ticketPortal"><a onClick={this.handleClick}>Ticket Portal</a></Link>
                    </div>
                    <div className="nav_box-2">
                        <Typography gutterBottom className="Nav-title">Quick Links</Typography>
                        <Link href="/welcome"><a onClick={this.handleClick}>Welcome to Barcelona</a></Link>
                        <Link href="/exhibitors"><a onClick={this.handleClick}>Exhibitors List</a></Link>
                        <Link href="/exhibitorsRegistration"><a onClick={this.handleClick}>Exhibitors Registration</a></Link>
                        <Link href="/authorsAreaInstructions"><a onClick={this.handleClick}>Authors Area Instructions & Templates</a></Link>
                        <Link href=""><a >Technical Program</a></Link>
                    </div>
                    <div className="nav_box-3">
                        <div className="nav_box-5" style={{maxHeight: '50rem', maxWidth: '35rem'}}>
                           <Dates/>
                        </div>
                        <Link href="/ticketPortal">
                        <Button style={{maxWidth: '35rem', maxHeight: '15rem'}}>
                            BOOK NOW
                        </Button>
                        </Link>
                        
                    </div>
                </HiddenContainer>
                
                    {/* This is a link but it wont be / it will be just a label for the menu... maybe a button with the burger */}
                    <h1 style={{alignSelf: "center"}}>
                    Menu
                    </h1>
                
                <Burger isOpen={this.state.isOpen} onClick={this.handleClick}>
                    <TopBun isOpen={this.state.isOpen} sticky={this.props.sticky} />
                </Burger>
            </NavStyles>
        )
    }
}


