import React, { Component, useState } from 'react'
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import { Formik,  Field, } from 'formik';
import { TextField, SimpleFileUpload, CheckboxWithLabel, Checkbox} from 'formik-material-ui';
import { Button } from '../../Button';
import { SendForm } from '../FormActions';
import { StyledTask } from '../TaskStyles';
import InstructionsPopup from '../../InstructionsPopup';
// import {PaperSchema} from '../TaskControl';



import * as Yup from 'yup';

// export 
const PaperSchema = Yup.object().shape({
    accept: Yup.string()
        .required('Required'),
    technicalpaper_filename: Yup.mixed()
        .required('Required'),
    author_notes: Yup.string()
    .max(750, 'too many words'),
    copyright: Yup.string()
        .required('Required'),
});
 



export const Paper = (props) => {


    const emptyInitial = {
        accept: '',
        ppt_filename: '',
        author_notes: '',
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
            {({ values, handleChange, setFieldValue}) => {
                console.log(values, 'Tasks')
                
                
                const onSubmit = async () => {
                  values.__csrf_token = csrf;
                  {/* await SendForm({values, csrf, url}) */}
                    console.log('sending', values, url)
                    
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
                                style={{ color: '#134381' }}

                                >
                                I have used the templates available in the <Link href="/authorsAreaInstructions"><a className="task-link_bold" >Instructions and Templates</a></Link> section of the Author’s Area and I have also followed the guidance notes available there.
                        </label>
                            <Field
                                onClick={async (e) =>  {
                                  await  console.log(e.target.value)
                                  await  setFieldValue('accept', 'yes')
                                    }}
                                className="task-checkboxField-box"
                                style={{ color: '#134381', }}
                                value={values.accept}
                                name="accept"
                                component={CheckboxWithLabel}
                            >
                            
                            </Field>
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
                                style={{ color: '#134381' }}

                                >
                                I agree to assign copyright in this paper to FISITA (UK) Ltd.
                        </label>
                            <Field
                                onClick={() =>  setFieldValue('copyright', 'yes')}
                                className="task-checkboxField-box"
                                value={values.copyright}
                                style={{ color: '#134381', }}
                                name="copyright"
                                component={CheckboxWithLabel}
                            >
                            
                            </Field>
                        </div>
                       
                        <Button 
                            onClick={onSubmit}

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







