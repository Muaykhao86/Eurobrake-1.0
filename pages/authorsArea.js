import React, { Component } from 'react'
import Router from 'next/router';
import fetch from 'isomorphic-unfetch';
import styled from 'styled-components';
import cookies from 'next-cookies';
import cookie from 'js-cookie';
import Typography from '@material-ui/core/Typography';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import PopupLogin from '../components/Popup';
import HeroSection from '../components/HeroSection';
import { StyledBanner, StyledContainer } from '../components/styles/PageStyles';
import { withAuthSync, logout, login } from '../utils/auth'
import LoginExpandTable from '../components/LoginExpandTable';
import {FixedDates} from '../components/Dates';



const FilledBanner = () => (

    <StyledBanner>
        <StyledContainer >
            <Typography className="banner-heading"  >Submit your review ready papers</Typography>
            <Typography className="banner-sub" >Deadline for submissions is 26 January 2020</Typography>
            <div className="banner_bottom">
                <ExpandMoreOutlinedIcon className="banner_bottom-icon" />
                <Typography varient="h3" className="banner_bottom-details">Login below to manage your submission</Typography>
            </div>
        </StyledContainer>
    </StyledBanner>
)


const StyledPage = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    width: ${props => props.theme.minWidth};
    background-color: ${props => props.theme.white};
    margin-top: 7rem;

      @media only screen 
  and (max-device-width: 768px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    width: ${props => props.theme.mobileWidth};    
}

    .authors{
        color: ${props => props.theme.primary};
        font-family: ${props => props.theme.MPLight};
        font-size: 2rem;
   
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
        margin-bottom: 3rem;
    }
    &-bold{
        font-family: ${props => props.theme.MPBold};
    }
    &-it{
        font-family: ${props => props.theme.MPLightIt};
    }
}
`;


class AuthorsArea extends Component {
        static async getInitialProps({ res }) {
        const { logintoken } = cookie.get() || {};
        console.log(logintoken)
        console.log(logintoken )
        if (logintoken && logintoken != undefined && logintoken.length > 1){
        if (res) {
          res.writeHead(302, {
            Location: '/authorsAreaDash'
          })
          res.end()
        } else {
          Router.push('/authorsAreaDash')
        }
      }
        return {}
      
      }
    
    constructor(props) {
        super(props);
        this.state = {
            hasForm: false,
            formData: undefined,
            error: '',
            userLoggedIn: false,
            page: 'authors'
        }
    }

    render() {
        return (
            <>
                <HeroSection banner={FilledBanner}  max="55%">
                    AuthorsArea
            </HeroSection>
                <StyledPage>
            <FixedDates/>
                    <Typography className="authors-title">Welcome to the Author's Area</Typography>
                    <Typography gutterBottom className="authors">Presenting a paper at EuroBrake gives you the opportunity to share your latest technical ideas and achievements with influential specialists from around the world and to discuss your work with colleagues throughout the industrial and academic communities.</Typography>
                    <Typography gutterBottom className="authors">Once you have created your author account you can login at any time to amend your details and access important information. </Typography>
                    <Typography gutterBottom className="authors authors-it">Please note that all submitting authors will need to create a new author account for EuroBrake 2020 as account are not copied from year to year.</Typography>
                    <Typography className="authors_sub-title">Submit your review ready papers by 26 January 2020.</Typography>
                    <LoginExpandTable/>
            </StyledPage>
            </>
                )
        
            }
        }
        
       
        export default AuthorsArea;
        
        
        // !
        // ?
        // *
        // todo


