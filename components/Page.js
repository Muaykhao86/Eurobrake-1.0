import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Meta from './Meta';
import styled, {ThemeProvider, createGlobalStyle} from 'styled-components';





const theme = {
    black: '#000',
    white: '#FFF',
    primary: '#134381',
    primary2: '#D2E6FF',
    secondary: '#F9B721',
    MPRegular: 'MyriadPro-Regular',
    MPBold: 'MyriadPro-Bold',
    MPBoldIt: 'MyriadPro-BoldIt',
    MPSemibold: 'MyriadPro-Semibold',
    MPLight: 'MyriadPro-Light',
    MPLightIt: 'MyriadPro-LightIt',
    MPIt: 'MyriadPro-It',
    MPBlack: 'MyriadPro-Black',
    MPBlackIt: 'MyriadPro-BlackIt',
    heroHeightSmlLand: '60vw',
    heroHeightSml: '60vh',
    heroHeightBigLand: '100vw',
    heroHeightBig: '100vh',
    laptopWidth: '65%',
    mobileWidth: '80%',
    tabletWidth: '90%',
    minWidth: '50%',
    bs: '0 1.2rem 2.4rem rgba(0, 0, 0, .09)',

}

const StyledPage = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    background: white;
`;

const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: 'MyriadPro-Regular';
    src: url('/fonts/MyriadPro-Regular.otf');
    font-weight: normal;
    font-display: auto;
    font-style: normal;
    };
    @font-face {
    font-family: 'MyriadPro-Bold';
    src: url('/fonts/MyriadPro-Bold.otf');
    font-weight: bold;
    font-display: auto;
    font-style: normal;
    };
    @font-face {
    font-family: 'MyriadPro-BoldIt';
    src: url('/fonts/MyriadPro-BoldIt.otf');
    font-weight: bold;
    font-display: auto;
    font-style: normal;
    };
    @font-face {
    font-family: 'MyriadPro-Semibold';
    src: url('/fonts/MyriadPro-Semibold.otf');
    font-weight: 600;
    font-display: auto;
    font-style: normal;
    };
    @font-face {
    font-family: 'MyriadPro-Light';
    src: url('/fonts/MyriadPro-Light.otf');
    font-weight: 300;
    font-display: auto;
    font-style: normal;
    };
    @font-face {
    font-family: 'MyriadPro-LightIt';
    src: url('/fonts/MyriadPro-LightIt.otf');
    font-weight: lighter;
    font-display: auto;
    font-style: normal;
    };
    @font-face {
    font-family: 'MyriadPro-It';
    src: url('/fonts/MyriadPro-It.otf');
    font-display: auto;
    font-style: normal;
    };
    @font-face {
    font-family: 'MyriadPro-Black';
    src: url('/fonts/MyriadPro-Black.otf');
    font-weight: 300;
    font-display: auto;
    font-style: normal;
    };
    @font-face {
    font-family: 'MyriadPro-BlackIt';
    src: url('/fonts/MyriadPro-BlackIt.otf');
    font-weight: 300;
    font-display: auto;
    font-style: normal;
    };
    *,
    *::before,
    *::after{
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    };
    html{
        height: 100%;
        box-sizing:  border-box;
        font-size: 62.5%; 

          @media   only screen and (   min--moz-device-pixel-ratio: 2)      and (min-width: 1300px),
only screen and (     -o-min-device-pixel-ratio: 2/1)    and (min-width: 1300px),
only screen and (        min-device-pixel-ratio: 2)      and (min-width: 1300px),
only screen and (                min-resolution: 192dpi) and (min-width: 1300px),
only screen and (                min-resolution: 2dppx)  and (min-width: 1300px){
font-size: 58.5%;

}
     
        
    };
    body{
        /* To set the footer at the bottom we have to leave space for it in the parent container */
        position: relative;
        min-height: 100%;
        padding-bottom: 40rem;
         /* ! FOOTER PADDING , HAS BEEN KNOW TO PUSH PAGE UP
        font-family: ${props => props.theme.MPRegular};
        color: black;
        line-height: 1.6;
        /* 1.2 */
    }
    
    a{
        text-decoration: none;
        color: black;
    }
    ;
` 

export default class Page extends Component {

    render() {
        return (
            <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <StyledPage>
                <Meta/>
                <Header/>
                {this.props.children}
                <Footer/>
            </StyledPage>
            </ThemeProvider>
        )
    }
}