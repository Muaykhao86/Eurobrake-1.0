import React, { Component, useState } from 'react'
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import { Formik,  Field, } from 'formik';
import { TextField, SimpleFileUpload, CheckboxWithLabel, Checkbox} from 'formik-material-ui';
import { Button } from '../../Button';
import { SendFile } from '../FormActions';
import { StyledTask } from '../TaskStyles';
import {PPTSchema} from '../TaskControl';




// async (values, actions) => {
//                 await Sendtask({ values, url })
//             }

export const PPT = (props) => {


    const emptyInitial = {
        accept: '',
        ppt_filename: '',
        author_notes: ''
    }

    const {presets, csrf, apiUrl, paperId, type} = props;
    console.log('tasks', presets, csrf, apiUrl, paperId, type);
    const url = `https://prelude.eurobrake.net/authors/tasks/ppt/${paperId}`;
    
    
    return (
        <Formik
         initialValues={emptyInitial}
            validationSchema={PPTSchema}

            enableReinitialize
        >
            {({ values, handleChange, setFieldValue, isValidating, validateForm, handleSubmit, errors }) => {
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
                    console.log('submitting', values)
                    SendFile({values, url, csrf})
              }
              console.log(errors)
                return (
                    <StyledTask>
                        <Typography className="task-title">{paperId}</Typography>
                        <Typography className="task-title">Please upload your PowerPoint persentation using the form below</Typography>
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
                         <div className="task-field">
                            <label
                                htmlFor="label"
                                className="task-label">
                                File upload
                        </label>
                            <Field
                                className="task-input"
                                value={values.ppt_filename}
                                style={{ color: '#134381' }}
                                name="ppt_filename"
                                component={SimpleFileUpload}
                                fullWidth
                            />
                            {errors.ppt_filename && <label style={{position: 'absolute', bottom: '-2rem', right: '1rem', color: '#ff0000', fontSize: '1.5rem'}}>{errors.ppt_filename}</label>}
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







