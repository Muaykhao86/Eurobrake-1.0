import React, { Component, useState, useEffect } from 'react'
import { Formik, Form, Field } from 'formik';
import { TextField, Select} from 'formik-material-ui';
import { Button } from '../Button';
import { Typography } from '@material-ui/core';
import {titles, countries} from './FormSelects';
import {AbstractSchema} from './FormControl';
import {StyledForm} from './Formstyles';


export const Authorprofile = ({editPaper = false}) => {
  
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
            {({ values, handleChange}) => {

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
                                value={values.author_title}
                                style={{ color: '#134381' }}
                                name="author_title"
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
                                value={values.author_firstname}
                                style={{ color: '#134381' }}
                                name="author_firstname"
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
                                value={values.author_lastname}
                                style={{ color: '#134381' }}
                                name="author_lastname"
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
                                value={values.author_email}
                                style={{ color: '#134381' }}
                                name="author_email"
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
                                value={values.author_jobtitle}
                                style={{ color: '#134381' }}
                                name="author_jobtitle"
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
                                value={values.author_company}
                                style={{ color: '#134381' }}
                                name="author_company"
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
                                value={values.author_address1}
                                style={{ color: '#134381' }}
                                name="author_address1"
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
                                value={values.author_address2}
                                style={{ color: '#134381' }}
                                name="author_address2"
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
                                value={values.author_address3}
                                style={{ color: '#134381' }}
                                name="author_address3"
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
                                value={values.author_city}
                                style={{ color: '#134381' }}
                                name="author_city"
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
                                value={values.author_scp}
                                style={{ color: '#134381' }}
                                name="author_scp"
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
                                value={values.author_postal}
                                style={{ color: '#134381' }}
                                name="author_postal"
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
                                value={values.author_country}
                                style={{ color: '#134381' }}
                                name="author_country"
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
                                className="form-input"
                                onClick={handleChange}
                                value={values.author_phone}
                                style={{ color: '#134381' }}
                                name="author_phone"
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
                                value={values.author_fax}
                                style={{ color: '#134381' }}
                                name="author_fax"
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
                                value={values.author_phone}
                                style={{ color: '#134381' }}
                                name="author_password"
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
                                value={values.author_phone}
                                style={{ color: '#134381' }}
                                name="author_password_confirm"
                                component={TextField}
                            />
                        </div>
  
                       
                        <Button type="submit" 
                         bcolor="#134381"
                                padding="0.5rem 2rem"
                                background="#134381"
                                br="100rem"
                                style={{ margin: ".5rem 0" }}
                                fontSize="1.7rem">Submit</Button>
                        {console.log('main', values.is_presenting_author, 'second', values.secondary_authors)}
                    </StyledForm>
                )
            }}
        </Formik>
    )
};

const presets = {
    author_title: "Mr.",
    author_firstname: "Andrew",
    author_lastname: "Green",
    author_email: "andrew@article7.co.uk",
    author_jobtitle: "Director",
    author_company: "Article Seven Limited",
    author_address1: "10 Hamilton Road",
    author_address2: null,
    author_address3: null,
    author_city: "Sidcup",
    author_scp: "Kent",
    author_country: "GB",
    author_postal: "DA15 7HB",
    author_phone: "+44 20 8305 1224",
    author_fax: '',
    author_password: '',
    author_password_confirmed: '',
    __csrf_token: "5d159fb224ed613dce89a64553f36f5eda1fa97c,2caaa318bb55c8c19d660a1e420d1c602dfc59f9,1576603105"
}

const emptyInitial = {
    author_title: '',
    author_firstname: '',
    author_lastname: '',
    author_email: '',
    author_jobtitle: '',
    author_company: '',
    author_address1: '',
    author_address2: '',
    author_address3: '',
    author_city: '',
    author_scp: '',
    author_postal: '',
    author_country: '',
    author_phone: '',
    author_fax: '',
    author_password: '',
    author_password_confirmed: '',
    __csrf_token: ''

}
