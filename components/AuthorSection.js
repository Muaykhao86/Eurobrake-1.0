import React from 'react'
import Link from 'next/link';
import Bounce from 'react-reveal/Bounce';
import { StyledSection } from './styles/HomeStyles';
import { Card } from './Card';
import { Button } from './Button';
import withReveal from 'react-reveal/withReveal';

const AuthorCard = () => (
   <Card left>
                    <h1>Access the Authors Area</h1>
                    <Link href="/authorsArea">
                    <Button br="500rem">Authors Area</Button>
                    </Link>
                </Card>
);

const BounceAuthorCard = withReveal(AuthorCard, <Bounce left/>);


export default function AuthorSection() {
    return (
        <StyledSection>
            <h1>Authors Area</h1>
            <p>Presenting a paper at EuroBrake gives you the opportunity to share your latest technical ideas and 
                achievements with influential specialists from around the world and to discuss your work with colleagues throughout the industrial and academic communities.</p>
            <div className="innerContainer">
                <div className="mediaBox">
                    <img  src="https://live.staticflickr.com/65535/48015947061_7e41d70927_b.jpg" alt="EuroBrake Greating" style={{ width: '100%', height: '100%', objectfit: 'cover' }} />
                </div>
                <BounceAuthorCard/>
            </div>
        </StyledSection >
    )
}

{/* src="/images/pic1.png" */}