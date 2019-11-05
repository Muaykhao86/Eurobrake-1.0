import React, { Component } from 'react';
import styled from 'styled-components';
import {Button} from '../components/Button';


const CDBanner = styled.div`
    background-color: #134381;
    margin-top: 0;
    min-width: 100%;
    height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white; 
`;

const CDContainer = styled.div`
    display: flex;
    max-width: 50%;
    margin-right: 2rem; 
`;

const CDItem = styled.div`
    font-size: 3rem;
    font-family: ${props => props.theme.MPBold};
    margin: 1rem;

    span{
        margin-left: .5rem;
    }
`;

 class CountDownBanner extends Component {
    constructor(props) {
        super(props);
        
        this.state ={
           days: undefined,
           hours: undefined,
           minutes: undefined,
           seconds: undefined,

        }
    }

   componentDidMount(){
  
    this.interval = setInterval(() => {
     const countDownDate = new Date("Jun 2, 2020 08:00:00").getTime();
     const now = new Date().getTime();
     const distance = countDownDate - now;
     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
     const hours = Math.floor((distance / (1000 * 60 * 60)) % 24); 
     const minutes =  Math.floor((distance / (1000 * 60 )) % 60);
     const seconds =  Math.floor((distance / 1000) % 60 );
        this.setState({ days, hours, minutes, seconds });
    }, 1000);

    }

    componentWillUnmount(){
    clearInterval(this.interval);
    }

    render()
    {
     const {days, hours, minutes, seconds} = this.state
       
        return (
        <CDBanner>
             <CDContainer>
                    <CDItem>
                        {days}
                        <span>days</span>
                    </CDItem>
                    <CDItem className="countdown-item">
                        {hours}
                        <span>hours</span>
                    </CDItem>
                    <CDItem className="countdown-item">
                        {minutes}
                        <span>minutes</span>
                    </CDItem>
                    <CDItem className="countdown-item">
                        {seconds}
                        <span>seconds</span>
                    </CDItem>
                </CDContainer>
            <Button>Book Now</Button>
        </CDBanner>
    
        )
    }
 };

export default CountDownBanner;



