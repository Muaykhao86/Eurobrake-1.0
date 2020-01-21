import React, { Component, useState } from 'react'
import { Formik, Form, Field, } from 'formik';
import { TextField} from 'formik-material-ui';
import { StyledForm } from './Formstyles';
import { Button } from '../Button';
import { SendForm } from './FormActions';
import { Typography } from '@material-ui/core';
import {LoginSchema} from './FormControl';


// async (values, actions) => {
//                 await SendForm({ values, url })
//             }

export const ResetForm = (props) => {
    // const [Toggle, setToggle] = useState(false);
    const url =  `https://prelude.eurobrake.net/authors/reset${props.paperId}`;
    console.log({url})
    return (
        <Formik
            initialValues={emptyInitial}
            validationSchema={LoginSchema}
            enableReinitialize
        >
            {({ values, handleChange, validateForm }) => {

                const onSubmit = () => {
                    SendForm({url, values})
                }

                return (
                    <StyledForm>
                    <Typography className="form-title">Please provide your new password</Typography>

                        <div className="form-field">
                            <label
                                htmlFor="label"
                                className="form-label">
                                Password:
                        </label>
                            <Field
                                disallow_autocomplete='1'
                                type="password"
                                className="form-input"
                                onClick={handleChange}
                                value={values.new_password}
                                style={{ color: '#134381' }}
                                name="new_password"
                                component={TextField}
                            />
                        </div>
                     
                        <div className="form-field">
                            <label
                                htmlFor="label"
                                className="form-label">
                                Confirm Password:
                        </label>
                            <Field
                                type="password"
                                className="form-input"
                                onClick={handleChange}
                                value={values.confirm_password}
                                style={{ color: '#134381' }}
                                name="confirm_password"
                                component={TextField}
                            />
                        </div>
                      
                        <Button 
                            onClick={() => validateForm().then(errors => Object.keys(errors).length === 0 && onSubmit())}
                            bcolor="#134381"
                            background="#134381"
                            br="100rem"
                            style={{ margin: "3rem" }}
                            padding=".5rem 4rem"
                            fontSize="1.7rem">
                            Reset
                        </Button>
                    </StyledForm>
                )
            }}
        </Formik>
    )
};


const emptyInitial = {
    new_password: '',
    confirm_password: '',
};




