import React from 'react'
import Link from 'next/link';
import styled from 'styled-components';
import MapContainer from './GoogleMaps';

const FooterBar = styled.div`
    color: ${props => props.theme.white};
    background: ${props => props.theme.primary};
    min-width: 100%;
    min-height: 10rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    position: absolute;
    bottom: 0;
    padding: 2rem;

    .ftr_container-1{
        padding: .2rem;
        min-width: 30rem;
        
        display: flex;  
        flex-flow: column;
    }
    .ftr_middle-links{
        padding: .2rem;
        min-width: 20rem;
        min-height: 20rem;
       flex: 1 1 auto;
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        align-items: center;
    }
    .ftr_container-3{
   
        display: flex;
        flex-flow: column;
        align-items: center;
       
    }
    .ftr_newsletter-box{
        padding-bottom: 1rem;
        min-width: 40rem;
        /* border: 1px solid black; */
        
        /* background-color:steelblue; */
        
        display: flex;
        justify-content: space-between;
       

    }
    .ftr_container-5{
        padding: 1rem;
        min-width: 40rem;
        border: 1px solid white;
        
        /* background-color: limegreen; */
        min-height: 20rem;
        
        display: flex;
        flex-flow: column;
    }
    .ftr_sponsor-box{
        background-color: white;
        padding: .5rem;
        max-width: 40rem;
        border: 1px solid white;
        
        /* background-color: hotpink; */
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


    .ftr_container-7{
        display: flex;
        flex-wrap: wrap;
        justify-content:space-between;
        position: relative;
      
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
        
    }

    h1{
        padding: 1rem;
        text-align: center;
    }

    input{
        width: 65%;
        margin-left: auto;
    }

    label{
        font-family: ${props => props.theme.MPBold};
        font-size: 2rem;
        text-transform: uppercase;
    }

    
`;

function Footer() {
    return (
        <FooterBar>
            <div className="ftr_container-1">
                <h1>CONFIRMED EUROBRAKE 2020 SPONSORS</h1>      
                <div className="ftr_sponsor-box">
                    <div className="sponsor"><a href="http://www.applusidiada.com/en/"><img src="https://www.eurobrake.net/res/display/default/chrome/logos/applus-idiada2.png" alt="" style={{maxHeight: '5rem', width: '10rem'}}/></a></div>
                    <div className="sponsor"><a href="http://www.applusidiada.com/en/"><img src="https://www.eurobrake.net/res/display/default/chrome/logos/itt.png" alt="" style={{maxHeight: '5rem', width: '10rem'}}/></a></div>
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
            <div className="ftr_container-7">
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
            </div>
            <div className="ftr_container-3">

            <div className="ftr_newsletter-box">
                <label htmlFor="Newsletter">Newsletter</label>
                <input type="email" name="Newsletter" id=""/>    
            </div>
            <div className="ftr_container-7">
              <MapContainer/>
            </div> 
            </div>
        </FooterBar>
    )
}

export default Footer;

              {/* <div className="ftr_container-5">Map Box</div> */}