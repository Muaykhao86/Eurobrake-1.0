import React, { Component, Fragment } from 'react'
import Link from 'next/link';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import HeroSection from '../components/HeroSection';
import ExpandTable from '../components/ExpandTable';
import { Button } from '../components/Button';
import {StyledBanner, StyledContainer} from '../components/styles/PageStyles';




const StyledPage = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    max-width: ${props => props.theme.maxWidth};
    background-color: ${props => props.theme.white};
    margin-top: 3rem;

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
        list-style-type: square;
        list-style-position:inside;
        margin-bottom: 1rem;
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
        <HeroSection banner={FilledBanner}>
            EuroBrake 2020 Registration
            </HeroSection>
        <StyledPage mt="10rem">
            <div className="Registration">

                <Typography gutterBottom className="Registration-title">Delegate Registration</Typography>
                <Typography gutterBottom className="Registration_list-title">Full Delegate registration includes:</Typography>
                <ul className="Registration_list">
                    <li>Admission to all Plenary and Technical Sessions</li>
                    <li>Admission to the EuroBrake Dinner</li>
                    <li>Admission to Exhibition</li>
                    <li>Access to the EuroBarake app including all abstracts</li>
                    <li>Conference Proceedings USB stick</li>
                    <li>Admission to the Welcome and Farewell Receptions</li>
                    <li>Coffee/Refresments</li>
                    <li >Lunches</li>
                </ul>
                <Typography className="Registration_list-title">All prices are qouted in <span className="Registration-bold" >&euro; EUR</span></Typography>
            </div>
            <div className="">
                <Typography className="Registration_sub-title">
                    Earlybird registration must be made before 1 April 2020
                    </Typography>
                <ExpandTable />
            </div>
            <Button br="100rem" bcolor="#134381" background="#134381" style={{maxWidth: "24rem", margin: "5rem 0"}}>book now</Button>
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
                <Typography className="Registration">Read the event terms and conditions <span className=" Registration-bold ">here.</span></Typography>
                <Typography className="Registration">For more information or help with registration, please call:</Typography>
                <Typography className="Registration"><span className=" Registration-bold ">+44 (0) 1279883470</span> or email <span className="Registration-bold ">info@eurobrake.net</span></Typography>
            </div>
            <Button br="100rem" bcolor="#134381" background="#134381" style={{maxWidth: "24rem", margin: "5rem 0"}}>book now</Button>
        </StyledPage>
    </>
)

// TODO NEED TO PUT IN CALL TO ACTION CARDS!!!!
//! THIS INCLUDES CREATING A METHOFD FOR LINKING TO EVENTS FORCE