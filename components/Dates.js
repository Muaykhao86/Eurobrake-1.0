import React from 'react'
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

const StyledDates = styled.div`
 position: absolute;
   

    max-width: ${props => props.MW || '33rem'};
    min-height: ${props => props.MW ||'33rem'};
    background-color: ${props => props.theme.primary};
    padding: 4rem;
    

    display: flex;
    flex-flow: column;
    justify-content: space-between;


`;

export default function Dates() {
    return (
        
        <StyledDates>
            <Typography gutterBottom as="h1" >Important Dates</Typography>
            <Typography gutterBottom as="h1" >26 January 2020</Typography>
            <Typography gutterBottom as="p" >Deadline for submission of review ready papers</Typography>
            <Typography gutterBottom as="h1" >12 April 2020 </Typography>
            <Typography gutterBottom as="p" >Final deadline for modifications to technical papers</Typography>
            <Typography gutterBottom as="h1" >1 May 2020</Typography>
            <Typography gutterBottom as="p" >Deadline for draft oral-only presentations, posters and presentations associated with a technical paper</Typography>
            <Typography gutterBottom as="h1" >1 May 2020</Typography>
            <Typography gutterBottom as="p" >Deadline for speakers to register</Typography>
            <Typography gutterBottom as="h1" >24 May 2020</Typography>
            <Typography gutterBottom as="p" >Deadline to upload PPTs for on-site presentation</Typography>
        </StyledDates>  
    )
}
