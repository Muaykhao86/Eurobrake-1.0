import React, { Component, useState } from 'react'
import { Formik, Form, Field, } from 'formik';
import { TextField} from 'formik-material-ui';
import { StyledForm } from './Formstyles';
import { Button } from '../Button';
import { SendForm } from './FormActions';
import { Typography } from '@material-ui/core';
import {LoginSchema} from './FormControl';
import Link from 'next/link';


// async (values, actions) => {
//                 await SendForm({ values, url })
//             }

export const LoginForm = () => {
    const [Reset, setReset] = useState(false);
    const [Toggle, setToggle] = useState(false);
    const [Status, setStatus] = useState(null);

    const url = Toggle ? 'https://prelude.eurobrake.net/authors/reset' : 'https://prelude.eurobrake.net/authors/login';
    console.log({url})
    return (
        <Formik
            initialValues={emptyInitial}
            validationSchema={LoginSchema}
            enableReinitialize
        >
            {({ values, handleChange, validateForm }) => {

                const onSubmit = async () => {
                   const res = await SendForm({url, values});
                   const data = await res && res.status;  
                   console.log({status})
                  data && setStatus(data) && setToggle(Toggle => !Toggle)
                    return              
              }

                return (
                    <StyledForm>
                        {Reset && <Typography className="form-title">Please enter your email to reset your password</Typography>}
                        {Toggle && <Typography className="form-title">{Status}</Typography>}

                        <div className="form-field">
                            <label
                                htmlFor="label"
                                className="form-label">
                                Email:
                        </label>
                            <Field
                                type="email"
                                className="form-input"
                                onClick={handleChange}
                                value={values.username}
                                style={{ color: '#134381' }}
                                name="username"
                                component={TextField}
                            />
                        </div>
                        {!Reset &&
                        <div className="form-field">
                            <label
                                htmlFor="label"
                                className="form-label">
                                Password:
                        </label>
                            <Field
                                type="password"
                                className="form-input"
                                onClick={handleChange}
                                value={values.password}
                                style={{ color: '#134381' }}
                                name="password"
                                component={TextField}
                            />
                        </div>
                        }
                        <Button 
                            onClick={() => validateForm().then(errors => Object.keys(errors).length === 0 && onSubmit())}
                            bcolor="#134381"
                            background="#134381"
                            br="100rem"
                            style={{ margin: "3rem" }}
                            padding=".5rem 4rem"
                            fontSize="1.7rem">
                            {Reset ? 'Reset' : 'Login'}
                        </Button>
                        
                        <Link
                            href="/f/[id]/[formType]"
                            as={`/f/XC8Z3FWxDuQtk68qVs3uwF/reset`} >
                        <a onClick={() => setReset(Reset => !Reset)}>
                           <Typography className="form-link"> Forgotten your password?</Typography> 
                        </a>
                        </Link>
                    </StyledForm>
                )
            }}
        </Formik>
    )
};
// ? For now im by passin the email link just to check what i have with a reset token


const emptyInitial = {
    username: '',
    password: '',
};



