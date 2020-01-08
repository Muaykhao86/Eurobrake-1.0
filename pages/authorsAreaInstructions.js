import React, { Component } from 'react'
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import HeroSection from '../components/HeroSection';
import { StyledBanner, StyledContainer } from '../components/styles/PageStyles';
import InstructionsPopup from '../components/InstructionsPopup';
import {Button } from '../components/Button';
import Link from 'next/link';


const FilledBanner = () => (

    <StyledBanner>
        <StyledContainer >
            <Typography className="banner-heading"  >Submit your review ready papers</Typography>
            <Typography className="banner-sub" >Deadline for submissions is 26 January 2020</Typography>
            <div className="banner_bottom">
                <ExpandMoreOutlinedIcon className="banner_bottom-icon" />
                <Typography varient="h3" className="banner_bottom-details">Manage your submission in the Author's Area Dashboard</Typography>
            </div>
        </StyledContainer>
    </StyledBanner>
)


const StyledPage = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    width: ${props => props.theme.minWidth};
    background-color: ${props => props.theme.white};
     margin-top: 3rem;

    a{
          color: ${props => props.theme.primary};
        font-family: ${props => props.theme.MPBold};
        font-size: 2rem;
   
    }
    .authors{
        color: ${props => props.theme.primary};
        font-family: ${props => props.theme.MPLight};
        font-size: 2rem;
    
    &_top-box{
        display: flex;
        justify-content: space-between;
    }
   
    &-title{
        color: ${props => props.theme.primary};
        font-family: ${props => props.theme.MPSemibold};
        font-size: 4.4rem;
        margin-top: 3rem;
        margin-bottom: 3rem;
    }
   
    &_sub-title{
        color: ${props => props.theme.primary};
        font-size: 3.5rem;
        font-family: ${props => props.theme.MPLightIt};
        padding-bottom: .5rem;
        margin-top: 3rem;
        margin-bottom: 3rem;
    }
    &-bold{
        font-family: ${props => props.theme.MPBold};
    }
    &-it{
        font-family: ${props => props.theme.MPLightIt};
    }
}
`;


class AuthorsAreaInstructions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasForm: false,
            formData: undefined,
            error: '',
            userLoggedIn: false,
            page: 'authors'
        }
    }

    render() {
        return (
            <>
                <HeroSection banner={FilledBanner}  max="55%">
                    Author's Area Instructions & Templates
            </HeroSection>
                <StyledPage mt="10rem">
                    <div className="authors">
                    <div className="authors_top-box">
                    
                    <Typography className="authors-title">Instructions & Templates</Typography>
                    <Link href="/authorsAreaDash">
                          <Button
                        background="#134381"
                        br="100rem"
                        bcolor="#134381"
                        style={{ margin: '3.5rem 0', color:"#FFF" }}
                    >Back to Dashboard</Button>
                    </Link>
                    </div>
                    <Typography className="authors-title" style={{fontSize: '3rem'}}>Submit your Abstract</Typography>
                    <Typography gutterBottom className="authors">Whether you intend to submit a full written technical paper for peer review and inclusion in the Conference Proceedings or participate by offering an oral presentation only you must submit your abstract online by <span className="authors-bold">Sunday 27 October 2019.</span></Typography>
                    <Typography gutterBottom className="authors">This abstract will be available in the EuroBrake 2020 App which is used by delegates to select which presentations they would like to attend.</Typography>
                    <Typography gutterBottom className="authors"> Abstracts should be 350-500 words and are entered as text into the online form. </Typography>
                    <Typography className="authors-bold" style={{fontSize: '2rem' }}>When submitting your abstract, please ensure you specify who will be the presenting author and make sure you enter ALL the contributing author’s names and Companies.</Typography>
                    
                    <Typography className="authors-title" style={{fontSize: '3rem'}}>Submit your Abstract</Typography>
                    <Typography gutterBottom className="authors"> If your abstract has been accepted for presentation or as a poster at EuroBrake and you intend to submit a full written technical paper for peer review you are agreeing to follow FISITA's paper peer review process. </Typography>
                    <Typography gutterBottom className="authors"> Abstracts should be 350-500 words and are entered as text into the online form. You must submit your review-ready paper by <span className="authors-bold">Sunday 26 January 2020</span> using the templates provided below. You must address any comments and concerns raised by the review team to their satisfaction in order for your paper to be approved for publication and these modifications MUST be completed no later than <span className="authors-bold">Sunday 12 April 2020.</span> Abstracts should be 350-500 words and are entered as text into the online form. </Typography>
                    <Typography gutterBottom className="authors"> Before preparing your Technical Paper it is vital that you consult/download the Instructions (pdf) and Microsoft Word template so that your paper is formatted correctly. </Typography>
                    <Typography gutterBottom ><a href="https://www.fisita.com/documents/Instructions_for_Writing_Your_Technical_Paper.pdf">Instructions for Writing your Technical Paper (PDF document)</a>  </Typography>
                    <Typography gutterBottom ><a href="https://www.fisita.com/documents/Paper_Template_EuroBrake_new.docx"> Technical Paper Template (Microsoft Word document template) </a> </Typography>
                    <Typography gutterBottom ><span className="authors authors-bold" > Technical Paper Example (PDF document) - coming soon </span>  </Typography>
                    <Typography gutterBottom className="authors"> Please ensure your Technical paper is converted to PDF (files in any other format - i.e. Word - cannot be uploaded).  </Typography>
                    <Typography gutterBottom className="authors"> Final Versions of all approved technical papers, must be ready for publication in the EuroBrake 2020 Conference Proceedings by <span className="authors-bold">Wednesday 29 April 2020</span>, please ensure you submit your paper final version by then as it will be this version used in the EuroBrake 2020 Proceedings.  </Typography>
                    <Typography gutterBottom className="authors"> Please remember that your paper must be original material that has not been previously published and is not under review by another conference or journal. If your paper does not comply with this rule it will be rejected.</Typography>
                    <Typography gutterBottom className="authors">  Please check your Final PDF document carefully: No proof-reading or corrections will be made by the conference organisers. The Technical Paper must be submitted in English. </Typography>
                    
                    <Typography className="authors-title" style={{fontSize: '3rem'}}>Final Abstract</Typography>
                    <Typography gutterBottom className="authors">If you wish to update your abstract please do so in your Author's Area by <span className="authors-bold">Wednesday 29 April 2020</span></Typography>
                    <Typography gutterBottom className="authors">The Final Abstract for each paper will appear in the EuroBrake 2020 App which is used by delegates at EuroBrake to decide which Technical Sessions to attend. The Proceedings and Abstracts are distributed to full delegates free of charge.</Typography>
                    
                    <Typography className="authors-title" style={{fontSize: '3rem'}}>PowerPoint Presentation</Typography>
                    <Typography gutterBottom className="authors">All presentation data should be saved as PowerPoint files. All authors (i.e. those who have submitted a full written Technical Paper and those who are making an oral presentation only) should follow the guidelines below: </Typography>
                    <Typography gutterBottom ><span className="authors-bold" style={{fontSize: '2rem', textDecoration:'line-through'}}>Instructions for Writing your PowerPoint Presentation (PDF document) </span> </Typography>
                    <Typography gutterBottom ><a href="https://www.fisita.com/documents/EuroBrake_2020_Presentation_Slides_Template.pptx">EuroBrake PowerPoint Template - 16:9 (PPT document)</a> </Typography>
                    <Typography className="authors-bold" style={{fontSize: '2rem' }}>Please restrict the use of company logos or trade names to the first and last slides only.</Typography>
                    
                    <Typography className="authors-title" style={{fontSize: '3rem'}}>Draft PowerPoint Presentations (Oral only and Technical Paper Submissions)</Typography>
                    <Typography gutterBottom className="authors">ALL accepted submissions must upload their draft slides no later than <span className="authors-bold">Friday 1 May 2020. There will be NO extensions to this deadline. </span></Typography>
                    <Typography gutterBottom className="authors">Your draft slides will be checked and suggestions for modifications will be made by the Review Team within 2 weeks.</Typography>
                    
                    <Typography className="authors-title" style={{fontSize: '3rem'}}>Final PowerPoint Presentations(Oral only and Technical Paper Submissions)</Typography>
                    <Typography gutterBottom className="authors">Please update your slides using the modification suggestions given by the Review Team, and upload your final version no later than <span className="authors-bold">Sunday 24 May 2020. </span> This version will be used in the session room on site unless you upload a new version at the event itself. </Typography>
                    
                    <Typography className="authors-title" style={{fontSize: '3rem'}}>Permissions</Typography>
                    <Typography gutterBottom className="authors">FISITA would like to help you promote your work by publishing a pdf version of your slides on the Conference Website after the event. The link to download material will be sent to delegates after the event. ALL authors must choose whether or not to give permission for us to publish their slides in the ways mentioned above.</Typography>
                   
                    <Typography className="authors-title" style={{fontSize: '3rem'}}>Speaker Registration</Typography>
                    <Typography gutterBottom className="authors">One author per submission must register to attend EuroBrake no later than <span className="authors-bold">Monday 27 April 2020. </span>The primary author will receive a unique code to allow one author per submission to register at the reduced speaker rate. The use of the code will be checked and submissions with no registered author will be removed from the programme.</Typography>
                   
                    <Typography className="authors-title" style={{fontSize: '3rem'}}>Copyright Assignment</Typography>
                    <Typography gutterBottom className="authors">ALL authors submitting a full written paper must assign copyright of their materials to FISITA in order for it to be published in the Conference Proceedings. <InstructionsPopup>Click here for details.</InstructionsPopup></Typography>
                   
                    <Typography className="authors-title" style={{fontSize: '3rem'}}>Speaker's Biography</Typography>
                    <Typography gutterBottom className="authors">All authors who are taking part in one of the technical sessions must provide a short biography of the speaker who will deliver the presentation at the Conference. This biography will be used by the session chairman to introduce the speaker. Please refer to the following Guidelines document: </Typography>
                    <Typography gutterBottom ><span className="authors-bold" style={{fontSize: '2rem', textDecoration:'line-through'}}>Guidelines for writing your biography (PDF document)</span></Typography>
                   
                    <Typography className="authors-title" style={{fontSize: '3rem'}}>Audio Visual Facilities at the Conference</Typography>
                    <Typography gutterBottom className="authors">All presentation data should be saved as PowerPoint files. </Typography>
                    <Typography gutterBottom className="authors">You must use the conference laptops for PowerPoint presentations. Please bring your presentation on a USB stick as a backup. (Conference laptops are PC-based; Apple platforms will not be supported.) </Typography>
                    <Typography gutterBottom className="authors">If you have any special Audio Visual requirements (e.g. video etc.) you MUST check with the organisers in advance of the congress to see if these can be accommodated.</Typography>
                   
                    <Typography className="authors-title" style={{fontSize: '3rem'}}>Poster Presentations</Typography>
                    <Typography gutterBottom className="authors">ALL accepted submissions must upload their draft poster as a pdf no later than <span className="authors-bold">Friday 1 May 2020. There will be NO extensions to this deadline.</span></Typography>
                    <Typography gutterBottom className="authors">Your draft poster will be checked and suggestions for modifications will be made by the Review Team within 2 weeks.</Typography>
                    <Typography gutterBottom ><span className="authors-bold" style={{fontSize: '2rem', textDecoration:'line-through'}}>Instructions for Poster Presentations (PDF document) </span></Typography>
                    <Typography gutterBottom ><a href="https://www.fisita.com/documents/EuroBrake_2020_Pitch_Video_Template_Slide.pptx">Pitch Video PPT Slide Template</a></Typography>
                    <Typography gutterBottom className="authors">Please use the comments made by the Review Team to modify your poster and print this out and bring it with you to display on site. </Typography>
                    <Typography gutterBottom className="authors">Posters should be A0 size and in portrait orientation.</Typography>
                   
                   
                    </div>
            </StyledPage>
            </>
                )
        
            }
        }
        
        export default AuthorsAreaInstructions;
        
        
        // !
        // ?
        // *
        // todo


