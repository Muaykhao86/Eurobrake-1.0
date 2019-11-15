import React, { Component } from 'react'
import styled from 'styled-components';
import fetch from 'isomorphic-unfetch';
import cookie from 'js-cookie';
import { login, logout } from '../utils/auth';



const DemoDiv = styled.form`
    display: flex;
    flex-direction: column;
    align-self: center; 
    max-width: ${props => props.theme.maxWidth};
`;


const Demo = styled.h1`
    padding: 10rem;
    margin: 5rem;
    color: orangered;

`;



export default class Login extends Component {
    static getInitialProps = async function () {
        const { logintoken } = cookie.get();

        const res = await fetch('https://prelude.eurobrake.net/login', {
            credentials: 'include',
            headers: {
                Authorization: `Bearer ${logintoken}`,
            }
        });
        const data = await res.json();

        return {
            form: data
        };
    };


    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            userLoggedIn: true,
            error: ''
        }
    }

    saveToState = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }


    onSubmit = async (e) => {
        e.preventDefault()
        console.log('on submit click');

        const { authorLogin, username, password, error } = this.state;
        // const apiUrl = authorLogin ? 'https://prelude.eurobrake.net/login' : '' ;
        // action="//2019.eurobrake.net/exhibition/exhibitors/login" SHOULD BE LOGIN FORM FOR EXHIBITORS
        const formData = {
            username: username,
            password: password,
        }


        try {
            const response = await fetch('https://prelude.eurobrake.net/login', {
                method: 'POST',
                credentials: 'include', // ? Is allowing now?? 
                body: JSON.stringify(formData)
            });
            const data = await response.json();

            console.log({ data })

            if (data.status === 'success') {
                const { logintoken } = await data;
                await login({ logintoken })
                console.log('login ok', data.status)
                this.setState(prev => ({ userLoggedIn: !prev }))

                return {
                    logintoken: logintoken
                }// todo CACHE DATA HERE

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
        const { userLoggedIn } = this.state;
        const { form } = this.props.form;
        console.log({ form  })
        return (
            <DemoDiv onSubmit={this.onSubmit}>
                <Demo>
                    {userLoggedIn ? (
                        <div className="">
                            <h1>You are already logged in</h1>
                            <button onClick={logout}>logout</button>
                        </div>
                    ) : (
                            <div className="">
                                <div className="">
                                    <label htmlFor="label">
                                        Username
                    {/* {form[0].label} */}
                                    </label>
                                    <input type="text"
                                        name="username"
                                        // {form[0].name} 
                                        onChange={this.saveToState} value={this.state.username} />
                                </div>
                                <div className="">
                                    <label htmlFor="label">
                                        Password
                    {/* {form[1].label} */}
                                    </label>
                                    <input type="password"
                                        name="password"
                                        // {form[1].name}  
                                        onChange={this.saveToState} value={this.state.password} />
                                </div>
                                <input type="submit" value="Submit" />
                                <button onClick={logout}>logout</button>
                            </div>
                        )
                    }
                </Demo>
            </DemoDiv>
        )
    }
}



// !!! NOTE IF I GO TO '/' IT GETS RID OF THE LOGGED IN COOKIE !!!