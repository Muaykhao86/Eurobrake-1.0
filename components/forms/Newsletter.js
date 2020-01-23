import React, { Component, useState } from 'react'
import { Formik, Form, Field, } from 'formik';
import { TextField} from 'formik-material-ui';
import CircularProgress from '@material-ui/core/CircularProgress';
import { StyledForm } from './Formstyles';
import { Button } from '../Button';
import { SendForm } from './FormActions';
import {LoginSchema} from './FormControl';




export const Newsletter = () => {
    const [Loading, setLoading] = useState(false);
    const [Toggle, setToggle] = useState(false);
    const [Status, setStatus] = useState(null);
    const FT = "newsletter"
    const url = 'https://prelude.eurobrake.net/signup';
    return (
        <Formik
            initialValues={emptyInitial}
            enableReinitialize
        >
            {({ values, handleChange, validateForm }) => {

              const onSubmit = async () => {
                 await setLoading(true);
                values.__csrf_token = csrf
                  await  console.log('submitting')
                  let res =  await SendForm({values, url, csrf});
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
                      <div className="form" >

                        <div className="form-field-news">
                            <label
                                htmlFor="name"
                                className="form-label-news">
                                Name:
                        </label>
                            <Field
                                type="text"
                                className="form-input-news"
                                onClick={handleChange}
                                value={values.name}
                                style={{ }}
                                name="name"
                                component={TextField}
                            />
                        </div>
                        <div className="form-field-news">
                            <label
                                htmlFor="email"
                                className="form-label-news">
                                Email:
                        </label>
                            <Field
                                type="email"
                                className="form-input-news"
                                onClick={handleChange}
                                value={values.name}
                                style={{  }}
                                name="email"
                                component={TextField}
                            />
                        </div>
                       {Loading ?  <CircularProgress size={24} className="loading"/> : 
                       <Button 
                        onClick={onSubmit}
                           padding=".5rem " 
                           style={{ fontSize: "1rem", height: '2rem', alignSelf: 'center'}}>
                            {Status ? Status : 'submit'}
                        </Button>}
                      </div>
                    </StyledForm>
                )
            }}
        </Formik>
    )
};
// ? For now im by passin the email link just to check what i have with a reset token


const emptyInitial = {
    name: '',
    email: '',
};



