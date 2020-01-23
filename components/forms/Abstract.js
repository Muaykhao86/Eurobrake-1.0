import React, { Component, useState, useRef, useEffect } from 'react'
import { Formik, Form, Field, FieldArray, FastField, ErrorMessage, } from 'formik';
import { TextField, RadioGroup, Select, Checkbox, } from 'formik-material-ui';
import { AddCircle, RemoveCircle, ArrowUpwardRounded, ArrowDownwardRounded, } from '@material-ui/icons';
import cookie from 'js-cookie';
import CircularProgress from '@material-ui/core/CircularProgress';

import  Typography  from '@material-ui/core/Typography';
import { Button } from '../Button';
import {titles, countries} from './FormSelects';
import {AbstractSchema} from './FormControl';
import {StyledForm} from './Formstyles';
import {SendForm} from './FormActions';



export const AbstractForm = (props) => {
    const [Loading, setLoading] = useState(false);
    const [Toggle, setToggle] = useState(false);
    const [Status, setStatus] = useState(null);
    // if edit = true send back a preset form if not send a blank
    // * above- dont think i need this now, can just check if there aere presets and if not just use epty schema
    const { presets, csrf, apiUrl, paperId} = props;
    const url = `https://prelude.eurobrake.net/authors/submit/${paperId}`;
    console.log({ presets, apiUrl})
    // ? If they choose to edit a abstarct paper we pass the paper code and il get its presets to fill in
    return (
        <Formik
            initialValues={presets || emptyInitial}
            
            validationSchema={AbstractSchema}
            enableReinitialize
        >
            {({ values, isSubmitting, isValidating, handleChange, setFieldValue, setFieldTouched }) => {
          
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
                    {/* value === 'no' ? setPresenter('') : setPresenter(name); */}
                    setFieldValue(name, value);
                    allNo({ name });
                    return console.log({ values })
                }
                
                const allTouched = async () => {
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

                // ? NEED TO REDIRECT AFTER FORM SUBMISSION
                // ? NEED TO DO VALIDATION
                // ? sECONDARY AUTHORS => IF THERE ARE NONE WE NEED THE OPTION TO ADD IN A NEW ONE
                return (
                    <StyledForm>
                        <Typography className="form-title">Primary Author</Typography>
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
                                State/ County/ Province:
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
                                Postal/ Zip code:
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
                        <div className="form-field-radio">
                            <label
                                htmlFor="label"
                                className="form-label">
                                Is this the presenting author?
                        </label>
                            <Field
                                className="form-field-radio"
                                value={values.is_presenting_author}
                                style={{ color: '#134381' , alignSelf: 'flexStart', margin: '0'}}
                                name="is_presenting_author"
                                component={RadioGroup}
                            >
                                <label
                                    style={{ margin: ' 0' }}
                                    htmlFor="label"
                                    className="form-label-radio">
                                        <input
                                        checked={values.is_presenting_author === 'yes'}
                                        onChange={(event) => {
                                            onPresenterChange(event)
                                        }
                                        }
                                        type="radio"
                                        name="is_presenting_author"
                                        value="yes"
                                    style={{ margin: '1rem' }}

                                    />
                                    Yes
                                </label>
                                <label
                                    style={{ margin: '1rem 0' }}
                                    htmlFor="label"
                                    className="form-label-radio">
                                        <input
                                        onChange={(event) => {
                                            onPresenterChange(event)
                                        }
                                        }
                                        checked={values.is_presenting_author !== 'yes'}
                                        type="radio"
                                        name="is_presenting_author"
                                        value="no"
                                    style={{ margin: '1rem' }}

                                    />
                                    No
                                </label>
                            </Field>
                        </div>
                        {/* // ! new section added back in // NEED TO CONFIRM IF OK  */}
                        <Typography className="form-title">Your Abstract</Typography> 
                         <div className="form-field">
                             <label
                                 htmlFor="label"
                                 className="form-label">
                                 Paper Title:
                         </label>
                             <Field
                                 className="form-input"
                                 onClick={handleChange}
                                 value={values.papertitle}
                                 style={{ color: '#134381' }}
                                 name="papertitle"
                                 component={TextField}
                             />
                         </div>
                         <div className="form-field">
                           <label
                                 htmlFor="label"
                                 className="form-label">
                                 Abstract:
                         </label>
                             <Field
                                 className="form-input"
                                 onClick={handleChange}
                                 value={values.abstract}
                                 style={{ color: '#134381' , minHeight: '15rem'}}
                                 name="abstract"
                                 component="textarea"
                             />
                         </div>
                        { values.abstract && <label style={{position: 'absolute', bottom: '-3rem', right: '1rem', color: '#ff0000', fontSize: '1.5rem'}}>{'Words' + ' ' + values.abstract.match(/[\w\d\’\'-]+/gi).length}</label>}

                       
                        <Typography className="form-title">Secondary Author(s)</Typography>
                            <FieldArray name={`secondary_authors`} >
                                {({ swap, push, remove, setSubmitting }) => (
                                    values.secondary_authors &&
                                    values.secondary_authors.length > 0 ?
                                    (
                                        values.secondary_authors.map((author, index) => {
                                            const {is_presenting_author} = author; 
                                            {/* const second = `values.secondary_authors[${index}].is_presenting_author`; */}
                                           return (
                                            <div key={index} className="form-secondary">
                                                <div className="form-field">
                                                    <label
                                                        htmlFor="label"
                                                        className="form-label">
                                                        Title:
                                                    </label>
                                                    <Field
                                                        className="form-input"
                                                        onClick={handleChange}
                                                        value={`secondary_authors[${index}].title`}
                                                        style={{ color: '#134381' }}
                                                        name={`secondary_authors[${index}].title`}
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
                                                        value={`secondary_authors[${index}].firstname`}
                                                        style={{ color: '#134381' }}
                                                        name={`secondary_authors[${index}].firstname`}
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
                                                        value={`secondary_authors[${index}].lastname`}
                                                        style={{ color: '#134381' }}
                                                        name={`secondary_authors[${index}].lastname`}
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
                                                        value={`secondary_authors[${index}].email`}
                                                        style={{ color: '#134381' }}
                                                        name={`secondary_authors[${index}].email`}
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
                                                        value={`secondary_authors[${index}].company`}
                                                        style={{ color: '#134381' }}
                                                        name={`secondary_authors[${index}].company`}
                                                        component={TextField}
                                                    />
                                                </div>
                                                <div className="form-field">
                                                    <label
                                                        htmlFor="label"
                                                        className="form-label">
                                                        Country:
                                                    </label>
                                                     <Field
                                                        className="form-input"
                                                        onClick={handleChange}
                                                        value={`secondary_authors[${index}].country`}
                                                        style={{ color: '#134381' }}
                                                        name={`secondary_authors[${index}].country`}
                                                        component={Select}
                                                    >
                                {countries.map((option, i) =>
                                    <option key={i} style={{ fontSize: '1.5rem', cursor: 'pointer' }} value={option.value}>{option.label}</option>)}
                                                    </Field>
                                                </div>
                                                <div className="form-field-radio">
                                                    <label
                                                        htmlFor="label"
                                                        className="form-label">
                                                        Is this the presenting Author?
                                                    </label>
                                                    <Field
                                                        className="form-field-radio"
                                                        style={{ color: '#134381', alignSelf: 'flexStart', margin: '0' }}
                                                        value={`secondary_authors[${index}].is_presenting_author`}
                                                        component={RadioGroup}
                                                        name={`secondary_authors[${index}].is_presenting_author`}
                                                    >
                                                        <label
                                                            style={{ margin: '0' }}
                                                            htmlFor="label"
                                                            className="form-label-radio">
                                                                <input
                                                                checked={is_presenting_author === 'yes'}
                                                                onChange={(event) => {
                                                                    onPresenterChange(event)
                                                                }
                                                                }
                                                                type="radio"
                                                                value="yes"
                                                                name={`secondary_authors[${index}].is_presenting_author`}
                                                                style={{ margin: '1rem' }}

                                                            />
                                                            Yes
                                                        </label>
                                                        <label
                                                            style={{ margin: '1rem 0 ' }}
                                                            htmlFor="label"
                                                            className="form-label-radio">
                                                                <input
                                                                checked={is_presenting_author !== 'yes'}
                                                                onChange={(event) => {
                                                                    onPresenterChange(event)
                                                                }
                                                                }
                                                                type="radio"
                                                                value="no"
                                                                name={`secondary_authors[${index}].is_presenting_author`}
                                                                style={{ margin: '1rem' }}

                                                            />
                                                            No
                                                        </label>
                                                    </Field>
                                                </div>
                                                <div className="form-field">

                                                <div className="form-field_action">

                                                <Button 
                                                padding=".5rem"
                                                bcolor="transparent"
                                                abs="false"
                                                bs="false"
                                                HBColor="transparent"
                                                transform="scale(1.4)"
                                                type="add" onClick={() => {
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
                                                    <AddCircle style={{ color: 'green'  , fontSize: '3rem', margin: '.5rem 0'}} />
                                                </Button>
                                                <Button 
                                                padding='.5rem'
                                                bcolor="transparent"
                                                 abs="false"
                                                 bs="false"
                                                HBColor="transparent"
                                                transform="scale(1.4)"
                                                type="remove" onClick={() => values.secondary_authors.length >= 1 && remove(index)}>
                                                    <RemoveCircle style={{ color: 'red' , fontSize: '3rem', margin: '.5rem 0' }} />
                                                </Button>
                                                <Button 
                                                padding='.5rem'
                                                bcolor="transparent"
                                                 abs="false"
                                                 bs="false"
                                                HBColor="transparent"
                                                transform="scale(1.4)"
                                                type="upgrade" onClick={() => values.secondary_authors.length > 1 && index !== 0 && swap(index, index - 1)}>
                                                    <ArrowUpwardRounded style={{ color: 'red' , fontSize: '3rem', margin: '.5rem 0' }} />
                                                </Button>
                                                <Button 
                                                padding='.5rem'
                                                bcolor="transparent"
                                                 abs="false"
                                                 bs="false"
                                                HBColor="transparent"
                                                transform="scale(1.4)"
                                                type="downgrade" onClick={() => values.secondary_authors.length > 1 && index !== values.secondary_authors.length - 1 && swap(index, index + 1)}>
                                                    <ArrowDownwardRounded style={{ color: 'red'  , fontSize: '3rem', margin: '.5rem 0'}} />
                                                </Button>
                                                </div>
                                                </div>
                                            </div>
                                        )})
                                    )
                                    :
                                    (
                                                <Button 
                                                abs="false"
                                                bs="false"
                                                bcolor="transparent"
                                                HBColor="transparent"
                                                transform="scale(1.4)"
                                                type="add" onClick={() => {
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
                                                    <AddCircle style={{ color: 'green'  , fontSize: '3rem', margin: '.5rem 0'}} />
                                                </Button>
                                    ) 
                                    )}
                            </FieldArray>
                        {Loading ?  <CircularProgress size={24} className="loading"/> : 
                       <Button 
                         bcolor="#134381"
                                background="#134381"
                                br="100rem"
                                fontSize="2rem"
                        onClick={allTouched}
                           style={{ alignSelf: 'center', color: '#FFF' }}>
                            {Status ? Status : 'submit'}
                        </Button>}
                    </StyledForm>
                )
            }}
        </Formik>
    )
};



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
    // submission_type: '',
    // presentationtype_full: '',
    papertitle: '',
    // theme: '',
    // subtheme: [],
    abstract: '',
    // keywords: '',
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
        // ref: ''
    }],
    __csrf_token: '',

}
                       

// const presetEG = {
//     abstract: "lorem ipsum",
//     author_address1: "10 Hamilton Road",
//     author_address2: null,
//     author_address3: null,
//     author_city: "Sidcup",
//     author_company: "Article Seven Limited",
//     author_country: "GB",
//     author_email: "andrew@article7.co.uk",
//     author_firstname: "Andrew",
//     author_jobtitle: "Director",
//     author_lastname: "Green",
//     author_phone: "+44 20 8305 1224",
//     author_postal: "DA15 7HB",
//     author_scp: "Kent",
//     author_title: "Mr.",
//     consider_for_journal: "no",
//     is_presenting_author: "yes",
//     keywords: "lorem, ipsum",
//     papertitle: "Duis aute irure dolor",
//     presentationtype_full: "programme",
//     previouspapers: null,
//     secondary_authors: [
//         {
//             company: "Article Seven",
//             country: "GB",
//             email: "ava@article7.co.uk",
//             firstname: "Ava",
//             is_presenting_author: "no",
//             lastname: "Green",
//             ref: "2399A3C8-1823-11EA-BBE7-BDC53B013130",
//             title: null,
//         }],
//     submission_type: "full",
//     subtheme: ["3DB1BDC0-9414-11E8-81E9-D82DD1471F92"],
//     theme: "925B5F3C-7865-11E7-8659-8C8422753A7C",
//     __csrf_token: "5d159fb224ed613dce89a64553f36f5eda1fa97c,2caaa318bb55c8c19d660a1e420d1c602dfc59f9,1576603105"
// }

// ! NOT NEEDED ANYMORE !!!! 
//  <h1>Your Abstract</h1>
//                         <div className="form-field">
//                             <label
//                                 htmlFor="label"
//                                 className="form-label">
//                                 Submission Type:
//                         </label>
//                             <Field
//                                 className="form-radio"
//                                 onClick={handleChange}
//                                 value={values.submission_type}
//                                 style={{ color: '#134381' }}
//                                 name="submission_type"
//                                 component={RadioGroup}
//                             >
//                                 <label
//                                     style={{ margin: '1rem' }}
//                                     htmlFor="label"
//                                     className="form-label">
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
//                                     className="form-label">
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
//                                     className="form-label">
//                                     I will make a poster-only submission
//                             <Field
//                                         type="radio"
//                                         name="submission_type"
//                                         value="poster"
//                                     />
//                                 </label>


//                             </Field>
//                         </div>
//                         {values.submission_type === 'full' && <div className="form-field">
//                             <label
//                                 htmlFor="label"
//                                 className="form-label">
//                                 Presentation Type:
//                         </label>
//                             <Field
//                                 className="form-radio"
//                                 onClick={handleChange}
//                                 value={values.presentationtype_full}
//                                 style={{ color: '#134381' }}
//                                 name="presentationtype_full"
//                                 component={RadioGroup}
//                             >
//                                 <label
//                                     style={{ margin: '1rem' }}
//                                     htmlFor="label"
//                                     className="form-label">
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
//                                     className="form-label">
//                                     My full paper submission will be accompanied by an poster presentation
//                             <Field
//                                         type="radio"
//                                         name="presentationtype_full"
//                                         value="poster"
//                                     />
//                                 </label>

//                             </Field>
//                         </div>}
//                         <div className="form-field">
//                             <label
//                                 htmlFor="label"
//                                 className="form-label">
//                                 Paper Title:
//                         </label>
//                             <Field
//                                 className="form-input"
//                                 onClick={handleChange}
//                                 value={values.papertitle}
//                                 style={{ color: '#134381' }}
//                                 name="papertitle"
//                                 component={TextField}
//                             />
//                         </div>
//                         <div className="form-field">
//                             <label
//                                 htmlFor="label"
//                                 className="form-label">
//                                 Which topic does your paper belong to?
//                         </label>
//                             <Field
//                                 className="form-radio"
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
//                                         className="form-label">
//                                         {theme.label}
//                                         <Field
//                                             type="radio"
//                                             name="theme"
//                                             value={theme.value}
//                                         />
//                                     </label>)}
//                             </Field>
//                         </div>
//                         <div className="form-field">
//                             <label
//                                 htmlFor="label"
//                                 className="form-label">
//                                 Please choose up to three sub-topics for your paper:
//                         </label>
//                             {
//                                 values.theme === 'BC50E220-9412-11E8-85AF-D97B4D95EBB1' ?
//                                     subTheme1.map((sub, i) => (
//                                         <label
//                                             htmlFor="label"
//                                             className="form-label">
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
//                                                 className="form-label">
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
//                                                     className="form-label">
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
//                                                         className="form-label">
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
//                                                             className="form-label">
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
//                                                                 className="form-label">
//                                                                 <Field key={i} id={`Box-${i}`} type="checkbox" name="subtheme" value={sub.value} />
//                                                                 {sub.label}
//                                                             </label>
//                                                         )
//                                                         )
//                                                         : null
//                             }
//                             <ErrorMessage component={Typography} name="subtheme" style={{ color: 'red', fontSize: '1.5rem' }} />
//                         </div>
//                         <div className="form-field">
//                             <label
//                                 htmlFor="label"
//                                 className="form-label">
//                                 Abstract:
//                         </label>
//                             <Field
//                                 className="form-input"
//                                 onClick={handleChange}
//                                 value={values.abstract}
//                                 style={{ color: '#134381' }}
//                                 name="abstract"
//                                 component={TextField}
//                             />
//                         </div>
//                         <div className="form-field">
//                             <label
//                                 htmlFor="label"
//                                 className="form-label">
//                                 Keywords:
//                         </label>
//                             <Field
//                                 className="form-input"
//                                 onClick={handleChange}
//                                 value={values.keywords}
//                                 style={{ color: '#134381' }}
//                                 name="keywords"
//                                 component={TextField}
//                             />
//                         </div>
//                         <div className="form-field">
//                             <label
//                                 htmlFor="label"
//                                 className="form-label">
//                                 Previous Papers:
//                         </label>
//                             <Field
//                                 className="form-input"
//                                 onClick={handleChange}
//                                 value={values.previouspapers}
//                                 style={{ color: '#134381' }}
//                                 name="previouspapers"
//                                 component={TextField}
//                             />
//                         </div>
//                         <div className="form-field">
//                             <label
//                                 htmlFor="label"
//                                 className="form-label">
//                                 Do you wish your paper to be considered for inclusion in a list of the best papers given at EuroBrake to be published in an academic journal?:
//                         </label>
//                             <Field
//                                 className="form-input"
//                                 onClick={handleChange}
//                                 value={values.consider_for_journal}
//                                 style={{ color: '#134381' }}
//                                 name="consider_for_journal"
//                                 component={TextField}
//                             />
//                         </div>



// * DEFINITION 

// form: Array(26)
// 0:
// title: "Primary Author"
// type: "heading"
// __proto__: Object
// 1:
// options: (13) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// name: "author_title"
// label: "Title:"
// type: "select"
// __proto__: Object
// 2:
// required: "Please provide your first name."
// name: "author_firstname"
// label: "First name(s):"
// type: "text"
// __proto__: Object
// 3:
// required: "Please provide your second (family) name."
// name: "author_lastname"
// label: "Second (family) name:"
// type: "text"
// __proto__: Object
// 4:
// required: "Please provide your email address."
// name: "author_email"
// label: "Email address:"
// type: "email"
// divider: 1
// __proto__: Object
// 5:
// required: "Please provide your job title."
// name: "author_jobtitle"
// label: "Job title:"
// type: "text"
// divider: 1
// __proto__: Object
// 6:
// required: "Please provide your company or organisation."
// name: "author_company"
// label: "Company/organisation:"
// type: "text"
// __proto__: Object
// 7:
// required: "Please provide your street address."
// name: "author_address1"
// label: "Address:"
// type: "text"
// __proto__: Object
// 8:
// name: "author_address2"
// type: "text"
// __proto__: Object
// 9:
// name: "author_address3"
// type: "text"
// __proto__: Object
// 10:
// required: "Please provide your city."
// name: "author_city"
// label: "City:"
// type: "text"
// __proto__: Object
// 11:
// name: "author_scp"
// label: "State/county/province:"
// type: "text"
// __proto__: Object
// 12:
// name: "author_postal"
// label: "Postal/zip code:"
// type: "text"
// __proto__: Object
// 13:
// required: "Please provide your country."
// options: (83) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// name: "author_country"
// label: "Country:"
// type: "select"
// __proto__: Object
// 14:
// required: "Please provide your telephone number, including international code."
// notes: "Please include the international code."
// name: "author_phone"
// label: "Telephone:"
// type: "text"
// divider: 1
// __proto__: Object
// 15:
// options: (2) [{…}, {…}]
// name: "is_presenting_author"
// default: "no"
// required: "Please indicate the presenting author."
// type: "radio"
// label: "Is this the presenting author?"
// divider: 1
// __proto__: Object
// 16:
// title: "Your Abstract"
// type: "heading"
// __proto__: Object
// 17:
// name: "papertitle"
// required: "Please provide the title of your proposed submission."
// notes: "Please use Title Case. DO NOT use block capitals."
// type: "textarea"
// label: "Title of your proposed submission:"
// divider: 0
// __proto__: Object
// 18:
// html: "↵					<p class="f_intro"><strong>Please type or paste the text of your abstract below (maximum 750 words).</strong></p> ↵	 				<p class="f_intro">Your abstract should clearly set out the main scientific, technical, economic and / or practical points to be addressed in your paper. In particular your abstract should indicate those aspects of the work which are new, innovative and unique.</p>↵				"
// type: "html"
// divider: 1
// __proto__: Object
// 19:
// required: "Please provide the abstract for your submission."
// name: "abstract"
// label: "Your abstract:"
// type: "textarea"
// __proto__: Object
// 20:
// name: "keywords"
// required: "Please provide some keywords for your abstract."
// notes: "Please separate keywords with commas.  Please do not use block capitals."
// type: "textarea"
// label: "Please enter around 5 keywords that describe the main focus of your abstract:"
// divider: 1
// __proto__: Object
// 21:
// name: "previouspapers"
// label: "Please give details of any previous papers you have published on this subject (if applicable)"
// type: "textarea"
// divider: 1
// __proto__: Object
// 22:
// options: (2) [{…}, {…}]
// name: "consider_for_journal"
// default: "no"
// notes: "Please note that your paper may require additional revisions in order to meet the qualifying criteria."
// type: "radio"
// label: "Do you wish your paper to be considered for inclusion in a list of the best papers given at EuroBrake to be published in an academic journal?"
// divider: 1
// __proto__: Object
// 23:
// title: "Secondary Author(s)"
// type: "heading"
// __proto__: Object
// 24:
// fields: Array(8)
// 0:
// name: "ref"
// type: "hidden"
// __proto__: Object
// 1:
// options: (13) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// name: "title"
// label: "Title:"
// type: "select"
// __proto__: Object
// 2:
// required: "Please provide each secondary author's first name."
// name: "firstname"
// label: "First name(s):"
// type: "text"
// __proto__: Object
// 3:
// required: "Please provide each secondary author's last name."
// name: "lastname"
// label: "Second (family) name:"
// type: "text"
// __proto__: Object
// 4:
// required: "Please provide each secondary author's email address."
// name: "email"
// label: "Email address:"
// type: "email"
// __proto__: Object
// 5:
// required: "Please provide each secondary author's company or organisation."
// name: "company"
// label: "Company/organisation:"
// type: "text"
// __proto__: Object
// 6:
// required: "Please provide each secondary author's country."
// options: (83) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// name: "country"
// label: "Country:"
// type: "select"
// __proto__: Object
// 7:
// options: (2) [{…}, {…}]
// name: "is_presenting_author"
// default: "no"
// required: "Please indicate the presenting author."
// type: "radio"
// label: "Is this the presenting author?"
// divider: 1
// __proto__: Object
// length: 8
// __proto__: Array(0)
// name: "secondary_authors"
// type: "repeater"
// __proto__: Object
// 25:
// label: "Submit changes"
// type: "submit"
// divider: 1
// __proto__: Object
// length: 26
// __proto__: Array(0)
// expects: "json"
// logintoken: "w070P7OsRIoxRr6KfcafJl"
// __proto__: Object