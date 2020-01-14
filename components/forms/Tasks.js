import React, { Component, useState } from 'react'
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import { Formik, Form, Field, } from 'formik';
import { TextField, SimpleFileUpload, CheckboxWithLabel, Checkbox} from 'formik-material-ui';
import { StyledForm } from './Formstyles';
import { Button } from '../Button';
import { SendForm } from './FormActions';



// async (values, actions) => {
//                 await SendForm({ values, url })
//             }

export class Tasks extends Component{
constructor(props) {
    super(props);
    this.state = {
        taskType: ''
    }
    // todo => depending on the task name I will render the form dynamicly 
    // * will have 
    //   paper
    //   ppt
    //   permissions
    //   poster-accept
    //   poster
    //   bio
    //   pitchvideo
    // * EACH WILL BE A COMPONENT
}

render(){
    const emptyInitial = {
        accept: '',
        ppt_filename: '',
        author_notes: ''
    }

    const {presets, csrf, apiUrl, paperId, type} = this.props;
    console.log('tasks', presets, csrf, apiUrl, paperId, type);
    
    return (
        // ! NEED PRESETS FOR TASKS
        <Formik
         initialValues={presets || emptyInitial}
            enableReinitialize
        >
            {({ values, handleChange,}) => {
                console.log(values, 'Tasks')
                return (
                    <StyledForm>
                        <Typography className="form-title">{type}</Typography>
                         <div className="form-field">
                            <label
                                htmlFor="label"
                                className="form-label"
                                >
                                I have read the <Link href="/authorsAreaInstructions"><a className="form-link_bold" >Instructions for Preparing your Powerpoint Presentation</a></Link> and have followed the guidance notes available there.
                        </label>
                            <Field
                                className="form-input"
                                value={values.accept}
                                style={{ color: '#134381' }}
                                name="accept"
                                component={CheckboxWithLabel}
                            />
                        </div>
                         <div className="form-field">
                            <label
                                htmlFor="label"
                                className="form-label">
                                File upload
                        </label>
                            <Field
                                
                                className="form-input_file"
                                value={values.ppt_filename}
                                style={{ color: '#134381' }}
                                name="ppt_filename"
                                component={SimpleFileUpload}
                                fullWidth
                            />
                        </div>
                         <div className="form-field">
                           <label
                                 htmlFor="label"
                                 className="form-label">
                                 Notes for reviewers:
                         </label>
                             <Field
                                 className="form-input"
                                 onClick={handleChange}
                                 value={values.author_notes}
                                 style={{ color: '#134381' }}
                                 name="author_notes"
                                 component="textarea"
                             />
                         </div>

                       
                        <Button 
                            onClick={() => console.log(values)}
                            bcolor="#134381"
                            background="#134381"
                            br="100rem"
                            style={{ margin: "3rem" }}
                            padding=".5rem 4rem"
                            fontSize="1.7rem">
                            Send
                        </Button>
                        
                    </StyledForm>
                )
            }}
        </Formik>
    )
};
}






