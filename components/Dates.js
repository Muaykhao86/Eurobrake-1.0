import React from 'react'
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import {Card} from './Card';


export default function Dates() {
    return (
        <>
        <Card 
        MW="27.6rem" 
        MH="531rem" 
        bottom="0" 
        padding="1rem"
        paddingB="0">
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

        </Card>  
        </>
    )
}
