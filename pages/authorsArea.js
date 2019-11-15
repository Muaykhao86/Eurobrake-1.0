import React, { Component } from 'react'
import Router from 'next/router';
import fetch from 'isomorphic-unfetch';
import styled from 'styled-components';
import { withAuthSync, logout, login } from '../utils/auth'
import cookies from 'next-cookies';
import cookie from 'js-cookie';
import { type } from 'os';



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
        this.state =  {
            hasForm: false,
            formData: undefined,
            error: '',
        }
   

    }

    getAbstractForm = async (e) => {
        e.preventDefault()
        console.log('click');
         const {logintoken} = cookie.get();
        console.log(logintoken)
try{    const apiUrl = 'https://prelude.eurobrake.net/submit';
        const response = await fetch(apiUrl, {
            credentials: 'include',
             headers: {
            Authorization: `Bearer ${logintoken}`,
      }
        });
        const data = await response.json();
        if(data.status === 'success') {           
        this.setState(prev => (
            {hasForm: !prev,
            formData: data.form
            }));
        // console.log(data.form);
        // console.log('stringify',JSON.stringify(data.form));
        console.log(data)
        
        
    }else{
        let error = new Error(data.error)
        error.response = response
       throw error
        }
    }catch (error){
        console.error(
            'Failed to get form, please try again', error
            )
       this.setState({error: error.message});
    }
    }

    
  handleInputChange= (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

    render() {
        
      
        return (
            <DemoDiv>
                <h1>
                    you are logged In
        </h1>
                <button onClick={this.getAbstractForm}>Submit a Abstract</button>
                <button onClick={logout}>logout</button>
                <div className="form-container">
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
                </div>
                
            </DemoDiv>
        )
    }
}

AuthorsArea.getInitialProps = async ctx => {
    // We use `nextCookie` to get the cookie and pass the token to the
    // frontend in the `props`.

    const {logintoken} = cookies(ctx);
    const allCookies = cookies(ctx);
    console.log({allCookies});
    const apiUrl = 'https://prelude.eurobrake.net/dashboard ';
    const redirectOnError = () =>
        process.browser
            ? Router.push('/login')
            : ctx.res.writeHead(301, { Location: '/login' })
    try {
    console.log({logintoken}, 'getIProps right before fetch call')
        const response = await fetch(apiUrl, {
            credentials: 'include',
            cache: 'no-cache',
             headers: {
            Authorization: 'Bearer ' + logintoken,
      }
        })
        const data = await response.json()
        console.log('Authors response Data =>', data.status, data);
        if(response.ok){
            console.log('res.ok', data)
            return {authorData:  data }
        }
        if(data.status === 'success') {
            console.log('papers', data.papers)

        }else{
            console.log('not reading success')
            // https://github.com/developit/unfetch#caveats
            return redirectOnError()
        }
    }catch(error){
        // Implementation or Network error
        console.log(error)
        return redirectOnError()
    }

}

export default withAuthSync(AuthorsArea)


// !
// ?
// *
// todo
// //