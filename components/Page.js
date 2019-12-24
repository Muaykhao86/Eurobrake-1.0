import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Meta from './Meta';
import styled, {ThemeProvider, createGlobalStyle} from 'styled-components';

const size = {
  mobileS: '20rem',//  320px
  mobileM: '23rem',// 375 px
  mobileL: '26.5rem',// 425px
  tablet: '48rem',// 768px
  laptop: '64rem',// 1024px
  laptopM: '75rem', // 1200px
  laptopL: '90rem',// 1440px
  desktop: '160rem'// 2560px
}

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopM: `(min-width: ${size.laptopM})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};

const theme = {
    black: '#000',
    white: '#FFF',
    primary: '#134381',
    secondary: '#F9B721',
    MPRegular: 'MyriadPro-Regular',
    MPBold: 'MyriadPro-Bold',
    MPBoldIt: 'MyriadPro-BoldIt',
    MPSemibold: 'MyriadPro-Semibold',
    MPLight: 'MyriadPro-Light',
    MPLightIt: 'MyriadPro-LightIt',
    MPIt: 'MyriadPro-It',
    MPBlack: 'MyriadPro-Black',
    heroHeightSml: '50%',
    heroHeightBig: '100vh',
    laptopWidth: '65%',
    tabletWidth: '90%',
    mobileWidth: '100%',
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
        
        
        @media ${device.mobileS} and (-webkit-min-device-pixel-ratio: 2){
        font-size: 60%; 
        }
        @media ${device.laptop}  and (-webkit-min-device-pixel-ratio: 2){
        font-size: 62.5%; 
        }
        font-size: 62.5%; 
    };
    body{
        /* To set the footer at the bottom we have to leave space for it in the parent container */
        position: relative;
        min-height: 100%;
        padding-bottom: 40rem; /* ! FOOTER PADDING , HAS BEEN KNOW TO PUSH PAGE UP
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