import React ,{Component, useState}from 'react'
import styled from 'styled-components';
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import HeroSection from '../components/HeroSection';
import StopIcon from '@material-ui/icons/Stop';
import { Button } from '../components/Button';
import { Quote, MailIcon, PhoneIcon , EBFloorPlan, SmlLogo} from '../components/Icons';
import {FixedDates, FixedBox} from '../components/Dates';


const StyledFloorPlan = styled.div`
    background-color: #FFF;
     width: ${props => props.width || '100%'};
     height: ${props => props.height ||'100%'} ;
    /* height: 60rem; */
    display: flex;
    position: ${props => props.full ? 'Fixed' : 'relative'};
    z-index: ${props => props.full ? '1000': '90'};
    top: 0;
    left: ${props => props.full ? '50%' : ''};
    right: ${props => props.full ? '50%' : ''};
    margin-left: ${props => props.full ?  '-50vw': '0'};
    margin-right: ${props => props.full ?  '-50vw': '0' };

`;


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

    &-icon{
        position: absolute;
        left: -29px;
        top: 9px;

        &_text{
        line-height: 3.5rem;/* needed? */
        position: relative;
        margin-left: 3rem;
        }

    }

    &-title{
        color: ${props => props.theme.primary};
        font-family: ${props => props.theme.MPSemibold};
        font-size: 4.4rem;
        margin-top: 3rem;
    }
    &_list{
        li{
        position: relative;
        list-style-type: none;
        list-style-position:inside;
        margin-left: 3rem;
        margin-bottom: 1rem;
        line-height: 3.5rem;
        
            &:before{ 
                content: '■';
                position: absolute;
                font-size: 3.14rem;
                left: -27px;
                top: -6.1px;
                          }
        }
   
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
    `;


export default () => {
     const [full, setFull] = useState(false)
    const svgWidth = full ? '100vw' : '1000';
const svgHeight = full ? '100vh' : '';

    return (
    <>
        <HeroSection
            max="55%"
            src="https://live.staticflickr.com/65535/48016099856_3d2f30aedc_b.jpg"
        >
            Exhibition and Sponsorship
        </HeroSection>
        <StyledPage>
            <FixedDates/>
            <FixedBox/>

            <div className="Exhibit">

                <Typography gutterBottom className="Exhibit-title">Exhibit & Sponsor at EuroBrake</Typography>
                <div className="margin-bottom1.5">
                    <img src="/images/ccibClip.png" alt="" style={{ width: '100%', height: '100%' }} />
                </div>
                <Typography gutterBottom className="Exhibit Exhibit-bold margin-top5">EuroBrake’s accompanying technical exhibition offers an ideal opportunity to present your company’s products, services and technical capabilities to key decision-makers, from industry players to new entrants in specialist engineering. </Typography>
                <Typography gutterBottom className="Exhibit ">There were around 100 companies that took part in the EuroBrake 2019 exhibition, representing the entire value chain from leading industry players to new entrants, including brake suppliers, component suppliers, material manufacturers and specialist engineering, testing, measurement and simulation providers. EuroBrake’s exhibition has rapidly sold out in previous years, companies are advised to book well in advance of the event as in-demand booths are sold on a first-come, first-served basis.</Typography>
                <Typography gutterBottom className="Exhibit ">A range of sought-after sponsorship packages are available to help position your company as a leader in the braking technology world.</Typography>
                <div className="button_box">

                    <Button
                    href="https://www.eurobrake.net/exhibition/brochure.pdf"
                        background="#134381"
                        br="100rem"
                        bcolor="#134381"
                        style={{ margin: '3.5rem 0', }}
                    >Download the exhibition & sponsorship brochure</Button>
                </div>
                <div className="infoBox">
                    <div className="infoBox-text">

                        <Typography gutterBottom className="Exhibit Exhibit-italic" style={{ color: 'black' }}>Please note, all sponsor.exhibitor content must be sent to FISITA by<span className="Exhibit-boldIt"> Tuesday 28 January 2020</span> for inclusion in the Preliminary Program.</Typography>
                        <Typography gutterBottom className="Exhibit  Exhibit-bold" style={{ color: 'black' }}>For more information please contact FISITA: </Typography>

                        <Typography gutterBottom className="Exhibit  Exhibit-bold Exhibit-icon_text" style={{ color: 'black', marginLeft: '3rem'  }}><PhoneIcon className="Exhibit-icon" width="20" height="20" color="#000"  /> +44 (0) 1279883470 </Typography>
                        <Typography gutterBottom className="Exhibit Exhibit-bold Exhibit-icon_text" style={{ color: 'black' , marginLeft: '3rem' }}><MailIcon className="Exhibit-icon" width="20" height="20" color="#000" /> sales@fisita.com</Typography>
                    </div>
                </div>
                <StyledQuote>
                    <Quote />
                </StyledQuote>

                <Typography gutterBottom className="Exhibit-title">Why exhibit at EuroBrake?</Typography>
                <ul className="Exhibit_list">
                    <li> <Typography className="Exhibit" >Build relationships with existing and new customers throughout the vehicle and braking communities</Typography></li>
                    <li> <Typography className="Exhibit" >Save time and cost with an efficient programme located in a convenient European location</Typography> </li>
                    <li> <Typography className="Exhibit" >Take advantage of great value exhibition and sponsorship packages which include delegate attendance, visibility in the programme and on line – all promoted throughout the FISITA network</Typography></li>
                </ul>
                <div className="">
                    <Typography gutterBottom className="Exhibit  Exhibit-bold" style={{}}>For more information please contact FISITA: </Typography>
                    <Typography gutterBottom className="Exhibit  Exhibit-bold Exhibit-icon_text" style={{}}><PhoneIcon className="Exhibit-icon" width="20" height="20" /> +44 (0) 1279883470 </Typography>
                    <Typography gutterBottom className="Exhibit Exhibit-bold  Exhibit-icon_text" style={{}}><MailIcon className="Exhibit-icon" width="20" height="20" /> sales@fisita.com</Typography>
                </div>
                <div className="button_box">
                    
                    <Button
                        href="https://www.fisita.com/documents/EuroBrake_Exhibition_Terms_Conditions_2020.pdf"
                        background="#134381"
                        br="100rem"
                        bcolor="#134381"
                        style={{ margin: '3.5rem 0' }}
                    >DOWNLOAD THE EXHBITOR TERMS & CONDITIONS</Button>
                </div>
                <Typography gutterBottom className="Exhibit-title">View the event floor plan</Typography>
                <a onClick={window.open("https://www.fisita.com/documents/EB20_Floor_Plan.pdf", '_blank')}><Typography gutterBottom className="Exhibit">Click to view the floor plan</Typography></a>

                {/* <StyledFloorPlan height={svgHeight} width={svgWidth} full={full}>
                    <EBFloorPlan height={svgHeight} width={svgWidth} onClick={() => setFull(full => !full)}/>
                </StyledFloorPlan> */}
            </div>
        </StyledPage>
    </>
)}





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