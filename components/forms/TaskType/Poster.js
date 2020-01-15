import React, { Component, useState } from 'react'
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import { Formik,  Field, } from 'formik';
import { TextField, SimpleFileUpload, CheckboxWithLabel, Checkbox, RadioGroup} from 'formik-material-ui';
import { Button } from '../../Button';
import { SendForm } from '../FormActions';
import {StyledTask} from '../Taskstyles';



// async (values, actions) => {
//                 await Sendtask({ values, url })
//             }

export class Poster extends Component{
constructor(props) {
    super(props);
    this.state = {
        taskType: ''
    }
    // todo => depending on the task name I will render the task dynamicly 
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
        pitchvideo_filename: '',        
        author_notes: '',
        ok_to_publish_poster: ''
    }

    const {presets, csrf, apiUrl, paperId, type} = this.props;
    console.log('tasks', presets, csrf, apiUrl, paperId, type);
    
    return (
        // ! NEED PRESETS FOR TASKS


        <Formik
         initialValues={emptyInitial}
            enableReinitialize
        >
            {({ values, handleChange}) => {
                console.log(values, 'Tasks')
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
                                style={{ color: '#134381', }}
                                name="accept"
                                component={CheckboxWithLabel}
                            >
                            
                            </Field>
                        </div>
                        <div className="task-field" style={{marginBottom: '2rem'}}>
                            <label
                                htmlFor="label"
                                className="task-label">
                                Pitch video slide upload
                        </label>
                            <Field
                                className="task-input"
                                value={values.poster_filename}
                                style={{ color: '#134381' }}
                                name="pitchvideo_filename"
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
                                name="ok_to_publish_pitchvideo"
                                component={RadioGroup}
                            >
                                <label
                                    style={{ margin: '1rem' }}
                                    htmlFor="label"
                                    className="task-label">
                                    Yes, I grant permission for my presentation to be included
                                        <input
                                        onChange={handleChange}                                        
                                        style={{ margin: '1rem' }}
                                        type="radio"
                                        name="ok_to_publish_poster"
                                        value="yes"
                                        id="yes"
                                    />
                                </label>
                                <label
                                    style={{ margin: '1rem' }}
                                    htmlFor="label"
                                    className="task-label">
                                    No, I do not grant permission
                                        <input
                                    style={{ margin: '1rem' }}
                                        onChange={handleChange}                                        
                                        type="radio"
                                        name="ok_to_publish_poster"
                                        value="no"
                                        id="no"
                                    />
                                </label>
                            </Field>
                        </div>
                       
                        <Button 
                            onClick={() => console.log(values)}
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
}






