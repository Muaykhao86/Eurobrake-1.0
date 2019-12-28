import React, { Component } from 'react'
import Router from 'next/router';
import cookies from 'next-cookies';
import cookie from 'js-cookie';
import { Link } from '@material-ui/core';
import fetch from 'isomorphic-unfetch';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import {AbstractForm} from '../components/Forms';
import { withAuthSync, logout, login } from '../utils/auth'
import HeroSection from '../components/HeroSection';
import { Button } from '../components/Button';
import { StyledBanner, StyledContainer } from '../components/styles/PageStyles';
import {GetForm, SendFile} from '../components/Forms';
import Popup from '../components/Popup';


const StyledPage = styled.div`
    display: flex;
    
    flex-direction: column;
    align-self: center;
    width: ${props => props.theme.minWidth};
    background-color: ${props => props.theme.white};
    margin-top: 7rem;
    .authors{
            
        
        color: ${props => props.theme.primary};
        font-family: ${props => props.theme.MPLight};
        font-size: 2rem;
    &-title{
        color: ${props => props.theme.primary};
        font-family: ${props => props.theme.MPSemibold};
        font-size: 4.4rem;
        
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
    &-it{
        font-family: ${props => props.theme.MPLightIt};
    }
    &_action-box{
        display: flex;
        justify-content: space-between;
        margin-bottom: 3rem;
    }
}
`;

const StyledBox = styled.div`
    display: flex;
    justify-content: space-between;
    min-height: 15rem;
    background-color: #D4DDE8;
    padding: 1rem;
    margin-bottom: 2rem;

`;

const StyledActionArea = styled.div`
    flex: 1 1 33.33%;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: flex-start;

    .action-paper{
        color: ${props => props.theme.black};
        font-family: ${props => props.theme.MPBold};
        font-size: 2rem;
    }
`;

const StyledInfoArea = styled.div`
    flex: 1 1 66.66%;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: flex-start;

    .paper-title{
    font-size: 2rem;
    color: ${props => props.theme.black};

    }
    .paper-type{
    font-size: 2rem;
    color: ${props => props.theme.black};
    font-family: ${props => props.theme.MPLightIt};

    }
    .paper_task{
    color: ${props => props.theme.black};
    font-size: 1.5rem;

    &-box{
        display: flex;
        align-items: flex-start;
    }}
`;


const FilledBanner = () => (

    <StyledBanner>
        <StyledContainer >
            <Typography className="banner-heading"  >Edit Your Abstract Here</Typography>
            <Typography className="banner-sub" sfs="3rem">Submit your review ready papers by 26 January 2020</Typography>
            <div className="banner_bottom">
                <ExpandMoreOutlinedIcon className="banner_bottom-icon" />
                <Typography varient="h3" className="banner_bottom-details">Submit your review ready papers by 26 January 2020</Typography>
            </div>
        </StyledContainer>
    </StyledBanner>
)


class Edit extends Component {
   constructor(props) {
       super(props);
       
   }

//    * NEED TO DO SOME DYNAMIC ROUTE CHANGES FOR EDITING FORMSS    
   

    // componentDidMount = () => {
    //     const { userLoggedIn } = this.state;
    //     const { logintoken } = cookie.get();
    //     console.log('cdm', logintoken)
    //     logintoken && !userLoggedIn ? this.setState(prev => ({
    //         userLoggedIn: !prev
    //     })) : null
    // }

    // handleInputChange = (event) => {
    //     const target = event.target;
    //     const value = target.type === 'checkbox' ? target.checked : target.value;
    //     const name = target.name;

    //     this.setState({
    //         [name]: value
    //     });
    // }

    render() {
        console.log('edit props', this.props)
        return (
            <>
                <HeroSection banner={FilledBanner} t="30rem" max="55%">
                    Edit Your Abstract
            </HeroSection>
                <StyledPage>
                    <div className="authors">
                        <Typography className="authors-title">Hi {'*USERNAME*'}</Typography>
                        <Typography gutterBottom className="authors_sub-title">Edit Your Abstract</Typography>
                    </div>
                    <AbstractForm editPaper={true} />
                </StyledPage>
            </>
        )
    }
}

// Edit.getInitialProps = async ctx => {
//     // We use `nextCookie` to get the cookie and pass the token to the frontend in the `props`.
//     const { logintoken } = cookies(ctx);
//     const apiUrl = 'https://prelude.eurobrake.net/dashboard ';
//     const redirectOnError = () =>
//         process.browser
//             ? Router.push('/authorsArea')
//             : ctx.res.writeHead(301, { Location: '/authorsArea' })
//     if (logintoken) {
//         try {
//             const response = await fetch(apiUrl, {
//                 credentials: 'include',
//                 cache: 'no-cache',
//                 headers: {
//                     Authorization: 'Bearer ' + logintoken,
//                 }
                 
//             })
//             const data = await response.json()
//             // console.log('Authors response Data =>', data.status, data);
//             if (data.status === 'success') {
//                 console.log('res.ok', data)
//                 return { authorData: data }
//             }
//             else {
//                 console.log('not reading success')
//                 console.log('stringyfied', JSON.stringify(data))
//                 // https://github.com/developit/unfetch#caveats
//                 return redirectOnError()
//             }
//         } catch (error) {
//             // Implementation or Network error
//             console.log(error)
//             return redirectOnError()
//         }
//     }

// }

// export default withAuthSync(Edit)
export default Edit


// !
// ?
// *
// todo