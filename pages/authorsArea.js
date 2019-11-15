import React, { Component } from 'react'
import Router from 'next/router';
import fetch from 'isomorphic-unfetch';
import styled from 'styled-components';
import { withAuthSync, logout, login } from '../utils/auth'
import cookies from 'next-cookies';
import cookie from 'js-cookie';
import Login from '../components/login';


const DemoDiv = styled.form`

    display: flex;
    flex-direction: column;
    align-self: center;
    margin-top: 10rem;
    max-width: ${props => props.theme.maxWidth};

`;


const Demo = styled.h1`
    padding: 10rem;
    margin: 5rem;
    color: orangered;
`;


class AuthorsArea extends Component {
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

            <DemoDiv>
                <Login />
            </DemoDiv>
        )

    }
}

AuthorsArea.getInitialProps = async ctx => {
    // We use `nextCookie` to get the cookie and pass the token to the
    // frontend in the `props`.

    const { logintoken } = cookies(ctx);
    if (logintoken) return { login(logintoken) }
     
    else{
        return {}
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