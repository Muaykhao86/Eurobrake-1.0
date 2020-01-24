import React from 'react'
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import HeroSection from '../components/HeroSection';
import { Esop } from '../components/forms/Esop';
import { FixedDates, FixedBox } from '../components/Dates';



const StyledPage = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    width: ${props => props.theme.minWidth};
    background-color: ${props => props.theme.white};
     margin-top: 3rem;

    a{
          color: ${props => props.theme.primary};
        font-family: ${props => props.theme.MPBold};
        font-size: 2rem;
   
    }
    .Esop{
        color: ${props => props.theme.primary};
        font-family: ${props => props.theme.MPLight};
        font-size: 2rem;
    
    &_top-box{
        display: flex;
        justify-content: space-between;
    }
   
    &-title{
        color: ${props => props.theme.primary};
        font-family: ${props => props.theme.MPSemibold};
        font-size: 4.4rem;
        margin-top: 3rem;
        margin-bottom: 3rem;
    }
   
    &_sub-title{
        color: ${props => props.theme.primary};
        font-size: 3.5rem;
        font-family: ${props => props.theme.MPLightIt};
        padding-bottom: .5rem;
        margin-top: 3rem;
        margin-bottom: 3rem;
    }
    &-bold{
        font-family: ${props => props.theme.MPBold};
    }
    &-it{
        font-family: ${props => props.theme.MPLightIt};
    }
}
`;


export default () => (
    <>
        <HeroSection max="55%">
            Esop application
    </HeroSection>
        <StyledPage>
            <Typography className="Esop-title" >Apply for EuroBrake Student Opportunities Programme</Typography>
            <Typography gutterBottom className="Esop">The EuroBrake Student Opportunities Programme 2020 is now open for applications.</Typography>
            <Typography gutterBottom className="Esop">To apply for a sponsored student pass for this year's event submit your details via the form below.</Typography>
            <Typography gutterBottom className="Esop">Applications will be put before a panel of international industry and academic experts to be judged and a group of students will be selected to attend EuroBrake 2020 for free as part of the EuroBrake Student Opportunities Programme.</Typography>
            <Typography className="Esop">The deadline for applications is<span className="Esop-bold"> Monday 3rd February.</span></Typography>
            <Typography className="Esop">If you have any questions please contact <span className="Esop-bold"><a href="mailto:h.millar@fisita.com">Hayley Millar</a></span>, Education Manager at FISITA.</Typography>
            <FixedDates />
            <FixedBox />
            <Esop/>
        </StyledPage>
    </>

) 