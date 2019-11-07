import { useEffect } from 'react'
import Router from 'next/router';
import nextCookie from 'next-cookies';
import cookie from 'js-cookie';




export const login = ({token}) => {
 Router.push('/authorsArea')
}

// CHECK TOKEN, IF WE HAVE ONE RETURN TOKEN, IF WE DONT REDIRECT TO LOGIN PAGE

export const auth = ctx => {
    const {token} = nextCookie(ctx);

     if (ctx.req && !token) {
    ctx.res.writeHead(302, { Location: '/login' })
    ctx.res.end()
  }

    if(!token) {
        Router.push('/login')
    }

    return token
}

// LOGOUT FUNCTION

export const logout = () => {
  cookie.remove('token');

  // To trigger the event listener we save some random data into the `logout` key
  window.localStorage.setItem("logout", Date.now()); 

  Router.push("/login");
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
    const token = auth(ctx)

    const componentProps =
      WrappedComponent.getInitialProps &&
      (await WrappedComponent.getInitialProps(ctx))

    return { ...componentProps, token }
  }

  return Wrapper
}
