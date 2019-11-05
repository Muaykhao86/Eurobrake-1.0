import React from 'react'
import { StyledSection } from './styles/HomeStyles';
import { Card } from './Card';
import { Button } from './Button';

export default function StudentSection() {
    return (
        <StyledSection>
            <h1>Student Opportunities Programme</h1>
            <p>The EuroBrake Student Opportunities Programme (ESOP) offers 50 students from around the world the chance to attend EuroBrake 2020.</p> 
            <p>Selected students will be offered the opportunity to attend EuroBrake via a sponsorship package which offers a strong networking opportunities, 
                a CV check/one to one career advice with HR representatives from the sponsor companies, access to the designated Student Lounge and much more.</p>
            <div className="innerContainer">
                <div className="mediaBox">
                    <img src="/images/pic2.png" alt="EuroBrake Greating" style={{ width: '100%', height: '100%' }} />
                </div>
                <Card left>
                    <h1>Learn more about ESOP</h1>
                    <Button br="500rem">ESOP</Button>
                </Card>
            </div>
        </StyledSection>
    )
}
