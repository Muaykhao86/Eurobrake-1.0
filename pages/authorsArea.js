import React, { Component } from 'react'
import Router from 'next/router';
import fetch from 'isomorphic-unfetch';
import styled from 'styled-components';
import { withAuthSync, logout, login } from '../utils/auth'
import cookies from 'next-cookies';
import cookie from 'js-cookie';
import Typography from '@material-ui/core/Typography';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import PopupLogin from '../components/PopupLogin';
import HeroSection from '../components/HeroSection';
import { StyledBanner, StyledContainer } from '../components/styles/PageStyles';
import LoginExpandTable from '../components/LoginExpandTable';


const FilledBanner = () => (

    <StyledBanner>
        <StyledContainer hfs="5rem">

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
    max-width: ${props => props.theme.maxWidth};
    background-color: ${props => props.theme.white};

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
    //  static async getInitialProps({ res }) {

    //     const { logintoken } = cookie.get();
    //     if (logintoken){
    //     if (res) {
    //       res.writeHead(302, {
    //         Location: '/authorsAreaDash'
    //       })
    //       res.end()
    //     } else {
    //       Router.push('/authorsAreaDash')
    //     }
    //   }
    //     return {}
    //   }

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
                <HeroSection banner={FilledBanner}>
                    AuthorsArea
            </HeroSection>
                <StyledPage>
                    {/* <PopupLogin/> */}
                    <Typography className="authors-title">Welcome to the Author's Area</Typography>
                    <Typography gutterBottom className="authors">Presenting a paper at EuroBrake gives you the opportunity to share your latest technical ideas and achievements with influential specialists from around the world and to discuss your work with colleagues throughout the industrial and academic communities.</Typography>
                    <Typography gutterBottom className="authors">Once you have created your author account you can login at any time to amend your details and access important information. </Typography>
                    <Typography gutterBottom className="authors authors-it">Please note that all submitting authors will need to create a new author account for EuroBrake 2020 as account are not copied from year to year.</Typography>
                    <Typography className="authors_sub-title">Submit your review ready papers by 26 January 2020.</Typography>
                    <LoginExpandTable/>>
            </StyledPage>
            </>
                )
        
            }
        }
        
        // export default withAuthSync(AuthorsArea)
        export default AuthorsArea;
        
        
        // !
        // ?
        // *
        // todo
{/* <div className="form-container">
                <form>
                {this.state.hasForm &&
                

              this.state.formdata.map(component => {
                 return(
                        <div className="form-item">
                        {component.title ? <title>{component.title}</title> : null }
                        {component.type ? 
                        <label>
                        {component.options ? null : component.label}
                        <input
                        required={component.options ?  null : component.required ? component.required : null}
                         name={component.name}
                         type={component.type}
                         value={this.state.name}
                         onChange={this.handleInputChange}
                        /> 
                        </label>
                        : null
                        }
                        {component.options ? 
                        <label>
                            {component.label}
                        <select name={component.name} >
                            {component.options.map( option => {
                                return( 
                                        <option value={option.value}>{option.label}</option>
                                )
                            })}
                        </select> 
                        </label>    
                        : null}
                        {component.default ? <default>{component.default}</default> : null}

                        </div>
                 )
                    }
                )
                }
                </form>
                </div> */}
// //

