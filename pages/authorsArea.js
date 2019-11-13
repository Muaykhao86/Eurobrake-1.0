import React, { Component } from 'react'
import Router from 'next/router';
import fetch from 'isomorphic-unfetch';
import styled from 'styled-components';
import Form from "react-jsonschema-form";
import { withAuthSync, logout } from '../utils/auth'
import cookies from 'next-cookies';


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
            formData: undefined,
            error: '',
        }
   

    }

    getAbstractForm = async (e) => {
        e.preventDefault()
        console.log('click');

try{    const apiUrl = 'https://prelude.eurobrake.net/submit';
        const response = await fetch(apiUrl, {
            credentials: 'include',
        });
        const data = await response.json();
        if(data.status === 'success') {           
        this.setState({formData: data});
        console.log({data});
        console.log('stringify',JSON.stringify(data.form));
        console.log('parse',JSON.parse(data.form[0]));
        
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

    fillSchema = () => {
        const schema = {};
        this.state.formData.map(obj => schema.push(obj))
        console.log(schema);
    }

    
    render() {
        
      
        return (
            <DemoDiv>
                <h1>
                    you are logged In
        </h1>
                <button onClick={this.getAbstractForm}>Submit a Abstract</button>
                <button onClick={logout}>logout</button>
                {/* {this.state.formData && 
                    <Form schema={this.state.formData}/>
                
                
                } */}
                
            </DemoDiv>
        )
    }
}

AuthorsArea.getInitialProps = async ctx => {
    // We use `nextCookie` to get the cookie and pass the token to the
    // frontend in the `props`.

    const {logintoken} = cookies(ctx);
    const allCookies = cookies(ctx);
    console.log({logintoken}, 'getIProps');
    console.log({allCookies});
    const apiUrl = 'https://prelude.eurobrake.net/dashboard ';
    const redirectOnError = () =>
        process.browser
            ? Router.push('/login')
            : ctx.res.writeHead(301, { Location: '/login' })
    try {
        const response = await fetch(apiUrl, {
            credentials: 'include'
        });
        const data = await response.json();
        console.log('Authors response Data =>', data.status, data);
        if(data.status === 'success') {
            console.log('papers', data.papers)
            return {authorData:  data }

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
    //          headers: {
    //         Authorization: JSON.stringify({ logintoken }) // ! WONT ALLOW DUE TO SOME HEADER PROPERTY
    //   }