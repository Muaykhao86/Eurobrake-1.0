import React, { Component, Fragment } from 'react'
import styled from 'styled-components';
import fetch from 'isomorphic-unfetch';
import CountDownBanner from '../components/CountDownBanner';
import ExhibitorCard from '../components/ExhibitorCard';

const Hero = styled.div`
    width: 100vw;
    height: 100vh;

    img{
        position: fixed;
        top: 0;
        left: 0;
    }

    h1{ 
        max-width: ${props => props.theme.maxWidth};
        color: ${props => props.theme.white};
        font-family: ${props => props.theme.MPRegular};
        font-size: 20rem;
        text-shadow: 0px 3px 50px #0000008C; 
    }


`;

const StyledPage = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    margin-top: 10rem;
    max-width: ${props => props.theme.maxWidth};
`;


const StyledExhibitors = styled.div`
    display: flex;
    flex-flow: wrap; 
`;


const StyledCard = styled.div`
    display: flex; 
    flex-direction: column;
    max-height: 50rem;
    max-width: 35rem;
    justify-content: space-between;
    padding: 2rem;
    border: 1px solid black;
    margin: 2rem;
    
`;


export default class ExhibitorList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            exhibitors: [],
            companies: [],
        }
    }

    static async getInitialProps() {
        const res = await fetch('https://prelude.eurobrake.net/exhibitors');
        const data = await res.json().catch(error => console.log(error));
        return {
            exhibitors: data
        };
    };

    componentDidMount() {
        const exhibitors = this.props.exhibitors.exhibitors;
        const company = exhibitors.map((ex, i) => ex.company);
        this.setState({ companies: company });
    }

    render() {
        const exhibitors = this.props.exhibitors.exhibitors;
        return (
            <Fragment>
            <Hero>
                <h1>EuroBrake 2020 Exhibitor Directory</h1>
                <img src="/images/pic1.png" alt="EuroBrake Greating" style={{ width: '100%', height: '100%' }} />
                <CountDownBanner />
            </Hero>
            <StyledPage>
                <StyledExhibitors>
                    {exhibitors.map((company, i) => {
                        return (
                            <ExhibitorCard 
                            key={i} 
                            name={company.company} 
                            img={company.logo}
                            width="120"
                            height="120"
                            booth={company.booth}
                            country={company.country}
                            />
                        )
                    })}
                </StyledExhibitors>
            </StyledPage>
            </Fragment>
        )
    }
}

// ON THIS PAGE!!!
// HAVE A BIG CARD LIST OF ALL EXHIBITORS
// DISPLAY LOGO NAME AND BOOTH
// THEN ON CLICK SHOW POPUP PORTAL WITH THE REST OPF THEIR DETAILS

