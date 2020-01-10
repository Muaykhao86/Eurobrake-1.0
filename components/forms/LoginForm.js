import React, { Component, useState } from 'react'
import { Formik, Form, Field, } from 'formik';
import { TextField} from 'formik-material-ui';
import { StyledForm } from './Formstyles';
import { Button } from '../Button';
import { SendForm } from './FormActions';
import { Typography } from '@material-ui/core';
import Link from 'next/link';


// async (values, actions) => {
//                 await SendForm({ values, url })
//             }

export const LoginForm = () => {
    const [Toggle, setToggle] = useState(false);
    const url = Toggle ? 'https://prelude.eurobrake.net/authors/reset' : 'https://prelude.eurobrake.net/authors/login';
    console.log({url})
    return (
        <Formik
            initialValues={emptyInitial}
            enableReinitialize
        >
            {({ values, handleChange }) => {
                console.log(values)
                return (
                    <StyledForm>
                        {Toggle && <Typography className="form-title">Please enter your email to reset your password</Typography>}

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
                        {!Toggle &&
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
                            onClick={() => SendForm({url, values})}
                            bcolor="#134381"
                            background="#134381"
                            br="100rem"
                            style={{ margin: "3rem" }}
                            padding=".5rem 4rem"
                            fontSize="1.7rem">
                            {Toggle ? 'Reset' : 'Login'}
                        </Button>
                        <a onClick={() => setToggle(Toggle => !Toggle)}>
                           <Typography className="form-link">{Toggle ? `Back to login` : `Forgotten your password?`}</Typography> 
                        </a>
                    </StyledForm>
                )
            }}
        </Formik>
    )
};



const emptyInitial = {
    username: '',
    password: '',
};



