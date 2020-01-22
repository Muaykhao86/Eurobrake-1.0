import React, { Component, useState } from 'react'
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import { Formik,  Field, } from 'formik';
import { TextField, SimpleFileUpload, CheckboxWithLabel, Checkbox, RadioGroup} from 'formik-material-ui';
import { Button } from '../../Button';
import { SendForm, SendFile } from '../FormActions';
import { StyledTask } from '../TaskStyles';
import {PitchVideoSchema} from '../TaskControl';



// async (values, actions) => {
//                 await Sendtask({ values, url })
//             }

export const PitchVideo = (props) => {
    const emptyInitial = {
        pitchvideo_filename: '',
        ok_to_publish_pitchvideo: ''
    }

    const {presets, csrf, apiUrl, paperId, type} = props;
    console.log('tasks', presets, csrf, apiUrl, paperId, type);
    const url = `https://prelude.eurobrake.net/authors/tasks/pitchvideo/${paperId}`;
    
    return (
        <Formik
         initialValues={emptyInitial}
         validationSchema={PitchVideoSchema}
            enableReinitialize
        >
            {({ values, handleChange, setFieldValue, isValidating, validateForm, handleSubmit, errors}) => {
            
                console.log(values, 'Tasks')
                console.log({errors})
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
                return (
                    <StyledTask>
                        <Typography className="task-title">{paperId}</Typography>
                        <Typography className="task-title">Upload Pitch Video Slide</Typography>
                        <Typography gutterBottom className="task-label" >Please upload your pitch video as a PowerPoint slide using the form below</Typography>
                       
                        <div className="task-field" style={{marginBottom: '2rem'}}>
                            <label
                                htmlFor="label"
                                className="task-label">
                                Pitch video slide upload
                        </label>
                            <Field
                                className="task-input"
                                value={values.pitchvideo_filename}
                                style={{ color: '#134381' }}
                                name="pitchvideo_filename"
                                component={SimpleFileUpload}
                                fullWidth
                            />
                           {errors.pitchvideo_filename && <label style={{position: 'absolute', bottom: '-2rem', right: '1rem', color: '#ff0000', fontSize: '1.5rem'}}>{errors.pitchvideo_filename}</label>}

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
                                value={values.ok_to_publish_pitchvideo}
                                style={{ color: '#134381' }}
                                name="ok_to_publish_pitchvideo"
                                component={RadioGroup}
                            >
                                <label
                                    style={{ margin: '1rem' }}
                                    htmlFor="label"
                                    className="task-label-radio">
                                        <input
                                        onChange={handleChange}                                        
                                        style={{ margin: '1rem' }}
                                        type="radio"
                                        name="ok_to_publish_pitchvideo"
                                        value="yes"
                                        id="yes"
                                    />
                                    Yes, I grant permission for my presentation to be included
                                </label>
                                <label
                                    style={{ margin: '1rem' }}
                                    htmlFor="label"
                                    className="task-label-radio">
                                        <input
                                    style={{ margin: '1rem' }}
                                        onChange={handleChange}                                        
                                        type="radio"
                                        name="ok_to_publish_pitchvideo"
                                        value="no"
                                        id="no"
                                    />
                                    No, I do not grant permission
                                </label>
                            </Field>
                            {errors.ok_to_publish_pitchvideo && <label style={{position: 'absolute', bottom: '-1rem', right: '1rem', color: '#ff0000', fontSize: '1.5rem'}}>{errors.ok_to_publish_pitchvideo}</label>}

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







