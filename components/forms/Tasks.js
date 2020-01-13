import React, { Component, useState } from 'react'
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import { Formik, Form, Field, } from 'formik';
import { TextField, SimpleFileUpload, Checkbox} from 'formik-material-ui';
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

}

render(){

    const {presets, csrf, apiUrl, paperId, type} = props;
    console.log(presets, csrf, apiUrl, paperId, type);
    
    return (
        // ! NEED PRESETS FOR TASKS
        <Formik
            enableReinitialize
        >
            {({ values}) => {
                console.log(values, 'Tasks')
                return (
                    <StyledForm>
                        <Typography>Powerpoint Task</Typography>
                         <div className="form-field">
                            <label
                                htmlFor="label"
                                className="form-label">
                                I have read the <Link href="/authorsAreaInstructions"><a>Instructions for Preparing your Powerpoint Presentation</a></Link> and have followed the guidance.
                        </label>
                            <Field
                                className="form-input"
                                value={values.accept}
                                style={{ color: '#134381' }}
                                name="accept"
                                component={Checkbox}
                            />
                        </div>
                         <div className="form-field">
                            <label
                                htmlFor="label"
                                className="form-label">
                                File upload
                        </label>
                            <Field
                                className="form-input"
                                value={values.ppt_filename}
                                style={{ color: '#134381' }}
                                name="ppt_filenamee"
                                component={SimpleFileUpload}
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





