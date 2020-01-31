import React, { Component, useState } from 'react'
import Router from 'next/router';
import cookies from 'next-cookies';
import cookie from 'js-cookie';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import CreateIcon from '@material-ui/icons/Create';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { withAuthSync, logout, login } from '../../utils/auth'
import HeroSection from '../../components/HeroSection';
import { Button } from '../../components/Button';
import { StyledBanner, StyledContainer } from '../../components/styles/PageStyles';
import { GetForm, SendForm } from '../../components/forms/FormActions';
import { FixedDates, FixedBox } from '../../components/Dates';
import WithdrawPopup from '../../components/WithdrawPopup';


const StyledPage = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    width: ${props => props.theme.minWidth};
    background-color: ${props => props.theme.white};
    margin-top: 7rem;

      @media only screen 
  and (max-device-width: 768px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    width: ${props => props.theme.mobileWidth};    
}
    .authors{
        color: ${props => props.theme.primary};
        font-family: ${props => props.theme.MPLight};
        font-size: 2rem;
    &-title{
        color: ${props => props.theme.primary};
        font-family: ${props => props.theme.MPSemibold};
        font-size: 4.4rem;
    }

    &_sub-title{
        color: ${props => props.theme.primary};
        font-size: 3.5rem;
        font-family: ${props => props.theme.MPLightIt};
        padding-bottom: .5rem;
    }
    &-bold{
        color: ${props => props.theme.primary};
        font-family: ${props => props.theme.MPBold};
    }
    &-it{
        font-family: ${props => props.theme.MPLightIt};
    }
    &_action-box{
        display: flex;
        justify-content: flex-start;
        margin-bottom: 3rem;
    }
}
`;

const StyledBox = styled.div`
    display: flex;
    justify-content: space-between;
    min-height: 15rem;
    background-color: #D4DDE8;
    padding: 1rem;
    margin-bottom: 2rem;

`;

const StyledActionArea = styled.div`
    flex: 1 1 30%;
    margin-right: 1rem;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: flex-start;

    .action-paper{
        color: ${props => props.theme.black};
        font-family: ${props => props.theme.MPBold};
        font-size: 2rem;
    }
`;

const StyledInfoArea = styled.div`
    flex: 1 1 70%;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: flex-start;

    
    
    .paper-summary{
        align-self: flex-start;
        justify-items: flex-start;
    }

    .paper-title{
    font-size: 2rem;
    color: ${props => props.theme.MPRegular};

    }
    .paper-type{
    font-size: 1.5rem;
    color: ${props => props.theme.black};
    font-family: ${props => props.theme.MPLightIt};

    }
    .paper_task{
        cursor: pointer;
    color: ${props => props.theme.black};
    font-size: 1.5rem;
    font-family: ${props => props.theme.MPRegular};

    &-text{
            cursor: pointer;
        font-size: 1.5rem;
        align-self: flex-start;
        color: black;
        font-family: ${props => props.theme.MPRegular};
    }
   

    &-date{

        font-size: 1.5rem;
        align-self: flex-end;
        color: red;
        font-family: ${props => props.theme.MPRegular};

    }
    }
`;

const StyledCell = styled(TableCell)`
  &&.MuiTableCell-root {
    border-bottom: 0;
    padding: 0rem;
    }


`;

const FilledBanner = () => (

    <StyledBanner>
        <StyledContainer >
            <Typography className="banner-heading"  >Welcome to the Author's Dashboard</Typography>
            <Typography className="banner-sub" sfs="3rem">Manage your submissions below</Typography>
            {/* <div className="banner_bottom">
                <ExpandMoreOutlinedIcon className="banner_bottom-icon" />
                <Typography varient="h3" className="banner_bottom-details">Submit your review ready papers by 26 January 2020</Typography>
            </div> */}
        </StyledContainer>
    </StyledBanner>
)




class AuthorsAreaDash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasForm: false,
            formData: undefined,
            error: '',
            editForm: false,
            formType: '',
            paper: '',
            loading: 'false',
            status: undefined,
            values: {
                __csrf_token: ''
            },
        }
    }

    componentDidMount = () => {
        const { userLoggedIn } = this.state;
        const { logintoken } = cookie.get();
        console.log('cdm', logintoken)
        logintoken && !userLoggedIn ? this.setState(prev => ({
            userLoggedIn: !prev
        })) : null
    }

    pad = (n) => {
      return  n < '10' ? '0'+ n : n  
    }

    handleWithdrawn = async ({papercode}) => {
       await  this.setState(loading => ({loading: !loading}));
        const FT = 'withdraw'
        const url = `https://prelude.eurobrake.net/authors/withdraw/${papercode}`;
        const getCSRF = await GetForm(url)
        const csrf = await getCSRF.__csrf_token
        await this.setState({values: {__csrf_token: csrf}})
        
        
        return csrf

    }

 

    render() {
      
        // const papers = '';
        const monthNames = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        const { editForm, formType, values } = this.state;
        const { firstname } = this.props.authorData.author;
        const { papers } = this.props.authorData;
        const data = this.props.authorData;
        console.log({ papers, data })
        return (
            <>
                <HeroSection banner={FilledBanner} max="55%" src="https://live.staticflickr.com/65535/48016203938_fe5254376c_b.jpg">

                    Author's Area Dashboard
            </HeroSection>
                <StyledPage>
                    <FixedDates />
                    <FixedBox />

                    <div className="authors">

                        <Typography className="authors-title">{`Hi ${firstname}`}</Typography>
                        <Typography gutterBottom className="authors_sub-title">Welcome to the Author's Area</Typography>
                        <div className="authors_action-box">
                            <Link href="/authors/instructions">
                                <Button
                                    bcolor="#134381"
                                    padding="0.5rem 2rem"
                                    background="#134381"
                                    br="100rem"
                                    style={{ margin: "0 .5rem" }}
                                    fontSize="1.7rem"
                                >
                                    <AssignmentIcon style={{ fontSize: '3rem', marginRight: '.5rem' }} />
                                    INSTRUCTIONS & TEMPLATES
                    </Button>
                            </Link>

                            <Link href="/f/[id]/[formType]" as={`/f/profile/author`}>
                                <Button
                                    bcolor="#134381"
                                    padding="0.5rem 2rem"
                                    background="#134381"
                                    br="100rem"
                                    style={{ margin: "0 .5rem" }}
                                    fontSize="1.7rem">
                                    <ExitToAppIcon style={{ fontSize: '3rem', marginRight: '.5rem' }} />
                                    Edit Profile
                            </Button>
                            </Link>

                            <Button
                                bcolor="#134381"
                                padding="0.5rem 2rem"
                                background="#134381"
                                br="100rem"
                                style={{ margin: "0 .5rem " }}
                                fontSize="1.7rem"
                                onClick={logout}>
                                <ExitToAppIcon style={{ fontSize: '3rem', marginRight: '.5rem' }} />
                                logout
                    </Button>
                        </div>
                        <Typography gutterBottom className="authors-title" style={{ fontSize: '3rem', borderTop: '2px solid #134381', borderBottom: '2px solid #134381' }}>Your submission(s)</Typography>
                        {
                            papers ?

                                papers.map((paper) => {
                                    const papercode = paper.papercode; 
                                    return (
                                    <StyledBox key={papercode}>
                                        <StyledActionArea>
                                            <Typography gutterBottom className="action-paper">{papercode}</Typography>
                                            <div className="">
                                            {paper.withdrawn ? 
                                            <Typography className="action-paper" style={{color: "#ff0000" }}>WITHDRAWN</Typography>            
                                            :
                                            <>
                                            <Link
                                                href="/f/[id]/[formType]"
                                                as={`/f/${papercode}/abstract`} >
                                                <Button
                                                    bcolor="#134381"
                                                    background="#134381"
                                                    br="100rem"
                                                    padding="0.5rem 2rem"
                                                    style={{ margin: ".5rem 0" }}
                                                    fontSize="1.7rem">
                                                    <CreateIcon style={{ fontSize: '3rem', marginRight: '1rem' }} />
                                                    EDIT PAPER
                                                </Button>
                                            </Link>
                                            <WithdrawPopup values={values} url={`https://prelude.eurobrake.net/authors/withdraw/${papercode}`}>
                                            <Button
                                                onClick={() => this.handleWithdrawn({papercode})}
                                                bcolor="#134381"
                                                background="#134381"
                                                br="100rem"
                                                padding="0.5rem 2rem"
                                                style={{ margin: ".5rem 0" }}
                                                fontSize="1.7rem">
                                                 <CancelIcon style={{ fontSize: '3rem', marginRight: '1rem' }} />
                                               withdraw
                                                </Button>
                                            </WithdrawPopup>
                                            </>
                                            }
                                            </div>
                                        </StyledActionArea>
                                        <StyledInfoArea>
                                            <div className="paper-summary">
                                                <Typography className="paper-title">{paper.title}</Typography>
                                                <Typography gutterBottom className="paper-type">{paper.paper_type === 'full' ? (paper.paper_type.toUpperCase() + ' ' + '+' + ' ' + paper.presentation_type.toUpperCase()) : (paper.paper_type.toUpperCase())}</Typography>
                                            </div>
                                                        <Table className="" aria-label="simple table">
                                                            <TableBody style={{width: '100%'}}>
                                                                 {/* <TableRow key='titles'>
                                                                       
                                                                        <StyledCell align="left" className="" style={{width: '25%'}}>
                                                                                <Typography gutterBottom className="paper-text"  style={{fontSize: '1rem'}} >Status</Typography>
                                                                        </StyledCell>
                                                                       
                                                                        <StyledCell align="left" className="" style={{width: '50%'}}>
                                                                                <Typography gutterBottom className="paper-text"  style={{fontSize: '1rem'}} >Task</Typography>
                                                                        </StyledCell>
                                                                        <StyledCell align="left" className="" style={{width: '25%'}}>
                                                                                <Typography gutterBottom className="paper-text"  style={{fontSize: '1rem'}} >Done</Typography>
                                                                        </StyledCell>
                                                                        <StyledCell align="left" className="" style={{width: '25%'}}>
                                                                                <Typography gutterBottom className="paper-text" style={{fontSize: '1rem'}}  >Due</Typography>
                                                                        </StyledCell>
                                                                    </TableRow> */}
                                                               
                                                               
                                                                {paper.tasks && paper.tasks.map(task => {

                                                                           let dueDate = new Date(task.due);
                                                                           let doneDate = new Date(task.done);
                                                                            let taskDate = dueDate.getDate();
                                                                            let dateDone = doneDate.getDate();
                                                                            let taskMonth = dueDate.getMonth();
                                                                            let monthDone = doneDate.getMonth();
                                                                            let taskYear = dueDate.getFullYear();
                                                                            let yearDone = doneDate.getFullYear();
                                                                            let niceDate = this.pad(taskDate);
                                                                            let niceDone = this.pad(dateDone);
                                                                            {/* let prettierDate = this.prettyDate(niceDate); */}
                                                                            {/* let prettierDone = this.prettyDate(niceDone); */}
                                                                            let niceMonth = monthNames[taskMonth];
                                                                            let niceMonthDone = monthNames[monthDone];

                                                                            // todo CHECK THE RIGHT DATES!
                                                                return (
                                                                    <TableRow key={task.task}>
                                                                        <StyledCell component="th" scope="row" className="" style={{width: '10%'}}>{task.done !== null ?
                                                                            <CheckCircleIcon style={{ fontSize: '2rem', color: 'green', marginRight: '1rem' }} /> : <CancelIcon style={{ fontSize: '2rem', color: 'red', marginRight: '1rem' }} />}</StyledCell>
                                                                        <StyledCell align="left" className="">
                                                                            <Link
                                                                                href="/t/[id]/[taskType]"
                                                                                as={`/t/${paper.papercode}/${task.type}`} >
                                                                                <Typography gutterBottom className="paper_task-text" style={{width: '75%'}} >{task.task}</Typography>
                                                                            </Link></StyledCell>
                                                                        <StyledCell align="left" className="paper_task-date" style={{width: '26%'}}>{task.done == null ? 'Due' : niceDone + " " + niceMonthDone + " " + yearDone }</StyledCell>
                                                                        <StyledCell align="left" className="paper_task-date" style={{width: '26%'}}>{niceDate + " " + niceMonth + " " + taskYear}</StyledCell>
                                                                    </TableRow>
                                                                )}
                                                                )}
                                                            </TableBody>
                                                        </Table>
                                        </StyledInfoArea>
                                    </StyledBox>
                                )}) :
                                <StyledBox>
                                    <Typography gutterBottom className="authors-it" style={{ fontSize: '2rem' }}>You haven't submitted any abstracts yet</Typography>
                                </StyledBox>
                        }
                        <Typography gutterBottom className="authors" style={{ fontSize: '2rem' }}>For more information, please visit <Link href="/authorsAreaInstructions" ><a className="authors-bold">Instructions & Templates</a></Link> or email <a className="authors-bold" href="mailto:info@fisita.com">info@eurobrake.net</a></Typography>

                    </div>
                </StyledPage>
            </>

        )

    }
}
// ! STILL PUSHING TO HOME WHEN WE WANT TOPUSHTO aUTHORS AREA LOGIN => on fault
AuthorsAreaDash.getInitialProps = async ctx => {
    // We use `nextCookie` to get the cookie and pass the token to the frontend in the `props`.
    const { logintoken } = cookies(ctx) || {};
    const apiUrl = 'https://prelude.eurobrake.net/authors/dashboard ';
    
    const redirectOnError = async () => {
    let count = 0;
    if(count < 3) {
    console.log('redirect')
    count ++
     await process.browser ? Router.push('/authors') : ctx.res.writeHead(301, { Location: '/authors' })
    }else if(count >= 3){
    console.log('logout')
        await logout()
    }
    }

    if (logintoken) {
        try {
            const response = await fetch(apiUrl, {
                credentials: 'include',
                cache: 'no-cache',
                headers: {
                    Authorization: 'Bearer ' + logintoken,
                }

            })
            const data = await response.json()
            if (data.status === 'success') {
                return { authorData: data }
            }
            else {
                console.log('not reading success')
                console.log('stringyfied', JSON.stringify(data))
                // https://github.com/developit/unfetch#caveats
                return redirectOnError()
            }
        } catch (error) {
            // Implementation or Network error
            console.log(error)
            return await redirectOnError()
        }
    }

}
// ! local host editing
export default withAuthSync(AuthorsAreaDash)
// export default AuthorsAreaDash


// !
// ?
// *
// todo