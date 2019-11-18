import App from 'next/app'
import React from 'react'
import Page  from '../components/Page';



export default class MyApp extends App {
  // need to remove the server-side injected CSS on the client side because of avoiding duplicated injection of CSS. as per material ui docs
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles)
  }
  render () {
    const { Component, pageProps } = this.props
    return (
        <Page>
        <Component {...pageProps} />
        </Page>
    )
  }
}
