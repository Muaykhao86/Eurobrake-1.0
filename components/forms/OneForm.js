import React, { Component } from 'react'
import {LoginForm} from './LoginForm';
import {AbstractForm} from './Abstract';
import {Authorprofile} from './Authorprofile';
import {Exhibitorprofile} from './Exhibitorprofile';
import {Esop} from './Esop';

class OneForm extends Component {
   constructor(props) {
       super(props);
   }

    render() {
        const {props, form, paper} = this.props;
        console.log('edit props', props)
            {switch(form) {
                case'abstract-edit' : 
                return <AbstractForm editPaper="true" paper={paper}/>;
                case'abstract' : 
                return <AbstractForm />;
                case'exhibitor-edit' : 
                return <Exhibitorprofile editPaper="true" />;
                case'exhibitor' : 
                return <Exhibitorprofile />;
                case'author-edit' : 
                return <Authorprofile editPaper="true" />;
                case'author' : 
                return <Authorprofile />;
                case'esop-edit' : 
                // return <Esop editPaper="true" />;
                case'esop' : 
                // return <Esop />;
                case'login' : 
                return <LoginForm />;
                default: 
                    return null;            
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