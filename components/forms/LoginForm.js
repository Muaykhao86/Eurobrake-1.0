import React, { Component } from 'react'
import { Formik, Form, Field, FieldArray, FastField, ErrorMessage, } from 'formik';

import {StyledForm} from './Formstyles';
import TextField from '@material-ui/core/TextField';
import {AbstractSchema} from './FormControl';

import {Button} from '../Button';
import {SendForm} from './FormActions';
import { Typography } from '@material-ui/core';


const url =  'https://prelude.eurobrake.net/login'

export const LoginForm = () => {
return (
 <Formik
            initialValues={emptyInitial }
            onSubmit={async (values, actions) => {
              await SendForm({values, url})
              setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                }, 1000)
            }}
            enableReinitialize
        >
            {({ values, isSubmitting, isValidating, handleChange }) => {
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
                                className="form-input"
                                onClick={handleChange}
                                value={values.login_email}
                                style={{ color: '#134381' }}
                                name="login_email"
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
                                className="form-input"
                                onClick={handleChange}
                                value={values.login_password}
                                style={{ color: '#134381' }}
                                name="login_password"
                                component={TextField}
                            />
                        </div>
                       
                        <Button type="submit" 
                                bcolor="#134381"
                                padding="0.5rem 2rem"
                                background="#134381"
                                br="100rem"
                                style={{ margin: ".5rem 0" }}
                                fontSize="1.7rem">
                                Login
                        </Button>
                        <Typography className="login_form-link" href="">Forgotten your password?</Typography>
                    </StyledForm>
                )
            }}
        </Formik>
    )
};



const emptyInitial = {
    login_email: '',
    login_password: '',
};



