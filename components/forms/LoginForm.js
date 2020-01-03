import React, { Component } from 'react'
import { Formik, Form, Field, } from 'formik';
import { TextField} from 'formik-material-ui';
import { StyledForm } from './Formstyles';
import { Button } from '../Button';
import { SendForm } from './FormActions';
import { Typography } from '@material-ui/core';


const url = 'https://prelude.eurobrake.net/login'
// async (values, actions) => {
//                 await SendForm({ values, url })
//             }

export const LoginForm = () => {
    return (
        <Formik
            initialValues={emptyInitial}
            enableReinitialize
        >
            {({ values, handleChange }) => {
                console.log(values)
                return (
                    <StyledForm>
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

                        <Button 
                            onClick={() => SendForm({url, values})}
                            bcolor="#134381"
                            background="#134381"
                            br="100rem"
                            style={{ marginTop: "1rem" }}
                            fontSize="1.7rem">
                            Login
                        </Button>
                        <Typography className="login_form-link">Forgotten your password?</Typography>
                    </StyledForm>
                )
            }}
        </Formik>
    )
};



const emptyInitial = {
    email: '',
    password: '',
};



