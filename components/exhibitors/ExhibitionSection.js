import React from 'react'
import Link from 'next/link';
import Bounce from 'react-reveal/Bounce';
import { StyledSection } from '../styles/HomeStyles';
import { Card } from '../Card';
import { Button } from '../Button';
import Typography from '@material-ui/core/Typography';

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
                <Bounce ssrFadeout left>
                <Card left>
                    {/* CHANGE TO MP BLACK!!! */}
                    <Typography>Partner your brand with EuroBrake</Typography>
                    <Link href="/exhibitAndSponsor">
                    <Button br="500rem">EXHIBIT/SPONSOR</Button>
                    </Link>
                </Card>
                </Bounce>
            </div>
        </StyledSection>
    )
}
