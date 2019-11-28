import React, { Component } from 'react'
import styled from 'styled-components';
import fetch from 'isomorphic-unfetch';
import TextField from '@material-ui/core/TextField';
import { login, logout } from '../utils/auth';
import {Button} from './Button';


const StyledForm = styled.form`
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: center;
    min-width: 100%;

    
.MuiInput-underline:after {
    color: ${props => props.theme.primary};
}

.MuiInputBase-root {
    font-family: ${props => props.theme.MPBoldIt};
        font-size: 2rem;
        color: ${props => props.theme.primary};
}

input:-internal-autofill-selected {

}
    .login_form{

    &-field{
        margin: 1rem 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }
    &-label{
        font-family: ${props => props.theme.MPLight};
        font-size: 2.6rem;
        color: ${props => props.theme.primary};
    }
    &-input{
        min-width: 40rem;
        font-family: ${props => props.theme.MPBoldIt};
        font-size: 5rem;
        color: ${props => props.theme.primary};

    }

    &-link{
        font-family: ${props => props.theme.MPBoldIt};
        font-size: 1.7rem;
        color: ${props => props.theme.primary};
    }
    }


`;

export default class Login extends Component {
    // static getInitialProps = async function () {
    //     const { logintoken } = cookie.get();
    //     const res = await fetch('https://prelude.eurobrake.net/login', {
    //         credentials: 'include',
    //         headers: {
    //             Authorization: `Bearer ${logintoken}`,
    //         }
    //     });
    //     const data = await res.json();

    //     return {
    //         form: data
    //     };
    // };
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            error: ''
        }
    }

    saveToState = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = async (e) => {
        e.preventDefault()
        const { username, password, error } = this.state;
        // const apiUrl = authorLogin ? 'https://prelude.eurobrake.net/login' : '' ;
        // action="//2019.eurobrake.net/exhibition/exhibitors/login" SHOULD BE LOGIN FORM FOR EXHIBITORS
        const formData = {
            username: username,
            password: password,
        }
        try {
            const response = await fetch('https://prelude.eurobrake.net/login', {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if (data.status === 'success') {
                const { logintoken } = data;
                await login({ logintoken })
                // this.setState(prev => ({ userLoggedIn: !prev }))
                return {}

            } else {
                let error = new Error(data.error)
                error.response = response
                throw error
            }
        } catch (error) {
            console.error(
                'Failed to login, please try again', error
            )
            this.setState({ error: error.message });
        }
    }
    render() {
        return (
           
                   <StyledForm className="login_form">
                        <div className="login_form-field">
                            <label 
                            htmlFor="label" 
                            className="login_form-label">
                                Email:
                            </label>
                            <TextField
                            style={{color: '#134381'}}
                            id="standard-required"
                            label="Required"
                            className="login_form-input" 
                            type="text"
                            name="username"
                            onChange={this.saveToState} 
                            value={this.state.username} />
                        </div>
                        <div className="login_form-field">
                            <label 
                            className="login_form-label"
                             htmlFor="label">
                                Password:
                            </label>
                            <TextField
                            id="standard-required"
                            label="Required"
                            className="login_form-input" 
                            type="password"
                            name="password"
                            onChange={this.saveToState} 
                            value={this.state.password} />
                        </div>
                        <Button 
                        onClick={this.onSubmit} 
                        value="Submit" 
                        bcolor="#134381"
                        background="#134381"
                        br="100rem"
                        style={{ margin: "3rem 0"}}
                        fs="1.8rem"
                        padding=".5rem 6rem"
                        >Login</Button>
                        <a className="login_form-link" href="">Forgotten your password?</a>
                   </StyledForm>
          
             
        )
    }
}

