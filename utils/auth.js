import { useEffect } from 'react'
import Router from 'next/router';
import nextCookie from 'next-cookies';
import cookie from 'js-cookie';




export const login = ({logintoken}) => {
 Router.push('/authorsArea')
}

// CHECK TOKEN, IF WE HAVE ONE RETURN TOKEN, IF WE DONT REDIRECT TO LOGIN PAGE

export const auth = ctx => {
    const {logintoken} = nextCookie(ctx);

     if (ctx.req && !logintoken) {
    ctx.res.writeHead(302, { Location: '/login' })
    ctx.res.end()
  }

    if(!logintoken) {
        Router.push('/login')
    }

    return logintoken
}

// LOGOUT FUNCTION

export const logout = () => {
  cookie.remove('logintoken');

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
    const logintoken = auth(ctx)

    const componentProps =
      WrappedComponent.getInitialProps &&
      (await WrappedComponent.getInitialProps(ctx))

    return { ...componentProps, logintoken }
  }

  return Wrapper
}
