import { useEffect } from 'react'
import Router from 'next/router';
import cookies from 'next-cookies';
import cookie from 'js-cookie';






export const login = ({logintoken} ) => {
  
  cookie.set('logintoken', logintoken, { expires: 1 })
  Router.push('/authorsAreaDash')
}

// CHECK TOKEN, IF WE HAVE ONE RETURN TOKEN, IF WE DONT REDIRECT TO LOGIN PAGE

export const auth = ctx => {

  const { logintoken } = cookies(ctx);
  console.log('auth', logintoken)
    // If there's no token, it means the user is not logged in.
  if (!logintoken) {
    if (ctx.req) {
      // If `ctx.req` is available it means we are on the server.
      ctx.res.writeHead(302, { Location: '/authorsArea' })
      ctx.res.end()
    } else {
      // This should only happen on client.
      Router.push('/authorsArea')
    }
  }

return logintoken;

}

// LOGOUT FUNCTION

export const logout = async (ctx) => {
  
  await cookie.remove('logintoken')
 
  // To trigger the event listener we save some random data into the `logout` key
  await window.localStorage.setItem("logout", Date.now());

  await Router.push("/authorsArea")
};

// IF LOGGED IN/ HAS TOKEN RETURN THE COMPONENT 


export const withAuthSync = WrappedComponent => {
  const Wrapper = props => {
    const syncLogout = event => {
      if (event.key === 'logout') {
        console.log('logged out from storage!')
        Router.push('/authorsArea')
      }
    }

    useEffect(() => {
      window.addEventListener('storage', syncLogout)

      return () => {
        window.removeEventListener('storage', syncLogout)
        window.localStorage.removeItem('logout')
      }
    }, [null])

    return <WrappedComponent {...props} />
  }

  Wrapper.getInitialProps = async ctx => {
    const logintoken = auth(ctx)                // ! AUTH
    const componentProps =
      WrappedComponent.getInitialProps &&
      (await WrappedComponent.getInitialProps(ctx))
    return { ...componentProps, logintoken }
  }

  return Wrapper
}
