import React from 'react'
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

const StyledDates = styled.div`
    max-width: ${props => props.MW || '33rem'};
    min-height: ${props => props.MW ||'33rem'};
    background-color: ${props => props.theme.primary};
    padding: 2rem;
    

    display: flex;
    flex-flow: column;
    justify-content: space-between;

    font-size: 2rem;
    .Dates{
        
        &-title{
        font-size: 3rem;
        font-family: ${props => props.theme.MPBlack};
        color: ${props => props.theme.white};
        align-self: flex-start;
        max-width: 90%;
        }
        &-date{
            font-size: 2rem;
        font-family: ${props => props.theme.MPBold};
        color: ${props => props.theme.white};
        align-self: flex-start;
        max-width: 90%;
        }
        &-text{
            font-size: 2rem;
        font-family: ${props => props.theme.MPLightIt};
        color: ${props => props.theme.white};
        align-self: flex-start;
        max-width: 90%;
        }

    }

`;

export function Dates() {
    return (
        
        <StyledDates>
            <Typography gutterBottom as="h1" className="Dates-title" >Important Dates</Typography>
            <Typography gutterBottom as="h1"  className="Dates-date">26 January 2020</Typography>
            <Typography gutterBottom as="p"  className="Dates-text">Deadline for submission of review ready papers</Typography>
            <Typography gutterBottom as="h1"  className="Dates-date">12 April 2020 </Typography>
            <Typography gutterBottom as="p" className="Dates-text" >Final deadline for modifications to technical papers</Typography>
            <Typography gutterBottom as="h1"  className="Dates-date">1 May 2020</Typography>
            <Typography gutterBottom as="p" className="Dates-text" >Deadline for draft oral-only presentations, posters and presentations associated with a technical paper</Typography>
            <Typography gutterBottom as="h1"  className="Dates-date">1 May 2020</Typography>
            <Typography gutterBottom as="p"  className="Dates-text">Deadline for speakers to register</Typography>
            <Typography gutterBottom as="h1"  className="Dates-date">24 May 2020</Typography>
            <Typography gutterBottom as="p" className="Dates-text" >Deadline to upload PPTs for on-site presentation</Typography>
        </StyledDates>  
    )
}

const StyledFixedDates = styled.div`
    position: fixed;
    z-index: 1;
    top: 14vh;
    right: 0;
    width: 25rem;
    max-height: 50rem; 
    background-color: ${props => props.theme.primary};
    padding: 2rem;
    

    display: flex;
       @media only screen 
  and (max-device-width: 1000px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    display: none;
}
     

    flex-flow: column;
    justify-content: space-between;
    flex: 1 1 auto;

    .Dates{
        
        &-title{
        font-size: 2rem;
        font-family: ${props => props.theme.MPBlack};
        color: ${props => props.theme.white};
        align-self: flex-start;
        max-width: 90%;
        }
        &-date{
            font-size: 1.5rem;
        font-family: ${props => props.theme.MPBold};
        color: ${props => props.theme.white};
        align-self: flex-start;
        max-width: 90%;
        }
        &-text{
            font-size: 1.5rem;
        font-family: ${props => props.theme.MPLightIt};
        color: ${props => props.theme.white};
        align-self: flex-start;
        max-width: 90%;
        }

    }

`;
export function FixedDates() {
    return (
        
        <StyledFixedDates>
            <Typography gutterBottom as="h1" className="Dates-title" >Important Dates</Typography>
            <Typography gutterBottom as="h1"  className="Dates-date">26 January 2020</Typography>
            <Typography gutterBottom as="p"  className="Dates-text">Deadline for submission of review ready papers</Typography>
            <Typography gutterBottom as="h1"  className="Dates-date">12 April 2020 </Typography>
            <Typography gutterBottom as="p" className="Dates-text" >Final deadline for modifications to technical papers</Typography>
            <Typography gutterBottom as="h1"  className="Dates-date">1 May 2020</Typography>
            <Typography gutterBottom as="p" className="Dates-text" >Deadline for draft oral-only presentations, posters and presentations associated with a technical paper</Typography>
            <Typography gutterBottom as="h1"  className="Dates-date">1 May 2020</Typography>
            <Typography gutterBottom as="p"  className="Dates-text">Deadline for speakers to register</Typography>
            <Typography gutterBottom as="h1"  className="Dates-date">24 May 2020</Typography>
            <Typography gutterBottom as="p" className="Dates-text" >Deadline to upload PPTs for on-site presentation</Typography>
        </StyledFixedDates>  
    )
}
