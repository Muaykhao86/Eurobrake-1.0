import React from 'react'
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


export default class AuthorsArea extends React.Component {
constructor(props) {
    super(props);
    
    const { data } = props;
}
render(){
    console.log(data);
    return(
        <div className="">
        <h1>
            you are logged In
        </h1>

        <button onClick={() => logout}>logout</button>
        </div>
    )
}
}

AuthorsArea.getInitialProps = async ctx => {
  // We use `nextCookie` to get the cookie and pass the token to the
  // frontend in the `props`.
  const { token } = nextCookie(ctx)

  const redirectOnError = () =>
    process.browser
      ? Router.push('/login')
      : ctx.res.writeHead(301, { Location: '/login' })

  try {
    const response = await fetch(apiUrl, {
      credentials: 'include',
      headers: {
        Authorization: JSON.stringify({ token })
      }
    })

    if (response.ok) {
      return await response.json()
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