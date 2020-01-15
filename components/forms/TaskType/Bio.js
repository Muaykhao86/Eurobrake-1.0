import React, { Component, useState } from 'react'
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import { Formik,  Field, } from 'formik';
import { TextField, SimpleFileUpload, CheckboxWithLabel, Checkbox} from 'formik-material-ui';
import { Button } from '../../Button';
import { SendForm } from '../FormActions';
import {StyledTask} from '../Taskstyles';



// async (values, actions) => {
//                 await Sendtask({ values, url })
//             }

export class Bio extends Component{
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
        biography: ''
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
                        <Typography className="task-title">Biographical information</Typography>
                        <Typography gutterBottom className="task-label">Please provide biographical details for <span className="task_bold" > the author who will be presenting your paper </span> at EuroBrake. The session chair will use the biography to introduce the presenter. Please ensure the biography is no more than 100 words. Guidelines and an example biography are provided for reference.</Typography>
                       
                        <Typography className="task-title" style={{textDecoration: 'underline'}}><a >Guidelines for writing your biography</a></Typography>
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
                         </div>
                        {/* <Typography className="task-title">Presenting Author</Typography> */}
                       
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






