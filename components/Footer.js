import React from 'react'
import Link from 'next/link';
import styled from 'styled-components';
import MapContainer from './GoogleMaps';
import Typography from '@material-ui/core/Typography';
import { Button } from './Button';
import SponsorCarousel from './SponsorCarousel';



const FooterBar = styled.div`
    color: ${props => props.theme.white};
    background: ${props => props.theme.primary};
    min-width: 100%;
    min-height: 10rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    bottom: 0;
    padding: 2rem;

    .ftr_top-box{
        display: flex;
        flex-flow: row wrap;
    }

    .heading-copy{
 color: ${props => props.theme.white};
        /* text-transform: uppercase; */
        font-family: ${props => props.theme.MPLight};
        font-size: 2rem;

    }
  
    .ftr_middle-links{
        min-height: 20rem;
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
        /* padding: 1rem; */
        /* border: 1px solid #FFF; */
        display: flex;
        flex: 1 1 auto;
        flex-flow: row;
        align-items: center;
        justify-content: space-between;
        margin-top: 2.5rem;
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

                    <div className="ftr_container-icons">
                        <a className="social" href="http://www.linkedin.com/groups/EuroBrake-4282205?trk=myg_ugrp_ovr">
                            <img src="/images/LinkedIn@2000x.png" alt="Linkedin" style={{ maxWidth: '3rem' }} />
                        </a>
                        <a className="social" href="http://www.facebook.com/pages/FISITA-International-Federation-of-Automotive-Engineering-Societies/123022704532">
                            <img src="/images/Facebook@2000x.png" alt="Facebook" style={{ maxWidth: '3rem' }} />
                        </a>
                        <a className="social" href="http://twitter.com/FISITAhq">
                            <img src="/images/Twitter@2000x.png" alt="Twitter" style={{ maxWidth: '3rem' }} />
                        </a>
                        <a className="social" href="https://www.flickr.com/photos/eurobrake/albums/72157681368290774">
                            <img src="/images/flickr-icon@2000w.png" alt="Flickr" style={{ maxWidth: '3rem' }} />
                        </a>
                    </div>
                      <div className="ftr_newsletter-box">
                        <label htmlFor="Newsletter" style={{ margimRight: 'auto' }}>Newsletter</label>
                        <input type="email" name="Newsletter" id="" />
                        <Button padding=".3rem 1.5rem" style={{ fontSize: "1.5rem" }}>submit</Button>
                        </div>
                    </div>

                    <div className="ftr_middle-links_links">
                    <Link href="/disclaimer"><a >Disclaimer</a></Link>
                    <a href="" >Contact Us</a>
                    <Link href="/privacyPolicy"><a >Privacy Policy</a></Link>
                    </div>
                   
                    <Typography className="heading-copy">Copyright © 2020 FISITA</Typography>
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
