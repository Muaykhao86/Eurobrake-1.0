import Router from 'next/router';
import nextCookie from 'next-cookies';
import cookie from 'js-cookie';


// CHECK TOKEN, IF WE HAVE ONE RETURN TOKEN, IF WE DONT REDIRECT TO LOGIN PAGE

export const auth = ctx => {
    const {token} = nextCookie(ctx);

    if(ctx.req && !token) {
        ctx.res.writeHead(302, {Location: '/login'})
        ctx.res.end()
        return
    }
    if(!token) {
        Router.push('/login')
    }

    return token
}


// IF LOGGED IN/ HAS TOKEN RETURN THE COMPONENT 


// Gets the display name of a JSX component for dev tools
const getDisplayName = Component =>
  Component.displayName || Component.name || 'Component'

export const withAuthSync = WrappedComponent =>
  class extends Component {
    static displayName = `withAuthSync(${getDisplayName(WrappedComponent)})`

    static async getInitialProps (ctx) {
      const token = auth(ctx)//Check token is valid here

      const componentProps =
        WrappedComponent.getInitialProps &&
        (await WrappedComponent.getInitialProps(ctx))

      return { ...componentProps, token }
    }

    render () {
      return <WrappedComponent {...this.props} />
    }
}

// LOGOUT FUNCTION

export const logout = () => {
  cookie.remove("token");

  // To trigger the event listener we save some random data into the `logout` key
  window.localStorage.setItem("logout", Date.now()); 

  Router.push("/login");
};