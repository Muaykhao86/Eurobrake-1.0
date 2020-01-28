import React, { Component, useState } from 'react'
import { Formik, Form, Field, } from 'formik';
import { TextField} from 'formik-material-ui';
import CircularProgress from '@material-ui/core/CircularProgress';

import { StyledForm } from './Formstyles';
import { Button } from '../Button';
import { SendForm } from './FormActions';
import { Typography } from '@material-ui/core';
import {LoginSchema} from './FormControl';
import Link from 'next/link';



export const LoginForm = () => {
    const [Loading, setLoading] = useState(false);
    const [Reset, setReset] = useState(false);
    const [Toggle, setToggle] = useState(false);
    const [Status, setStatus] = useState(null);
    const emptyReset={
        email: '',
    };

    const emptyInitial = {
        username: '',
        password: '',
    };

    const url = Reset ? 'https://prelude.eurobrake.net/authors/reset' : 'https://prelude.eurobrake.net/authors/login';
    return (
        <Formik
            initialValues={Reset ? emptyReset : emptyInitial}
            enableReinitialize
        >
            {({ values, handleChange, validateForm, errors }) => {

                const onSubmit = async () => {
                 await setLoading(true);
                 let FT = Reset ? 'reset' : 'login';
                   const res = await SendForm({url, values, FT});
                   const data = await res  ;
                    const dataStatus = await data && data.Status;
                  await setStatus(dataStatus)
                    let result = async () => {
                  await  setLoading(false)
                  await setToggle(true)
                   }    
                  
                return result()  
              }

                return (
                    <StyledForm>
                        {Reset && <Typography className="form-title">Please enter your email to reset your password</Typography>}

                        {Reset ?  
                        <div className="form-field">
                            <label
                                htmlFor="email"
                                className="form-label">
                                Email:
                        </label>
                            <Field
                                type="email"
                                className="form-input"
                                onClick={handleChange}
                                value={values.email}
                                style={{ color: '#134381' }}
                                name="email"
                                component={TextField}
                            />
                        </div>
                        :
                        <>
                        <div className="form-field">
                            <label
                                htmlFor="username"
                                className="form-label">
                                Email:
                        </label>
                            <Field
                                type="username"
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
                                htmlFor="password"
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
                        </>
                        }
                          {Loading ?  <CircularProgress size={24} className="loading"/> : 
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
                      }

                    {Toggle && <Typography className="form-title" style={{alignSelf: 'center', textTransform: 'uppercase'}}>{Status}</Typography>}
                        
                        {/* <Link
                            href="/f/[id]/[formType]"
                            as={`/f/XC8Z3FWxDuQtk68qVs3uwF/reset`} > */}
                        <a onClick={() => setReset(Reset => !Reset)}>
                           <Typography className="form-link">{Reset ?   'Back to Login' : 'Forgotten your password?' }</Typography> 
                        </a>
                        {/* </Link> */}
                    </StyledForm>
                )
            }}
        </Formik>
    )
};
// ? For now im by passin the email link just to check what i have with a reset token






