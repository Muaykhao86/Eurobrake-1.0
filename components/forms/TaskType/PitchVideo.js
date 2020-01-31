import React, { Component, useState } from 'react'
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import { Formik,  Field, } from 'formik';
import CircularProgress from '@material-ui/core/CircularProgress';

import { TextField, SimpleFileUpload, CheckboxWithLabel, Checkbox, RadioGroup} from 'formik-material-ui';
import { Button } from '../../Button';
import { SendForm, SendFile } from '../FormActions';
import { StyledTask } from '../TaskStyles';
import {PitchVideoSchema} from '../TaskControl';



// async (values, actions) => {
//                 await Sendtask({ values, url })
//             }

export const PitchVideo = (props) => {
        const [Loading, setLoading] = useState(false);
    const [Toggle, setToggle] = useState(false);
    const [Status, setStatus] = useState(null);
    const emptyInitial = {
        pitchvideo_filename: '',
        ok_to_publish_pitchvideo: ''
    }

    const {presets, csrf, apiUrl, paperId, type} = props;
    const url = `https://prelude.eurobrake.net/authors/tasks/pitchvideo/${paperId}`;
    
    return (
        <Formik
         initialValues={emptyInitial}
         validationSchema={PitchVideoSchema}
            enableReinitialize
        >
            {({ values, handleChange, setFieldTouched, isValidating, validateForm, handleSubmit, errors}) => {
            
               
                   const allTouched = async () => {
                       console.log('touched!')
                       console.log({errors})
                     await Object.keys(values).forEach(key => {   
                        setFieldTouched(key, true)});

                       await validateForm().then(errors => Object.keys(errors).length === 0 && onSubmit())
                }
                   
                    const onSubmit = async () => {
                 await setLoading(true);
                values.__csrf_token = csrf
                  await  console.log('submitting')
                  let res =  await SendFile({values, url, csrf});
                  let data = await  res;
                  let dataStatus= await  data && data.status;
                  setStatus(dataStatus)
                  console.log({data})
                  let result = async () => {
                  await  setLoading(false)
                  await setToggle(true)
                   }    
                  
                return result()
                 
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
                       
                        {Loading ?  <CircularProgress size={24} className="loading"/> : 
                       <Button 
                         bcolor="#134381"
                                background="#134381"
                                br="100rem"
                                fontSize="2rem"
                        onClick={allTouched}
                           style={{   alignSelf: 'center', color: '#FFF'}}>
                            submit
                        </Button>}
                    {Toggle && <Typography className="task-title" style={{alignSelf: 'center', textTransform: 'uppercase'}}>{Status}</Typography>}
                        
                    </StyledTask>
                )
            }}
        </Formik>
    )
};







