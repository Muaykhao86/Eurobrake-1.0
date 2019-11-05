import React from 'react'
import { StyledSection } from './styles/HomeStyles';
import { Card } from './Card';
import { Button } from './Button';

export default function AttendeesSection() {
    return (
        <StyledSection>
            <h1>Attendees</h1>
            <p>Featuring more than 120 technical presentations and 100+ international exhibitors, 
                EuroBrake attracts a global audience of engineers, scientists, academics and executives from the industries of passenger car, commercial vehicle, rail, aerospace and the wider industrial sectors.</p>
            <div className="innerContainer">
                <div className="mediaBox">
                    <img src="/images/pic1.png" alt="EuroBrake Greating" style={{ width: '100%', height: '100%' }} />
                </div>
                <Card right>
                    <h1>Who attends Eurobrake</h1>
                    <Button br="500rem">Attendees</Button>
                </Card>
            </div>
        </StyledSection>
    )
}
