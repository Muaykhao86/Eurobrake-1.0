import React, { Component, useState } from 'react'
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import { Formik,  Field, } from 'formik';
import { TextField, SimpleFileUpload, CheckboxWithLabel, Checkbox} from 'formik-material-ui';
import { Button } from '../../Button';
import { SendFile } from '../FormActions';
import { StyledTask } from '../TaskStyles';
import {PPTSchema} from '../TaskControl';



export const PPT = (props) => {
  const [Loading, setLoading] = useState(false);
    const [Toggle, setToggle] = useState(false);
    const [Status, setStatus] = useState(null);

    const emptyInitial = {
        accept: '',
        ppt_filename: '',
        author_notes: ''
    }

    const {presets, csrf, apiUrl, paperId, type} = props;
    const url = `https://prelude.eurobrake.net/authors/tasks/ppt/${paperId}`;
    
    
    return (
        <Formik
         initialValues={emptyInitial}
            validationSchema={PPTSchema}

            enableReinitialize
        >
            {({ values, handleChange, setFieldTouched, isValidating, validateForm, handleSubmit, errors }) => {
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
                    {Toggle && <Typography className="task-title" style={{alignSelf: 'center',textTransform: 'uppercase'}}>{Status}</Typography>}
                        
                    </StyledTask>
                )
            }}
        </Formik>
    )
};







