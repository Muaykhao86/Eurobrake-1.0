import React, { Component, useState, useRef, useEffect } from 'react'
import { Formik, Form, Field, FieldArray, FastField, ErrorMessage, } from 'formik';
import { TextField, RadioGroup, Select, Checkbox } from 'formik-material-ui';
import { AddCircle, RemoveCircle, ArrowUpwardRounded, ArrowDownwardRounded, } from '@material-ui/icons';
import * as Yup from 'yup';
import cookie from 'js-cookie';
import styled from 'styled-components';
import { Button } from './Button'
import { Typography, Input } from '@material-ui/core';


export async function GetForm(url) {
    const { logintoken } = cookie.get();
    console.log({ logintoken })
    try {
        const apiUrl = url;
        const response = await fetch(apiUrl, {
            credentials: 'include',
            headers: {
                Authorization: 'Bearer ' + logintoken,
            }
        });
        const data = await response.json();
        if (data.status === 'success') {
            console.log('getForm', data);
            console.log('tkn', data.__csrf_token)
            return data.__csrf_token;
        } else {
            let error = new Error(data.error)
            error.response = response
            throw error
        }
    } catch (error) {
        console.error(
            'Failed to get form, please try again', error
        )
        // return error.message
    }
    return
}

export async function SendFile({ csrf, file }) {
    const formData = new FormData();
    const { logintoken } = cookie.get();
    formData.append('__csrf_token', csrf);
    formData.append('filename', file);
    console.log({ logintoken, csrf, file })
    if (logintoken && csrf && file) {
        try {
            const apiUrl = 'https://prelude.eurobrake.net/upload';
            const response = await fetch(apiUrl, {
                method: 'POST',
                body: formData,
                credentials: 'include',
                headers: {
                    Authorization: 'Bearer ' + logintoken,
                }
            });
            const data = await response.json();
            await console.log({ data })
            if (data.status === 'success') {
                console.log('getForm', data);

            } else {
                let error = new Error(data.error)
                error.response = response
                throw error
            }
        } catch (error) {
            console.error(
                'Failed to get form, please try again', error
            )
            // this.setState({ error: error.message });
        }
    }

    return
}


export async function SendForm({ csrf, formData, url }) {
    const form = JSON.stringify(formData);
    const { logintoken } = cookie.get();
    if (logintoken && csrf && formData) {
        try {
            const apiUrl = url;
            const response = await fetch(apiUrl, {
                body: form,
                credentials: 'include',
                headers: {
                    Authorization: 'Bearer ' + logintoken,
                }
            });
            const data = await response.json();

            if (data.status === 'success') {
                console.log('getForm', data);
            } else {
                let error = new Error(data.error)
                error.response = response
                throw error
            }
        } catch (error) {
            console.error(
                'Failed to get form, please try again', error
            )
        }
    }
    return
}


const AbstractSchema = Yup.object().shape({
    author_firstname: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    author_lastname: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    author_email: Yup.string()
        .email()
        .required('Required'),
    author_jobtitle: Yup.string()
        .required('Required'),
    author_company: Yup.string()
        .required('Required'),
    author_address1: Yup.string()
        .required('Required'),
    author_address2: Yup.string()
        .required('Required'),
    author_address3: Yup.string()
        .required('Required'),
    author_city: Yup.string()
        .required('Required'),
    author_scp: Yup.string()
        .required('Required'),
    author_postal: Yup.string()
        .required('Required'),
    author_country: Yup.string()
        .required('Required'),
    author_phone: Yup.string()
        .required('Required'),
    is_presenting_author: Yup.string()
        .required('Required'),
    submission_type: Yup.string()
        .required('Required'),
    presentationtype_full: Yup.string(),
    papertitle: Yup.string()
        .required('Required'),
    theme: Yup.string()
        .required('Required'),
    subtheme: Yup.array().max(3, 'Please select max of three subthemes!')
        .required('Required'),
    abstract: Yup.string()
        .required('Required'),
    keywords: Yup.string()
        .required('Required'),
    previouspapers: Yup.string()
        .required('Required'),
    consider_for_journal: Yup.string()
        .required('Required'),
    secondary_authors: Yup.array()
        .of(Yup.object().shape({
            title: Yup.string()
                .required('Required'),
            firstname: Yup.string()
                .required('Required'),
            lastname: Yup.string()
                .required('Required'),
            email: Yup.string()
                .email()
                .required('Required'),
            company: Yup.string()
                .required('Required'),
            country: Yup.string()
                .required('Required'),
            is_presenting_author: Yup.string()
                .required('Required'),
        }))
});

const StyledForm = styled(Form)`
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        align-items: center;
        min-width: 100%;

    

    .MuiInput-underline:after {
        color: ${props => props.theme.primary};
    }

    .MuiFormHelperText-root {
        font-size: 1.5rem;
    }

    .MuiInputBase-root {
        font-family: ${props => props.theme.MPBoldIt};
            font-size: 2rem;
            color: ${props => props.theme.primary};
    }
    input:-internal-autofill-selected {

    }
        .login_form{

        &-field{
            margin: 1rem 0;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
        }
        &-label{
            font-family: ${props => props.theme.MPLight};
            font-size: 2.6rem;
            color: ${props => props.theme.primary};
        }
        &-input{
            min-width: 40rem;
            font-family: ${props => props.theme.MPBoldIt};
            font-size: 2rem;
            color: ${props => props.theme.primary};
        }
        &-link{
            font-family: ${props => props.theme.MPBoldIt};
            font-size: 1.7rem;
            color: ${props => props.theme.primary};
        }
        &-radio{
            text-align: end;
        }
    
        }
    `;
// !    FUNCTIONS
// MAXTHREE CHECKBOX
// ? Handled by yup atm => doesnt disable but brings msg and stops submit
// ONLYONE PRESENTING
// ? ONLY GONE AND DONE IT N I?? PROBLEM STILL WHEN SWITCHING INDEXES BUT CAN PROBABLY RESOLVE BY ON EVERY NEW AUTHOR RESET ISPRESENTINGAUTHORFIELDS

// const onPresenterChange = (setFieldValue) => {
// if (process.browser) {
//     const radios = document.querySelectorAll('input[name*="is_presenting_author"`]');
//     radios.forEach(a => {
//         a.name !== presenter && a.value === 'yes' && console.log(a)
//         Form.setFieldValue(a.name, 'no')
//         //  a.checked  && console.log(a)
//         console.log(a)
//     }

//     )
// }
// console.log(setFieldValue)
// }

// const onPresenter = () => console.log('fuck you!');


export const AbstractForm = () => {
    const [presenter, setPresenter] = useState('');
    useEffect(() => {

        console.log('presenter is changing')

    }, [presenter])

    return (
        <Formik
            initialValues={emptyInitial}
            onSubmit={(values, actions) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                }, 1000)
            }}
            validationSchema={AbstractSchema}
            enableReinitialize
        >
            {({ values, isSubmitting, isValidating, handleChange, setFieldValue }) => {

                const allNo = ({name}) => {
                    if(process.browser){
                    const radios = document.querySelectorAll('input[name*="is_presenting_author"]');
                    {/* console.log(name) */}
                    radios.forEach(input => {
                        input.name !== name && setFieldValue(input.name, input.value) &&
                        console.log('gonna change...', input.name, 'cos it aint the same as...', name, ) 
                    })}
                }


                const onPresenterChange = (event) => {
                    const { target } = event;
                    const value = target.value;
                    const name = target.name;
                    value === 'no' ? setPresenter('') : setPresenter(name);
                    setFieldValue(name, value);
                    allNo({ name });
                    return console.log({ values })
                }


                return (
                    <StyledForm>
                        <h1>Primary Author</h1>
                        <div className="login_form-field">
                            <label
                                htmlFor="label"
                                className="login_form-label">
                                Title
                        </label>
                            <Field
                                className="login_form-input"
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
                        <div className="login_form-field">
                            <label
                                htmlFor="label"
                                className="login_form-label">
                                First Name:
                        </label>
                            <Field
                                className="login_form-input"
                                onClick={handleChange}
                                value={values.author_firstname}
                                style={{ color: '#134381' }}
                                name="author_firstname"
                                component={TextField}
                            />
                        </div>
                        <div className="login_form-field">
                            <label
                                htmlFor="label"
                                className="login_form-label">
                                Last Name:
                        </label>
                            <Field
                                className="login_form-input"
                                onClick={handleChange}
                                value={values.author_lastname}
                                style={{ color: '#134381' }}
                                name="author_lastname"
                                component={TextField}
                            />
                        </div>
                        <div className="login_form-field">
                            <label
                                htmlFor="label"
                                className="login_form-label">
                                Email:
                        </label>
                            <Field
                                className="login_form-input"
                                onClick={handleChange}
                                value={values.author_email}
                                style={{ color: '#134381' }}
                                name="author_email"
                                component={TextField}
                            />
                        </div>
                        <div className="login_form-field">
                            <label
                                htmlFor="label"
                                className="login_form-label">
                                Job Title:
                        </label>
                            <Field
                                className="login_form-input"
                                onClick={handleChange}
                                value={values.author_jobtitle}
                                style={{ color: '#134381' }}
                                name="author_jobtitle"
                                component={TextField}
                            />
                        </div>
                        <div className="login_form-field">
                            <label
                                htmlFor="label"
                                className="login_form-label">
                                Company:
                        </label>
                            <Field
                                className="login_form-input"
                                onClick={handleChange}
                                value={values.author_company}
                                style={{ color: '#134381' }}
                                name="author_company"
                                component={TextField}
                            />
                        </div>
                        <div className="login_form-field">
                            <label
                                htmlFor="label"
                                className="login_form-label">
                                Address:
                        </label>
                            <Field
                                className="login_form-input"
                                onClick={handleChange}
                                value={values.author_address1}
                                style={{ color: '#134381' }}
                                name="author_address1"
                                component={TextField}
                            />
                        </div>
                        <div className="login_form-field">
                            <label
                                htmlFor="label"
                                className="login_form-label">

                            </label>
                            <Field
                                className="login_form-input"
                                onClick={handleChange}
                                value={values.author_address2}
                                style={{ color: '#134381' }}
                                name="author_address2"
                                component={TextField}
                            />
                        </div>
                        <div className="login_form-field">
                            <label
                                htmlFor="label"
                                className="login_form-label">

                            </label>
                            <Field
                                className="login_form-input"
                                onClick={handleChange}
                                value={values.author_address3}
                                style={{ color: '#134381' }}
                                name="author_address3"
                                component={TextField}
                            />
                        </div>
                        <div className="login_form-field">
                            <label
                                htmlFor="label"
                                className="login_form-label">
                                City:
                        </label>
                            <Field
                                className="login_form-input"
                                onClick={handleChange}
                                value={values.author_city}
                                style={{ color: '#134381' }}
                                name="author_city"
                                component={TextField}
                            />
                        </div>
                        <div className="login_form-field">
                            <label
                                htmlFor="label"
                                className="login_form-label">
                                State/county/province:
                        </label>
                            <Field
                                className="login_form-input"
                                onClick={handleChange}
                                value={values.author_scp}
                                style={{ color: '#134381' }}
                                name="author_scp"
                                component={TextField}
                            />
                        </div>
                        <div className="login_form-field">
                            <label
                                htmlFor="label"
                                className="login_form-label">
                                Postal/Zip code:
                        </label>
                            <Field
                                className="login_form-input"
                                onClick={handleChange}
                                value={values.author_postal}
                                style={{ color: '#134381' }}
                                name="author_postal"
                                component={TextField}
                            />
                        </div>
                        <div className="login_form-field">
                            <label
                                htmlFor="label"
                                className="login_form-label">
                                Country
                        </label>
                            <Field
                                className="login_form-input"
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
                        <div className="login_form-field">
                            <label
                                htmlFor="label"
                                className="login_form-label">
                                Phone:
                        </label>
                            <Field
                                className="login_form-input"
                                onClick={handleChange}
                                value={values.author_phone}
                                style={{ color: '#134381' }}
                                name="author_phone"
                                component={TextField}
                            />
                        </div>
                        <div className="login_form-field">
                            <label
                                htmlFor="label"
                                className="login_form-label">
                                Is this the presenting author?
                        </label>
                            <Field
                                className="login_form-radio"
                                value={values.is_presenting_author}
                                style={{ color: '#134381' }}
                                name="is_presenting_author"
                                component={RadioGroup}
                            >
                                <label
                                    style={{ margin: '1rem' }}
                                    htmlFor="label"
                                    className="login_form-label">
                                    Yes
                                        <input
                                        checked={presenter === 'is_presenting_author'}
                                        onChange={(event) => {
                                            onPresenterChange(event)
                                        }
                                        }
                                        type="radio"
                                        name="is_presenting_author"
                                        value="yes"
                                    />
                                </label>
                                <label
                                    style={{ margin: '1rem' }}
                                    htmlFor="label"
                                    className="login_form-label">
                                    No
                                        <input
                                        onChange={(event) => {
                                            onPresenterChange(event)
                                        }
                                        }
                                        checked={presenter !== 'is_presenting_author'}
                                        type="radio"
                                        name="is_presenting_author"
                                        value="no"
                                    />
                                </label>
                            </Field>
                        </div>
                       
                        <h1>Secondary Author(s)</h1>
                        <div className="">
                            <FieldArray name={`secondary_authors`} >
                                {({ swap, push, remove, setSubmitting }) => (
                                    values.secondary_authors &&
                                    values.secondary_authors.length > 0 &&
                                    (
                                        values.secondary_authors.map((authors, index) => (
                                            <div key={index}>
                                                <div className="login_form-field">
                                                    <label
                                                        htmlFor="label"
                                                        className="login_form-label">
                                                        Title:
                                                    </label>
                                                    <Field
                                                        className="login_form-input"
                                                        onClick={handleChange}
                                                        value={`secondary_authors[${index}].title`}
                                                        style={{ color: '#134381' }}
                                                        name={`secondary_authors[${index}].title`}
                                                        component={TextField}
                                                    />
                                                </div>
                                                <div className="login_form-field">
                                                    <label
                                                        htmlFor="label"
                                                        className="login_form-label">
                                                        First Name:
                                                    </label>
                                                    <Field
                                                        className="login_form-input"
                                                        onClick={handleChange}
                                                        value={`secondary_authors[${index}].firstname`}
                                                        style={{ color: '#134381' }}
                                                        name={`secondary_authors[${index}].firstname`}
                                                        component={TextField}
                                                    />
                                                </div>
                                                <div className="login_form-field">
                                                    <label
                                                        htmlFor="label"
                                                        className="login_form-label">
                                                        Last Name:
                                                    </label>
                                                    <Field
                                                        className="login_form-input"
                                                        onClick={handleChange}
                                                        value={`secondary_authors[${index}].lastname`}
                                                        style={{ color: '#134381' }}
                                                        name={`secondary_authors[${index}].lastname`}
                                                        component={TextField}
                                                    />
                                                </div>
                                                <div className="login_form-field">
                                                    <label
                                                        htmlFor="label"
                                                        className="login_form-label">
                                                        Email:
                                                    </label>
                                                    <Field
                                                        className="login_form-input"
                                                        onClick={handleChange}
                                                        value={`secondary_authors[${index}].email`}
                                                        style={{ color: '#134381' }}
                                                        name={`secondary_authors[${index}].email`}
                                                        component={TextField}
                                                    />
                                                </div>
                                                <div className="login_form-field">
                                                    <label
                                                        htmlFor="label"
                                                        className="login_form-label">
                                                        Company:
                                                    </label>
                                                    <Field
                                                        className="login_form-input"
                                                        onClick={handleChange}
                                                        value={`secondary_authors[${index}].company`}
                                                        style={{ color: '#134381' }}
                                                        name={`secondary_authors[${index}].company`}
                                                        component={TextField}
                                                    />
                                                </div>
                                                <div className="login_form-field">
                                                    <label
                                                        htmlFor="label"
                                                        className="login_form-label">
                                                        Country:
                                                    </label>
                                                    <Field
                                                        className="login_form-input"
                                                        onClick={handleChange}
                                                        value={`secondary_authors[${index}].country`}
                                                        style={{ color: '#134381' }}
                                                        name={`secondary_authors[${index}].country`}
                                                        component={TextField}
                                                    />
                                                </div>
                                                <div className="login_form-field">
                                                    <label
                                                        htmlFor="label"
                                                        className="login_form-label">
                                                        Is this the presenting Author?
                                                    </label>
                                                    <Field
                                                        className="login_form-radio"
                                                        style={{ color: '#134381' }}
                                                        value={`secondary_authors[${index}].is_presenting_author`}
                                                        component={RadioGroup}
                                                        name={`secondary_authors[${index}].is_presenting_author`}
                                                    >
                                                        <label
                                                            style={{ margin: '1rem' }}
                                                            htmlFor="label"
                                                            className="login_form-label">
                                                            Yes
                                                                <input
                                                                checked={presenter == `secondary_authors[${index}].is_presenting_author`}
                                                                onChange={(event) => {
                                                                    onPresenterChange(event)
                                                                }
                                                                }
                                                                type="radio"
                                                                value="yes"
                                                                name={`secondary_authors[${index}].is_presenting_author`}
                                                            />
                                                        </label>
                                                        <label
                                                            style={{ margin: '1rem' }}
                                                            htmlFor="label"
                                                            className="login_form-label">
                                                            No
                                                                <input
                                                                checked={presenter != `secondary_authors[${index}].is_presenting_author`}
                                                                onChange={(event) => {
                                                                    onPresenterChange(event)
                                                                }
                                                                }
                                                                type="radio"
                                                                value="no"
                                                                name={`secondary_authors[${index}].is_presenting_author`}
                                                            />
                                                        </label>
                                                    </Field>
                                                </div>
                                                <Button type="add" onClick={() => {
                                                    push({
                                                        title: '',
                                                        firstname: '',
                                                        lastname: '',
                                                        email: '',
                                                        company: '',
                                                        country: '',
                                                        is_presenting_author: ''
                                                    });
                                                }}>
                                                    <AddCircle style={{ color: 'green' }} />
                                                </Button>
                                                <Button type="remove" onClick={() => values.secondary_authors.length > 1 && remove(index)}>
                                                    <RemoveCircle style={{ color: 'red' }} />
                                                </Button>
                                                <Button type="upgrade" onClick={() => values.secondary_authors.length > 1 && index !== 0 && swap(index, index - 1)}>
                                                    <ArrowUpwardRounded style={{ color: 'red' }} />
                                                </Button>
                                                <Button type="downgrade" onClick={() => values.secondary_authors.length > 1 && index !== values.secondary_authors.length - 1 && swap(index, index + 1)}>
                                                    <ArrowDownwardRounded style={{ color: 'red' }} />
                                                </Button>
                                            </div>
                                        ))


                                    ))}
                            </FieldArray>
                        </div>
                        <button type="submit" >Submit</button>
                        {console.log('main', values.is_presenting_author, 'second', values.secondary_authors)}
                    </StyledForm>
                )
            }}
        </Formik>
    )
};

// ! NOT NEEDED ANYMORE !!!! £$!*er
//  <h1>Your Abstract</h1>
//                         <div className="login_form-field">
//                             <label
//                                 htmlFor="label"
//                                 className="login_form-label">
//                                 Submission Type:
//                         </label>
//                             <Field
//                                 className="login_form-radio"
//                                 onClick={handleChange}
//                                 value={values.submission_type}
//                                 style={{ color: '#134381' }}
//                                 name="submission_type"
//                                 component={RadioGroup}
//                             >
//                                 <label
//                                     style={{ margin: '1rem' }}
//                                     htmlFor="label"
//                                     className="login_form-label">
//                                     I will make a full technical paper submission
//                             <Field
//                                         type="radio"
//                                         name="submission_type"
//                                         value="full"
//                                     />
//                                 </label>
//                                 <label
//                                     style={{ margin: '1rem' }}
//                                     htmlFor="label"
//                                     className="login_form-label">
//                                     I will make an oral-only submission
//                             <Field
//                                         type="radio"
//                                         name="submission_type"
//                                         value="oral"
//                                     />
//                                 </label>
//                                 <label
//                                     style={{ margin: '1rem' }}
//                                     htmlFor="label"
//                                     className="login_form-label">
//                                     I will make a poster-only submission
//                             <Field
//                                         type="radio"
//                                         name="submission_type"
//                                         value="poster"
//                                     />
//                                 </label>


//                             </Field>
//                         </div>
//                         {values.submission_type === 'full' && <div className="login_form-field">
//                             <label
//                                 htmlFor="label"
//                                 className="login_form-label">
//                                 Presentation Type:
//                         </label>
//                             <Field
//                                 className="login_form-radio"
//                                 onClick={handleChange}
//                                 value={values.presentationtype_full}
//                                 style={{ color: '#134381' }}
//                                 name="presentationtype_full"
//                                 component={RadioGroup}
//                             >
//                                 <label
//                                     style={{ margin: '1rem' }}
//                                     htmlFor="label"
//                                     className="login_form-label">
//                                     My full paper submission will be accompanied by an oral presentation
//                             <Field
//                                         type="radio"
//                                         name="presentationtype_full"
//                                         value="programme"
//                                     />
//                                 </label>
//                                 <label
//                                     style={{ margin: '1rem' }}
//                                     htmlFor="label"
//                                     className="login_form-label">
//                                     My full paper submission will be accompanied by an poster presentation
//                             <Field
//                                         type="radio"
//                                         name="presentationtype_full"
//                                         value="poster"
//                                     />
//                                 </label>

//                             </Field>
//                         </div>}
//                         <div className="login_form-field">
//                             <label
//                                 htmlFor="label"
//                                 className="login_form-label">
//                                 Paper Title:
//                         </label>
//                             <Field
//                                 className="login_form-input"
//                                 onClick={handleChange}
//                                 value={values.papertitle}
//                                 style={{ color: '#134381' }}
//                                 name="papertitle"
//                                 component={TextField}
//                             />
//                         </div>
//                         <div className="login_form-field">
//                             <label
//                                 htmlFor="label"
//                                 className="login_form-label">
//                                 Which topic does your paper belong to?
//                         </label>
//                             <Field
//                                 className="login_form-radio"
//                                 onClick={handleChange}
//                                 value={values.theme}
//                                 style={{ color: '#134381' }}
//                                 name="theme"
//                                 component={RadioGroup}
//                             >
//                                 {themes.map(theme =>
//                                     <label
//                                         style={{ margin: '1rem' }}
//                                         htmlFor="label"
//                                         className="login_form-label">
//                                         {theme.label}
//                                         <Field
//                                             type="radio"
//                                             name="theme"
//                                             value={theme.value}
//                                         />
//                                     </label>)}
//                             </Field>
//                         </div>
//                         <div className="login_form-field">
//                             <label
//                                 htmlFor="label"
//                                 className="login_form-label">
//                                 Please choose up to three sub-topics for your paper:
//                         </label>
//                             {
//                                 values.theme === 'BC50E220-9412-11E8-85AF-D97B4D95EBB1' ?
//                                     subTheme1.map((sub, i) => (
//                                         <label
//                                             htmlFor="label"
//                                             className="login_form-label">
//                                             <Field key={i} id={`Box-${i}`} type="checkbox" name="subtheme" value={sub.value} />
//                                             {sub.label}
//                                         </label>
//                                     )
//                                     )
//                                     :
//                                     values.theme === '48C9561C-7865-11E7-AA75-C89000D85D50' ?
//                                         subTheme2.map((sub, i) => (
//                                             <label
//                                                 htmlFor="label"
//                                                 className="login_form-label">
//                                                 <Field key={i} id={`Box-${i}`} type="checkbox" name="subtheme" value={sub.value} />
//                                                 {sub.label}
//                                             </label>
//                                         )
//                                         )
//                                         :
//                                         values.theme === '5D49D9C2-7865-11E7-9112-887F12D54550' ?
//                                             subTheme3.map((sub, i) => (
//                                                 <label
//                                                     htmlFor="label"
//                                                     className="login_form-label">
//                                                     <Field key={i} id={`Box-${i}`} type="checkbox" name="subtheme" value={sub.value} />
//                                                     {sub.label}
//                                                 </label>
//                                             )
//                                             )
//                                             :
//                                             values.theme === '7C15061A-7865-11E7-8178-84D2A73AF9BC' ?
//                                                 subTheme4.map((sub, i) => (
//                                                     <label
//                                                         htmlFor="label"
//                                                         className="login_form-label">
//                                                         <Field key={i} id={`Box-${i}`} type="checkbox" name="subtheme" value={sub.value} />
//                                                         {sub.label}
//                                                     </label>
//                                                 )
//                                                 )
//                                                 :
//                                                 values.theme === '925B5F3C-7865-11E7-8659-8C8422753A7C' ?
//                                                     subTheme5.map((sub, i) => (
//                                                         <label
//                                                             htmlFor="label"
//                                                             className="login_form-label">
//                                                             <Field key={i} id={`Box-${i}`} type="checkbox" name="subtheme" value={sub.value} />
//                                                             {sub.label}
//                                                         </label>
//                                                     )
//                                                     )
//                                                     :
//                                                     values.theme === 'B6F53F20-7865-11E7-A9B1-FC3D434D4D51' ?
//                                                         subTheme6.map((sub, i) => (
//                                                             <label
//                                                                 htmlFor="label"
//                                                                 className="login_form-label">
//                                                                 <Field key={i} id={`Box-${i}`} type="checkbox" name="subtheme" value={sub.value} />
//                                                                 {sub.label}
//                                                             </label>
//                                                         )
//                                                         )
//                                                         : null
//                             }
//                             <ErrorMessage component={Typography} name="subtheme" style={{ color: 'red', fontSize: '1.5rem' }} />
//                         </div>
//                         <div className="login_form-field">
//                             <label
//                                 htmlFor="label"
//                                 className="login_form-label">
//                                 Abstract:
//                         </label>
//                             <Field
//                                 className="login_form-input"
//                                 onClick={handleChange}
//                                 value={values.abstract}
//                                 style={{ color: '#134381' }}
//                                 name="abstract"
//                                 component={TextField}
//                             />
//                         </div>
//                         <div className="login_form-field">
//                             <label
//                                 htmlFor="label"
//                                 className="login_form-label">
//                                 Keywords:
//                         </label>
//                             <Field
//                                 className="login_form-input"
//                                 onClick={handleChange}
//                                 value={values.keywords}
//                                 style={{ color: '#134381' }}
//                                 name="keywords"
//                                 component={TextField}
//                             />
//                         </div>
//                         <div className="login_form-field">
//                             <label
//                                 htmlFor="label"
//                                 className="login_form-label">
//                                 Previous Papers:
//                         </label>
//                             <Field
//                                 className="login_form-input"
//                                 onClick={handleChange}
//                                 value={values.previouspapers}
//                                 style={{ color: '#134381' }}
//                                 name="previouspapers"
//                                 component={TextField}
//                             />
//                         </div>
//                         <div className="login_form-field">
//                             <label
//                                 htmlFor="label"
//                                 className="login_form-label">
//                                 Do you wish your paper to be considered for inclusion in a list of the best papers given at EuroBrake to be published in an academic journal?:
//                         </label>
//                             <Field
//                                 className="login_form-input"
//                                 onClick={handleChange}
//                                 value={values.consider_for_journal}
//                                 style={{ color: '#134381' }}
//                                 name="consider_for_journal"
//                                 component={TextField}
//                             />
//                         </div>

const titles = [
    { value: "", label: "—" },
    { value: "Mr.", label: "Mr." },
    { value: "Ms.", label: "Ms." },
    { value: "Mrs.", label: "Mrs." },
    { value: "Dr.", label: "Dr." },
    { value: "Dr.-Ing.", label: "Dr.-Ing." },
    { value: "Dr. Eng.", label: "Dr. Eng." },
    { value: "Prof.", label: "Prof." },
    { value: "Prof. Dr.", label: "Prof. Dr." },
    { value: "Prof. Dr.-Ing.", label: "Prof. Dr.-Ing." },
    { value: "Ing.", label: "Ing." },
    { value: "Dipl.-Ing.", label: "Dipl.-Ing." },
    { value: "Ir.", label: "Ir." }
];

const countries = [
    { value: "", label: "—" },
    { value: "DZ", label: "Algeria" },
    { value: "AR", label: "Argentina" },
    { value: "AU", label: "Australia" },
    { value: "AT", label: "Austria" },
    { value: "BD", label: "Bangladesh" },
    { value: "BY", label: "Belarus" },
    { value: "BE", label: "Belgium" },
    { value: "BA", label: "Bosnia and Herzegovina" },
    { value: "BR", label: "Brazil" },
    { value: "BG", label: "Bulgaria" },
    { value: "CA", label: "Canada" },
    { value: "CL", label: "Chile" },
    { value: "CN", label: "China" },
    { value: "HK", label: "China - Hong Kong" },
    { value: "CO", label: "Colombia" },
    { value: "HR", label: "Croatia" },
    { value: "CZ", label: "Czech Republic" },
    { value: "DK", label: "Denmark" },
    { value: "EC", label: "Ecuador" },
    { value: "EG", label: "Egypt" },
    { value: "EE", label: "Estonia" },
    { value: "FI", label: "Finland" },
    { value: "MK", label: "Fmr. Yugoslav Republic of Macedonia" },
    { value: "FR", label: "France" },
    { value: "GE", label: "Georgia" },
    { value: "DE", label: "Germany" },
    { value: "GR", label: "Greece" },
    { value: "HU", label: "Hungary" },
    { value: "IS", label: "Iceland" },
    { value: "IN", label: "India" },
    { value: "ID", label: "Indonesia" },
    { value: "IR", label: "Iran (Islamic Republic of)" },
    { value: "IQ", label: "Iraq" },
    { value: "IE", label: "Ireland" },
    { value: "IL", label: "Israel" },
    { value: "IT", label: "Italy" },
    { value: "JP", label: "Japan" },
    { value: "KG", label: "Kyrgyzstan" },
    { value: "LV", label: "Latvia" },
    { value: "LT", label: "Lithuania" },
    { value: "LU", label: "Luxembourg" },
    { value: "MY", label: "Malaysia" },
    { value: "MT", label: "Malta" },
    { value: "MX", label: "Mexico" },
    { value: "MN", label: "Mongolia" },
    { value: "MA", label: "Morocco" },
    { value: "NP", label: "Nepal" },
    { value: "NL", label: "Netherlands" },
    { value: "NZ", label: "New Zealand" },
    { value: "NG", label: "Nigeria" },
    { value: "NO", label: "Norway" },
    { value: "PK", label: "Pakistan" },
    { value: "PE", label: "Peru" },
    { value: "PH", label: "Philippines" },
    { value: "PL", label: "Poland" },
    { value: "PT", label: "Portugal" },
    { value: "KR", label: "Republic of Korea" },
    { value: "PA", label: "Republic of Panama" },
    { value: "RO", label: "Romania" },
    { value: "RU", label: "Russian Federation" },
    { value: "SA", label: "Saudi Arabia" },
    { value: "RS", label: "Serbia" },
    { value: "SG", label: "Singapore" },
    { value: "SK", label: "Slovakia" },
    { value: "SI", label: "Slovenia" },
    { value: "ZA", label: "South Africa" },
    { value: "ES", label: "Spain" },
    { value: "LK", label: "Sri Lanka" },
    { value: "SE", label: "Sweden" },
    { value: "CH", label: "Switzerland" },
    { value: "TW", label: "Taiwan" },
    { value: "TH", label: "Thailand" },
    { value: "TN", label: "Tunisia" },
    { value: "TR", label: "Turkey" },
    { value: "TM", label: "Turkmenistan" },
    { value: "UA", label: "Ukraine" },
    { value: "AE", label: "United Arab Emirates" },
    { value: "GB", label: "United Kingdom" },
    { value: "US", label: "United States" },
    { value: "UZ", label: "Uzbekistan" },
    { value: "VE", label: "Venezuela" },
    { value: "VN", label: "Viet Nam" },
];

const themes = [
    { value: "BC50E220-9412-11E8-85AF-D97B4D95EBB1", label: "Intelligent Braking and Braking Control" },
    { value: "48C9561C-7865-11E7-AA75-C89000D85D50", label: "Environmentally-friendly Braking Systems" },
    { value: "5D49D9C2-7865-11E7-9112-887F12D54550", label: "Fundamentals of Brakes" },
    { value: "7C15061A-7865-11E7-8178-84D2A73AF9BC", label: "Manufacturing and Markets" },
    { value: "925B5F3C-7865-11E7-8659-8C8422753A7C", label: "Materials and Design" },
    { value: "B6F53F20-7865-11E7-A9B1-FC3D434D4D51", label: "Simulation, Testing, Innovative Development Processes" },
];

const subThemes = [
    { value: "06CE3888-9414-11E8-AE34-9BA1BE5E3471", label: "Brake Systems for Highly Automated Road and Rail Vehicles" },
    { value: "0DD80384-9414-11E8-A380-9320CF01B393", label: "Braking for Electric and Hybrid Vehicles" },
    { value: "1BFDEE9C-9414-11E8-A7E0-A07B6C067014", label: "Innovative Parking Brake Systems" },
    { value: "1C01065E-9414-11E8-A93F-A546BD18FAA0", label: "Innovative Brake Actuators and System Controls (Software and Function Development)" },
    { value: "1C04A9BC-9414-11E8-B1D2-8516A557BE68", label: "Safety relevant braking functions" },
    { value: "1C082150-9414-11E8-AF92-B5E7B5B9337D", label: "Railway Traffic Management Systems" },
    { value: "2604091C-9414-11E8-A078-CC3BFBB45A3C", label: "Sustainability in Brake Systems" },
    { value: "26093DE2-9414-11E8-B272-A7C4EBADAE4A", label: "Brake Energy Management and Recuperation" },
    { value: "260E56E2-9414-11E8-B9F8-E613015D1408", label: "Brake Noise and Drag Reduction" },
    { value: "26126F98-9414-11E8-BBB3-D3A884B3E943", label: "Lightweight Brake Components" },
    { value: "26176674-9414-11E8-8A0E-C108E25B228C", label: "Brake Emission findings and available countermeasures" },
    { value: "2FE079A2-9414-11E8-AA53-C7435EE03528", label: "Friction Interface Dynamics" },
    { value: "2FE4D18C-9414-11E8-B418-87A1883F2046", label: "Friction Induced Vibration" },
    { value: "2FE958F6-9414-11E8-A0E5-9911B184DEC0", label: "Thermal Effects" },
    { value: "2FECE066-9414-11E8-A9FA-A830F1ADACA6", label: "Wear and Emissions" },
    { value: "36935E7C-9414-11E8-830E-8F6C9F83D892", label: "Manufacturing, Quality Control and Warranty Claims" },
    { value: "369B7C92-9414-11E8-8D9F-E0E2215D2248", label: "Global Standardisation" },
    { value: "36A067CA-9414-11E8-8D58-F172FE98C949", label: "Aftermarket, Global Sourcing" },
    { value: "36A436C0-9414-11E8-AAB2-F98B8437A38B", label: "Governmental Regulation and Homologation of Brake Systems" },
    { value: "3DAE1288-9414-11E8-85DC-B1A03E97F386", label: "Innovative Friction Materials and Components" },
    { value: "3DB1BDC0-9414-11E8-81E9-D82DD1471F92", label: "Disc, Drum, Wheel Materials, Coatings and Design" },
    { value: "E65121F6-B77B-11E9-A3BF-935F1E4F73DC", label: "Virtual Development Methods of Braking Hardware and Software " },
    { value: "E6542694-B77B-11E9-BAAD-C06218C5F3E9", label: "Friction Material and Friction Couple Characterisation" },
    { value: "E6572D62-B77B-11E9-AEEC-DEEBD990D172", label: "Simulation and Testing of Noise Vibration Harshness" },
    { value: "E65A4448-B77B-11E9-925C-E3659DA380C2", label: "Simulating and Testing of Particulate Emissions" },
    { value: "E65D5C1E-B77B-11E9-B6C9-A62E81FFC1F7", label: "Brake System and Component Performance" },
    { value: "E6607750-B77B-11E9-A508-CA68AAFEDEBE", label: "Scale Testing for Research Development and Quality Control" },
    { value: "E66375B8-B77B-11E9-B730-BE1C3C7011F1", label: "Virtual Validation and Certification of Brake Systems" },
    { value: "E6668E42-B77B-11E9-8175-950FC9BD5E64", label: "State-of-the-Art Engineering Processes for Safety Relevant Functions and Systems" },
    { value: "E6699C68-B77B-11E9-BE37-D0A72E493802", label: "Development (Process/Products) of Cooperating Software and Hardware Solutions in Brakes" },
];

const subTheme1 = [
    { value: "06CE3888-9414-11E8-AE34-9BA1BE5E3471", label: "Brake Systems for Highly Automated Road and Rail Vehicles" },
    { value: "0DD80384-9414-11E8-A380-9320CF01B393", label: "Braking for Electric and Hybrid Vehicles" },
    { value: "1BFDEE9C-9414-11E8-A7E0-A07B6C067014", label: "Innovative Parking Brake Systems" },
    { value: "1C01065E-9414-11E8-A93F-A546BD18FAA0", label: "Innovative Brake Actuators and System Controls (Software and Function Development)" },
    { value: "1C04A9BC-9414-11E8-B1D2-8516A557BE68", label: "Safety relevant braking functions" },
    { value: "1C082150-9414-11E8-AF92-B5E7B5B9337D", label: "Railway Traffic Management Systems" },
]
const subTheme2 = [
    { value: "2604091C-9414-11E8-A078-CC3BFBB45A3C", label: "Sustainability in Brake Systems" },
    { value: "26093DE2-9414-11E8-B272-A7C4EBADAE4A", label: "Brake Energy Management and Recuperation" },
    { value: "260E56E2-9414-11E8-B9F8-E613015D1408", label: "Brake Noise and Drag Reduction" },
    { value: "26126F98-9414-11E8-BBB3-D3A884B3E943", label: "Lightweight Brake Components" },
    { value: "26176674-9414-11E8-8A0E-C108E25B228C", label: "Brake Emission findings and available countermeasures" },
]
const subTheme3 = [
    { value: "2FE079A2-9414-11E8-AA53-C7435EE03528", label: "Friction Interface Dynamics" },
    { value: "2FE4D18C-9414-11E8-B418-87A1883F2046", label: "Friction Induced Vibration" },
    { value: "2FE958F6-9414-11E8-A0E5-9911B184DEC0", label: "Thermal Effects" },
    { value: "2FECE066-9414-11E8-A9FA-A830F1ADACA6", label: "Wear and Emissions" },
]
const subTheme4 = [
    { value: "36935E7C-9414-11E8-830E-8F6C9F83D892", label: "Manufacturing, Quality Control and Warranty Claims" },
    { value: "369B7C92-9414-11E8-8D9F-E0E2215D2248", label: "Global Standardisation" },
    { value: "36A067CA-9414-11E8-8D58-F172FE98C949", label: "Aftermarket, Global Sourcing" },
    { value: "36A436C0-9414-11E8-AAB2-F98B8437A38B", label: "Governmental Regulation and Homologation of Brake Systems" },
]
const subTheme5 = [
    { value: "3DAE1288-9414-11E8-85DC-B1A03E97F386", label: "Innovative Friction Materials and Components" },
    { value: "3DB1BDC0-9414-11E8-81E9-D82DD1471F92", label: "Disc, Drum, Wheel Materials, Coatings and Design" },
]
const subTheme6 = [
    { value: "E65121F6-B77B-11E9-A3BF-935F1E4F73DC", label: "Virtual Development Methods of Braking Hardware and Software " },
    { value: "E6542694-B77B-11E9-BAAD-C06218C5F3E9", label: "Friction Material and Friction Couple Characterisation" },
    { value: "E6572D62-B77B-11E9-AEEC-DEEBD990D172", label: "Simulation and Testing of Noise Vibration Harshness" },
    { value: "E65A4448-B77B-11E9-925C-E3659DA380C2", label: "Simulating and Testing of Particulate Emissions" },
    { value: "E65D5C1E-B77B-11E9-B6C9-A62E81FFC1F7", label: "Brake System and Component Performance" },
    { value: "E6607750-B77B-11E9-A508-CA68AAFEDEBE", label: "Scale Testing for Research Development and Quality Control" },
    { value: "E66375B8-B77B-11E9-B730-BE1C3C7011F1", label: "Virtual Validation and Certification of Brake Systems" },
    { value: "E6668E42-B77B-11E9-8175-950FC9BD5E64", label: "State-of-the-Art Engineering Processes for Safety Relevant Functions and Systems" },
    { value: "E6699C68-B77B-11E9-BE37-D0A72E493802", label: "Development (Process/Products) of Cooperating Software and Hardware Solutions in Brakes" },
]


const submissionType = [
    { value: "full", label: "I will make a full technical paper submission" },
    { value: "oral", label: "I will make an oral-only submission" },
    { value: "poster", label: "I will make a poster-only submission" },
];

const ifFull = [
    { value: "programme", label: "My full paper submission will be accompanied by an oral presentation" },
    { value: "poster", label: "My full paper submission will be accompanied by a poster presentation" },
];

const presets = {
    abstract: "lorem ipsum",
    author_address1: "10 Hamilton Road",
    author_address2: null,
    author_address3: null,
    author_city: "Sidcup",
    author_company: "Article Seven Limited",
    author_country: "GB",
    author_email: "andrew@article7.co.uk",
    author_firstname: "Andrew",
    author_jobtitle: "Director",
    author_lastname: "Green",
    author_phone: "+44 20 8305 1224",
    author_postal: "DA15 7HB",
    author_scp: "Kent",
    author_title: "Mr.",
    consider_for_journal: "no",
    is_presenting_author: "yes",
    keywords: "lorem, ipsum",
    papertitle: "Duis aute irure dolor",
    presentationtype_full: "programme",
    previouspapers: null,
    secondary_authors: [
        {
            company: "Article Seven",
            country: "GB",
            email: "ava@article7.co.uk",
            firstname: "Ava",
            is_presenting_author: "no",
            lastname: "Green",
            ref: "2399A3C8-1823-11EA-BBE7-BDC53B013130",
            title: null,
        }],
    submission_type: "full",
    subtheme: ["3DB1BDC0-9414-11E8-81E9-D82DD1471F92"],
    theme: "925B5F3C-7865-11E7-8659-8C8422753A7C",
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
    is_presenting_author: '',
    submission_type: '',
    presentationtype_full: '',
    papertitle: '',
    theme: '',
    subtheme: [],
    abstract: '',
    keywords: '',
    previouspapers: '',
    consider_for_journal: '',
    secondary_authors: [{
        title: '',
        firstname: '',
        lastname: '',
        email: '',
        company: '',
        country: '',
        is_presenting_author: '',
        ref: ''
    }],
    __csrf_token: '',

}