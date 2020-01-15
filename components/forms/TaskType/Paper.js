import React, { Component, useState } from 'react'
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import { Formik,  Field, } from 'formik';
import { TextField, SimpleFileUpload, CheckboxWithLabel, Checkbox} from 'formik-material-ui';
import { Button } from '../../Button';
import { SendForm } from '../FormActions';
import {StyledTask} from '../Taskstyles';
import InstructionsPopup from '../../InstructionsPopup';




// async (values, actions) => {
//                 await Sendtask({ values, url })
//             }

export class Paper extends Component{
constructor(props) {
    super(props);
    this.state = {
        taskType: ''
    }
    
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
         initialValues={emptyInitial}
            enableReinitialize
        >
            {({ values, handleChange}) => {
                console.log(values, 'Tasks')
                return (
                    <StyledTask>
                        <Typography className="task-title">{paperId}</Typography>
                        <Typography className="task-title">Please upload your paper PDF using the form below.</Typography>
                         <div className="task-checkboxField">
                            <label
                                htmlFor="label"
                                className="task-checkboxField-label"
                                style={{ color: '#134381' }}

                                >
                                I have used the templates available in the <Link href="/authorsAreaInstructions"><a className="task-link_bold" >Instructions and Templates</a></Link> section of the Author’s Area and I have also followed the guidance notes available there.
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
                         <div className="task-field">
                            <label
                                htmlFor="label"
                                className="task-label">
                                PDF upload
                        </label>
                            <Field
                                className="task-input"
                                value={values.technicalpaper_filename}
                                style={{ color: '#134381' }}
                                name="ppt_filename"
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

                            <label
                                htmlFor="label"
                                className="task-checkboxField-label"
                                style={{ color: '#134381' }}

                                >
                                I agree to assign copyright in this paper to FISITA (UK) Ltd.
                        </label>
                            <Field
                                className="task-checkboxField-box"
                                value={values.copyright}
                                style={{ color: '#134381', }}
                                name="accept"
                                component={CheckboxWithLabel}
                            >
                            
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






