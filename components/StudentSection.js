import React from 'react';
import Link from 'next/link';
import Bounce from 'react-reveal/Bounce';
import { StyledSection } from './styles/HomeStyles';
import { Card } from './Card';
import { Button } from './Button';
import withReveal from 'react-reveal/withReveal';


const StudentCard = () => (
    <Card right>
                    <h1>Learn more about ESOP</h1>
                    <Link href="/esop">
                    <Button br="500rem">ESOP</Button>
                    </Link>
                </Card>
);

const BounceStudentCard = withReveal(StudentCard, <Bounce left/>);



export default function StudentSection() {
    return (
        <StyledSection>
            <h1>Student Opportunities Programme</h1>
            <p>The EuroBrake Student Opportunities Programme (ESOP) offers 50 students from around the world the chance to attend EuroBrake 2020.</p> 
            <p>Selected students will be offered the opportunity to attend EuroBrake via a sponsorship package which offers a strong networking opportunities, 
                a CV check/one to one career advice with HR representatives from the sponsor companies, access to the designated Student Lounge and much more.</p>
            <div className="innerContainer">
                <div className="mediaBox">
                    <img src="https://live.staticflickr.com/65535/48016169592_4d79e976bd_b.jpg" alt="EuroBrake Greating" style={{ width: '100%', height: '100%' }} />
                </div>
                <BounceStudentCard/>
            </div>
        </StyledSection>
    )
}
// src="/images/pic2.png" 
