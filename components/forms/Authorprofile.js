import React, { Component, useState, useEffect } from 'react'
import { Formik, Form, Field } from 'formik';
import { TextField, Select} from 'formik-material-ui';
import { Button } from '../Button';
import {titles, countries} from './FormSelects';
import {AuthorSchema} from './FormControl';
import {StyledForm} from './Formstyles';
import { SendForm } from './FormActions';


export const Authorprofile = (props) => {
    const [Toggle, setToggle] = useState(false);
    const [Status, setStatus] = useState(null);

    const { presets, csrf, apiUrl, paperId} = props;
    console.log({ presets, apiUrl})
    const url = apiUrl;
  
    return (
        <Formik
            initialValues={ presets || emptyInitial }
            validationSchema={AuthorSchema}
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
                  values.__csrf_token = csrf
                    console.log('submitting')
                  let res =  await SendForm({values, url, csrf});
                  let data = await  res && res.status;
                  console.log({status})
                 data && setStatus(data) && setToggle(Toggle => !Toggle)
                  return 
              }

                return (
                    <>
                    {Toggle && <h1>{Status}</h1>}
                    <StyledForm>
                        <div className="form-field">
                            <label
                                htmlFor="label"
                                className="form-label">
                                Title
                        </label>
                            <Field
                                className="form-input"
                                onClick={handleChange}
                                value={values.title}
                                style={{ color: '#134381' }}
                                name="title"
                                component={Select}
                            >
                                {titles.map((option, i) =>
                                    <option key={i} style={{ fontSize: '1.5rem', cursor: 'pointer' }} value={option.value}>{option.label}</option>)}
                            </Field>
                        </div>
                        <div className="form-field">
                            <label
                                htmlFor="label"
                                className="form-label">
                                First Name:
                        </label>
                            <Field
                                className="form-input"
                                onClick={handleChange}
                                value={values.firstname}
                                style={{ color: '#134381' }}
                                name="firstname"
                                component={TextField}
                            />
                        </div>
                        <div className="form-field">
                            <label
                                htmlFor="label"
                                className="form-label">
                                Last Name:
                        </label>
                            <Field
                                className="form-input"
                                onClick={handleChange}
                                value={values.lastname}
                                style={{ color: '#134381' }}
                                name="lastname"
                                component={TextField}
                            />
                        </div>
                        <div className="form-field">
                            <label
                                htmlFor="label"
                                className="form-label">
                                Email:
                        </label>
                            <Field
                                className="form-input"
                                onClick={handleChange}
                                value={values.email}
                                style={{ color: '#134381' }}
                                name="email"
                                component={TextField}
                            />
                        </div>
                        <div className="form-field">
                            <label
                                htmlFor="label"
                                className="form-label">
                                Job Title:
                        </label>
                            <Field
                                className="form-input"
                                onClick={handleChange}
                                value={values.jobtitle}
                                style={{ color: '#134381' }}
                                name="jobtitle"
                                component={TextField}
                            />
                        </div>
                        <div className="form-field">
                            <label
                                htmlFor="label"
                                className="form-label">
                                Company:
                        </label>
                            <Field
                                className="form-input"
                                onClick={handleChange}
                                value={values.company}
                                style={{ color: '#134381' }}
                                name="company"
                                component={TextField}
                            />
                        </div>
                        <div className="form-field">
                            <label
                                htmlFor="label"
                                className="form-label">
                                Address:
                        </label>
                            <Field
                                className="form-input"
                                onClick={handleChange}
                                value={values.address1}
                                style={{ color: '#134381' }}
                                name="address1"
                                component={TextField}
                            />
                        </div>
                        <div className="form-field">
                            <label
                                htmlFor="label"
                                className="form-label">

                            </label>
                            <Field
                                className="form-input"
                                onClick={handleChange}
                                value={values.address2}
                                style={{ color: '#134381' }}
                                name="address2"
                                component={TextField}
                            />
                        </div>
                        <div className="form-field">
                            <label
                                htmlFor="label"
                                className="form-label">

                            </label>
                            <Field
                                className="form-input"
                                onClick={handleChange}
                                value={values.address3}
                                style={{ color: '#134381' }}
                                name="address3"
                                component={TextField}
                            />
                        </div>
                        <div className="form-field">
                            <label
                                htmlFor="label"
                                className="form-label">
                                City:
                        </label>
                            <Field
                                className="form-input"
                                onClick={handleChange}
                                value={values.city}
                                style={{ color: '#134381' }}
                                name="city"
                                component={TextField}
                            />
                        </div>
                        <div className="form-field">
                            <label
                                htmlFor="label"
                                className="form-label">
                                State/ County/ Province:
                        </label>
                            <Field
                                className="form-input"
                                onClick={handleChange}
                                value={values.scp}
                                style={{ color: '#134381' }}
                                name="scp"
                                component={TextField}
                            />
                        </div>
                        <div className="form-field">
                            <label
                                htmlFor="label"
                                className="form-label">
                                Postal/ Zip code:
                        </label>
                            <Field
                                className="form-input"
                                onClick={handleChange}
                                value={values.postal}
                                style={{ color: '#134381' }}
                                name="postal"
                                component={TextField}
                            />
                        </div>
                        <div className="form-field">
                            <label
                                htmlFor="label"
                                className="form-label">
                                Country
                        </label>
                            <Field
                                className="form-input"
                                onClick={handleChange}
                                value={values.country}
                                style={{ color: '#134381' }}
                                name="country"
                                component={Select}
                            >
                                {countries.map((option, i) =>
                                    <option key={i} style={{ fontSize: '1.5rem', cursor: 'pointer' }} value={option.value}>{option.label}</option>)}
                            </Field>
                        </div>
                        <div className="form-field">
                            <label
                                htmlFor="label"
                                className="form-label">
                                Phone:
                        </label>
                            <Field
                                 placeholder="Please use the international code"
                                className="form-input"
                                onClick={handleChange}
                                value={values.phone}
                                style={{ color: '#134381' }}
                                name="phone"
                                component={TextField}
                            />
                        </div>
                        <div className="form-field">
                            <label
                                htmlFor="label"
                                className="form-label">
                                Fax:
                        </label>
                            <Field
                                 placeholder="Please use the international code"
                                className="form-input"
                                onClick={handleChange}
                                value={values.fax}
                                style={{ color: '#134381' }}
                                name="fax"
                                component={TextField}
                            />
                        </div>
                        <div className="form-field">
                            <label
                                htmlFor="label"
                                className="form-label">
                                Choose a Password:
                        </label>
                            <Field
                                placeholder="If you dont wish to change your password please leave blank"
                                className="form-input"
                                onClick={handleChange}
                                value={values.password}
                                style={{ color: '#134381' }}
                                name="password"
                                component={TextField}
                            />
                        </div>
                        <div className="form-field">
                            <label
                                htmlFor="label"
                                className="form-label">
                                Confirm password:
                        </label>
                            <Field
                                placeholder="If you dont wish to change your password please leave blank"
                                className="form-input"
                                onClick={handleChange}
                                value={values.password}
                                style={{ color: '#134381' }}
                                name="confirm_password"
                                component={TextField}
                            />
                        </div>
  
                       
                        <Button 
                                onClick={() =>  allTouched()}
                                bcolor="#134381"
                                background="#134381"
                                br="100rem"
                                padding=".5rem 4rem"
                                style={{ margin: "3rem" }}
                                fontSize="1.7rem">Submit</Button>
                    </StyledForm>
                    </>                
                )
            }}
        </Formik>
    )
};


const emptyInitial = {
    title: '',
    firstname: '',
    lastname: '',
    email: '',
    jobtitle: '',
    company: '',
    address1: '',
    address2: '',
    address3: '',
    city: '',
    scp: '',
    postal: '',
    country: '',
    phone: '',
    fax: '',
    password: '',
    confirmed_password: '',
    __csrf_token: ''

}
