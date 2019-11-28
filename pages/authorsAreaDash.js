import React, { Component } from 'react'
import Router from 'next/router';
import fetch from 'isomorphic-unfetch';
import styled from 'styled-components';
import { withAuthSync, logout, login } from '../utils/auth'
import cookies from 'next-cookies';
import cookie from 'js-cookie';
import HeroSection from '../components/HeroSection';
import Typography from '@material-ui/core/Typography';



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

class AuthorsAreaDash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasForm: false,
            formData: undefined,
            error: '',
            userLoggedIn: false,
        }


    }


    componentDidMount = () => {
        const { userLoggedIn } = this.state;
        const { logintoken } = cookie.get();
        console.log('cdm', logintoken)
        logintoken && !userLoggedIn ? this.setState(prev => ({
            userLoggedIn: !prev
        })) : null

    }

    getAbstractForm = async (e) => {
        e.preventDefault()
        console.log('click');
        const { logintoken } = cookie.get();
        console.log(logintoken)
        try {
            const apiUrl = 'https://prelude.eurobrake.net/submit';
            const response = await fetch(apiUrl, {
                credentials: 'include',
                headers: {
                    Authorization: `Bearer ${logintoken}`,
                }
            });
            const data = await response.json();
            if (data.status === 'success') {
                this.setState(prev => (
                    {
                        hasForm: !prev,
                        formData: data.form
                    }));
                // console.log(data.form);
                // console.log('stringify',JSON.stringify(data.form));
                console.log(data)


            } else {
                let error = new Error(data.error)
                error.response = response
                throw error
            }
        } catch (error) {
            console.error(
                'Failed to get form, please try again', error
            )
            this.setState({ error: error.message });
        }
    }


    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {

        const { userLoggedIn, hasForm } = this.state;
        console.log({ userLoggedIn, hasForm });
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
                    <Button
                        bcolor="#134381"
                        background="#134381"
                        br="100rem"
                        style={{ margin: "3rem 0" }}
                        fs="1.8rem"
                        padding=".5rem 6rem"
                        onClick={this.getAbstractForm}>Submit a Abstract</Button>
                    <Button
                        bcolor="#134381"
                        background="#134381"
                        br="100rem"
                        style={{ margin: "3rem 0" }}
                        fs="1.8rem"
                        padding=".5rem 6rem"
                        onClick={logout}>logout</Button>
                </StyledPage>
            </>

        )

    }
}

AuthorsAreaDash.getInitialProps = async ctx => {
    // We use `nextCookie` to get the cookie and pass the token to the frontend in the `props`.
    const { logintoken } = cookies(ctx);
    const apiUrl = 'https://prelude.eurobrake.net/dashboard ';
    const redirectOnError = () =>
        process.browser
            ? Router.push('/authorsArea')
            : ctx.res.writeHead(301, { Location: '/authorsArea' })
    if (logintoken) {
        try {
            // console.log({logintoken}, 'getIProps right before fetch call')
            const response = await fetch(apiUrl, {
                credentials: 'include',
                cache: 'no-cache',
                headers: {
                    Authorization: 'Bearer ' + logintoken,
                }
            })
            const data = await response.json()
            // console.log('Authors response Data =>', data.status, data);
            if (data.status === 'success') {
                console.log('res.ok', data)
                return { authorData: data }
            }
            else {
                console.log('not reading success')
                // https://github.com/developit/unfetch#caveats
                return redirectOnError()
            }
        } catch (error) {
            // Implementation or Network error
            console.log(error)
            return redirectOnError()
        }
    }
    // return {}

}

export default withAuthSync(AuthorsAreaDash)
// export default AuthorsArea;


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