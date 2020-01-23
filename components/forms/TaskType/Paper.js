import React, { Component, useState } from 'react'
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import { Formik,  Field, } from 'formik';
import { TextField, SimpleFileUpload, CheckboxWithLabel, Checkbox} from 'formik-material-ui';
import { Button } from '../../Button';
import { SendFile } from '../FormActions';
import { StyledTask } from '../TaskStyles';
import InstructionsPopup from '../../InstructionsPopup';
import {PaperSchema} from '../TaskControl';

export const Paper = (props) => {
const [Loading, setLoading] = useState(false);
    const [Toggle, setToggle] = useState(false);
    const [Status, setStatus] = useState(null);

    const emptyInitial = {
        accept: '',
        technicalpaper_filename: '',
        author_notes: '',
        copyright: '',
    }

    const {presets, csrf, apiUrl, paperId, type} = props;
    const url = `https://prelude.eurobrake.net/authors/tasks/paper/${paperId}`;
    console.log('tasks', presets, csrf, apiUrl, paperId, type, url);
    
    return (
        // ! NEED PRESETS FOR TASKS


        <Formik
         initialValues={emptyInitial}
            validationSchema={PaperSchema}
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
                    setLoading(true);
                  values.__csrf_token = csrf
                    console.log('submitting')
                  let res =  await SendFile({values, url, csrf});
                  let data = await  res && res.status;
                  console.log({status})
                 data && setStatus(data) && setToggle(true) && setLoading(false)
                  return 
              }

    
                return (
                    <StyledTask>
                        <Typography className="task-title">{paperId}</Typography>
                        <Typography className="task-title">Please upload your paper PDF using the form below.</Typography>
                         <div className="task-checkboxField">
                            {/* REQUIRED */}
                            <label
                                htmlFor="label"
                                className="task-checkboxField-label"
                                style={{ color: '#134381', width: '80%' }}

                                >
                                I have used the templates available in the <Link href="/authorsAreaInstructions"><a className="task-link_bold" >Instructions and Templates</a></Link> section of the Author’s Area and I have also followed the guidance notes available there.
                        </label>
                            <Field
                                className="task-checkboxField-box"
                                style={{ color: '#134381', }}
                                value={values.accept}
                                name="accept"
                                component={Checkbox}
                            >
                            </Field>
                           {errors.accept && <label style={{position: 'absolute', bottom: '-1rem', right: '1rem', color: '#ff0000', fontSize: '1.5rem'}}>{errors.accept}</label>}
                        </div>
                         <div className="task-field">
                            {/* REQUIRED AND FILE MUST BE A PDF */}
                            <label
                                htmlFor="label"
                                className="task-label">
                                PDF upload
                        </label>
                            <Field
                                className="task-input"
                                value={values.technicalpaper_filename}
                                style={{ color: '#134381' }}
                                name="technicalpaper_filename"
                                component={SimpleFileUpload}
                                fullWidth
                            />
                           {errors.technicalpaper_filename && <label style={{position: 'absolute', bottom: '-2rem', right: '1rem', color: '#ff0000', fontSize: '1.5rem'}}>{errors.technicalpaper_filename}</label>}
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
                         <div className="task-field-copy">

                        <Typography gutterBottom className="task-label">Please confirm that you agree to assign copyright, by checking the box below.</Typography>
                        <Typography gutterBottom className="task-label"><InstructionsPopup > Click here </InstructionsPopup>to read the copyright guidelines.</Typography>
                         </div>
                          <div className="task-checkboxField">

                            {/* REQUIRED */}
                            <label
                                htmlFor="label"
                                className="task-checkboxField-label"
                                style={{ color: '#134381'}}

                                >
                                I agree to assign copyright in this paper to FISITA (UK) Ltd.
                        </label>
                            <Field
                                className="task-checkboxField-box"
                                value={values.copyright}
                                style={{ color: '#134381', }}
                                name="copyright"
                                component={Checkbox}
                            >
                            </Field>
                            {errors.copyright && <label style={{position: 'absolute', bottom: '-1rem', right: '1rem', color: '#ff0000', fontSize: '1.5rem'}}>{errors.copyright}</label>}

                        </div>
                       
                         {Loading ?  <CircularProgress size={24} className="loading"/> : 
                       <Button 
                         bcolor="#134381"
                                background="#134381"
                                br="100rem"
                                style={{ margin: ".5rem 0", color: '#FFF' }}
                                fontSize="2rem"
                        onClick={allTouched}
                           style={{ fontSize: "1rem", height: '2rem', alignSelf: 'center'}}>
                            {Status ? Status : 'submit'}
                        </Button>}
                    </StyledTask>
                )
            }}
        </Formik>
    )
};







