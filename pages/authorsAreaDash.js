import React, { Component } from 'react'
import Router from 'next/router';
import cookies from 'next-cookies';
import cookie from 'js-cookie';
import { Link } from '@material-ui/core';
import fetch from 'isomorphic-unfetch';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import CreateIcon from '@material-ui/icons/Create';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import { withAuthSync, logout, login } from '../utils/auth'
import HeroSection from '../components/HeroSection';
import { Button } from '../components/Button';
import { StyledBanner, StyledContainer } from '../components/styles/PageStyles';
import { Abstracts } from '../components/testAuthors';
import { GetForm, SendFile } from '../components/Forms';
import Popup from '../components/Popup';

const AreAbstracts = null || Abstracts ;

const StyledPage = styled.div`
    display: flex;
    
    flex-direction: column;
    align-self: center;
    width: ${props => props.theme.minWidth};
    background-color: ${props => props.theme.white};
    margin-top: 7rem;
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
        justify-content: space-between;
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
    flex: 1 1 33.33%;
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
    flex: 1 1 66.66%;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: flex-start;

    .paper-title{
    font-size: 2rem;
    color: ${props => props.theme.black};

    }
    .paper-type{
    font-size: 2rem;
    color: ${props => props.theme.black};
    font-family: ${props => props.theme.MPLightIt};

    }
    .paper_task{
    color: ${props => props.theme.black};
    font-size: 1.5rem;

    &-box{
        display: flex;
        align-items: flex-start;
    }}
`;


const FilledBanner = () => (

    <StyledBanner>
        <StyledContainer >
            <Typography className="banner-heading"  >Welcome to the Author's Area</Typography>
            <Typography className="banner-sub" sfs="3rem">Submit your review ready papers by 26 January 2020</Typography>
            <div className="banner_bottom">
                <ExpandMoreOutlinedIcon className="banner_bottom-icon" />
                <Typography varient="h3" className="banner_bottom-details">Submit your review ready papers by 26 January 2020</Typography>
            </div>
        </StyledContainer>
    </StyledBanner>
)

const url = {
    edit: 'https://prelude.eurobrake.net/edit/EB2020-MDS-002',
    editdef: 'https://prelude.eurobrake.net/edit/EB2020-MDS-002?definition=1',
    upload: 'https://prelude.eurobrake.net/upload',

}
// const Abstract =
//     Abstracts.map(paper => (
//         <StyledBox>
//             <StyledActionArea>
//                 <Typography gutterBottom className="action-paper">{paper.papercode}</Typography>
//                 {paper.withdrawn ?
//                     <Typography gutterBottom className="action-paper">WITHDRAWN</Typography>
//                     :
//                     <>
//                         <Link href="/edit">
//                             <Button
//                                 bcolor="#134381"
//                                 padding="0.5rem 2rem"
//                                 background="#134381"
//                                 br="100rem"
//                                 style={{ margin: ".5rem 0" }}
//                                 fontSize="1.7rem"
//                             >
//                                 <AssignmentIcon style={{ fontSize: '3rem', marginRight: '.5rem' }} />
//                                 Edit Paper
//                     </Button>
//                         </Link>
//                         <Button
//                             bcolor="#134381"
//                             background="#134381"
//                             br="100rem"
//                             padding="0.5rem 2rem"
//                             style={{ margin: ".5rem 0" }}
//                             fontSize="1.7rem"
//                         >
//                             <CancelIcon style={{ fontSize: '3rem', marginRight: '1rem' }} />
//                             WITHDRAW
//             </Button>
//                     </>}
//             </StyledActionArea>
//             <StyledInfoArea>
//                 <Typography className="paper-title">{paper.title}</Typography>
//                 <Typography gutterBottom className="paper-type">{paper.paper_type.toUpperCase()}</Typography>
//                 {paper.tasks && paper.tasks.map(task => {
//                     return (<div className="paper_task-box">
//                         {task.done === null ? <CheckCircleIcon style={{ fontSize: '2rem', color: 'green', marginRight: '1rem' }} /> : <CancelIcon style={{ fontSize: '2rem', color: 'red', marginRight: '1rem' }} />}
//                         <Typography gutterBottom className="paper_task">{task.task}</Typography>
//                     </div>)
//                 })}
//             </StyledInfoArea>
//         </StyledBox>
//     ));


class AuthorsAreaDash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasForm: false,
            formData: undefined,
            error: '',
            userLoggedIn: false,
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

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        // const {name} = this.props.authorData;
        const { userLoggedIn, hasForm } = this.state;
        console.log({ userLoggedIn, hasForm });
        return (
            <>
                <HeroSection banner={FilledBanner}>
                    Author's Area Dashboard
            </HeroSection>
                <StyledPage>
                    <div className="authors">

                        <Typography className="authors-title">Hi {'*USERNAME*'}</Typography>
                        <Typography gutterBottom className="authors_sub-title">Welcome to the Author's Area</Typography>
                        <div className="authors_action-box">
                            <Popup>
                                <CreateIcon style={{ fontSize: '3rem', marginRight: '1rem' }} />
                                UPLOAD FILE TEST
                            </Popup>
                            <Link href="/authorsAreaInstructions">
                                <Button
                                    bcolor="#134381"
                                    padding="0.5rem 2rem"
                                    background="#134381"
                                    br="100rem"
                                    style={{ margin: ".5rem" }}
                                    fontSize="1.7rem"
                                >
                                    <AssignmentIcon style={{ fontSize: '3rem', marginRight: '.5rem' }} />
                                    INSTRUCTIONS & TEMPLATES
                    </Button>
                            </Link>
                            <Button
                                bcolor="#134381"
                                padding="0.5rem 2rem"
                                background="#134381"
                                br="100rem"
                                style={{ margin: ".5rem 0" }}
                                fontSize="1.7rem"
                                onClick={() => GetForm(url.editdef)}>
                                <ExitToAppIcon style={{ fontSize: '3rem', marginRight: '.5rem' }} />
                                Edit Definition
                    </Button>

                            <Button
                                bcolor="#134381"
                                padding="0.5rem 2rem"
                                background="#134381"
                                br="100rem"
                                style={{ margin: ".5rem 0" }}
                                fontSize="1.7rem"
                                onClick={logout}>
                                <ExitToAppIcon style={{ fontSize: '3rem', marginRight: '.5rem' }} />
                                logout
                    </Button>
                        </div>
                        <Typography gutterBottom className="authors-title" style={{ fontSize: '3rem', borderTop: '2px solid #134381', borderBottom: '2px solid #134381' }}>Your Abstracts</Typography>
                        {AreAbstracts ?
                            <StyledBox>
                                <Typography gutterBottom className="authors-it" style={{ fontSize: '2rem' }}>You got some abstracts but I got some errors!</Typography>
                            </StyledBox>
                             :
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
                            {/* <Abstract /> */}

AuthorsAreaDash.getInitialProps = async ctx => {
    // We use `nextCookie` to get the cookie and pass the token to the frontend in the `props`.
    const { logintoken } = cookies(ctx);
    const apiUrl = 'https://prelude.eurobrake.net/dashboard ';
    const redirectOnError = () =>
        process.browser
            ? Router.push('/authorsArea')
            : ctx.res.writeHead(301, { Location: '/authorsArea' })
    if (logintoken) {
        try {
            // console.log({logintoken}, 'getIProps right before fetch call')
            // headers: {
            //     Authorization: 'Bearer ' + logintoken,
            // }
            const response = await fetch(apiUrl, {
                credentials: 'include',
                cache: 'no-cache',
                headers: {
                    Authorization: 'Bearer ' + logintoken,
                }

            })
            const data = await response.json()
            // console.log('Authors response Data =>', data.status, data);
            if (data.status === 'success') {
                console.log('res.ok', data)
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
            return redirectOnError()
        }
    }

}

export default withAuthSync(AuthorsAreaDash)
// export default AuthorsAreaDash


// !
// ?
// *
// todo