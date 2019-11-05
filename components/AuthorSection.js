import React from 'react'
import { StyledSection } from './styles/HomeStyles';
import { Card } from './Card';
import { Button } from './Button';

export default function AuthorSection() {
    return (
        <StyledSection>
            <h1>Authors Area</h1>
            <p>Presenting a paper at EuroBrake gives you the opportunity to share your latest technical ideas and 
                achievements with influential specialists from around the world and to discuss your work with colleagues throughout the industrial and academic communities.</p>
            <div className="innerContainer">
                <div className="mediaBox">
                    <img src="/images/pic1.png" alt="EuroBrake Greating" style={{ width: '100%', height: '100%' }} />
                </div>
                <Card right>
                    <h1>Access the Authors Area</h1>
                    <Button br="500rem">Authors Area</Button>
                </Card>
            </div>
        </StyledSection>
    )
}
