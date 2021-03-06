import React, { Component, Fragment } from 'react'
import fetch from 'isomorphic-unfetch';
import styled from 'styled-components';
import ExhibitorCard from '../components/exhibitors/ExhibitorCard';
import {expo} from '../components/exhibitors/testexpo';
import HeroSection from '../components/HeroSection';
import {StyledPage} from '../components/styles/PageStyles';
import {FixedDates, FixedBox} from '../components/Dates';



const StyledExhibitors = styled.div`
    display: flex;
    flex-flow: wrap; 
    
`;



export default class ExhibitorList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            exhibitors: [],
            companies: [],
        }
//  ? CHANGE OVER FOR LOCAL HOST

        // this.exhibitors = expo;
    }
// ? CHANGE OVER FOR LOCAL HOST

    // static async getInitialProps() {
    //     const res = await fetch('https://prelude.eurobrake.net/exhibitors/list');
    //     const data = await res.json().catch(error => console.log(error));
    //     return {
    //         exhibitors: data
    //     };
    // };

    // componentDidMount() {

    //     // const exhibitors = this.props.exhibitors.exhibitors;
    //     // const company = exhibitors.map((ex, i) => ex.company);

    //     // this.setState({ companies: company });
    // }

    render() {
        
        
        const exhibitors = expo;
        // this.props.exhibitors.exhibitors;
        return (
            <Fragment>
            <HeroSection  max="65%" >
                EuroBrake 2020 Exhibitor Directory
            </HeroSection>
            <StyledPage  >
            <FixedDates/>
            <FixedBox/>
                <h1 style={{marginBottom: '5rem'}}>Get to know the exhibitors</h1>
                <StyledExhibitors>
                    {exhibitors.map((company, i) => {
                        return (
                            <ExhibitorCard 
                            key={i} 
                            name={company.company} 
                            image={company.logo}
                            booth={company.booth}
                            country={company.country}
                            height={100}
                            summary={company.description}
                            website={company.website}
                            phone={company.phone}
                            email={company.email}
                            />
                        )
                    })}
                </StyledExhibitors>
            </StyledPage>
            </Fragment>
        )
    }
}



