import React, { Component, useState } from 'react'
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import { Formik,  Field, } from 'formik';
import { TextField, SimpleFileUpload, CheckboxWithLabel, Checkbox} from 'formik-material-ui';
import { Button } from '../../Button';
import { SendForm } from '../FormActions';
import { StyledTask } from '../TaskStyles';
import {BioSchema} from '../TaskControl';



// async (values, actions) => {
//                 await Sendtask({ values, url })
//             }

export const Bio = (props) => {
    const [Loading, setLoading] = useState(false);
    const [Toggle, setToggle] = useState(false);
    const [Status, setStatus] = useState(null);
    const emptyInitial = {
        biography: '',
        
    }

    const {presets, csrf, apiUrl, paperId, type} = props;
    console.log('tasks', presets, csrf, apiUrl, paperId, type);
    const url = `https://prelude.eurobrake.net/authors/tasks/biography/${paperId}`;
    
    return (
            <Formik
         initialValues={emptyInitial}
         validationSchema={BioSchema}
            enableReinitialize
        >
            {({ values, handleChange, setFieldTouched, isValidating, validateForm, handleSubmit, errors }) => {
                console.log(errors, 'Tasks')

              const allTouched = async () => {
                       console.log('touched!')
                       console.log({errors})
                     await Object.keys(values).forEach(key => {   
                        setFieldTouched(key, true)});

                       await validateForm().then(errors => Object.keys(errors).length === 0 && onSubmit())
                }
                   
                   const onSubmit = async () => {
                    setLoading(true);
                  values.__csrf_token = csrf
                    console.log('submitting')
                  let res =  await SendForm({values, url, csrf});
                  let data = await  res && res.status;
                  console.log({status})
                 data && setStatus(data) && setToggle(true) && setLoading(false)
                  return 
              }
                return (
                    <StyledTask>
                        <Typography className="task-title">{paperId}</Typography>
                        <Typography className="task-title">Biographical information</Typography>
                        <Typography gutterBottom className="task-label">Please provide biographical details for <span className="task_bold" > the author who will be presenting your paper </span> at EuroBrake. The session chair will use the biography to introduce the presenter. Please ensure the biography is no more than 100 words. Guidelines and an example biography are provided for reference.</Typography>
                       
                        <Typography className="task-title" style={{textDecoration: 'underline'}}><Link href="https://www.fisita.com/documents/Guidelines_for_Writing_Your_Biography.pdf"><a >Guidelines for writing your biography</a></Link></Typography>
                        <Typography className="task-title">Presenting Author</Typography>
                         <div className="task-notes">
                           <label
                                 htmlFor="label"
                                 className="task-notes-label">
                                 Biography
                         </label>
                             <Field
                                 className="task-notes-input"
                                 onClick={handleChange}
                                 value={values.author_notes}
                                 style={{ color: '#134381' }}
                                 name="biography"
                                 component="textarea"
                             />
                            {errors.biography && <label style={{position: 'absolute', bottom: '-1rem', right: '1rem', color: '#ff0000', fontSize: '1.5rem'}}>{errors.biography}</label>}
                            {errors.biography && values.biography && <label style={{position: 'absolute', bottom: '-3rem', right: '1rem', color: '#ff0000', fontSize: '1.5rem'}}>{'Words' + ' ' + values.biography.match(/[\w\d\’\'-]+/gi).length}</label>}
                            
                         </div>
                       
                         {Loading ?  <CircularProgress size={24} className="loading"/> : 
                       <Button 
                         bcolor="#134381"
                                background="#134381"
                                br="100rem"
                                style={{ margin: ".5rem 0" }}
                                fontSize="2rem"
                        onClick={allTouched}
                           style={{ alignSelf: 'center', color: '#FFF'}}>
                            {Status ? Status : 'submit'}
                        </Button>}
                    </StyledTask>
                )
            }}
        </Formik>
    )
};







