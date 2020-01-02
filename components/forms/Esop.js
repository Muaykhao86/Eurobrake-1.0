import React, { Component, useState, useEffect } from 'react'
import { Formik, Form, Field } from 'formik';
import { TextField, Select} from 'formik-material-ui';
import { Button } from '../Button';
import {titles, countries} from './FormSelects';
import {AbstractSchema} from './FormControl';
import {StyledForm} from './Formstyles';


export const Esop = ({editPaper = false}) => {
  
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
                                value={values.esop_title}
                                style={{ color: '#134381' }}
                                name="esop_title"
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
                                value={values.esop_firstname}
                                style={{ color: '#134381' }}
                                name="esop_firstname"
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
                                value={values.esop_lastname}
                                style={{ color: '#134381' }}
                                name="esop_lastname"
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
                                value={values.esop_email}
                                style={{ color: '#134381' }}
                                name="esop_email"
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
                                value={values.esop_jobtitle}
                                style={{ color: '#134381' }}
                                name="esop_jobtitle"
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
                                value={values.esop_company}
                                style={{ color: '#134381' }}
                                name="esop_company"
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
                                value={values.esop_address1}
                                style={{ color: '#134381' }}
                                name="esop_address1"
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
                                value={values.esop_address2}
                                style={{ color: '#134381' }}
                                name="esop_address2"
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
                                value={values.esop_address3}
                                style={{ color: '#134381' }}
                                name="esop_address3"
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
                                value={values.esop_city}
                                style={{ color: '#134381' }}
                                name="esop_city"
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
                                value={values.esop_scp}
                                style={{ color: '#134381' }}
                                name="esop_scp"
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
                                value={values.esop_postal}
                                style={{ color: '#134381' }}
                                name="esop_postal"
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
                                value={values.esop_country}
                                style={{ color: '#134381' }}
                                name="esop_country"
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
                                value={values.esop_phone}
                                style={{ color: '#134381' }}
                                name="esop_phone"
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
                                value={values.esop_fax}
                                style={{ color: '#134381' }}
                                name="esop_fax"
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
                                value={values.esop_phone}
                                style={{ color: '#134381' }}
                                name="esop_password"
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
                                value={values.esop_phone}
                                style={{ color: '#134381' }}
                                name="esop_password_confirm"
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
                        {console.log('main', values.is_presenting_esop, 'second', values.secondary_esops)}
                    </StyledForm>
                )
            }}
        </Formik>
    )
};

const presets = {
    esop_title: "Mr.",
    esop_firstname: "Andrew",
    esop_lastname: "Green",
    esop_email: "andrew@article7.co.uk",
    esop_jobtitle: "Director",
    esop_company: "Article Seven Limited",
    esop_address1: "10 Hamilton Road",
    esop_address2: null,
    esop_address3: null,
    esop_city: "Sidcup",
    esop_scp: "Kent",
    esop_country: "GB",
    esop_postal: "DA15 7HB",
    esop_phone: "+44 20 8305 1224",
    esop_fax: '',
    esop_password: '',
    esop_password_confirmed: '',
    __csrf_token: "5d159fb224ed613dce89a64553f36f5eda1fa97c,2caaa318bb55c8c19d660a1e420d1c602dfc59f9,1576603105"
}

const emptyInitial = {
    esop_title: '',
    esop_firstname: '',
    esop_lastname: '',
    esop_email: '',
    esop_jobtitle: '',
    esop_company: '',
    esop_address1: '',
    esop_address2: '',
    esop_address3: '',
    esop_city: '',
    esop_scp: '',
    esop_postal: '',
    esop_country: '',
    esop_phone: '',
    esop_fax: '',
    esop_password: '',
    esop_password_confirmed: '',
    __csrf_token: ''

}
