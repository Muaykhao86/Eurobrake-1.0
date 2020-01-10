import React from 'react'
import styled from 'styled-components';
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import HeroSection from '../components/HeroSection';

import { StyledPage, StyledBanner, StyledContainer } from '../components/styles/PageStyles';

const StyledDiv = styled.div`
    .privacy{

        color: ${props => props.theme.primary};
        font-size: 2rem;
        font-family: ${props => props.theme.MPLight};
    &-title{
        color: ${props => props.theme.primary};
        font-family: ${props => props.theme.MPSemibold};
        font-size: 4.4rem;
        margin-top: 3rem;
        margin-bottom: 3rem;
    }
    
    &_sub-title{
        color: ${props => props.theme.primary};
        font-size: 3.5rem;
        font-family: ${props => props.theme.MPLightIt};
        padding-bottom: .5rem;
        margin-top: 3rem;
        margin-bottom: 3rem;
    }
    &-bold{
        color: ${props => props.theme.primary};
        font-family: ${props => props.theme.MPBold};
    }
    &-it{
        font-family: ${props => props.theme.MPLightIt};
    }
    }
`;

export default () => (
    <>
        <HeroSection  max="55%">
            Privacy Policy
    </HeroSection>
        <StyledPage>
            <StyledDiv>
                <Typography gutterBottom className="privacy-title"> Privacy policy</Typography>
                <Typography gutterBottom className="privacy">The publisher of this web site is FISITA (UK) Limited, a wholly owned company of FISITA. We have developed this Privacy Policy to advise users of this site about our policy regarding 
                    the collection and use of personal information about visitors and customers to this site.</Typography>
                <Typography gutterBottom className="privacy-title">Visitor Information</Typography>
                <Typography gutterBottom className="privacy">We may set cookies to your computer. Cookies are text files placed on your computer to collect standard Internet log information and visitor behaviour information. The information is 
                    used to track visitor use of the website and to compile statistical reports on website activity. For further information about cookies visit <a className="privacy-bold" href="https://www.aboutcookies.org/">www.aboutcookies.org</a> or 
                    <a className="privacy-bold" href="https://www.allaboutcookies.org/"> www.allaboutcookies.org.</a> You can set your browser not to accept cookies and the above websites tell you how to remove cookies from your browser. However, in a few cases some of our 
                    website features may not function if you remove cookies from your browser.</Typography>
                <Typography gutterBottom className="privacy-title">Opting Out from Mailings</Typography>
                <Typography gutterBottom className="privacy">From time to time, we may make individual user or customer information available to carefully selected third parties to send you information through e-mail or postal mail about their 
                    products or services. In all cases, you will have the opportunity to opt-out of receiving such third-party mails at the point where we request the user or customer information.</Typography>
                <Typography gutterBottom className="privacy">If you currently receive communications from FISITA and you wish to be removed from our database, you can either: email us at <a className="privacy-bold" href="mailto:info@fisita.com">info@fisita.com</a> or
                 call the following telephone number: <span className="privacy-bold">+44 (0) 1279 883 470.</span></Typography>
                <Typography gutterBottom className="privacy">A user may change/correct his/her preferences or personal information at any time by contacting us at the above e-mail address or phone number. We retain the right to contact a 
                    subscriber or registered user regarding account status, orders for products or services, changes to the registration agreement or to enforce any user agreement.</Typography>
                <Typography gutterBottom className="privacy">We will remove any registrant (and their personal information) from our database pursuant to a request from the registrant, including full name and e-mail address, to 
                    <a className="privacy-bold" href="mailto:info@fisita.com"> info@fisita.com.</a> You may not be able to fully access this web site if you request removal of your personal information.</Typography>
                <Typography gutterBottom className="privacy-title">Collection and Use of Your Personal Information</Typography>
                <Typography gutterBottom className="privacy">When you subscribe, register, make purchases or at other times, we collect and store personally identifiable information from you that may include your name, postal and e-mail 
                    addresses, credit card information, facts about your profession, company and responsibilities and information regarding your computer system.</Typography>
                <Typography gutterBottom className="privacy">We may also set cookies to your computer to enable the efficient operation of certain areas of the web site.</Typography>
                <Typography gutterBottom className="privacy">Information collected about users and customers may be used by us and our affiliates and partnering third-party companies to provide users and customers with information concerning
                     the features of the site, to enable us to provide the products you requested, to personalise content and advertising, to send you e-mail notifications about our services and products, for audits, to perform statistical 
                     analysis of user behaviour in order to measure interest in the various areas of our site (such as for product development purposes), to enforce our user agreement and to inform advertisers as to how many users have seen or 
                     "clicked" their advertising banners. We will disclose site usage information to third parties only in aggregate.</Typography>
                <Typography gutterBottom className="privacy">From time to time, we may conduct online surveys and competitions or generate content that is presented by aggregating activity of users on the site. These surveys and competitions 
                    are entirely voluntary and you may decline to participate.</Typography>
                <Typography gutterBottom className="privacy-title">Visitor Information</Typography>
                <Typography gutterBottom className="privacy">During any visit to www.eurobrake.net your IP address will be logged by our server. We use server logs to assist in the efficient management of the site. Your IP address is also used 
                    to help us gather broad demographic information. Log files collected by FISITA (UK) Limited are not shared with 3rd parties.</Typography>
            </StyledDiv>

        </StyledPage>
    </>
);

