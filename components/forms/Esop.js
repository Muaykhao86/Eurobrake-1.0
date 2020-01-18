import React, { Component, useState, useEffect } from 'react'
import { Formik, Form, Field, FieldArray } from 'formik';
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import { TextField, Select, RadioGroup, CheckboxWithLabel, Checkbox, SimpleFileUpload } from 'formik-material-ui';
import { Button } from '../Button';
import { titles, countries, Q1, Q2, Q3, Q4, Marketing, Sessions } from './FormSelects';
import { AbstractSchema } from './FormControl';
import { StyledForm } from './Formstyles';

const members = [];

export const Esop = () => {

    return (
        <Formik
            initialValues={emptyInitial}
            onSubmit={(values, actions) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                }, 1000)
            }}
            enableReinitialize
        >
            {({ values, handleChange, setFieldValue, isValidating, validateForm, handleSubmit, errors, isSubmitting }) => {
                return (
                    <StyledForm>
                        <Typography className="form-title">About you</Typography>
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
                            <div className="form-input" style={{ display: 'flex', flexFlow: 'column' }}>
                                <Field
                                    placeholder="City"
                                    className="form-input"
                                    onClick={handleChange}
                                    value={values.student_jobtitle}
                                    style={{ color: '#134381', marginBottom: '1rem' }}
                                    name="birth_city"
                                    component={TextField}
                                />
                                <Field
                                    placeholder="Country"
                                    className="form-input"
                                    onClick={handleChange}
                                    value={values.student_jobtitle}
                                    style={{ color: '#134381' }}
                                    name="birth_country"
                                    component={TextField}
                                />
                            </div>
                        </div>
                        <Typography className="form-title">Your University or HE Institution</Typography>
                        <div className="form-field-radio">
                            <label
                                htmlFor="label"
                                className="form-label">
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
                                    None
                                        <input
                                        onChange={handleChange}
                                        style={{ margin: '1rem' }}
                                        type="radio"
                                        name="student_level_current"
                                        value="none"
                                        id="student_level_current_none"
                                    />
                                </label>
                                <label
                                    style={{ margin: '1rem' }}
                                    htmlFor="label"
                                    className="form-label">
                                    Bachelor or equivalent
                                        <input
                                        style={{ margin: '1rem' }}
                                        onChange={handleChange}
                                        type="radio"
                                        name="student_level_current"
                                        value="Bachelor"
                                        id="student_level_current_Bachelor"
                                    />
                                </label>
                                <label
                                    style={{ margin: '1rem' }}
                                    htmlFor="label"
                                    className="form-label">
                                    Master or equivalent
                                        <input
                                        style={{ margin: '1rem' }}
                                        onChange={handleChange}
                                        type="radio"
                                        name="student_level_current"
                                        value="Master"
                                        id="student_level_current_Master"
                                    />
                                </label>
                            </Field>
                            {errors.student_level_current && <label style={{ position: 'absolute', bottom: '-1rem', right: '1rem', color: '#ff0000', fontSize: '1.5rem' }}>{errors.student_level_current}</label>}
                        </div>
                        <div className="form-field-radio">
                            <label
                                htmlFor="label"
                                className="form-label">
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
                                    Bachelor or equivalent
                                        <input
                                        style={{ margin: '1rem' }}
                                        onChange={handleChange}
                                        type="radio"
                                        name="student_level_seeking"
                                        value="Bachelor"
                                        id="student_level_seeking_Bachelor"
                                    />
                                </label>
                                <label
                                    style={{ margin: '1rem' }}
                                    htmlFor="label"
                                    className="form-label">
                                    Master or equivalent
                                        <input
                                        style={{ margin: '1rem' }}
                                        onChange={handleChange}
                                        type="radio"
                                        name="student_level_seeking"
                                        value="Master"
                                        id="student_level_seeking_Master"
                                    />
                                </label>
                                <label
                                    style={{ margin: '1rem' }}
                                    htmlFor="label"
                                    className="form-label">
                                    PhD. or equivalent
                                        <input
                                        onChange={handleChange}
                                        style={{ margin: '1rem' }}
                                        type="radio"
                                        name="student_level_seeking"
                                        value="PhD"
                                        id="student_level_seeking_PhD"
                                    />
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
                        <Typography className="form-title">Your entry</Typography>
                        <div className="form-field">
                            {/* REQUIRED AND FILE MUST BE A PDF */}
                            <Typography className="form-label">Upload a PDF or Microsoft Word document of your CV/resumé here. Documents must not exceed 2 A4 pages and must be submitted in English.</Typography>

                            <label
                                htmlFor="label"
                                className="form-label">
                                Upload your CV/resumé:
                        </label>
                            <Field
                                className="form-input"
                                value={values.cv_filename_uploader}
                                style={{ color: '#134381' }}
                                name="cv_filename_uploader"
                                component={SimpleFileUpload}
                                fullWidth
                            />
                            {errors.cv_filename_uploader && <label style={{ position: 'absolute', bottom: '-2rem', right: '1rem', color: '#ff0000', fontSize: '1.5rem' }}>{errors.cv_filename_uploader}</label>}
                        </div>
                        <div className="form-notes">
                            <label
                                htmlFor="label"
                                className="form-label">
                                Your personal statement – Tell us why you would like a sponsored student place at EuroBrake 2020 (150–250 words):
                         </label>
                            <Field
                                className="form-input"
                                onClick={handleChange}
                                value={values.personal_statement}
                                style={{ color: '#134381' }}
                                name="personal_statement"
                                component="textarea"
                            />
                        </div>


                        <div className="form-field">
                            {/* REQUIRED AND FILE MUST BE A PDF */}
                            <Typography className="form-label">Upload a photo, PDF or Microsoft Word document of a letter or ID card indicating your status as student.</Typography>

                            <label
                                htmlFor="label"
                                className="form-label">
                                Upload proof of your status as student:
                        </label>
                            <Field
                                className="form-input"
                                value={values.cv_filename_uploader}
                                style={{ color: '#134381' }}
                                name="student_status_filename_uploader"
                                component={SimpleFileUpload}
                                fullWidth
                            />
                            {errors.student_status_filename_uploader && <label style={{ position: 'absolute', bottom: '-2rem', right: '1rem', color: '#ff0000', fontSize: '1.5rem' }}>{errors.student_status_filename_uploader}</label>}
                        </div>

                        <div className="form-field">
                            <label
                                htmlFor="label"
                                className="form-label">
                                Question 1: In what range does the brake pressure apply during emergency braking?
                        </label>
                            <Field
                                className="form-input"
                                onClick={handleChange}
                                value={values.question_1_answer}
                                style={{ color: '#134381' }}
                                name="question_1_answer"
                                component={Select}
                            >
                                {Q1.map((option, i) =>
                                    <option key={i} style={{ fontSize: '1.5rem', cursor: 'pointer' }} value={option.value}>{option.label}</option>)}
                            </Field>
                        </div>

                        <div className="form-field">
                            <label
                                htmlFor="label"
                                className="form-label">
                                Question 2: Sort the frequency of use of different brake systems in modern High Speed Trains
                        </label>
                            <Field
                                className="form-input"
                                onClick={handleChange}
                                value={values.question_2_answer}
                                style={{ color: '#134381' }}
                                name="question_2_answer"
                                component={Select}
                            >
                                {Q2.map((option, i) =>
                                    <option key={i} style={{ fontSize: '1.5rem', cursor: 'pointer' }} value={option.value}>{option.label}</option>)}
                            </Field>
                        </div>

                        <div className="form-field">
                            <label
                                htmlFor="label"
                                className="form-label">
                                Question 3: Health relevance of brake wear particles becomes an important issue in brake industry. Find a correct answer:
                        </label>
                            <Field
                                className="form-input"
                                onClick={handleChange}
                                value={values.question_3_answer}
                                style={{ color: '#134381' }}
                                name="question_3_answer"
                                component={Select}
                            >
                                {Q3.map((option, i) =>
                                    <option key={i} style={{ fontSize: '1.5rem', cursor: 'pointer' }} value={option.value}>{option.label}</option>)}
                            </Field>
                        </div>
                        <div className="form-field">
                            <label
                                htmlFor="question_4_answer"
                                className="form-label">
                                Question 4: Can you list three of the Conference Topics at EuroBrake 2020?
                        </label>
                        
                        <FieldArray
                            name="question_4_answer"
                        >
                            {({ swap, push, remove, setSubmitting }) => (
                                Q4.map((question) => (
                                    <div
                                        key={question.id}
                                        className="task-checkboxField">
                                        <label
                                            htmlFor={question.name}
                                            className="task-checkboxField-label"
                                            style={{ color: '#134381', width: '80%' }}

                                        >
                                            {question.id}
                                        </label>
                                        <input
                                            checked={values.question_4_answer && values.question_4_answer.includes(question.value)}
                                            onChange={e => {
                                                e.target.checked ? push(question.value) : values.question_4_answer && remove(values.question_4_answer.value)
                                            }}
                                            className="task-checkboxField-box"
                                            style={{ color: '#134381', }}
                                            value={question.value}
                                            name={question.name}
                                            type="checkbox"
                                            id={question.id}
                                       />
                                        
                                        {errors.accept && <label style={{ position: 'absolute', bottom: '-1rem', right: '1rem', color: '#ff0000', fontSize: '1.5rem' }}>{errors.accept}</label>}
                                    </div>
                                )))}
                        </FieldArray>
                        </div>
                        <Typography className="form-title"> Additional Information</Typography>
                        <div className="form-field">
                            <label
                                htmlFor="youtube_url"
                                className="form-label">
                                If you have a short video outlining your motivation for applying for ESOP or your interest in the braking industry you can include a YouTube link here:
                            </label>
                            <Field
                                className="form-input"
                                onClick={handleChange}
                                value={values.university_address3}
                                style={{ color: '#134381' }}
                                name="youtube_url"
                                component={TextField}
                            />
                            <label
                                htmlFor="youtube_url"
                                className="form-label">
                               This is optional and won’t affect the judging process.
                            </label>
                        </div>

                        <div className="form-field">
                        <label
                                htmlFor="roundtable"
                                className="form-label">
                               ‘Round Table’ sessions will take place as part of the ESOP 2020 programme – providing a unique opportunity for all students to meet with and learn from industry and academia experts. Please leave details below if there are any topics you would like to see discussed in a Round Table session:
                        </label>
                        <FieldArray
                            name="roundtable"
                        >
                            {({ swap, push, remove, setSubmitting,  }) => (
                                Sessions.map((session) => (
                                    <div
                                        key={session.id}
                                        className="task-checkboxField">
                                        <label
                                            htmlFor={session.name}
                                            className="task-checkboxField-label"
                                            style={{ color: '#134381', width: '80%' }}

                                        >
                                            {session.id}
                                        </label>
                                        {console.log(values)}
                                        <input
                                            checked={values.roundtable && values.roundtable.includes(session.value)}
                                            onChange={e => {
                                                e.target.checked ? push(session.value) : values.roundtable && remove(values.roundtable.value)
                                            }}
                                            className="task-checkboxField-box"
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
                        
                         {values.roundtable && values.roundtable.includes('3CA6AA5A-F3DA-11E8-B5C4-A947D1EF668C') &&
                            <Field
                                className="form-input"
                                onClick={handleChange}
                                value={values.roundtable_other}
                                style={{ color: '#134381' }}
                                name="roundtable_other"
                                component={TextField}
                            />
                        }
                         </div>
                        
                        <div className="form-field">
                            <label
                                htmlFor="marketing"
                                className="form-label">
                                Where did you hear about the EuroBrake Student Opportunities Programme?
                        </label>
                            <Field
                                className="form-input"
                                onClick={handleChange}
                                value={values.marketing}
                                style={{ color: '#134381' }}
                                name="marketing"
                                component={Select}
                            >
                                {Marketing.map((option, i) =>
                                    <option key={i} style={{ fontSize: '1.5rem', cursor: 'pointer' }} value={option.value}>{option.label}</option>)}
                            </Field>
                        {values.marketing === 'E682897E-BACE-11E5-BFDD-7F6E5EAB70CB' &&
                            <Field
                                className="form-input"
                                onClick={handleChange}
                                value={values.marketing_other}
                                style={{ color: '#134381' }}
                                name="marketing_other"
                                component={TextField}
                            />
                        }
                            {errors.student_level_current && <label style={{ position: 'absolute', bottom: '-1rem', right: '1rem', color: '#ff0000', fontSize: '1.5rem' }}>{errors.student_level_current}</label>}

                        </div>
                        <div className="form-field-radio">
                            <label
                                htmlFor="label"
                                className="form-label">
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
                                    className="form-label">
                                    Yes
                                        <input
                                        onChange={handleChange}
                                        style={{ margin: '1rem' }}
                                        type="radio"
                                        name="previous_participant"
                                        value="yes"
                                        id="previous_participant_opt_yes"
                                    />
                                </label>
                                <label
                                    style={{ margin: '1rem' }}
                                    htmlFor="previous_participant_opt_no"
                                    className="form-label">
                                    No
                                        <input
                                        style={{ margin: '1rem' }}
                                        onChange={handleChange}
                                        type="radio"
                                        name="previous_participant"
                                        value='no'
                                        id="previous_participant_opt_no"
                                    />
                                </label>
                               
                            </Field>
                            {errors.student_level_current && <label style={{ position: 'absolute', bottom: '-1rem', right: '1rem', color: '#ff0000', fontSize: '1.5rem' }}>{errors.student_level_current}</label>}
                        </div>
                        <Typography gutterBottom className="form-title">Additional Information</Typography>
                        <Typography gutterBottom className="form-label">Please note that by submitting a registration form for ESOP, you indicate your consent to us passing the personal information you have disclosed to us, including your CV, to the ESOP Sponsor Companies, so that they can contact you with details of career and/or work placement opportunities within their organisations, or to arrange a meeting with you at EuroBrake if you are selected to attend.</Typography>
                        <Typography gutterBottom className="form-label">Here at FISITA we take your privacy seriously and will only use your personal information to set up and administer your account and/or membership and to provide the products and services you have requested from us.</Typography>
                        <div className="task-checkboxField">
                            {/* REQUIRED */}
                            <label
                                htmlFor="consent_sponsors"
                                className="task-checkboxField-label"
                                style={{ color: '#134381', width: '80%' }}

                                >
                                 If you do not consent to us passing on your details, please tick here
                        </label>
                            <Field
                                className="task-checkboxField-box"
                                style={{ color: '#134381', }}
                                value={values.consent_sponsors}
                                name="consent_sponsors"
                                component={Checkbox}
                            >
                            </Field>
                           {errors.consent_sponsors && <label style={{position: 'absolute', bottom: '-1rem', right: '1rem', color: '#ff0000', fontSize: '1.5rem'}}>{errors.consent_sponsors}</label>}
                        </div>
                        <Typography gutterBottom className="form-label">However, from time to time we would like to contact you by email with details of the following:</Typography>
                         <div className="task-checkboxField">
                            {/* REQUIRED */}
                            <label
                                htmlFor="consent_fiec"
                                className="task-checkboxField-label"
                                style={{ color: '#134381', width: '80%' }}

                                >
                                Membership of FISITA International Engineering Community (FIEC)
                        </label>
                            <Field
                                className="task-checkboxField-box"
                                style={{ color: '#134381', }}
                                value={values.consent_fiec}
                                name="consent_fiec"
                                component={Checkbox}
                            >
                            </Field>
                           {errors.consent_fiec && <label style={{position: 'absolute', bottom: '-1rem', right: '1rem', color: '#ff0000', fontSize: '1.5rem'}}>{errors.consent_fiec}</label>}
                        </div> <div className="task-checkboxField">
                            {/* REQUIRED */}
                            <label
                                htmlFor="consent_wep"
                                className="task-checkboxField-label"
                                style={{ color: '#134381', width: '80%' }}

                                >
                                 Career & work placement opportunities via FISITA Work Experience Programme
                        </label>
                            <Field
                                className="task-checkboxField-box"
                                style={{ color: '#134381', }}
                                value={values.consent_wep}
                                name="consent_wep"
                                component={Checkbox}
                            >
                            </Field>
                           {errors.consent_wep && <label style={{position: 'absolute', bottom: '-1rem', right: '1rem', color: '#ff0000', fontSize: '1.5rem'}}>{errors.consent_wep}</label>}
                        </div> <div className="task-checkboxField">
                            {/* REQUIRED */}
                            <label
                                htmlFor="consent_events"
                                className="task-checkboxField-label"
                                style={{ color: '#134381', width: '80%' }}

                                >
                                Opportunities for students at upcoming FISITA events
                        </label>
                            <Field
                                className="task-checkboxField-box"
                                style={{ color: '#134381', }}
                                value={values.consent_events}
                                name="consent_events"
                                component={Checkbox}
                            >
                            </Field>
                           {errors.consent_events && <label style={{position: 'absolute', bottom: '-1rem', right: '1rem', color: '#ff0000', fontSize: '1.5rem'}}>{errors.consent_events}</label>}
                        </div> <div className="task-checkboxField">
                            {/* REQUIRED */}
                            <label
                                htmlFor="consent_bursary"
                                className="task-checkboxField-label"
                                style={{ color: '#134381', width: '80%' }}

                                >
                                 Opportunities for funding via FISITA Travel Bursary Scheme
                        </label>
                            <Field
                                className="task-checkboxField-box"
                                style={{ color: '#134381', }}
                                value={values.consent_bursary}
                                name="consent_bursary"
                                component={Checkbox}
                            >
                            </Field>
                           {errors.consent_bursary && <label style={{position: 'absolute', bottom: '-1rem', right: '1rem', color: '#ff0000', fontSize: '1.5rem'}}>{errors.consent_bursary}</label>}
                        </div> <div className="task-checkboxField">
                            {/* REQUIRED */}
                            <label
                                htmlFor="consent_yfia"
                                className="task-checkboxField-label"
                                style={{ color: '#134381', width: '80%' }}

                                >
                                Subscription to “Your Future in Automotive” newsletter
                        </label>
                            <Field
                                className="task-checkboxField-box"
                                style={{ color: '#134381', }}
                                value={values.consent_yfia}
                                name="consent_yfia"
                                component={Checkbox}
                            >
                            </Field>
                           {errors.consent_yfia && <label style={{position: 'absolute', bottom: '-1rem', right: '1rem', color: '#ff0000', fontSize: '1.5rem'}}>{errors.consent_yfia}</label>}
                        </div>
                        <Typography gutterBottom className="form-label">Please tick the box(es) above for each purpose you consent to us contacting you about.</Typography>
                        <Typography gutterBottom className="form-label">For more detailed information, please see our <Link href="/privacyPolicy"><a>privacy policy.</a></Link></Typography>
                        <Typography gutterBottom className="form-label">For further details contact Hayley Millar, Education Manager at <a href="mailto:h.millar@fisita.com">h.millar@fisita.com.</a></Typography>


                        <Button type="submit"
                            bcolor="#134381"
                            background="#134381"
                            br="100rem"
                            style={{ margin: ".5rem 0" }}
                            fontSize="1.7rem">Submit</Button>
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
    student_jobtitle: '',
    student_company: '',
    student_address1: '',
    student_address2: '',
    student_address3: '',
    student_city: '',
    student_scp: '',
    student_postal: '',
    student_country: '',
    student_phone: '',
    student_fax: '',
    student_membersociety: '',
    university_country: '',
    question_1_answer: '',
    question_2_answer: '',
    question_3_answer: '',
    question_4_answer: [],
    marketing: '',
    roundtable: [],
    previous_participant: '',
    __csrf_token: ''

}
