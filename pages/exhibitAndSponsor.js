import React from 'react'
import styled from 'styled-components';
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import HeroSection from '../components/HeroSection';
import StopIcon from '@material-ui/icons/Stop';
import {Button} from '../components/Button';
import {Quote, MailIcon, PhoneIcon} from '../components/Icons';


const StyledPage = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    width: ${props => props.max || props.theme.minWidth};
    background-color: ${props => props.theme.white};
    /* margin-top: 7rem; */
      @media only screen 
  and (max-device-width: 768px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    width: ${props => props.theme.mobileWidth};    
}

    .Exhibit{
        color: ${props => props.theme.primary};
        font-family: ${props => props.theme.MPLight};
        font-size: 2rem;
    &-title{
        color: ${props => props.theme.primary};
        font-family: ${props => props.theme.MPSemibold};
        font-size: 4.4rem;
        margin-top: 3rem;
    }
    &_list{
        /* NEED TO INLINE BULLET POINTS! */
        list-style-type: none;
        list-style-position:inside;
        margin-bottom: 1rem;
/*         
        li{ 
            display: inline;
            vertical-align: middle;
        } */
           }
   
  

    &_list-title{
        margin-bottom: 1rem;
        font-family: ${props => props.theme.MPLight};
        font-size: 2rem;
    }
    &_sub-title{
        color: ${props => props.theme.primary};
        font-size: 3.5rem;
        font-family: ${props => props.theme.MPLightIt};
        padding-bottom: .5rem;
    }
    &-bold{
        font-family: ${props => props.theme.MPBold};
    }
    &-italic{
        font-family: ${props => props.theme.MPLightIt}
    }
    &-boldIt{
        font-family: ${props => props.theme.MPBoldIt}
    }

}
    .button_box{
        display: flex;
        justify-content: flex-start;
    }
    .infoBox{
        display: flex;
        flex-flow: column;
        justify-content: center;
        min-height: 24rem;
        background-color: ${props => props.theme.primary2};
        width: 100vw;
        position: relative;
        left: 50%;
        right: 50%;
        margin-left: -50.5vw;
        margin-right: -50.5vw;
        /* dont know why but it gves margin on 50%vh */

        &-text{
        padding: 2rem;
        align-self: center;
        width: 50%;
             @media only screen 
  and (max-device-width: 768px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
       width: 80%;
    };   
        } 
    }
    .margin-top5{
        margin-top: 5rem;

    }
    .margin-bottom1.5{
        margin-bottom: 1.5rem;
    }
`;

const StyledQuote = styled.div`
    margin-top: 5rem; 
    
     /* position: relative; */
/*
    .Quote-text_box{

        padding: 2.5rem;
        position: absolute;
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        height: 100%;
        width: 90%;
    }
    .Quote-text{
        flex: 1 1 auto;
        color: white;
        font-size: 2rem;
        font-family: ${props => props.theme.MPLight};

        &_bold{
        font-family: ${props => props.theme.MPBold};
    }
    } */
`;

// ! NEED TO SORT OUT MEDIA QUERIS FOR TEXT DUE TO SVG NOT SCALING WITH FONT
//  * OPTIONS ARE TO REDO QOUTE MARKS AND SET THE Z-INDEZX AS -100? 

export default () => (
    <>
        <HeroSection 
        t="30rem" 
        max="55%"
        src="/images/BarClip.png"
             >
            Exhibition and Sponsorship
        </HeroSection>
        <StyledPage>
            <div className="Exhibit">

            <Typography gutterBottom className="Exhibit-title">Exhibit & Sponsor at EuroBrake</Typography>
            <div className="margin-bottom1.5">
                <img src="/images/ccibClip.png" alt="" style={{width: '100%', height: '100%'}}/>
            </div>
            <Typography gutterBottom className="Exhibit Exhibit-bold margin-top5">EuroBrake’s accompanying technical exhibition offers an ideal opportunity to present your company’s products, services and technical capabilities to key decision-makers, from industry players to new entrants in specialist engineering. </Typography>
            <Typography gutterBottom className="Exhibit ">There were around 100 companies that took part in the EuroBrake 2019 exhibition, representing the entire value chain from leading industry players to new entrants, including brake suppliers, component suppliers, material manufacturers and specialist engineering, testing, measurement and simulation providers. EuroBrake’s exhibition has rapidly sold out in previous years, companies are advised to book well in advance of the event as in-demand booths are sold on a first-come, first-served basis.</Typography>
            <Typography gutterBottom className="Exhibit ">A range of sought-after sponsorship packages are available to help position your company as a leader in the braking technology world.</Typography>
            <div className="button_box">

            <Button
            background="#134381"
            br="100rem"
            bcolor="#134381"
            style={{margin: '3.5rem 0', }}
            >Download the exhibition & sponsorship brochure</Button>
            </div>
            <div className="infoBox">
                <div className="infoBox-text">

            <Typography gutterBottom className="Exhibit Exhibit-italic" style={{color: 'black'}}>Please note, all sponsor.exhibitor content must be sent to FISITA by<span className="Exhibit-boldIt"> Tuesday 28 January 2020</span> for inclusion in the Preliminary Program.</Typography>
            <Typography gutterBottom className="Exhibit  Exhibit-bold" style={{color: 'black'}}>For more information please contact FISITA: </Typography>
                
                <Typography gutterBottom className="Exhibit  Exhibit-bold" style={{color: 'black'}}><PhoneIcon width="20" height="20" color="#000"style={{marginRight: '1rem'}}/> +44 (0) 1279883470 </Typography>
            <Typography gutterBottom className="Exhibit Exhibit-bold" style={{color: 'black'}}><MailIcon width="20" height="20" color="#000"style={{marginRight: '1rem'}}/> sales@fisita.com</Typography>
                </div>
            </div>
            <StyledQuote>
                <Quote />
            </StyledQuote>
            {/* <StyledQuote>
             {/* <div className="Quote-text_box">
            <div>
            <Typography 
            gutterBottom 
            className="Quote-text"
            > 

            <span style={{color: '#F9B721'}}>&quot;</span> lt was a great experience to be part of the EuroBrake exhibition in 2018, which allowed us to promote the Horiba name,
             explain to customers what we do and make new contacts from all over the world. <span style={{color: '#F9B721'}}>&quot;</span> </Typography>
            </div>
            <div>

            <Typography 
            className="Quote-text Quote-text_bold"
            >Greg Filer</Typography>
            <Typography 
            gutterBottom 
            className="Quote-text"
            >Product Manager, HORIBA Europe GmbH</Typography>
            </div>
            </div>   

                <Quote />
            </StyledQuote> */} 
          
                

            <Typography gutterBottom className="Exhibit-title">Why exhibit at EuroBrake?</Typography>
             <ul className="Exhibit_list">
                    <li> <Typography  className="Exhibit" ><StopIcon style={{marginRight: '1rem'}}/>Build relationships with existing and new customers throughout the vehicle and braking communities</Typography></li>
                    <li> <Typography  className="Exhibit" ><StopIcon style={{marginRight: '1rem'}}/>Save time and cost with an efficient programme located in a convenient European location</Typography> </li>
                    <li> <Typography  className="Exhibit" ><StopIcon style={{marginRight: '1rem'}}/>Take advantage of great value exhibition and sponsorship packages which include delegate attendance, visibility in the programme and on line – all promoted throughout the FISITA network</Typography></li>
                </ul>
            <div className="">
            <Typography gutterBottom className="Exhibit  Exhibit-bold" style={{}}>For more information please contact FISITA: </Typography>
            <Typography gutterBottom className="Exhibit  Exhibit-bold" style={{}}><PhoneIcon width="20" height="20" style={{marginRight: '1rem'}}/> +44 (0) 1279883470 </Typography>
            <Typography gutterBottom className="Exhibit Exhibit-bold" style={{}}><MailIcon width="20" height="20" style={{marginRight: '1rem'}}/> sales@fisita.com</Typography>
            </div>
             <div className="button_box">

             <Button
            background="#134381"
            br="100rem"
            bcolor="#134381"
            style={{margin: '3.5rem 0'}}
            >DOWNLOAD THE EXHBITOR TERMS & CONDITIONS</Button>
            </div>
             </div>
        </StyledPage>
    </>
)


 


            {/* <Link href="/exhibitors">
                <Al>
                    List of Exhibitors
                </Al>
            </Link>
            <Link href="/exhibitorsRegistration">
                <Al>
                    Register
                </Al>
            </Link> */}