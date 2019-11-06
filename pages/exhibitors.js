import React, { Component } from 'react'
import styled from 'styled-components';
import fetch from 'isomorphic-unfetch';


const StyledPage = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    margin-top: 10rem;
    max-width: ${props => props.theme.maxWidth};
`;

const StyledExhibitors= styled.div`
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
    const company = exhibitors.map((ex, i)  => ex.company);
    this.setState({companies: company});
  }
  

    render() {
        const exhibitors = this.props.exhibitors.exhibitors;
        return (
        <StyledPage>
            <h1>Exhibitors List</h1>
            <StyledExhibitors>
                {exhibitors.map((company, i) => {
                    return(
                    <StyledCard key={i}>
                        {<img src={company.logo} style={{maxWidth: '30rem'}} alt="logo"/>}
                        <h1>{company.company}</h1>
                        <h2>Based in {company.country}</h2>
                        <h2>Booth: {company.booth}</h2>
                    </StyledCard>
                    )
                })}
            </StyledExhibitors>
        </StyledPage>
        )
    }
}

// ON THIS PAGE!!!
// HAVE A BIG CARD LIST OF ALL EXHIBITORS
// DISPLAY LOGO NAME AND BOOTH
// THEN ON CLICK SHOW POPUP PORTAL WITH THE REST OPF THEIR DETAILS