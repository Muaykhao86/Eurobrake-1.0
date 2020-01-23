import React, { Component, useState, useEffect } from 'react'
import { Formik, Form, Field, FieldArray } from 'formik';
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import { TextField, Select, RadioGroup, CheckboxWithLabel, Checkbox, SimpleFileUpload } from 'formik-material-ui';
import { Button } from '../Button';
import { titles, countries, Q1, Q2, Q3, Q4, Marketing, Sessions, members, Initiatives } from './FormSelects';
import { EsopSchema } from './FormControl';
import { StyledForm } from './Formstyles';
import {SendFile} from './FormActions';



export const Esop = (props) => {
 const [Toggle, setToggle] = useState(false);
    const [Status, setStatus] = useState(null);
    const { presets, csrf, apiUrl} = props;
    const url = `https://prelude.eurobrake.net/esop`;

    return (
        <Formik
            initialValues={emptyInitial || presets}
            validationSchema={EsopSchema}
            enableReinitialize
        >
            {({ values, handleChange, setFieldTouched, isValidating, validateForm, handleSubmit, errors, isSubmitting }) => {


                    const allTouched = async () => {
                     await Object.keys(values).forEach(key => {   
                        setFieldTouched(key, true)});
                       await validateForm().then(errors => Object.keys(errors).length === 0 && onSubmit())
                }

                const onSubmit = async () => {
                  values.__csrf_token = csrf
                    console.log('submitting', values)
                 let res = await SendFile({values, csrf, url})
                    let data = await res && res.status ;
                  console.log({status})
                  data && setStatus(data) && setToggle(Toggle => !Toggle)
                  return 
                
              }

                return (
                    <StyledForm>
                        <Typography className="form-title" style={{marginTop: '4rem'}}>About you</Typography>
                        <div className="form-field">
                            <label
                                htmlFor="label"
                                className="form-label">
                                Title
                        </label>
                            <Field
                                className="form-input"
                                onClick={handleChange}
                                value={values.student_title}
                                style={{ color: '#134381' }}
                                name="student_title"
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
                                value={values.student_firstname}
                                style={{ color: '#134381' }}
                                name="student_firstname"
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
                                value={values.student_lastname}
                                style={{ color: '#134381' }}
                                name="student_lastname"
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
                                value={values.student_email}
                                style={{ color: '#134381' }}
                                name="student_email"
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
                                value={values.student_address1}
                                style={{ color: '#134381' }}
                                name="student_address1"
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
                                value={values.student_address2}
                                style={{ color: '#134381' }}
                                name="student_address2"
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
                                value={values.student_address3}
                                style={{ color: '#134381' }}
                                name="student_address3"
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
                                value={values.student_city}
                                style={{ color: '#134381' }}
                                name="student_city"
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
                                value={values.student_scp}
                                style={{ color: '#134381' }}
                                name="student_scp"
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
                                value={values.student_postal}
                                style={{ color: '#134381' }}
                                name="student_postal"
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
                                value={values.student_country}
                                style={{ color: '#134381' }}
                                name="student_country"
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
                                Your FISITA member society
                        </label>
                            <Field
                                className="form-input"
                                onClick={handleChange}
                                value={values.student_country}
                                style={{ color: '#134381' }}
                                name="student_membersociety"
                                component={Select}
                            >
                                {members.map((option, i) =>
                                    <option key={i} style={{ fontSize: '1.5rem', cursor: 'pointer' }} value={option.value}>{option.label}</option>)}
                            </Field>
                        </div>
                        <div className="form-field">
                            <label
                                htmlFor="label"
                                className="form-label">
                                Place of birth
                        </label>
                            <div className="form-input" >
                                <Field
                                    placeholder="City"
                                    className="form-input"
                                    onClick={handleChange}
                                    value={values.student_jobtitle}
                                    style={{ color: '#134381', marginBottom: '2rem', width: '100%' }}
                                    name="birth_city"
                                    component={TextField}
                                />
                                <Field
                                    placeholder="Country"
                                    className="form-input"
                                    onClick={handleChange}
                                    value={values.student_jobtitle}
                                    style={{ color: '#134381', width: '100%' }}
                                    name="birth_country"
                                    component={TextField}
                                />
                            </div>
                        </div>
                        <Typography className="form-title" style={{marginTop: '4rem'}}>Your University or HE Institution</Typography>
                        <div className="form-field-radio">
                            <label
                                htmlFor="label"
                                className="form-label-radio">
                                What level of education have you achieved?
                        </label>
                            <Field
                                className="form-radio"
                                value={values.student_level_current}
                                style={{ color: '#134381' }}
                                name="student_level_current"
                                component={RadioGroup}
                            >
                                <label
                                    style={{ margin: '1rem' }}
                                    htmlFor="label"
                                    className="form-label">
                                        <input
                                        onChange={handleChange}
                                        style={{ margin: '1rem' }}
                                        type="radio"
                                        name="student_level_current"
                                        value="none"
                                        id="student_level_current_none"
                                    />
                                    None
                                </label>
                                <label
                                    style={{ margin: '1rem' }}
                                    htmlFor="label"
                                    className="form-label">
                                        <input
                                        style={{ margin: '1rem' }}
                                        onChange={handleChange}
                                        type="radio"
                                        name="student_level_current"
                                        value="Bachelor"
                                        id="student_level_current_Bachelor"
                                    />
                                    Bachelor or equivalent
                                </label>
                                <label
                                    style={{ margin: '1rem' }}
                                    htmlFor="label"
                                    className="form-label">
                                        <input
                                        style={{ margin: '1rem' }}
                                        onChange={handleChange}
                                        type="radio"
                                        name="student_level_current"
                                        value="Master"
                                        id="student_level_current_Master"
                                    />
                                    Master or equivalent
                                </label>
                            </Field>
                            {errors.student_level_current && <label style={{ position: 'absolute', bottom: '-1rem', right: '1rem', color: '#ff0000', fontSize: '1.5rem' }}>{errors.student_level_current}</label>}
                        </div>
                        <div className="form-field-radio">
                            <label
                                htmlFor="label"
                                className="form-label-radio">
                                What degree are you currently studying towards?
                        </label>
                            <Field
                                className="form-radio"
                                value={values.student_level_seeking}
                                style={{ color: '#134381' }}
                                name="student_level_seeking"
                                component={RadioGroup}
                            >
                                <label
                                    style={{ margin: '1rem' }}
                                    htmlFor="label"
                                    className="form-label">
                                        <input
                                        style={{ margin: '1rem' }}
                                        onChange={handleChange}
                                        type="radio"
                                        name="student_level_seeking"
                                        value="Bachelor"
                                        id="student_level_seeking_Bachelor"
                                    />
                                    Bachelor or equivalent
                                </label>
                                <label
                                    style={{ margin: '1rem' }}
                                    htmlFor="label"
                                    className="form-label">
                                        <input
                                        style={{ margin: '1rem' }}
                                        onChange={handleChange}
                                        type="radio"
                                        name="student_level_seeking"
                                        value="Master"
                                        id="student_level_seeking_Master"
                                    />
                                    Master or equivalent
                                </label>
                                <label
                                    style={{ margin: '1rem' }}
                                    htmlFor="label"
                                    className="form-label">
                                        <input
                                        onChange={handleChange}
                                        style={{ margin: '1rem' }}
                                        type="radio"
                                        name="student_level_seeking"
                                        value="PhD"
                                        id="student_level_seeking_PhD"
                                    />
                                    PhD. or equivalent
                                </label>
                            </Field>
                            {errors.student_level_seeking && <label style={{ position: 'absolute', bottom: '-1rem', right: '1rem', color: '#ff0000', fontSize: '1.5rem' }}>{errors.student_level_seeking}</label>}
                        </div>
                        <div className="form-field">
                            <label
                                htmlFor="label"
                                className="form-label">
                                Course being studied:
                        </label>
                            <Field
                                className="form-input"
                                onClick={handleChange}
                                value={values.university_course}
                                style={{ color: '#134381' }}
                                name="university_course"
                                component={TextField}
                            />
                        </div>
                        <div className="form-field">
                            <label
                                htmlFor="label"
                                className="form-label">
                                University / Institution
                        </label>
                            <Field
                                className="form-input"
                                onClick={handleChange}
                                value={values.university_name}
                                style={{ color: '#134381' }}
                                name="university_name"
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
                                value={values.university_address1}
                                style={{ color: '#134381' }}
                                name="university_address1"
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
                                value={values.university_address2}
                                style={{ color: '#134381' }}
                                name="university_address2"
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
                                value={values.university_address3}
                                style={{ color: '#134381' }}
                                name="university_address3"
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
                                value={values.university_city}
                                style={{ color: '#134381' }}
                                name="university_city"
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
                                value={values.university_scp}
                                style={{ color: '#134381' }}
                                name="university_scp"
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
                                value={values.university_postal}
                                style={{ color: '#134381' }}
                                name="university_postal"
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
                                value={values.university_country}
                                style={{ color: '#134381' }}
                                name="university_country"
                                component={Select}
                            >
                                {countries.map((option, i) =>
                                    <option key={i} style={{ fontSize: '1.5rem', cursor: 'pointer' }} value={option.value}>{option.label}</option>)}
                            </Field>
                        </div>
                        <Typography className="form-title" style={{marginTop: '4rem'}}>Your entry</Typography>
                        <div className="form-field_file">
                            {/* REQUIRED AND FILE MUST BE A PDF */}
                            <Typography  className="form-label" style={{minWidth: '100%', fontSize: '2rem'}}>Upload a PDF or Microsoft Word document of your CV/resumé here. Documents must not exceed 2 A4 pages and must be submitted in English.</Typography>
                            <div className="form-field_file-box">

                            <label
                                htmlFor="label"
                                className="form-label">
                                Upload your CV/resumé:
                        </label>
                            <Field
                                className="form-input_file"
                                value={values.cv_filename_uploader}
                                style={{ color: '#134381' }}
                                name="cv_filename_uploader"
                                component={SimpleFileUpload}
                                fullWidth
                            />
                            {errors.cv_filename_uploader && <label style={{ position: 'absolute', bottom: '-2rem', right: '1rem', color: '#ff0000', fontSize: '1.5rem' }}>{errors.cv_filename_uploader}</label>}
                            </div>
                        </div>
                        <div className="form-notes">
                            <label
                                htmlFor="label"
                                className="form-label"
                                
                                style={{fontSize: '2rem', marginBottom: '4rem'}}>
                                Tell us why you would like a sponsored student place at EuroBrake 2020 
                         </label>
                            <label
                                htmlFor="label"
                                className="form-label"
                                >
                                Your personal statement (150–250 words):
                         </label>
                            <Field
                                className="form-notes-input"
                                onClick={handleChange}
                                value={values.personal_statement}
                                style={{ color: '#134381' }}
                                name="personal_statement"
                                component="textarea"
                            />
                            {errors.personal_statement && <label style={{position: 'absolute', bottom: '2rem', right: '1rem', color: '#ff0000', fontSize: '1.5rem'}}>{errors.personal_statement}</label>}
                            {errors.personal_statement && values.personal_statement && <label style={{position: 'absolute', bottom: '0', right: '1rem', color: '#ff0000', fontSize: '1.5rem'}}>{'Words' + ' ' + values.personal_statement.match(/[\w\d\’\'-]+/gi).length}</label>}
                        
                        </div>
                        <div className="form-field_file">
                            {/* REQUIRED AND FILE MUST BE A PDF */}
                            <Typography className="form-label"
                            style={{fontSize: '2rem'}}
                            >Upload a photo, PDF or Microsoft Word document of a letter or ID card indicating your status as student.</Typography>
                            <div className="form-field_file-box">

                            <label
                                htmlFor="label"
                                className="form-label">
                                Upload proof of your status as student:
                        </label>
                            <Field
                                className="form-input_file"
                                value={values.cv_filename_uploader}
                                style={{ color: '#134381' }}
                                name="student_status_filename_uploader"
                                component={SimpleFileUpload}
                                fullWidth
                            />
                            {errors.student_status_filename_uploader && <label style={{ position: 'absolute', bottom: '-2rem', right: '1rem', color: '#ff0000', fontSize: '1.5rem' }}>{errors.student_status_filename_uploader}</label>}
                        </div>
                        </div>

                        <div className="form-field_question">
                            <label
                                htmlFor="label"
                                className="form-label_question">
                                Question 1: In what range does the brake pressure apply during emergency braking?
                        </label>
                            <Field
                                className="form-input_question"
                                onClick={handleChange}
                                value={values.question_1_answer}
                                style={{ color: '#134381', }}
                                name="question_1_answer"
                                component={Select}
                            >
                                {Q1.map((option, i) =>
                                    <option key={i} style={{ fontSize: '1.5rem', cursor: 'pointer' }} value={option.value}>{option.label}</option>)}
                            </Field>
                            {errors.question_1_answer && <label style={{ position: 'absolute', bottom: '-1rem', right: '1rem', color: '#ff0000', fontSize: '1.5rem' }}>{errors.question_1_answer}</label>}

                        </div>

                        <div className="form-field_question">
                            <label
                                htmlFor="label"
                                className="form-label_question">
                                Question 2: Sort the frequency of use of different brake systems in modern High Speed Trains
                        </label>
                            <Field
                                className="form-input_question"
                                onClick={handleChange}
                                value={values.question_2_answer}
                                style={{ color: '#134381' }}
                                name="question_2_answer"
                                component={Select}
                            >
                                {Q2.map((option, i) =>
                                    <option key={i} style={{ fontSize: '1.5rem', cursor: 'pointer' }} value={option.value}>{option.label}</option>)}
                            </Field>
                            {errors.question_2_answer && <label style={{ position: 'absolute', bottom: '-1rem', right: '1rem', color: '#ff0000', fontSize: '1.5rem' }}>{errors.question_2_answer}</label>}
                        </div>

                        <div className="form-field_question">
                            <label
                                htmlFor="label"
                                className="form-label_question">
                                Question 3: Health relevance of brake wear particles becomes an important issue in brake industry. Find a correct answer:
                        </label>
                            <Field
                                className="form-input_question"
                                onClick={handleChange}
                                value={values.question_3_answer}
                                style={{ color: '#134381' }}
                                name="question_3_answer"
                                component={Select}
                            >
                                {Q3.map((option, i) =>
                                    <option key={i} style={{ fontSize: '1.5rem', cursor: 'pointer' }} value={option.value}>{option.label}</option>)}
                            </Field>
                            {errors.question_3_answer && <label style={{ position: 'absolute', bottom: '-1rem', right: '1rem', color: '#ff0000', fontSize: '1.5rem' }}>{errors.question_3_answer}</label>}

                        </div>
                        <div className="form-field_question-check" >
                            <label
                                htmlFor="question_4_answer"
                                className="form-label"
                                style={{marginBottom: '4rem'}}>
                                Question 4: Can you list three of the Conference Topics at EuroBrake 2020?
                        </label>

                            <FieldArray
                                name="question_4_answer"
                            >
                                {({ swap, push, remove, setSubmitting }) => (
                                    Q4.map((question) => (
                                        <div
                                            key={question.id}
                                            className="form-checkboxField">
                                            <label
                                                htmlFor={question.name}
                                                className="form-checkboxField-label"
                                                style={{ color: '#134381', width: '80%' }}

                                            >
                                                {question.id}
                                            </label>
                                            <input
                                                checked={values.question_4_answer && values.question_4_answer.includes(question.value)}
                                                onChange={e => {
                                                    e.target.checked ? push(question.value) : values.question_4_answer && remove(values.question_4_answer.value)
                                                }}
                                                className="form-checkboxField-box"
                                                style={{ color: '#134381', }}
                                                value={question.value}
                                                name={question.name}
                                                type="checkbox"
                                                id={question.id}
                                            />
                                        </div>
                                    )))}
                            </FieldArray>
                            {errors.question_4_answer && <label style={{ position: 'absolute', bottom: '-1rem', right: '0', color: '#ff0000', fontSize: '1.5rem' }}>{errors.question_4_answer}</label>}
                        </div>
                        <Typography className="form-title"> Additional Information</Typography>
                        <div className="form-field_question">
                            <label
                                htmlFor="youtube_url"
                                className="form-label_question"
                                style={{fontSize: '2rem'}}>
                                If you have a short video outlining your motivation for applying for ESOP or your interest in the braking industry you can include a YouTube link here:
                            </label>
                            <Field
                                placeholder="This is optional and won’t affect the judging process."
                                className="form-input"
                                onClick={handleChange}
                                value={values.university_address3}
                                style={{ color: '#134381' , margin: '4rem 0', Width: '66.6%'}}
                                name="youtube_url"
                                component={TextField}
                            />
                        </div>

                        <div className="form-field_question-check">
                            <label
                                htmlFor="roundtable"
                                className="form-label"
                                style={{marginBottom: '1rem', fontSize: '2rem'}}
                                >
                                ‘Round Table’ sessions will take place as part of the ESOP 2020 programme – providing a unique opportunity for all students to meet with and learn from industry and academia experts. 
                        </label>
                            <label
                                htmlFor="roundtable"
                                className="form-label"
                                style={{marginBottom: '3rem', fontSize: '2rem'}}
                                >
                                 Please leave details below if there are any topics you would like to see discussed in a Round Table session:
                        </label>
                            <FieldArray
                                name="roundtable"
                            >
                                {({ swap, push, remove, setSubmitting, }) => (
                                    Sessions.map((session) => (
                                        <div
                                            key={session.id}
                                            className="form-checkboxField">
                                            <label
                                                htmlFor={session.name}
                                                className="form-checkboxField-label"
                                                style={{ color: '#134381', width: '80%' }}

                                            >
                                                {session.id}
                                            </label>
                                            <input
                                                checked={values.roundtable && values.roundtable.includes(session.value)}
                                                onChange={e => {
                                                    e.target.checked ? push(session.value) : values.roundtable && remove(values.roundtable.value)
                                                }}
                                                className="form-checkboxField-box"
                                                style={{ color: '#134381', }}
                                                value={session.value}
                                                name={session.name}
                                                type="checkbox"
                                                id={session.id}
                                            />

                                            {errors.roundtable && <label style={{ position: 'absolute', bottom: '-1rem', right: '1rem', color: '#ff0000', fontSize: '1.5rem' }}>{errors.roundtable}</label>}
                                        </div>
                                    )))}
                            </FieldArray>
                        </div>
                        <div className="form-field" style={{justifyContent: 'flex-end'}}></div>

                        <div className="form-field_question">
                            <label
                                htmlFor="marketing"
                                className="form-label_question"
                                    style={{marginTop: '4rem'}}
                                >
                                Where did you hear about the EuroBrake Student Opportunities Programme?
                        </label>
                            <Field
                                className="form-input_question"
                                onClick={handleChange}
                                value={values.marketing}
                                style={{ color: '#134381' }}
                                name="marketing"
                                component={Select}
                            >
                                {Marketing.map((option, i) =>
                                    <option key={i} style={{ fontSize: '1.5rem', cursor: 'pointer' }} value={option.value}>{option.label}</option>)}
                            </Field>
                            {errors.student_level_current && <label style={{ position: 'absolute', bottom: '-1rem', right: '1rem', color: '#ff0000', fontSize: '1.5rem' }}>{errors.student_level_current}</label>}

                        </div>
                        <div className="form-field" style={{justifyContent: 'flex-end'}}>   
                            {values.marketing === 'E682897E-BACE-11E5-BFDD-7F6E5EAB70CB' &&
                                <Field
                                    placeholder="Please specify"
                                    className="form-input"
                                    onClick={handleChange}
                                    value={values.marketing_other}
                                    style={{ color: '#134381', margin: '1rem 0', }}
                                    name="marketing_other"
                                    component={TextField}
                                />
                            }</div>
                        <div className="form-field-radio">
                            <label
                                htmlFor="label"
                                className="form-label-radio">
                                Have you participated in any other FISITA student initiatives?
                        </label>
                            <Field
                                className="form-radio"
                                value={values.student_level_current}
                                style={{ color: '#134381' }}
                                name="previous_participant"
                                component={RadioGroup}
                            >
                                <label
                                    style={{ margin: '1rem' }}
                                    htmlFor="previous_participant_opt_yes"
                                    className="form-label-radio">
                                        <input
                                        onChange={handleChange}
                                        style={{ margin: '1rem' }}
                                        type="radio"
                                        name="previous_participant"
                                        value="yes"
                                        id="previous_participant_opt_yes"
                                    />
                                    Yes
                                </label>
                                <label
                                    style={{ margin: '1rem' }}
                                    htmlFor="previous_participant_opt_no"
                                    className="form-label-radio">
                                        <input
                                        style={{ margin: '1rem' }}
                                        onChange={handleChange}
                                        type="radio"
                                        name="previous_participant"
                                        value='no'
                                        id="previous_participant_opt_no"
                                    />
                                    No
                                </label>

                            </Field>
                            {errors.student_level_current && <label style={{ position: 'absolute', bottom: '-1rem', right: '1rem', color: '#ff0000', fontSize: '1.5rem' }}>{errors.student_level_current}</label>}
                        </div>

                    {values.previous_participant === 'yes' && 
                    <>
                    <Typography className="form-label">Which of the following have you participated in?</Typography>
                    <FieldArray
                            name="initiatives"
                        >
                            {({ swap, push, remove, setSubmitting}) => (
                                Initiatives.map((init) => (
                                    <div
                                        key={init.label}
                                        className="form-checkboxField">
                                        <label
                                            htmlFor={init.label}
                                            className="form-checkboxField-label"
                                            style={{ color: '#134381', width: '80%' }}

                                        >
                                            {init.label}
                                        </label>
                                        <input
                                            checked={values.initiatives && values.initiatives.includes(init.value)}
                                            onChange={e => {
                                                e.target.checked ? push(init.value) : values.init && remove(values.init.value)
                                            }}
                                            className="form-checkboxField-box"
                                            style={{ color: '#134381', }}
                                            value={init.value}
                                            name={init.label}
                                            type="checkbox"
                                            id={init.label}
                                        />
                                        {errors.initiatives && <label style={{ position: 'absolute', bottom: '-1rem', right: '1rem', color: '#ff0000', fontSize: '1.5rem' }}>{errors.initiatives}</label>}
                                    </div>
                                )))}
                        </FieldArray>
                       </>}
                       <div className="form-field" style={{justifyContent: 'flex-end'}}>
                           {values.initiatives.includes('9EC8166C-E24B-11E6-A67E-861D5EAB70CB') &&
                                        <Field
                                            placeholder="Please specify"
                                            className="form-input"
                                            onClick={handleChange}
                                            value={values.initiatives_other}
                                            style={{ color: '#134381', margin: '1rem 0' }}
                                            name="initiatives_other"
                                            component={TextField}
                                        />
                        }
                       </div>
                        
                        <Typography gutterBottom className="form-title" >Additional Information</Typography>
                        <Typography gutterBottom className="form-label" style={{fontSize: '2rem'}}>Please note that by submitting a registration form for ESOP, you indicate your consent to us passing the personal information you have disclosed to us, including your CV, to the ESOP Sponsor Companies, so that they can contact you with details of career and/or work placement opportunities within their organisations, or to arrange a meeting with you at EuroBrake if you are selected to attend.</Typography>
                        <Typography gutterBottom className="form-label" style={{fontSize: '2rem'}}>Here at FISITA we take your privacy seriously and will only use your personal information to set up and administer your account and/or membership and to provide the products and services you have requested from us.</Typography>
                        <div className="form-checkboxField"
                            style={{margin: '4rem 0'}}>
                            {/* REQUIRED */}
                            <label
                                htmlFor="consent_sponsors"
                                className="form-checkboxField-label"
                                style={{ color: '#134381', width: '80%' }}

                            >
                                If you do not consent to us passing on your details, please tick here
                        </label>
                            <input
                                className="form-checkboxField-box"
                                style={{ color: '#134381', }}
                                value={values.consent_sponsors}
                                name="consent_sponsors"
                                type="checkbox"
                            />
                            {errors.consent_sponsors && <label style={{ position: 'absolute', bottom: '-1rem', right: '1rem', color: '#ff0000', fontSize: '1.5rem' }}>{errors.consent_sponsors}</label>}
                        </div>
                        <Typography gutterBottom className="form-label" style={{marginBottom: '3rem', fontSize: '2rem'}}>However, from time to time we would like to contact you by email with details of the following:</Typography>
                        <div className="form-checkboxField">
                            {/* REQUIRED */}
                            <label
                                htmlFor="consent_fiec"
                                className="form-checkboxField-label"
                                style={{ color: '#134381', width: '80%' }}

                            >
                                Membership of FISITA International Engineering Community (FIEC)
                        </label>
                            <input
                                className="form-checkboxField-box"
                                style={{ color: '#134381', }}
                                value={values.consent_fiec}
                                name="consent_fiec"
                                type="checkbox"
                            />
                            {errors.consent_fiec && <label style={{ position: 'absolute', bottom: '-1rem', right: '1rem', color: '#ff0000', fontSize: '1.5rem' }}>{errors.consent_fiec}</label>}
                        </div> 
                        <div className="form-checkboxField">
                            {/* REQUIRED */}
                            <label
                                htmlFor="consent_wep"
                                className="task-checkboxField-label"
                                style={{ color: '#134381', width: '80%' }}

                            >
                                Career & work placement opportunities via FISITA Work Experience Programme
                        </label>
                            <input
                                className="form-checkboxField-box"
                                style={{ color: '#134381', }}
                                value={values.consent_wep}
                                name="consent_wep"
                                type="checkbox"                            
                            />
                            {errors.consent_wep && <label style={{ position: 'absolute', bottom: '-1rem', right: '1rem', color: '#ff0000', fontSize: '1.5rem' }}>{errors.consent_wep}</label>}
                        </div> <div className="form-checkboxField">
                            {/* REQUIRED */}
                            <label
                                htmlFor="consent_events"
                                className="form-checkboxField-label"
                                style={{ color: '#134381', width: '80%' }}

                            >
                                Opportunities for students at upcoming FISITA events
                        </label>
                            <input
                                className="form-checkboxField-box"
                                style={{ color: '#134381', }}
                                value={values.consent_events}
                                name="consent_events"
                                type="checkbox"                            
                            />
                            {errors.consent_events && <label style={{ position: 'absolute', bottom: '-1rem', right: '1rem', color: '#ff0000', fontSize: '1.5rem' }}>{errors.consent_events}</label>}
                        </div> 
                        <div className="form-checkboxField">
                            {/* REQUIRED */}
                            <label
                                htmlFor="consent_bursary"
                                className="form-checkboxField-label"
                                style={{ color: '#134381', width: '80%' }}
                            >
                                Opportunities for funding via FISITA Travel Bursary Scheme
                        </label>
                            <input
                                className="form-checkboxField-box"
                                style={{ color: '#134381', }}
                                value={values.consent_bursary}
                                name="consent_bursary"
                                type="checkbox"                            
                            />
                            {errors.consent_bursary && <label style={{ position: 'absolute', bottom: '-1rem', right: '1rem', color: '#ff0000', fontSize: '1.5rem' }}>{errors.consent_bursary}</label>}
                        </div> 
                        <div className="form-checkboxField"
                        style={{marginBottom: '4rem'}} >
                            {/* REQUIRED */}
                            <label
                                htmlFor="consent_yfia"
                                className="form-checkboxField-label"
                                style={{ color: '#134381', width: '80%'}}

                            >
                                Subscription to “Your Future in Automotive” newsletter
                        </label>
                            <input
                                className="form-checkboxField-box"
                                style={{ color: '#134381', }}
                                value={values.consent_yfia}
                                name="consent_yfia"
                                type="checkbox"
                            />
                            {errors.consent_yfia && <label style={{ position: 'absolute', bottom: '-1rem', right: '1rem', color: '#ff0000', fontSize: '1.5rem' }}>{errors.consent_yfia}</label>}
                        </div>

                        <Typography gutterBottom  className="form-label"
                        style={{fontSize: '2rem'}}
                        >Please tick the box(es) above for each purpose you consent to us contacting you about.</Typography>
                        <Typography gutterBottom  className="form-label"
                        style={{fontSize: '2rem'}}
                        >For more detailed information, please see our <Link href="/privacyPolicy"><a>privacy policy.</a></Link></Typography>
                        <Typography gutterBottom  className="form-label"
                        style={{fontSize: '2rem'}}
                        >For further details contact Hayley Millar, Education Manager at <a href="mailto:h.millar@fisita.com">h.millar@fisita.com.</a></Typography>


                        <Button 
                            onClick={() => allTouched()}
                            bcolor="#134381"
                            background="#134381"
                            br="100rem"
                            style={{ margin: "4rem 0", color: '#FFF' }}
                            fontSize="1.7rem">Submit</Button>
                    {Toggle && <Typography gutterBottom className="form-title">{Status}</Typography>}

                    </StyledForm>
                )
            }}
        </Formik>
    )
};








const emptyInitial = {
    student_title: '',
    student_firstname: '',
    student_lastname: '',
    student_email: '',
    student_company: '',
    student_address1: '',
    student_address2: '',
    student_address3: '',
    student_city: '',
    student_scp: '',
    student_postal: '',
    student_country: '',
    student_membersociety: '',
    birth_city: '',
    birth_country: '',
    student_level_current: '',
    student_level_seeking: '',
    university_course: '',
    university_name: '',
    university_address1: '',
    university_address2: '',
    university_address3: '',
    university_city: '',
    university_scp: '',
    university_postal: '',
    university_country: '',
    cv_filename_uploader: '',
    personal_statement: '',
    student_status_filename_uploader: '',
    question_1_answer: '',
    question_2_answer: '',
    question_3_answer: '',
    question_4_answer: [],
    youtube_url: '',
    roundtable: [],
    roundtable_other: '',
    marketing: '',
    marketing_other: '',
    previous_participant: '',
    initiatives: [],
    initiatives_other: '',
    consent_sponsors: '',
    consent_fiec: '',
    consent_wep: '',
    consent_bursary: '',
    consent_events: '',
    consent_yfia: '',
    __csrf_token: ''

}
