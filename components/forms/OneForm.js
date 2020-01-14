import React, { Component } from 'react'
import {LoginForm} from './LoginForm';
import {AbstractForm} from './Abstract';
import {Authorprofile} from './Authorprofile';
import {Exhibitorprofile} from './Exhibitorprofile';
import {Esop} from './Esop';
import {Tasks} from './Tasks';
import { GetForm } from './FormActions';
import Typography from '@material-ui/core/Typography';


class OneForm extends Component {
   constructor(props) {
       super(props);
   this.state = {
       presets: ''
   }
   }

    render() {
        const {form,  type, presets, csrf, apiUrl, paperId,} = this.props;

       console.log('1form', form, type, presets, csrf, apiUrl, paperId)
          
            {switch(form) {
                case'abstract' : 
                return <AbstractForm type={type} presets={presets} csrf={csrf} apiUrl={apiUrl} paperId={paperId}/>;
                case'exhibitor' : 
                return <Exhibitorprofile type={type} presets={presets} csrf={csrf} apiUrl={apiUrl} paperId={paperId}/>;
                case'author' : 
                return <Authorprofile type={type} presets={presets} csrf={csrf} apiUrl={apiUrl} paperId={paperId} />;
                case'esop' : 
                return <Esop type={type} presets={presets} csrf={csrf} apiUrl={apiUrl} paperId={paperId}/>;
                case'login' : 
                return <LoginForm type={type} presets={presets} csrf={csrf} apiUrl={apiUrl} paperId={paperId}/>;
                case'tasks' : 
                return <Tasks type={type} presets={presets} csrf={csrf} apiUrl={apiUrl} paperId={paperId}/>;
                default: 
                    return <Typography>No form found please try again or contact info@eurobrake.net</Typography>;            
            }
            }
    }
}

// export default withAuthSync(Edit)
export default OneForm


// !
// ?
// *
// todo