import React, { Component } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { Button } from '../components/Button';


const CDBanner = styled.div`
    background-color: #134381;
    margin-top: 0;
    min-width: 100%;
    min-height: 19.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white; 
`;

const CDContainer = styled.div`
    display: flex;
    align-items: center;
    margin-right: 2rem; 

`;

const CDItem = styled.div`
    position: relative;
    top: -1.5rem;
    display: flex;
    flex-flow: column;
    align-content: flex-start;
    align-items: flex-start;

.timer{
    position: relative;
    font-size: 7rem;
    font-family: ${props => props.theme.MPBlack};
    margin: 0 1rem ;
}

    span{
    position: absolute;
    top: 8.8rem;
    font-size: 1.7rem;
    font-family: ${props => props.theme.MPLight};
    padding-left: 2rem;
    }

    span:not(.noPad){
        padding-left: 5rem;
    }
`;

class CountDownBanner extends Component {
    constructor(props) {
        super(props);

        this.state = {
            days: '',
            hours: '',
            minutes: '',
            seconds: '',

        }
    }

    componentDidMount() {

        this.interval = setInterval(() => {
            const countDownDate = new Date("Jun 2, 2020 08:00:00").getTime();
            const now = new Date().getTime();
            const distance = countDownDate - now;
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((distance / (1000 * 60)) % 60);
            const seconds = Math.floor((distance / 1000) % 60);
            this.setState({ days, hours, minutes, seconds });
        }, 1000);

    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { days, hours, minutes, seconds } = this.state

        return (
            <CDBanner>
                <CDContainer>
                    <CDItem>
                       <Typography className="timer">{days}</Typography>
                        <span className="noPad">Days</span>
                    </CDItem>
                    <CDItem className="countdown-item">
                        <Typography className="timer">{hours > 9 ? ': '+ hours : `: 0` + hours}</Typography>
                        <span>Hours</span>
                    </CDItem>
                    <CDItem className="countdown-item">
                        <Typography className="timer">{minutes > 9 ? ': '+ minutes : `: 0` + minutes}</Typography>
                        <span>Minutes</span>
                    </CDItem>
                    <CDItem className="countdown-item">
                        <Typography className="timer">{seconds > 9 ? ': '+ seconds : `: 0` + seconds}</Typography>
                        <span>Seconds</span>
                    </CDItem>
            <Link href="/ticketPortal">
                    <Button style={{marginLeft: '5rem', minHeight: '8rem'}}>Book Now</Button>
            </Link>
                </CDContainer>
            </CDBanner>

        )
    }
};

export default CountDownBanner;



// TODO LINE UP DAYS PROPERLY AND CHANGE DAYS TO 3 DIDGIT AND 00 FOR REPLACING 0 