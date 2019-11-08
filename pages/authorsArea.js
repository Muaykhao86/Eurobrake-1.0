import React, { Component } from 'react'
import Router from 'next/router';
import nextCookie from 'next-cookies';
import fetch from 'isomorphic-unfetch';
import styled from 'styled-components';
import { withAuthSync, logout } from '../utils/auth'


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
        const data = await response.json().catch(error => console.log(error));;
        return {
            form: data
        };
    }
    render() {
        const { data } = this.props.form;
        console.table(data);
        return (
            <DemoDiv>
                <h1>
                    you are logged In
        </h1>
                <button>Submit a Abstract</button>


                <button onClick={logout}>logout</button>
            </DemoDiv>
        )
    }
}

AuthorsArea.getInitialProps = async ctx => {
    // We use `nextCookie` to get the cookie and pass the token to the
    // frontend in the `props`.
    const { logintoken } = nextCookie(ctx);
    const apiUrl = 'https://prelude.eurobrake.net/dashboard ';
    console.log({logintoken})
    // ? Dont think I need thi as Im not running a seperste server, so i think we can get away wuth just router.push
    const redirectOnError = () =>
        process.browser
            ? Router.push('/login')
            : ctx.res.writeHead(301, { Location: '/login' })
    try {
        const response = await fetch(apiUrl, {
            credentials: 'include',

        })

        if (response.status !== 'error') {
            const js = await response.json()
            console.log('js', js)
            return js

        } else {
            // https://github.com/developit/unfetch#caveats
            return redirectOnError()
        }
    } catch (error) {
        // Implementation or Network error
        return redirectOnError()
    }

}

export default withAuthSync(AuthorsArea)

//   headers: {
//         Authorization: JSON.stringify({ token })
//       }


// !
// ?
// *
// todo
// //