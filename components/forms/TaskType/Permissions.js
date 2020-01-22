import React, { Component, useState } from 'react'
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import { Formik,  Field, } from 'formik';
import { TextField, SimpleFileUpload, CheckboxWithLabel, Checkbox, RadioGroup} from 'formik-material-ui';
import { Button } from '../../Button';
import { SendForm } from '../FormActions';
import { StyledTask } from '../TaskStyles';
import InstructionsPopup from '../../InstructionsPopup';
import {PermissionSchema} from '../TaskControl';




// async (values, actions) => {
//                 await Sendtask({ values, url })
//             }

export const Permissions = (props) => {
    const emptyInitial = {
       ok_to_publish_ppt: ''
    }

    const {presets, csrf, apiUrl, paperId, type} = props;
    console.log('tasks', presets, csrf, apiUrl, paperId, type);
    const url = `https://prelude.eurobrake.net/authors/tasks/permissions/${paperId}`;
    
    return (
        // ! NEED PRESETS FOR TASKS


        <Formik
         initialValues={emptyInitial}
            validationSchema={PermissionSchema}

            enableReinitialize
        >
            {({ values, handleChange, setFieldValue, isValidating, validateForm, handleSubmit, errors}) => {
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
                    console.log('submitting', values)
                    SendForm({values, url, csrf})
              }
                return (
                    <StyledTask>
                        <Typography className="task-title">{paperId}</Typography>
                        <Typography className="task-title">Permissions</Typography>
                        <Typography gutterBottom className="task-label">We would like to support you to promote your work to EuroBrake attendees by making your presentation available on a private area of the conference website via a password protected link sent round after the event.</Typography>
                         
                         <div className="task-field-radio">
                            <label
                                htmlFor="label"
                                className="task-title">
                                Grant permission?
                        </label>
                            <Field
                                className="task-radio"
                                value={values.ok_to_publish_ppt}
                                style={{ color: '#134381' }}
                                name="ok_to_publish_ppt"
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
                                        name="ok_to_publish_ppt"
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
                                        name="ok_to_publish_ppt"
                                        value="no"
                                        id="no"
                                    />
                                    No, I do not grant permission
                                </label>
                            </Field>
                            {errors.ok_to_publish_ppt && <label style={{position: 'absolute', bottom: '-1rem', right: '1rem', color: '#ff0000', fontSize: '1.5rem'}}>{errors.ok_to_publish_ppt}</label>}
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







