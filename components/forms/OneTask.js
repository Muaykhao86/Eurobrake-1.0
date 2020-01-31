import React, { Component } from 'react'
import {Paper} from './TaskType/Paper';
import {PPT} from './TaskType/PPT';
import {Permissions} from './TaskType/Permissions';
import {PitchVideo} from './TaskType/PitchVideo';
import {Poster} from './TaskType/Poster';
import {AcceptPoster} from './TaskType/AcceptPoster';
import {Bio} from './TaskType/Bio';
import Typography from '@material-ui/core/Typography';


class OneTask extends Component {
   constructor(props) {
       super(props);
   this.state = {
       presets: ''
   }
   }

    render() {
        const {type, presets, csrf, apiUrl, paperId,} = this.props;

          
            {switch(type) {
                case'paper' : 
                return <Paper type={type} presets={presets} csrf={csrf} apiUrl={apiUrl} paperId={paperId}/>;
                case'ppt' : 
                return <PPT type={type} presets={presets} csrf={csrf} apiUrl={apiUrl} paperId={paperId}/>;
                case'permissions' : 
                return <Permissions type={type} presets={presets} csrf={csrf} apiUrl={apiUrl} paperId={paperId} />;
                case'posteraccept' : 
                return <AcceptPoster type={type} presets={presets} csrf={csrf} apiUrl={apiUrl} paperId={paperId}/>;
                case'poster' : 
                return <Poster type={type} presets={presets} csrf={csrf} apiUrl={apiUrl} paperId={paperId}/>;
                case'pitchvideo' : 
                return <PitchVideo type={type} presets={presets} csrf={csrf} apiUrl={apiUrl} paperId={paperId}/>;
                case'bio' : 
                return <Bio type={type} presets={presets} csrf={csrf} apiUrl={apiUrl} paperId={paperId}/>;
                default: 
                    return <Typography>No task found please try again or contact info@eurobrake.net</Typography>;            
            }
            }
    }
}

// export default withAuthSync(Edit)
export default OneTask


// !
// ?
// *
// todo