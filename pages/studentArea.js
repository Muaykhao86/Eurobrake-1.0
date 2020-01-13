import React ,{useEffect} from 'react'
import styled from 'styled-components';
import HeroSection from '../components/HeroSection';
import Typography from '@material-ui/core/Typography';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import {StyledPage, StyledBanner, StyledContainer} from '../components/styles/PageStyles';
import {FixedDates} from '../components/Dates';
import { GetForm } from '../components/forms/FormActions';



// * NEED TO SORT OUT A PAGE TO TEST FORMSA AND LINKS FORM ONE PAGE WOITH PIUT BEIN ONLINE AL THE TIME


   
export default () => {

  const GetDef = async (type, paper) => {
      console.log({type, paper})
            const formData = await  GetForm(`https://prelude.eurobrake.net/authors/tasks/${type}/${paper}?definition=1`);
            const res = await formData;
           return  console.log({res});

    }

return (

<>
    <HeroSection max="60%"  >
    Testing of the forms we are     
    </HeroSection>
    <StyledPage >
        <Typography>Get some definitions</Typography>
        <button onClick={() => GetDef('paper','EB2020-MDS-001')}>Tech paper</button>
        {/* NEED TO TEST WITH PAPER THAT HAS THE TASK 
        EG 001 */}
        <button onClick={() => GetDef('ppt','EB2020-MDS-002')}>PPT</button>
        {/*presets: {}
__csrf_token: "7b93eaa451b408e1cf83dbae998f29f1072de6f7,422d0986d94f6957c0b0ba6cb380ce638dd654aa,1578919293"
status: "success"
form: Array(3)
0:
required: "Please make sure you read the instructions and that your document complies, then confirm by checking the box below."
options: Array(1)
0: {value: "yes", label: "I have read the instructions and followed the guidance"}
length: 1
__proto__: Array(0)
name: "accept"
type: "checkbox"
__proto__: Object
1:
required: "Please upload your presentation in PowerPoint format."
accept_filetypes: Array(2)
0: "ppt"
1: "pptx"
length: 2
__proto__: Array(0)
name: "ppt_filename"
label: "PowerPoint upload:"
type: "file"
divider: 1
allow_preset: 0
__proto__: Object
2:
name: "author_notes"
label: "Notes for reviewers:"
type: "textarea"
divider: 1
__proto__: Object
length: 3
__proto__: Array(0)
expects: "formdata"
logintoken: "6rL0apksDdqXRS5KzKUHXN" */}
        <button onClick={() => GetDef('permissions','EB2020-MDS-002')}>permissions</button>
{/* presets: {}
__csrf_token: "4857efa581698029ebe300bc0db7fadf1830c9e6,9abd2676c8ddcca5e1006b05bc5aac9f0ca72953,1578919565"
status: "success"
form: Array(2)
0:
html: "<p>We would like to support you to promote your work to EuroBrake attendees by making your poster PDF available on a private area of the conference website via a password protected link sent round after the event.</p>"
type: "html"
__proto__: Object
1:
required: "Please indicate whether you grant permission to include your presentation in the conference downloads."
options: Array(2)
0: {value: "yes", label: "Yes, I grant permission for my presentation to be included"}
1: {value: "no", label: "No, I do not grant permission"}
length: 2
__proto__: Array(0)
name: "ok_to_publish_ppt"
label: "Grant permission?"
type: "radio"
__proto__: Object
length: 2
__proto__: Array(0)
expects: "json"
logintoken: "6rL0apksDdqXRS5KzKUHXN"
__proto__: Object */}
        <button onClick={() => GetDef('poster-accept','EB2020-MDS-003')}>poster-accept</button>{/* NEED TO RE TEST*/}
{/*  */}
        <button onClick={() => GetDef('poster','EB2020-MDS-002')}>poster</button>
{/*  */}
        <button onClick={() => GetDef('pitchvideo','EB2020-MDS-002')}>pitchvideo</button>
{/*  */}
        <button onClick={() => GetDef('bio','EB2020-MDS-002')}>bio</button>
{/*  */}


    </StyledPage>
</>


)} 