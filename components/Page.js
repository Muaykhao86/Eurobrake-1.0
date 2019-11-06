import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Meta from './Meta';
import styled, {ThemeProvider, createGlobalStyle} from 'styled-components';


const theme = {
    white: '#FFF',
    primary: '#134381',
    secondary: '#F9B721',
    MPRegular: 'MyriadPro-Regular',
    MPBold: 'MyriadPro-Bold',
    MPSemibold: 'MyriadPro-Semibold',
    MPLight: 'MyriadPro-Light',
    maxWidth: '70%',
    bs: '0 1.2rem 2.4rem rgba(0, 0, 0, .09)',

}

const StyledPage = styled.div`
    display: flex;
    flex-flow: column;
    background: white;
  
    
`;

const Inner = styled.div`
    /* max-width: ${props => props.theme.maxWidth}; */
    margin: 0 auto;
    /* margin-top: 10rem; */
    /* background: ${props => props.theme.secondary}; */
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
    };
    body{
        /* To set the footer at the bottom we have to leave space for it in the parent container */
        position: relative;
        min-height: 100%;
        padding-bottom: 30rem;
        font-family: ${props => props.theme.MPRegular};
        color: black;
        line-height: 1.6;
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
                {/* <Inner> */}
                {this.props.children}
                {/* </Inner> */}
                <Footer/>
            </StyledPage>
            </ThemeProvider>
        )
    }
}