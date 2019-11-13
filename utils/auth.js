import { useEffect } from 'react'
import Router from 'next/router';
import cookies from 'next-cookies';
import cookie from 'js-cookie';
import fetch from 'isomorphic-unfetch';





export const login = ({logintoken} ) => {
  cookie.set('logintoken', logintoken, { expires: 1 })
  Router.push('/authorsArea')
}

// CHECK TOKEN, IF WE HAVE ONE RETURN TOKEN, IF WE DONT REDIRECT TO LOGIN PAGE

export const auth = ctx => {

  const { logintoken } = cookies(ctx);
    // If there's no token, it means the user is not logged in.
  if (!logintoken) {
    if (ctx.req) {
      // If `ctx.req` is available it means we are on the server.
      ctx.res.writeHead(302, { Location: '/login' })
      ctx.res.end()
    } else {
      // This should only happen on client.
      Router.push('/login')
    }
  }

return logintoken;

  // const { logintoken } = cookies(ctx);

  // if (ctx.req && !logintoken) {
  //   ctx.res.writeHead(302, { Location: '/login' })
  //   ctx.res.end()
  // }
  // console.log('AUTH => ', logintoken)
  // if (!logintoken) {
  //   Router.push('/login')
  // }

  // return logintoken
}

// LOGOUT FUNCTION

export const logout = async () => {
  const {logintoken} = cookies(ctx);
  await cookie.remove('logintoken')
 
  const res = await fetch('https://prelude.eurobrake.net/logout',
    {
      credentials: 'include',
       headers: {
            Authorization: `Bearer ${logintoken}`,
      }
    });
  const data = await res.json().catch(error => console.log(error));
  console.log('logout', data);
  // To trigger the event listener we save some random data into the `logout` key
  await window.localStorage.setItem("logout", Date.now());

  await Router.push("/login")
};

// IF LOGGED IN/ HAS TOKEN RETURN THE COMPONENT 


export const withAuthSync = WrappedComponent => {
  const Wrapper = props => {
    const syncLogout = event => {
      if (event.key === 'logout') {
        console.log('logged out from storage!')
        Router.push('/login')
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
    console.log('down to wrap your components', 'logintoken authors auth sync ', logintoken)
    const componentProps =
      WrappedComponent.getInitialProps &&
      (await WrappedComponent.getInitialProps(ctx))
    console.log('withauthsync', 'ctx => ', ctx, 'logintoken => ', logintoken)
    return { ...componentProps, logintoken }
  }

  return Wrapper
}
