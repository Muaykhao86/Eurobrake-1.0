import React from 'react'
import Link from 'next/link';
import styled from 'styled-components';
import MapContainer from './GoogleMaps';
import Typography from '@material-ui/core/Typography';
import { Button } from './Button';
import SponsorCarousel from './SponsorCarousel';
import { FLogoWhite } from './Icons';
import {Newsletter} from '../components/forms/Newsletter';

const FooterBar = styled.div`
    color: ${props => props.theme.white};
    background: ${props => props.theme.primary};
    min-width: 100%;
    min-height: 20rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    bottom: 0;
    padding: 2rem;
    border-top: 5px solid ${props => props.theme.secondary};


    .ftr_top-box{
        display: flex;
        flex-flow: row wrap;
        margin-bottom: 1rem;
    }

    .heading-copy{
 color: ${props => props.theme.white};
        /* text-transform: uppercase; */
        font-family: ${props => props.theme.MPLight};
        font-size: 2rem;

    }
  
    .ftr_middle-links{
        min-height: 24rem;
        margin: 0 1rem;
        padding: .2rem;
       flex: 1 1 auto;
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        align-items: flex-start;

        &_links{
            display: flex;
            justify-content:space-between;
            min-width: 50rem;
        }


    }
    .ftr_container-right{
        border: 1px solid #FFF;
        display: flex;
        flex-flow: column;
        align-items: center;
    }
    
    .ftr_container-map{
        height: 25rem;
        position: relative;
    }

    .ftr_newsletter-box{
        max-height: 6.5rem;
        display: flex;
        flex: 1 1 auto;
        flex-flow: column;
        /* align-items: flex-start; */
        justify-content: space-between;
        margin-bottom: 1rem;
        &_title{
        text-transform: uppercase;
        font-size: 2rem;
        font-family: ${props => props.theme.MPBold};
        }
    }
  
    .ftr_container-icons{
        display: flex;
        width: auto;
        flex-wrap: wrap;
        align-items: flex-end;
        justify-content:space-between;
        position: relative;

           /* @media only screen 
  and (max-device-width: 1200px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
       width: 7rem;
}  */
    }
    .social{
        color: ${props => props.theme.white};;
        margin-right: 1.5rem;
        font-size: 2rem;
    }
   
    a{
        color: ${props => props.theme.white};
        text-transform: uppercase;
        font-family: ${props => props.theme.MPBold};
        font-size: 2rem;
    }

    h1{
        padding: 1rem;
        text-align: center;
    }

    input{
        width: 55%;
        margin: 1rem;
    }
    label{
        font-family: ${props => props.theme.MPBold};
        font-size: 2rem;
        text-transform: uppercase;
    }
`;

const StyledFooter = styled.div`
display: flex;
flex-flow: column;
align-content: flex-end;
`;

function Footer() {

   
    return (
        <StyledFooter>
            <SponsorCarousel />
            <FooterBar>
                <div className="ftr_middle-links">
                    <div className="ftr_top-box">

                       
                    <a href="https://www.fisita.com/"><FLogoWhite width="16rem" height="5rem" /></a>
                    </div>

                        <div className="ftr_newsletter-box" >
                        <Typography className="ftr_newsletter-box_title" >Sign up for our Newsletter</Typography>
                        <Newsletter/>
                        </div>
                    <div className="ftr_middle-links_links">
                        <Link href="/disclaimer"><a >Disclaimer</a></Link>
                         <Link
                            href="/f/[id]/[formType]"
                            as={`/f/FISITA/contact`} ><a >Contact Us</a></Link>
                        <Link href="/privacyPolicy"><a >Privacy Policy</a></Link>
                    </div>
                    <div className="" style={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', height: '3rem' }}>
                        <Typography className="heading-copy" style={{ marginRight: '8rem' , merginTop: '2rem'}}>Copyright © 2020 FISITA</Typography>
                    </div>
                </div>
                <div className="ftr_container-right">
                    {/* <Typography className="heading">Visit the CCIB wesbsite <a href="https://ccib.es/en/" style={{color: '#F9B721'}}>HERE</a></Typography> */}
                    <div className="ftr_container-map">
                        <MapContainer />
                    </div>
                </div>
            </FooterBar>
        </StyledFooter>
    )
}

export default Footer;
