import React, { Component, useState } from 'react'
import Link from 'next/link';
import CircularProgress from '@material-ui/core/CircularProgress';

import Typography from '@material-ui/core/Typography';
import { Formik,  Field, } from 'formik';
import { TextField, SimpleFileUpload, CheckboxWithLabel, Checkbox, RadioGroup} from 'formik-material-ui';
import { Button } from '../../Button';
import { SendFile } from '../FormActions';
import { StyledTask } from '../TaskStyles';
import {PosterSchema} from '../TaskControl';





// async (values, actions) => {
//                 await Sendtask({ values, url })
//             }

export const Poster = (props) => {
     const [Loading, setLoading] = useState(false);
    const [Toggle, setToggle] = useState(false);
    const [Status, setStatus] = useState(null);
    const emptyInitial = {
        accept: '',
        poster_filename: '',        
        author_notes: '',
        ok_to_publish_poster: ''
    }

    const {presets, csrf, apiUrl, paperId, type} = props;
    console.log('tasks', presets, csrf, apiUrl, paperId, type);
    const url = `https://prelude.eurobrake.net/authors/tasks/poster/${paperId}`;

    
    return (
        <Formik
         initialValues={emptyInitial}
         validationSchema={PosterSchema}
            enableReinitialize
        >
            {({ values, handleChange, setFieldTouched, validateForm, handleSubmit, errors }) => {
                console.log(values, 'Tasks')

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
                  console.log({dataStatus})
                  let result = async () => {
                  await  setLoading(false)
                  await setToggle(true)
                   }    
                  
                return result()
                 
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
                                style={{ color: '#134381', margin: '0' }}
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
                                    className="task-label-radio">
                                        <input
                                        onChange={handleChange}                                        
                                        style={{ margin: '1rem' }}
                                        type="radio"
                                        name="ok_to_publish_poster"
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
                                        name="ok_to_publish_poster"
                                        value="no"
                                        id="no"
                                    />
                                    No, I do not grant permission
                                </label>
                            </Field>
                            {errors.ok_to_publish_poster && <label style={{position: 'absolute', bottom: '-1rem', right: '1rem', color: '#ff0000', fontSize: '1.5rem'}}>{errors.ok_to_publish_poster}</label>}

                        </div>
                        {Loading ?  <CircularProgress size={24} className="loading"/> : 
                       <Button 
                         bcolor="#134381"
                                background="#134381"
                                br="100rem"
                                fontSize="2rem"
                        onClick={allTouched}
                           style={{  alignSelf: 'center', color: '#FFF'}}>
                            submit
                        </Button>}
                    {Toggle && <Typography className="form-title" style={{alignSelf: 'center', textTransform: 'uppercase'}}>{Status}</Typography>}
                        
                    </StyledTask>
                )
            }}
        </Formik>
    )
};







