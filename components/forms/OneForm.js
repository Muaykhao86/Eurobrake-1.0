import React, { Component } from 'react'
import {LoginForm} from './LoginForm';
import {AbstractForm} from './Abstract';
import {Authorprofile} from './Authorprofile';
import {Exhibitorprofile} from './Exhibitorprofile';
import {Esop} from './Esop';
import { GetForm } from './FormActions';


class OneForm extends Component {
   constructor(props) {
       super(props);
   this.state = {
       presets: ''
   }
   }

   componentDidMount (){
            const formData = await  GetForm(`https://prelude.eurobrake.net/edit/${paper}`);
            const presets = formData.presets;
          return  this.setState({presets: presets})
   }

    render() {
        const {form, paper} = this.props;
        const {presets} = this.state;
       console.log(form, paper)
            {switch(form) {
                case'abstract-edit' : 
                return <AbstractForm editPaper="true" paper={paper} presets={presets}/>;
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