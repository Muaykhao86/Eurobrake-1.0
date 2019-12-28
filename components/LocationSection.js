import React from 'react'
import Link from 'next/link';
import Bounce from 'react-reveal/Bounce';
import { StyledSection } from './styles/HomeStyles';
import { Card } from './Card';
import { Button } from './Button';

export default function LocationSection() {
    return (
        <StyledSection>
            <h1>Discover Barcelona</h1>
            <p>Offering an enviable climate and world-leading hub for business, 
                Barcelona has direct links with many of the world’s Capital cities, via air, road, rail and sea, making EuroBrake 2020 extremely accessible.</p>
            <div className="innerContainer">
                <div className="mediaBox">
                    <img src="/images/pic2.png" alt="Barcelona" style={{ width: '100%', height: '100%' }} />
                </div>
                <Bounce left>
                <Card left>
                    <h1>Find out more about Barcelona</h1>
                    <Link href="/welcome">
                    <Button br="500rem">Discover</Button>
                    </Link>
                </Card>
                </Bounce>
            </div>
        </StyledSection>
    )
}
