import React, { Component, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextField} from 'formik-material-ui';
import { StyledForm } from './Formstyles';
import { Button } from '../Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import { SendForm } from './FormActions';
import { Typography } from '@material-ui/core';
import {ResetSchema} from './FormControl';


// *Reset form is fine from here

export const ResetForm = (props) => {
    const [Toggle, setToggle] = useState(false);
  const [Loading, setLoading] = useState(false);

    const [Status, setStatus] = useState(null);

    const url =  `https://prelude.eurobrake.net/authors/reset/${props.paperId}`;
    console.log({url})
    return (
        <Formik
            initialValues={emptyInitial}
            validationSchema={ResetSchema}
            enableReinitialize
        >
            {({ values, handleChange, validateForm, errors, setFieldTouched, handleSubmit, submitForm }) => {

                const allTouched = async () => {
                     await Object.keys(values).forEach(key => {   
                        setFieldTouched(key, true)});

                       await validateForm().then(errors => Object.keys(errors).length === 0 && onSubmit())
                }


                const onSubmit = async () => {
                console.log('click')
                    let FT = 'reset';
                  let res =  await SendForm({values, url, FT});
                  let data = await  res;
                  let dataStatus= await  data && data.status;
                  setStatus(dataStatus)
                  console.log({data})
                  let result = async () => {
                  await  setLoading(false)
                  await setToggle(true)
                   }    
                  
                return result() 
                }

                return (
                    <StyledForm>
                    {console.log({errors})}
                    <Typography className="form-title">Please provide your new password</Typography>

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
                                value={values.new_password}
                                style={{ color: '#134381' }}
                                name="new_password"
                                component={TextField}
                            />
                        </div>
                     
                        <div className="form-field">
                            <label
                                htmlFor="confirm_password"
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
                        {Loading ?  <CircularProgress size={24} className="loading"/> : 
                        <Button 
                            onClick={() => allTouched()}
                            bcolor="#134381"
                            background="#134381"
                            br="100rem"
                            style={{ margin: "3rem" }}
                            padding=".5rem 4rem"
                            fontSize="1.7rem">
                            Reset
                        </Button>}
                    {Toggle && <Typography gutterBottom className="form-title" style={{alignSelf: 'center',textTransform: 'uppercase'}}>{Status}</Typography>}
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




