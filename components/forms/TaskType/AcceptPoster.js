import React, { Component, useState } from 'react'
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import { Formik,  Field, } from 'formik';
import { TextField, SimpleFileUpload, CheckboxWithLabel, Checkbox, RadioGroup} from 'formik-material-ui';
import { Button } from '../../Button';
import { SendForm } from '../FormActions';
import { StyledTask } from '../TaskStyles';



// async (values, actions) => {
//                 await Sendtask({ values, url })
//             }

export class AcceptPoster extends Component{
constructor(props) {
    super(props);
    this.state = {
        taskType: ''
    }

}

render(){
    const emptyInitial = {
       accept_poster_invitation: ''
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
                                    className="task-label">
                                         Yes, I will make a poster presentation
                                        <input
                                        onChange={handleChange}                                        
                                        style={{ margin: '1rem' }}
                                        type="radio"
                                        name="accept_poster_invitation"
                                        value="yes"
                                        id="yes"
                                    />
                                </label>
                                <label
                                    style={{ margin: '1rem' }}
                                    htmlFor="label"
                                    className="task-label">
                                    No, please withdraw my paper from EuroBrake 2020
                                        <input
                                    style={{ margin: '1rem' }}
                                        onChange={handleChange}                                        
                                        type="radio"
                                        name="accept_poster_invitation"
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






