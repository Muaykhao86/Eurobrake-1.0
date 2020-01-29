import React, {Component, useState} from 'react'
import { AddCircle, RemoveCircle } from '@material-ui/icons';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import styled from 'styled-components';
import Link from 'next/link';
import { Typography } from '@material-ui/core';
import withReveal from 'react-reveal/withReveal';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import Bounce from 'react-reveal/Bounce';
import { Button } from './Button';
import {SmlLogo} from './Icons';



const StyledDates = styled.div`
   max-width:100%;
   max-height: 100%;
   background-color: ${props => props.theme.primary};
    padding: 2rem;
    /* padding-left: 1.5rem; */
    
    border-left: 5px solid ${props => props.theme.secondary};
    display: flex;
    flex: 1 1 auto;
    flex-flow: column;
    justify-content: space-between;

    font-size: 2rem;
    .Dates{
        
        &-title{
        font-size: 2rem;
        font-family: ${props => props.theme.MPBlack};
        color: ${props => props.theme.white};
        align-self: flex-start;
        max-width: 90%;
        }
        &-date{
            font-size: 1.8rem;
        font-family: ${props => props.theme.MPBold};
        color: ${props => props.theme.white};
        align-self: flex-start;
        max-width: 90%;
        }
        &-text{
            font-size: 1.5rem;
        font-family: ${props => props.theme.MPLightIt};
        color: ${props => props.theme.white};
        align-self: flex-start;
        max-width: 90%;
        }

    }

`;

export function Dates(props) {
    return (
        
        <StyledDates MW={props.MW} MH={props.MH}>
            <Typography  as="h1" className="Dates-title" >Important Dates</Typography>
            {/* <Typography  as="h1"  className="Dates-date">26 January 2020</Typography>
            <Typography  as="p"  className="Dates-text">Deadline for submission of review ready papers</Typography> */}
            <Typography  as="h1"  className="Dates-date">12 April 2020 </Typography>
            <Typography  as="p" className="Dates-text" >Final deadline for modifications to technical papers</Typography>
            <Typography  as="h1"  className="Dates-date">01 May 2020</Typography>
            <Typography  as="p" className="Dates-text" >Deadline for draft oral-only presentations, posters and presentations associated with a technical paper</Typography>
            <Typography  as="h1"  className="Dates-date">01 May 2020</Typography>
            <Typography  as="p"  className="Dates-text">Deadline for speakers to register</Typography>
            <Typography  as="h1"  className="Dates-date">24 May 2020</Typography>
            <Typography  as="p" className="Dates-text" >Deadline to upload PPTs for on-site presentation</Typography>
        </StyledDates>  
    )
}

const StyledFixedDates = styled.div`
    position: fixed;
    z-index: 1;
    top: 14vh;
    right: ${props => props.RightHide ? '-21rem' : '0'};
    width: 25rem;
    max-height: 50rem; 
    min-height: 47rem;
    background-color: ${props => props.theme.primary};
    padding: 1rem;
    padding-left: 1.5rem;
    border-left: 5px solid ${props => props.theme.secondary};
        transition: all .3s ease-in;
    

    display: flex;
       @media only screen 
  and (max-device-width: 1000px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    display: none;
}
     

    flex-flow: column;
    justify-content: space-between;
    flex: 1 1 auto;

      
    .hide-box-dates{
        border: 2px solid #FFF;
        position: absolute;
        z-index: -100;
        bottom: -2rem;
        left: -3rem;
    }


    .Dates{
        
        &-title{
        font-size: 2rem;
        font-family: ${props => props.theme.MPBlack};
        color: ${props => props.theme.white};
        align-self: flex-start;
        max-width: 90%;

            &_hide{
                 font-size: 2.5rem;
            font-family: ${props => props.theme.MPBlack};
            color: ${props => props.theme.white};
            align-self: flex-start;
            max-width: 100%;
                  position: absolute;
                  left: -7.9rem;
                  top: 44%; 
                  transform: rotate(90deg);

            }
        }
        &-date{
            font-size: 1.5rem;
        font-family: ${props => props.theme.MPBold};
        color: ${props => props.theme.white};
        align-self: flex-start;
        max-width: 90%;
        }
        &-text{
            font-size: 1.5rem;
        font-family: ${props => props.theme.MPLightIt};
        color: ${props => props.theme.white};
        align-self: flex-start;
        max-width: 90%;
        }

    }
`;

// * IF I PUT IT IN I NEED TO HACVE IT TRIGGER AFTER THE HERO IMAGE
export const BounceFixedDates = withReveal(FixedDates, <Bounce left/>);

export function FixedDates(props) {

const [RightHide, setRightHide] = useState(true);

    return (
        
        <StyledFixedDates  RightHide={RightHide}>
            <div style={{ minHeight: '45rem'}}>
  { RightHide ? 
            <Typography gutterBottom as="h1" className="Dates-title_hide" >Important Dates</Typography>
            :
            <>
            <Typography gutterBottom as="h1" className="Dates-title" >Important Dates</Typography>
            {/* <Typography gutterBottom as="h1"  className="Dates-date">26 January 2020</Typography>
            <Typography gutterBottom as="p"  className="Dates-text">Deadline for submission of review ready papers</Typography> */}
            <Typography gutterBottom as="h1"  className="Dates-date">12 April 2020 </Typography>
            <Typography gutterBottom as="p" className="Dates-text" >Final deadline for modifications to technical papers</Typography>
            <Typography gutterBottom as="h1"  className="Dates-date">01 May 2020</Typography>
            <Typography gutterBottom as="p" className="Dates-text" >Deadline for draft oral-only presentations, posters and presentations associated with a technical paper</Typography>
            <Typography gutterBottom as="h1"  className="Dates-date">01 May 2020</Typography>
            <Typography gutterBottom as="p"  className="Dates-text">Deadline for speakers to register</Typography>
            <Typography gutterBottom as="h1"  className="Dates-date">24 May 2020</Typography>
            <Typography gutterBottom as="p" className="Dates-text" >Deadline to upload PPTs for on-site presentation</Typography>
             <Link href="/authors">
                <Button  br="500rem" padding="1rem" fontSize="1.5rem" style={{ color: '#FFF', fontSize: '1.5rem', margin: '0',marginTop: '1rem',}}>Authors Login</Button>
            </Link>
            </>
            }
            </div>
                 <div className="hide-box-dates">
                <a onClick={() => setRightHide(!RightHide)}> {RightHide === true? <AddIcon style={{background: '#134381', color: '#FFF', width: '5rem', height: '5rem'}}/> : <RemoveIcon style={{background: '#134381', color: '#FFF', width: '5rem', height: '5rem'}}/>} </a>
            </div>
        </StyledFixedDates>  
    )
}

const StyledFixedBox = styled.div`
    position: fixed;
    z-index: 1;
    top: 14vh;
    left: ${props => props.Hide ? '-21rem' : '0'};
    width: 25rem;
    max-height: 50rem; 
    min-height: 47rem;
    background-color: ${props => props.theme.primary};
    padding: 1rem;
    padding-right: 1.5rem;
    border-right: 5px solid ${props => props.theme.secondary};
        transition: all .3s ease-in;
    

    display: flex;
       @media only screen 
  and (max-device-width: 1000px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    display: none;
}
     

    flex-flow: column;
    justify-content: space-between;
    flex: 1 1 auto;

    
    .hide-box{
        border: 2px solid #FFF;

        position: absolute;
        z-index: -100;
        bottom: -2rem;
        right: -3rem;
    }

    .Box{
        
        &-title{
        text-align: end;
        font-size: 2rem;
        font-family: ${props => props.theme.MPBlack};
        color: ${props => props.theme.white};
        align-self: flex-end;
        max-width: 95%;
            &_hide{
                    font-size: 2.5rem;
            font-family: ${props => props.theme.MPBlack};
            color: ${props => props.theme.white};
            align-self: flex-start;
            width: 45rem;
                  position: absolute;
                  right: -21rem;
                  top: 48%; 
                  transform: rotate(90deg);


            }

        }
        &-date{
            text-align: end;
        font-size: 1.8rem;
        font-family: ${props => props.theme.MPSemibold};
        color: ${props => props.theme.secondary};
        align-self: flex-end;
        max-width: 90%;
        }
        &-text{
            text-align: end;
            font-size: 1.8rem;
        font-family: ${props => props.theme.MPLight};
        color: ${props => props.theme.white};
        align-self: flex-end;
        max-width: 90%;
        }
        &-text-it{
            text-align: end;
            font-size: 1.5rem;
        font-family: ${props => props.theme.MPLightIt};
        color: ${props => props.theme.white};
        align-self: flex-end;
        max-width: 90%;
        }
    }

    .logo_box{
        height: 10rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1 1 auto;
      
    }
/* (Hide) => setHide(!Hide) */
`;

export function FixedBox() {
const [Hide, setHide] = useState(true);
console.log(Hide)
    return (
        
        <StyledFixedBox Hide={Hide}>
            { Hide ? 
            <Typography gutterBottom as="h1" className="Box-title_hide" >Book your Early Bird Tickets today</Typography>
            :
            <>
            <Typography gutterBottom as="h1" className="Box-title" >Book your Early Bird Tickets for EuroBrake</Typography>
            <Typography gutterBottom as="p"  className="Box-text-it">Secure your tickets by 1 April 2020</Typography>
            <Typography gutterBottom as="h1"  className="Box-date"> Europe's braking technology conference & exhibition</Typography>
            <Typography gutterBottom as="p" className="Box-text" >2-4 June 2020,</Typography>
            <Typography gutterBottom as="p" className="Box-text" >CCIB, Barcelona, Spain</Typography>
            <Link href="/pricing">
                <Button br="500rem" padding="1rem " fontSize="1.5rem" style={{marginTop: '1rem', color: '#FFF', }}>Pricing/Registration</Button>
            </Link>           
            <div className="logo_box">
                <SmlLogo width="10rem" height="10rem"/>
            </div>
            </>}
            <div className="hide-box">
                <a onClick={() => setHide(!Hide)}> {Hide === true? <AddIcon style={{background: '#134381', color: '#FFF', width: '5rem', height: '5rem'}}/> : <RemoveIcon style={{background: '#134381', color: '#FFF', width: '5rem', height: '5rem'}}/>} </a>
            </div>
        </StyledFixedBox>  
    )
}



const StyledBox = styled.div`
     max-width:100%;
   max-height: 100%;
   background-color: ${props => props.theme.primary};
    padding: 2rem;
    
    border-right: 5px solid ${props => props.theme.secondary};
    display: flex;
    flex: 1 1 auto;
    flex-flow: column;
    justify-content: space-between;

    font-size: 2rem;
   
     

    .Box{
        
        &-title{
        text-align: end;
        font-size: 2rem;
        font-family: ${props => props.theme.MPBlack};
        color: ${props => props.theme.white};
        align-self: flex-end;
        max-width: 95%;
        }
        &-date{
            text-align: end;
        font-size: 1.8rem;
        font-family: ${props => props.theme.MPSemibold};
        color: ${props => props.theme.secondary};
        align-self: flex-end;
        max-width: 90%;
        }
        &-text{
            text-align: end;
            font-size: 1.8rem;
        font-family: ${props => props.theme.MPLight};
        color: ${props => props.theme.white};
        align-self: flex-end;
        max-width: 90%;
        }
        &-text-it{
            text-align: end;
            font-size: 1.5rem;
        font-family: ${props => props.theme.MPLightIt};
        color: ${props => props.theme.white};
        align-self: flex-end;
        max-width: 90%;
        }
    }

    .logo_box{
        height: 10rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1 1 auto;
    }
`;

export function Box(props) {
    return (
        
        <StyledBox>
            <Typography gutterBottom as="h1" className="Box-title" >Book your Early Bird Tickets for EuroBrake</Typography>
            <Typography gutterBottom as="p"  className="Box-text-it">Secure your tickets by 1 April 2020</Typography>
            <Typography gutterBottom as="h1"  className="Box-date"> Europe's braking technology conference & exhibition</Typography>
            <Typography gutterBottom as="p" className="Box-text" >2-4 June 2020,</Typography>
            <Typography gutterBottom as="p" className="Box-text" >CCIB, Barcelona, Spain</Typography>
            <Link href="/pricing">
                <Button onClick={props.handleClick} br="500rem" padding="1rem" fontSize="1.5rem" style={{ color: '#FFF', fontSize: '1.5rem', margin: '0',marginTop: '1rem',}}>Pricing/Registration</Button>
            </Link>           
            <div className="logo_box">
                <SmlLogo width="10rem" height="10rem"/>
            </div>
            
        </StyledBox>  
    )
}

// const StyledMoBox = styled.div`
//      max-width:100%;
//    max-height: 100%;
//    background-color: ${props => props.theme.primary};
//     padding: 2rem;
    
//     display: flex;
//     flex: 1 1 auto;
//     flex-flow: column;
//     justify-content: space-between;

//     font-size: 2rem;
   
     

//     .Box-mob{
        
//         &-title{
//         font-size: 3rem;
//         font-family: ${props => props.theme.MPBlack};
//         color: ${props => props.theme.white};
//         align-self: center;
//         }
//         &-date{
//         font-size: 1.8rem;
//         font-family: ${props => props.theme.MPSemibold};
//         color: ${props => props.theme.secondary};
//         align-self: center;
//         }
//         &-text{
//             font-size: 1.8rem;
//         font-family: ${props => props.theme.MPLight};
//         color: ${props => props.theme.white};
//         align-self: center;
//         }
//         &-text-it{
//             font-size: 2.5rem;
//         font-family: ${props => props.theme.MPLightIt};
//         color: ${props => props.theme.white};
//         align-self: center;
//         }
//     }

//     .logo_box-mob{
//         height: 10rem;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         flex: 1 1 auto;
//     }
// `;

// export function MoBox(props) {
//     return (
        
//         <StyledMoBox>
//             <Typography gutterBottom as="h1" className="Box-title" >Book your Early Bird Tickets for EuroBrake</Typography>
//             <Typography gutterBottom as="p"  className="Box-text-it">Secure your tickets by 1 April 2020</Typography>
//             <Link href="/ticketPortal">
//                 <Button onClick={props.handleClick} br="500rem" padding="2rem 11rem" fontSize="2.5rem" style={{ color: '#FFF', fontSize: '2.5rem', margin: '0', marginTop: '2rem', alignSelf: 'center' }}>Book Now</Button>
//             </Link>           
//             <div className="logo_box-mob">
//                 <SmlLogo width="20rem" height="20rem"/>
//             </div>
            
//         </StyledMoBox>  
//     )
// }


