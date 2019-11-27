import React from 'react'
import { StyledSection } from '../styles/HomeStyles';
import { Card } from '../Card';
import { Button } from '../Button';

export default function ExhibitionSection() {
    return (
        <StyledSection>
            <h1>Exhibition and Sponsorship</h1>
            <p>EuroBrake’s accompanying technical exhibition offers an ideal opportunity to present your company’s products, 
                services and technical capabilities to key decision-makers, from industry players to new entrants in specialist engineering.</p>
            <div className="innerContainer">
                <div className="mediaBox">
                    <img src="/images/pic2.png" alt="EuroBrake Greating" style={{ width: '100%', height: '100%' }} />
                </div>
                <Card right>
                    <h1>Partner your brand with EuroBrake</h1>
                    <Button br="500rem">EXHIBIT/SPONSOR</Button>
                </Card>
            </div>
        </StyledSection>
    )
}
