import React, { Component, useState } from 'react'
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import { Formik,  Field, } from 'formik';
import { TextField, SimpleFileUpload, CheckboxWithLabel, Checkbox, RadioGroup} from 'formik-material-ui';
import { Button } from '../../Button';
import { SendForm } from '../FormActions';
import { StyledTask } from '../TaskStyles';
import {PosterSchema} from '../TaskControl';





// async (values, actions) => {
//                 await Sendtask({ values, url })
//             }

export const Poster = (props) => {
    const emptyInitial = {
        accept: '',
        poster_filename: '',        
        author_notes: '',
        ok_to_publish_poster: ''
    }

    const {presets, csrf, apiUrl, paperId, type} = props;
    console.log('tasks', presets, csrf, apiUrl, paperId, type);
    
    return (
        <Formik
         initialValues={emptyInitial}
         validationSchema={PosterSchema}
            enableReinitialize
        >
            {({ values, handleChange, isValidating, validateForm, handleSubmit, errors }) => {
                console.log(values, 'Tasks')
                  const handleCheckBox = async () => {
                    const accept = values.accept;
                    const copyright = values.copyright;
                    accept === true && setFieldValue('accept', 'yes')
                    accept === false && setFieldValue('accept', '')
                    copyright === true && setFieldValue('copyright', 'yes')
                    copyright === false && setFieldValue('copyright', '')
                   return
                }

                const onSubmit = () => {
                  values.__csrf_token = csrf
                    console.log('submitting')
              }
                return (
                    <StyledTask>
                        <Typography className="task-title">{paperId}</Typography>
                        <Typography className="task-title">Upload your Poster PDF</Typography>
                        <Typography gutterBottom className="task-label" >Please upload your poster PDF using the form below.</Typography>

                         <div className="task-checkboxField">
                            <label
                                htmlFor="label"
                                className="task-checkboxField-label"
                                style={{ color: '#134381' }}

                                >
                                I have read the <Link href="/authorsAreaInstructions"><a className="task-link_bold" >Instructions for Preparing your Powerpoint Presentation</a></Link> and have followed the guidance notes available there.
                        </label>
                            <Field
                                className="task-checkboxField-box"
                                value={values.accept}
                                style={{ color: '#134381', }}
                                name="accept"
                                component={CheckboxWithLabel}
                            >
                            </Field>
                           {errors.accept && <label style={{position: 'absolute', bottom: '-1rem', right: '1rem', color: '#ff0000', fontSize: '1.5rem'}}>{errors.accept}</label>}

                        </div>
                        <div className="task-field" style={{marginBottom: '2rem'}}>
                            <label
                                htmlFor="label"
                                className="task-label">
                               Poster PDF upload:
                        </label>
                            <Field
                                className="task-input"
                                value={values.poster_filename}
                                style={{ color: '#134381' }}
                                name="poster_filename"
                                component={SimpleFileUpload}
                                fullWidth
                            />
                           {errors.poster_filename && <label style={{position: 'absolute', bottom: '-2rem', right: '1rem', color: '#ff0000', fontSize: '1.5rem'}}>{errors.poster_filename}</label>}
                        </div>
                        <div className="task-notes">
                           <label
                                 htmlFor="label"
                                 className="task-notes-label">
                                 Notes for reviewers:
                         </label>
                             <Field
                                 className="task-notes-input"
                                 onClick={handleChange}
                                 value={values.author_notes}
                                 style={{ color: '#134381' }}
                                 name="author_notes"
                                 component="textarea"
                             />
                         </div>
                       
                        
                         <Typography gutterBottom className="task-label">We would like to support you to promote your work to EuroBrake attendees by making your pitch video slide available on a private area of the conference website via a password protected link sent round after the event.</Typography>
                         
                         <div className="task-field-radio">
                            <label
                                htmlFor="label"
                                className="task-title">
                                Grant permission?
                        </label>
                            <Field
                                className="task-radio"
                                value={values.ok_to_publish_poster}
                                style={{ color: '#134381' }}
                                name="ok_to_publish_poster"
                                component={RadioGroup}
                            >
                                <label
                                    style={{ margin: '1rem' }}
                                    htmlFor="label"
                                    className="task-label">
                                    Yes, I grant permission for my presentation to be included
                                        <input
                                        onChange={handleChange}                                        
                                        style={{ margin: '1rem' }}
                                        type="radio"
                                        name="ok_to_publish_poster"
                                        value="yes"
                                        id="yes"
                                    />
                                </label>
                                <label
                                    style={{ margin: '1rem' }}
                                    htmlFor="label"
                                    className="task-label">
                                    No, I do not grant permission
                                        <input
                                    style={{ margin: '1rem' }}
                                        onChange={handleChange}                                        
                                        type="radio"
                                        name="ok_to_publish_poster"
                                        value="no"
                                        id="no"
                                    />
                                </label>
                            </Field>
                            {errors.ok_to_publish_poster && <label style={{position: 'absolute', bottom: '-1rem', right: '1rem', color: '#ff0000', fontSize: '1.5rem'}}>{errors.ok_to_publish_poster}</label>}

                        </div>
                       
                        <Button 
                            onClick={() => validateForm().then(errors => Object.keys(errors).length === 0 && onSubmit())}
                            bcolor="#134381"
                            background="#134381"
                            br="100rem"
                            style={{ margin: "3rem", color: '#FFF' }}
                            padding=".5rem 4rem"
                            fontSize="1.7rem">
                            Send
                        </Button>
                        
                    </StyledTask>
                )
            }}
        </Formik>
    )
};







