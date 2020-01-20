import React, { Component, useState } from 'react'
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import { Formik,  Field, } from 'formik';
import { TextField, SimpleFileUpload, CheckboxWithLabel, Checkbox, RadioGroup} from 'formik-material-ui';
import { Button } from '../../Button';
import { SendForm } from '../FormActions';
import { StyledTask } from '../TaskStyles';
import {AcceptPosterSchema } from '../TaskControl';



// async (values, actions) => {
//                 await Sendtask({ values, url })
//             }

export const AcceptPoster = (props) => {
    const emptyInitial = {
       accept_poster_invitation: ''
    }

    const {presets, csrf, apiUrl, paperId, type} = props;
    console.log('tasks', presets, csrf, apiUrl, paperId, type);
    const url = `https://prelude.eurobrake.net/authors/tasks/acceptposter/${paperId}`;
    
    return (
        <Formik
         initialValues={emptyInitial}
         validationSchema={AcceptPosterSchema }
            enableReinitialize
        >
            {({ values, handleChange,  setFieldValue, isValidating, validateForm, handleSubmit, errors}) => {
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
                        <Typography className="task-title">Accept invitation to present a poster submission</Typography>
                        <Typography gutterBottom className="task-title" >Your abstract has been accepted as a poster presentation at EuroBrake 2020.</Typography>
                        <Typography gutterBottom className="task-label" >Posters will form a key part of EuroBrake 2020 with the poster session taking place in the main exhibition hall.</Typography>
                        <Typography gutterBottom className="task-label" >Please use the options below to accept or decline this poster presentation offer.</Typography>     
                         <div className="task-field-radio">
                            <label
                                htmlFor="label"
                                className="task-title">
                                Accept invitation?
                        </label>
                            <Field
                                className="task-radio"
                                value={values.accept_poster_invitation}
                                style={{ color: '#134381' }}
                                name="ok_to_publish_pitchvideo"
                                component={RadioGroup}
                            >
                                <label
                                    style={{ margin: '1rem' }}
                                    htmlFor="label"
                                    className="task-label-radio">
                                         Yes, I will make a poster presentation
                                        <input
                                        onChange={handleChange}                                        
                                        style={{ margin: '1rem' }}
                                        type="radio"
                                        name="accept_poster_invitation"
                                        value="yes"
                                        id="yes"
                                    />
                                </label>
                                <label
                                    style={{ margin: '1rem' }}
                                    htmlFor="label"
                                    className="task-label-radio">
                                    No, please withdraw my paper from EuroBrake 2020
                                        <input
                                    style={{ margin: '1rem' }}
                                        onChange={handleChange}                                        
                                        type="radio"
                                        name="accept_poster_invitation"
                                        value="no"
                                        id="no"
                                    />
                                </label>
                            </Field>
                            {errors.accept_poster_invitation  && <label style={{position: 'absolute', bottom: '-1rem', right: '1rem', color: '#ff0000', fontSize: '1.5rem'}}>{errors.accept_poster_invitation}</label>}
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






