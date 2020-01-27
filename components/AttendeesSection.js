import React from 'react'
import Link from 'next/link';
import Bounce from 'react-reveal/Bounce';
import { StyledSection } from './styles/HomeStyles';
import { Card } from './Card';
import { Button } from './Button';
import withReveal from 'react-reveal/withReveal';

const AttendeesCard = () => (
    <Card right>
                    <h1>Who attends Eurobrake</h1>
                    <Link href="/about">
                    <Button br="500rem">Attendees</Button>
                    </Link>
                </Card>
);

const BounceAttendeesCard = withReveal(AttendeesCard, <Bounce left/>);
export default function AttendeesSection() {
    return (
        <StyledSection>
            <h1>Attendees</h1>
            <p>Featuring more than 120 technical presentations and 100+ international exhibitors, 
                EuroBrake attracts a global audience of engineers, scientists, academics and executives from the industries of passenger car, commercial vehicle, rail, aerospace and the wider industrial sectors.</p>
            <div className="innerContainer">
                <div className="mediaBox">
                    <img  src="https://live.staticflickr.com/65535/48016203938_fe5254376c_b.jpg"  alt="EuroBrake Greating" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
               <BounceAttendeesCard/>
            </div>
        </StyledSection>
    )
}
// src="/images/pic1.png" 
 