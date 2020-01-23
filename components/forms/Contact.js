import React, { Component, useState } from 'react'
import { Formik, Form, Field, } from 'formik';
import { TextField} from 'formik-material-ui';
import CircularProgress from '@material-ui/core/CircularProgress';
import { StyledForm } from './Formstyles';
import { Button } from '../Button';
import { SendForm } from './FormActions';
import {ContactSchema} from './FormControl';



export const ContactForm = (props) => {
    const { presets, csrf, apiUrl, paperId} = props;

    const [Loading, setLoading] = useState(false);
    const [Toggle, setToggle] = useState(false);
    const [Status, setStatus] = useState(null);
    const FT = 'contact';
    const url = 'https://prelude.eurobrake.net/contact';
    console.log({url})
    return (
        <Formik
            initialValues={emptyInitial}
            validationSchema={ContactSchema}
            enableReinitialize
        >
             {({ values, handleChange, validateForm, errors, setFieldTouched, handleSubmit, submitForm}) => {
                   
                   
                   const allTouched = async () => {
                       console.log('touched!')
                       console.log({errors})
                     await Object.keys(values).forEach(key => {   
                        setFieldTouched(key, true)});

                       await validateForm().then(errors => Object.keys(errors).length === 0 && onSubmit())
                }
                   
                   const onSubmit = async () => {
                    setLoading(true);
                  values.__csrf_token = csrf
                    console.log('submitting')
                  let res =  await SendForm({values, url, csrf, FT});
                  let data = await  res && res.status;
                  console.log({status})
                 data && setStatus(data) && setToggle(true) && setLoading(false)
                  return 
              }

                return (
                    <StyledForm>
                        <div className="form-field">
                            <label
                                htmlFor="name"
                                className="form-label">
                                Title:
                        </label>
                            <Field
                                type="text"
                                className="form-input"
                                onClick={handleChange}
                                value={values.name}
                                style={{ }}
                                name="name"
                                component={TextField}
                            />
                        </div>
                        <div className="form-field">
                            <label
                                htmlFor="firstname"
                                className="form-label">
                                First name:
                        </label>
                            <Field
                                type="text"
                                className="form-input"
                                onClick={handleChange}
                                value={values.fisrstname}
                                style={{ }}
                                name="firstname"
                                component={TextField}
                            />
                        </div>
                        <div className="form-field">
                            <label
                                htmlFor="lastname"
                                className="form-label">
                                Last name:
                        </label>
                            <Field
                                type="text"
                                className="form-input"
                                onClick={handleChange}
                                value={values.lastname}
                                style={{ }}
                                name="lastname"
                                component={TextField}
                            />
                        </div>
                        <div className="form-field">
                            <label
                                htmlFor="jobtitle"
                                className="form-label">
                                Job title:
                        </label>
                            <Field
                                type="text"
                                className="form-input"
                                onClick={handleChange}
                                value={values.jobtitle}
                                style={{ }}
                                name="jobtitle"
                                component={TextField}
                            />
                        </div>
                        <div className="form-field">
                            <label
                                htmlFor="company"
                                className="form-label">
                                Company:
                        </label>
                            <Field
                                type="text"
                                className="form-input"
                                onClick={handleChange}
                                value={values.company}
                                style={{ }}
                                name="company"
                                component={TextField}
                            />
                        </div>
                        <div className="form-notes">
                            <label
                                htmlFor="address"
                                className="form-notes-label">
                                Address:
                        </label>
                            <Field
                                type="text"
                                className="form-notes-input"
                                onClick={handleChange}
                                value={values.address}
                                style={{ }}
                                name="address"
                                component="textarea"
                            />
                        </div>
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
                                value={values.name}
                                style={{  }}
                                name="email"
                                component={TextField}
                            />
                        </div>
                        <div className="form-notes">
                            <label
                                htmlFor="enquiry"
                                className="form-notes-label">
                                Your message:
                        </label>
                            <Field
                                type="text"
                                className="form-notes-input"
                                onClick={handleChange}
                                value={values.enquiry}
                                style={{ }}
                                name="enquiry"
                                component="textarea"
                            />
                            {errors.enquiry && <label style={{ position: 'absolute', bottom: '-1rem', right: '1rem', color: '#ff0000', fontSize: '1.5rem' }}>{errors.enquiry}</label>}
                        </div>
                       {Loading ?  <CircularProgress size={24} className="loading"/> : 
                       <Button 
                         bcolor="#134381"
                                background="#134381"
                                br="100rem"
                                style={{ margin: ".5rem 0" }}
                                fontSize="2rem"
                        onClick={allTouched}
                           style={{ fontSize: "1rem", height: '2rem', alignSelf: 'center'}}>
                            {Status ? Status : 'submit'}
                        </Button>}
                    </StyledForm>
                )
            }}
        </Formik>
    )
};
// ? For now im by passin the email link just to check what i have with a reset token


const emptyInitial = {
    name: '',
    firstneme: '',
    lastname: '',
    jobtitle: '',
    company: '',
    address: '',
    email: '',
    enquiry: ''
};



