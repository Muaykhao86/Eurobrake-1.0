import React, { Component } from 'react'
import Router from 'next/router';
import fetch from 'isomorphic-unfetch';
import styled from 'styled-components';
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

    }

    getAbstractForm = async (e) => {
        e.preventDefault()
        console.log('click');


        const apiUrl = 'https://prelude.eurobrake.net/submit';
        const response = await fetch(apiUrl, {
            credentials: 'include',
        });
        const data = await response.json().catch(error => console.log(error));
        console.log(data)
        return {
            form: data
        };
    }
    render() {
      
        return (
            <DemoDiv>
                <h1>
                    you are logged In
        </h1>
                <button onClick={this.getAbstractForm}>Submit a Abstract</button>


                <button onClick={logout}>logout</button>
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
    // console.log({logintoken})
    // ? Dont think I need thi as Im not running a seperste server, so i think we can get away wuth just router.push
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