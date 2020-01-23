import React, { Component, useState } from 'react'
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import { Formik,  Field, } from 'formik';
import { TextField, SimpleFileUpload, CheckboxWithLabel, Checkbox, RadioGroup} from 'formik-material-ui';
import { Button } from '../../Button';
import { SendForm } from '../FormActions';
import { StyledTask } from '../TaskStyles';
import {AcceptPosterSchema } from '../TaskControl';



export const AcceptPoster = (props) => {
    const [Loading, setLoading] = useState(false);
    const [Toggle, setToggle] = useState(false);
    const [Status, setStatus] = useState(null);
    const emptyInitial = {
       accept_poster_invitation: ''
    }

    const {presets, csrf, apiUrl, paperId, type} = props;
    console.log('tasks', presets, csrf, apiUrl, paperId, type);
    const url = `https://prelude.eurobrake.net/authors/tasks/posteraccept/${paperId}`;
    
    return (
        <Formik
         initialValues={emptyInitial}
         validationSchema={AcceptPosterSchema }
            enableReinitialize
        >
            {({ values, handleChange,  setFieldTouched, isValidating, validateForm, handleSubmit, errors}) => {
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
                  let res =  await SendForm({values, url, csrf});
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
                                        <input
                                        onChange={handleChange}                                        
                                        style={{ margin: '1rem' }}
                                        type="radio"
                                        name="accept_poster_invitation"
                                        value="yes"
                                        id="yes"
                                    />
                                         Yes, I will make a poster presentation
                                </label>
                                <label
                                    style={{ margin: '1rem' }}
                                    htmlFor="label"
                                    className="task-label-radio">
                                        <input
                                    style={{ margin: '1rem' }}
                                        onChange={handleChange}                                        
                                        type="radio"
                                        name="accept_poster_invitation"
                                        value="no"
                                        id="no"
                                    />
                                    No, please withdraw my paper from EuroBrake 2020
                                </label>
                            </Field>
                            {errors.accept_poster_invitation  && <label style={{position: 'absolute', bottom: '-1rem', right: '1rem', color: '#ff0000', fontSize: '1.5rem'}}>{errors.accept_poster_invitation}</label>}
                        </div>
                         {Loading ?  <CircularProgress size={24} className="loading"/> : 
                       <Button 
                         bcolor="#134381"
                                background="#134381"
                                br="100rem"
                                fontSize="2rem"
                        onClick={allTouched}
                           style={{ alignSelf: 'center', color: '#FFF'}}>
                            {Status ? Status : 'submit'}
                        </Button>}
                    {Toggle && <Typography className="form-title" style={{alignSelf: 'center'}}>{Status && Status.toUppercase()}</Typography>}

                    </StyledTask>
                )
            }}
        </Formik>
    )
};






