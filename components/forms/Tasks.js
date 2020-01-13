import React, { Component, useState } from 'react'
import { Formik, Form, Field, } from 'formik';
import { TextField} from 'formik-material-ui';
import { StyledForm } from './Formstyles';
import { Button } from '../Button';
import { SendForm } from './FormActions';
import { Typography } from '@material-ui/core/Typography';
import Link from 'next/link';


// async (values, actions) => {
//                 await SendForm({ values, url })
//             }

export const Tasks = () => {
    const [Toggle, setToggle] = useState(false);
    const {presets, csrf, apiUrl, paperId, form} = props;
    console.log(presets, csrf, apiUrl, paperId, form)
    // const url = Toggle ? 'https://prelude.eurobrake.net/authors/reset' : 'https://prelude.eurobrake.net/authors/login';
    // console.log({url})
    return (
        <Formik
            
            enableReinitialize
        >
            {({ values}) => {
                console.log(values, 'Tasks')
                return (
                    <StyledForm>
                        <Typography>Task upload etc gotta be dynamic</Typography>
                       
                        <Button 
                            onClick={() => SendForm({url, values})}
                            bcolor="#134381"
                            background="#134381"
                            br="100rem"
                            style={{ margin: "3rem" }}
                            padding=".5rem 4rem"
                            fontSize="1.7rem">
                            Send
                        </Button>
                        
                    </StyledForm>
                )
            }}
        </Formik>
    )
};






