import React from 'react'
import Link from 'next/link';
import styled from 'styled-components';
import MapContainer from './GoogleMaps';
import Typography from '@material-ui/core/Typography';
import { Button } from './Button';

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
  
    .heading{
        font-family: ${props => props.theme.MPBold};
        font-size: 2rem;
        text-transform: uppercase;
        align-self: center;

            @media only screen 
  and (max-device-width: 1200px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
       font-size: 1.5rem;
}
    }

    .ftr_container-left{
        padding: .2rem;
        min-width: 30rem;
        
        display: flex;  
        flex-flow: column;
    }
    .ftr_middle-links{
        margin: 1rem;
        padding: .2rem;
        min-width: 20rem;
        min-height: 20rem;
       flex: 1 1 auto;
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        align-items: center;
    }
    .ftr_container-right{
   
        display: flex;
        flex-flow: column;
        align-items: center;
        /* min-width: 30rem; */
        margin-bottom: 3.3rem;
       
    }
    
    .ftr_container-map{
        display: flex;
        flex-flow: column;
        height: 25rem;
        align-items: center; 
        position: relative;
    }

    .ftr_newsletter-box{
        /* padding-bottom: 1rem; */
        /* min-width: 40rem;    */
        display: flex;
        flex-flow: row;
        align-items: center;
        justify-content: space-between;
            @media only screen 
  and (max-device-width: 1200px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
       flex-flow: column;
       align-items: center
}
       

    }
    .ftr_sponsor-box{
        background-color: white;
        padding: .5rem;
        max-width: 42rem;
        border: 1px solid white;
        height: 25rem;
        
        display: flex;
        flex-flow: wrap;
        justify-content: center;
        align-items: center;
        align-content: center;
    
    .sponsor{
        margin: 0 1rem;
        cursor: pointer;
    }
    }


    
    .ftr_container-icons{
        display: flex;
        width: auto;
        flex-wrap: wrap;
        justify-content:space-between;
        position: relative;

           @media only screen 
  and (max-device-width: 1200px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
       width: 15rem;
}
      
    }

    .social{
        color: ${props => props.theme.white};;
        margin: 1rem;
        font-size: 2rem;
    }



    
    a{
        color: ${props => props.theme.white};
        text-transform: uppercase;
        font-family: ${props => props.theme.MPBold};
        font-size: 2rem;
            @media only screen 
  and (max-device-width: 1200px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
       font-size: 1.5rem;
}
        
    }

    h1{
        padding: 1rem;
        text-align: center;
    }

    input{
        /* width: 65%; */
        /* margin-left: auto; */
        margin: .5rem;
    }

    label{
        font-family: ${props => props.theme.MPBold};
        font-size: 2rem;
        text-transform: uppercase;
            @media only screen 
  and (max-device-width: 1200px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
       font-size: 1.5rem;
}
    }

    
`;

function Footer() {
    return (
        <FooterBar>
            <div className="ftr_container-left">
                <Typography className="heading">CONFIRMED EUROBRAKE 2020 SPONSORS</Typography>      
                <div className="ftr_sponsor-box">
                    <div className="sponsor"><a href="http://www.applusidiada.com/en/"><img src="https://www.eurobrake.net/res/display/default/chrome/logos/applus-idiada2.png" alt="" style={{maxHeight: '5rem', width: '10rem'}}/></a></div>
                    <div className="sponsor"><a href="http://www.applusidiada.com/en/"><img src="https://www.eurobrake.net/res/display/default/chrome/logos/itt.png" alt="" style={{maxHeight: '5rem', width: '8rem'}}/></a></div>
                    <div className="sponsor"><a href="http://www.applusidiada.com/en/"><img src="https://www.eurobrake.net/res/display/default/chrome/logos/horiba2.png" alt="" style={{maxHeight: '5rem', width: '10rem'}}/></a></div>
                    <div className="sponsor"><a href="http://www.applusidiada.com/en/"><img src="https://www.eurobrake.net/res/display/default/chrome/logos/nof2.png" alt="" style={{maxheight: '5rem', width: '10rem'}}/></a></div>
                    <div className="sponsor"><a href="http://www.applusidiada.com/en/"><img src="https://www.eurobrake.net/res/display/default/chrome/logos/itaprochim3.png" alt="" style={{maxHeight: '5rem', width: '10rem'}}/></a></div>
                    <div className="sponsor"><a href="http://www.applusidiada.com/en/"><img src="https://www.eurobrake.net/res/display/default/chrome/logos/link3.png" alt="" style={{maxHeight: '5rem', width: '10rem'}}/></a></div>
                    <div className="sponsor"><a href="http://www.applusidiada.com/en/"><img src="https://www.eurobrake.net/res/display/default/chrome/logos/fagorederlangroup.png" alt="" style={{maxHeight: '5rem', width: '10rem'}}/></a></div>
                    <div className="sponsor"><a href="http://www.applusidiada.com/en/"><img src="https://www.eurobrake.net/res/display/default/chrome/logos/lapinus2.png" alt="" style={{maxHeight: '5rem', width: '10rem'}}/></a></div>
                    <div className="sponsor"><a href="http://www.applusidiada.com/en/"><img src="https://www.eurobrake.net/res/display/default/chrome/logos/sadeca2.png" alt="" style={{maxHeight: '5rem', width: '10rem'}}/></a></div>
                    <div className="sponsor"><a href="http://www.applusidiada.com/en/"><img src="https://www.eurobrake.net/res/display/default/chrome/logos/alroko.png" alt="" style={{maxHeight: '5rem', width: '10rem'}}/></a></div>
                </div>
            </div>
            <div className="ftr_middle-links">
                <Link href="/privacyPolicy"><a>Privacy Policy</a></Link>
                <Link href="/disclaimer"><a>Disclaimer</a></Link>
                <a href="">Contact Us</a>
                {/* <a href="">Site Map</a>
                <a href="">links</a> */}
            <div className="ftr_container-icons">
                <a className="social" href="http://www.linkedin.com/groups/EuroBrake-4282205?trk=myg_ugrp_ovr">
                <img src="/images/LinkedIn@2000x.png" alt="Linkedin" style={{maxWidth: '5rem'}}/>
                </a>
                <a  className="social" href="http://www.facebook.com/pages/FISITA-International-Federation-of-Automotive-Engineering-Societies/123022704532">
                    <img src="/images/Facebook@2000x.png" alt="Facebook" style={{maxWidth: '5rem'}}/>
                </a>
                <a  className="social" href="http://twitter.com/FISITAhq">
                    <img src="/images/Twitter@2000x.png" alt="Twitter" style={{maxWidth: '5rem'}}/>
                </a>
                <a  className="social" href="https://www.flickr.com/photos/eurobrake/albums/72157681368290774">
                    <img src="/images/flickr-icon@2000w.png" alt="Flickr" style={{maxWidth: '5rem'}}/>
                </a>
            </div>
            <div className="ftr_newsletter-box">
                <label htmlFor="Newsletter">Newsletter</label>
                <input type="email" name="Newsletter" id=""/>
                <Button padding=".5rem 2rem" style={{margin: '.5rem'}}>submit</Button>    
            </div>
            </div>
            <div className="ftr_container-right">

            <div className="ftr_container-map">
                <Typography className="heading">Go to CCIB wesbsite <a href="https://ccib.es/en/" style={{color: '#F9B721'}}>HERE</a></Typography>
              <MapContainer/>
            </div> 
            </div>
        </FooterBar>
    )
}

export default Footer;
