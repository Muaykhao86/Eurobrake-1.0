import React, { Component, Fragment } from 'react'
import Link from 'next/link';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import HeroSection from '../components/HeroSection';
import ExpandTable from '../components/ExpandTable';
import { Button } from '../components/Button';
import {StyledBanner, StyledContainer} from '../components/styles/PageStyles';
import {FixedDates, FixedBox} from '../components/Dates';




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

    .Registration{
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
        color: ${props => props.theme.primary};
        font-family: ${props => props.theme.MPBold};
    }
}
`;


const FilledBanner = () => (

    <StyledBanner>
        <StyledContainer>

            <Typography className="banner-heading" >Earlybird registration is open</Typography>
            <Typography className="banner-sub" >Book before 1 April 2020 to secure discount ticket prices</Typography>
            <div className="banner_bottom">
                <ExpandMoreOutlinedIcon className="banner_bottom-icon" />
                <Typography varient="h3" className="banner_bottom-details">See below for more details</Typography>
            </div>
        </StyledContainer>
    </StyledBanner>
)
 

export default () => (
    <>
        <HeroSection banner={FilledBanner} max="55%" src="https://live.staticflickr.com/65535/48016205181_9141b91094_b.jpg"
        >
            EuroBrake 2020 Registration
            </HeroSection>
        <StyledPage >
            <FixedDates/>
            <FixedBox/>

            <div className="Registration">

                <Typography gutterBottom className="Registration-title">Delegate Registration</Typography>
                <Typography gutterBottom className="Registration_list-title">Full Delegate registration includes:</Typography>
                <ul className="Registration_list">
                    <li><Typography className="Registration"> Admission to all Plenary and Technical Sessions</Typography></li>
                    <li><Typography className="Registration"> Admission to the EuroBrake Dinner</Typography></li>
                    <li><Typography className="Registration"> Admission to Exhibition</Typography></li>
                    <li><Typography className="Registration"> Access to the EuroBarake app including all abstracts</Typography></li>
                    <li><Typography className="Registration"> Conference Proceedings USB stick</Typography></li>
                    <li><Typography className="Registration"> Admission to the Welcome and Farewell Receptions</Typography></li>
                    <li><Typography className="Registration"> Coffee/Refresments</Typography></li>
                    <li><Typography className="Registration"> Lunches</Typography></li>
                </ul>
                <Typography className="Registration_list-title">All prices are qouted in <span className="Registration-bold" >&euro; EUR</span></Typography>
            </div>
            <div className="">
                <Typography className="Registration_sub-title">
                    Earlybird registration must be made before 1 April 2020
                    </Typography>
                <ExpandTable />
            </div>
                        <Link  href="/ticketPortal">
            <Button br="100rem" bcolor="#134381" background="#134381" style={{maxWidth: "24rem", margin: "5rem 0"}}>book now</Button>
                        </Link>
            <div className="">

                <Typography gutterBottom className="Registration">Please note:</Typography>
                <Typography gutterBottom className="Registration">All prices are subject to Spanish VAT 21%</Typography>
                <Typography className="Registration">Dinner is only included in a 2 or 3-day package, on a first come,
                    first served basis. You can purchase a ticket with a 1-day package or for a guest at a cost of EUR 80 + VAT per person  </Typography>

            </div>
            <div className="Registration">
                <Typography className="Registration-title">Methods of Payment</Typography>
                <Typography className="Registration">Payments can be made by bank transfer or credit card using our secure online payment system</Typography>
                <Typography className="Registration Registration-bold" >40 days prior to the event the only method of payment will be via
                        credit card. Bank transfers will not be acceptable after this time. </Typography>
                <Typography className="Registration">Read the event terms and conditions <a href="https://www.fisita.com/documents/FISITA_Event_Refund_Cancellation_policy-_EB.pdf" className=" Registration-bold ">here.</a></Typography>
                <Typography className="Registration">For more information or help with registration, please call:</Typography>
                <Typography className="Registration"><span className=" Registration-bold ">+44 (0) 1279883470</span> or email <span className="Registration-bold ">info@eurobrake.net</span></Typography>
            </div>
                        <Link  href="/ticketPortal">

            <Button br="100rem" bcolor="#134381" background="#134381" style={{maxWidth: "24rem", margin: "5rem 0"}}>book now</Button>
                        </Link>
        </StyledPage>
    </>
)
