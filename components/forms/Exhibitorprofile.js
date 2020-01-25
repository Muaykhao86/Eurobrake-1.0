import React, { Component, useState, useEffect } from 'react'
import { Formik, Form, Field, } from 'formik';
import { TextField, Select} from 'formik-material-ui';
import MenuItem from '@material-ui/core/MenuItem';

import { Button } from '../Button';
import { Typography } from '@material-ui/core';
import {titles, countries} from './FormSelects';
import {AbstractSchema} from './FormControl';
import {StyledForm} from './Formstyles';


export const Exhibitorprofile = ({editPaper = false}) => {
    const [presenter, setPresenter] = useState('');
    // if edit = true send back a preset form if not send a blank
    console.log({editPaper})

    // ! NEED TO SORTR AND SAVE PRESETS
    useEffect(() => {

        console.log('presenter is changing')

    }, [presenter])

    return (
        <Formik
            initialValues={editPaper ? presets : emptyInitial }
            onSubmit={(values, actions) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                }, 1000)
            }}
            enableReinitialize
        >
            {({ values, isSubmitting, isValidating, handleChange, setFieldValue }) => {

                return (
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
                                value={values.exhibitor_title}
                                style={{ color: '#134381' }}
                                name="exhibitor_title"
                                component={Select}
                            >
                                {titles.map((option, i) =>
                                    <MenuItem key={i} style={{ fontSize: '1.5rem', cursor: 'pointer' }} value={option.value}>{option.label}</MenuItem>)}
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
                                value={values.exhibitor_firstname}
                                style={{ color: '#134381' }}
                                name="exhibitor_firstname"
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
                                value={values.exhibitor_lastname}
                                style={{ color: '#134381' }}
                                name="exhibitor_lastname"
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
                                value={values.exhibitor_email}
                                style={{ color: '#134381' }}
                                name="exhibitor_email"
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
                                value={values.exhibitor_jobtitle}
                                style={{ color: '#134381' }}
                                name="exhibitor_jobtitle"
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
                                value={values.exhibitor_company}
                                style={{ color: '#134381' }}
                                name="exhibitor_company"
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
                                value={values.exhibitor_address1}
                                style={{ color: '#134381' }}
                                name="exhibitor_address1"
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
                                value={values.exhibitor_address2}
                                style={{ color: '#134381' }}
                                name="exhibitor_address2"
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
                                value={values.exhibitor_address3}
                                style={{ color: '#134381' }}
                                name="exhibitor_address3"
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
                                value={values.exhibitor_city}
                                style={{ color: '#134381' }}
                                name="exhibitor_city"
                                component={TextField}
                            />
                        </div>
                        <div className="form-field">
                            <label
                                htmlFor="label"
                                className="form-label">
                                State/county/province:
                        </label>
                            <Field
                                className="form-input"
                                onClick={handleChange}
                                value={values.exhibitor_scp}
                                style={{ color: '#134381' }}
                                name="exhibitor_scp"
                                component={TextField}
                            />
                        </div>
                        <div className="form-field">
                            <label
                                htmlFor="label"
                                className="form-label">
                                Postal/Zip code:
                        </label>
                            <Field
                                className="form-input"
                                onClick={handleChange}
                                value={values.exhibitor_postal}
                                style={{ color: '#134381' }}
                                name="exhibitor_postal"
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
                                value={values.exhibitor_country}
                                style={{ color: '#134381' }}
                                name="exhibitor_country"
                                component={Select}
                            >
                                {countries.map((option, i) =>
                                    <MenuItem key={i} style={{ fontSize: '1.5rem', cursor: 'pointer' }} value={option.value}>{option.label}</MenuItem>)}
                            </Field>
                        </div>
                        <div className="form-field">
                            <label
                                htmlFor="label"
                                className="form-label">
                                Phone:
                        </label>
                            <Field
                                className="form-input"
                                onClick={handleChange}
                                value={values.exhibitor_phone}
                                style={{ color: '#134381' }}
                                name="exhibitor_phone"
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
                                className="form-input"
                                onClick={handleChange}
                                value={values.exhibitor_fax}
                                style={{ color: '#134381' }}
                                name="exhibitor_fax"
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
                                className="form-input"
                                onClick={handleChange}
                                value={values.exhibitor_phone}
                                style={{ color: '#134381' }}
                                name="exhibitor_password"
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
                                className="form-input"
                                onClick={handleChange}
                                value={values.exhibitor_phone}
                                style={{ color: '#134381' }}
                                name="exhibitor_password_confirm"
                                component={TextField}
                            />
                        </div>
  
                       
                        <Button type="submit" 
                         bcolor="#134381"
                                background="#134381"
                                br="100rem"
                                style={{ margin: ".5rem 0" }}
                                fontSize="1.7rem">Submit</Button>
                        {console.log('main', values.is_presenting_exhibitor, 'second', values.secondary_exhibitors)}
                    </StyledForm>
                )
            }}
        </Formik>
    )
};

const presets = {
    exhibitor_title: "Mr.",
    exhibitor_firstname: "Andrew",
    exhibitor_lastname: "Green",
    exhibitor_email: "andrew@article7.co.uk",
    exhibitor_jobtitle: "Director",
    exhibitor_company: "Article Seven Limited",
    exhibitor_address1: "10 Hamilton Road",
    exhibitor_address2: null,
    exhibitor_address3: null,
    exhibitor_city: "Sidcup",
    exhibitor_scp: "Kent",
    exhibitor_country: "GB",
    exhibitor_postal: "DA15 7HB",
    exhibitor_phone: "+44 20 8305 1224",
    exhibitor_fax: '',
    exhibitor_password: '',
    exhibitor_password_confirmed: '',
    __csrf_token: "5d159fb224ed613dce89a64553f36f5eda1fa97c,2caaa318bb55c8c19d660a1e420d1c602dfc59f9,1576603105"
}

const emptyInitial = {
    exhibitor_title: '',
    exhibitor_firstname: '',
    exhibitor_lastname: '',
    exhibitor_email: '',
    exhibitor_jobtitle: '',
    exhibitor_company: '',
    exhibitor_address1: '',
    exhibitor_address2: '',
    exhibitor_address3: '',
    exhibitor_city: '',
    exhibitor_scp: '',
    exhibitor_postal: '',
    exhibitor_country: '',
    exhibitor_phone: '',
    exhibitor_fax: '',
    exhibitor_password: '',
    exhibitor_password_confirmed: '',
    __csrf_token: ''

}
