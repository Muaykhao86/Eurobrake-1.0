import React from 'react'
import Link from 'next/link';
import Bounce from 'react-reveal/Bounce';
import { StyledSection } from './styles/HomeStyles';
import { Card } from './Card';
import { Button } from './Button';
import withReveal from 'react-reveal/withReveal';

const AboutCard = () => (
    <Card right>
                    <h1>Early bird tickets are on sale now</h1>
                    <Link href="/ticketPortal">
                    <Button br="500rem">Book Now</Button>
                    </Link>
                </Card>
);

const BounceAboutCard = withReveal(AboutCard, <Bounce left/>);


export default function AboutSection() {
    return (
        <StyledSection>
            <h1>Europe's braking technology conference and exhibition</h1>
            <p>Welcome to EuroBrake, a major international forum for brake experts working in the fields of passenger cars, commercial vehicles, rail, aerospace, industry and academia. </p>
            <p> We invite you to join us at EuroBrake 2020, which will take place in Barcelona, Spain, one of the world’s leading connected, cultural and historical destinations.</p>
            <div className="innerContainer">
                <div className="mediaBox">
                    <img src="/images/pic1.png" alt="EuroBrake Greating" style={{ width: '100%', height: '100%' }} />
                </div>
               <BounceAboutCard/>
            </div>
        </StyledSection>
    )
}
