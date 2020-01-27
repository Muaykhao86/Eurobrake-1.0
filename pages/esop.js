import React from 'react'
import styled from 'styled-components';
import ReactPlayer from 'react-player'
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import HeroSection from '../components/HeroSection';
import StopIcon from '@material-ui/icons/Stop';
import {Button} from '../components/Button';
import {Quote2, MailIcon, PhoneIcon} from '../components/Icons';
import {FixedDates, FixedBox} from '../components/Dates';
import {Esop} from '../components/forms/Esop';



const StyledPage = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    width: ${props => props.max || props.theme.minWidth};
    background-color: ${props => props.theme.white};
    /* margin-top: 7rem; */
      @media only screen 
  and (max-device-width: 768px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    width: ${props => props.theme.mobileWidth};    
}

    .Esop{
        color: ${props => props.theme.primary};
        font-family: ${props => props.theme.MPLight};
        font-size: 2rem;

          &_icon{
        position: absolute;
        left: -29px;
        top: 9px;

        &-text{
        line-height: 3.5rem;/* needed? */
        position: relative;
        margin-left: 3rem;
        }
    }
    
    &-title{
        color: ${props => props.theme.primary};
        font-family: ${props => props.theme.MPSemibold};
        font-size: 4.4rem;
        margin-top: 3rem;
    }
    &_list{
        /* NEED TO INLINE BULLET POINTS! */
        list-style-type: none;
        list-style-position:inside;
        margin-bottom: 1rem;
/*         
        li{ 
            display: inline;
            vertical-align: middle;
        } */
           }
   
  

    &_list-title{
        margin-bottom: 1rem;
        font-family: ${props => props.theme.MPLight};
        font-size: 2rem;
    }
    &_sub-title{
        color: ${props => props.theme.primary};
        font-size: 3.5rem;
        font-family: ${props => props.theme.MPLightIt};
        padding-bottom: .5rem;
    }
    &-bold{
        font-family: ${props => props.theme.MPBold};
    }
    &-italic{
        font-family: ${props => props.theme.MPLightIt}
    }
    &-boldIt{
        font-family: ${props => props.theme.MPBoldIt}
    }

}
    .button_box{
        display: flex;
        justify-content: flex-start;
    }
    .infoBox{
        display: flex;
        flex-flow: column;
        justify-content: center;
        min-height: 24rem;
        background-color: ${props => props.theme.primary2};
        width: 100vw;
        position: relative;
        left: 50%;
        right: 50%;
        margin-left: -50.5vw;
        margin-right: -50.5vw;
        /* dont know why but it gves margin on 50%vh */

        &-text{
        padding: 2rem;
        align-self: center;
        width: 50%;
             @media only screen 
  and (max-device-width: 768px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
       width: 80%;
    };   
        } 
    }

    .video-box{
        /* display: flex; */
      
  position: relative;
  padding-top: 56.25%  /*Player ratio: 100 / (1280 / 720) */
}

.react-player {
  position: absolute;
  top: 0;
  left: 0;
}

    
    .margin-top5{
        margin-top: 5rem;

    }
    .margin-bottom1.5{
        margin-bottom: 1.5rem;
    }
`;

const StyledQuote = styled.div`
    margin-top: 5rem; 
    
`;


export default () => (
    <>
        <HeroSection 
        max="70%"
        src="https://live.staticflickr.com/65535/48015980517_8b8abbc7ef_b.jpg" 
             >
            Apply for the EuroBrake Student Opportunities Programme

        </HeroSection>
        <StyledPage>
            <FixedDates/>
            <FixedBox/>
            <div className="Esop">
            <Typography gutterBottom className="Esop-title ">Student Opportunities Programme</Typography>
            <div className="video-box margin-bottom1.5 margin-top5">
            <ReactPlayer className="react-player" url='https://www.youtube.com/embed/N-Nq9BH9-W4' playing width="100%" height="100%" />
            {/* <iframe width="480" height="270" src="https://www.youtube.com/embed/N-Nq9BH9-W4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            </div>
            <Typography gutterBottom className="Esop Esop-bold margin-top5">About the programme</Typography>
            <Typography gutterBottom className="Esop ">The EuroBrake Student Opportunities Programme (ESOP) offers students from around the world the chance to attend EuroBrake 2020.</Typography>
            <Typography gutterBottom className="Esop ">Selected students will be offered the opportunity to attend EuroBrake via a sponsorship package which offers a strong networking opportunities, a CV check/one to one career advice with HR representatives from the sponsor companies, access to the designated Student Lounge and much more. </Typography>
            <Typography gutterBottom className="Esop ">The 2020 application round is now open. </Typography>
            <div className="button_box">
            <Link href="/tempEsop">
            <Button
            background="#134381"
            br="100rem"
            bcolor="#134381"
            style={{margin: '3.5rem 0', }}
            >Apply here</Button>
            </Link>    
            </div>
            <Typography gutterBottom className="Esop-title">Become a sponsor</Typography>
            <Typography gutterBottom className="Esop ">Do you want to engage with and advise engineering and technology students who could become the mobility talent of tomorrow?</Typography>
            <Typography gutterBottom className="Esop ">Could you help to guide and support students who have a passion for mobility to join our international community?</Typography>
            <StyledQuote>
                <Quote2/>
            </StyledQuote>
            <div className="margin-top5">
            <Typography gutterBottom className="Esop ">The future embraces the challenges and opportunities of technology changes and trends so too do we at EuroBrake especially when it comes to inspiring the next generation of automotive engineers and technologists.</Typography>
            <Typography gutterBottom className="Esop ">As an ESOP 2020 sponsor you will have the opportunity to engage with students at EuroBrake; will offer you and your company an opportunity to meet students looking to develop and expand their knowledge of the world of braking.</Typography>
            <Typography gutterBottom className="Esop Esop-bold">Sponsorship opportunities start at just EUR 1,500.</Typography>
            <Typography gutterBottom className="Esop  Esop-bold" >For more information please contact FISITA: </Typography>
            <Typography gutterBottom className="Esop  Esop-bold Esop_icon-text" style={{}}><PhoneIcon width="20" height="20" className="Esop_icon"/> +44 (0) 1279883470 </Typography>
            <Typography gutterBottom className="Esop Esop-bold Esop_icon-text" style={{}}><MailIcon width="20" height="20" className="Esop_icon"/> sales@fisita.com</Typography>
            </div>
             <div className="button_box">
             <Button
             href="https://www.eurobrake.net/exhibition/brochure.pdf"
            background="#134381"
            br="100rem"
            bcolor="#134381"
            style={{margin: '3.5rem 0'}}
            >DOWNLOAD THE SPONSORSHIP BROUCHURE HERE</Button>
            </div>
             </div>
        </StyledPage>
    </>
)


 


            {/* <Link href="/Esopors">
                <Al>
                    List of Esopors
                </Al>
            </Link>
            <Link href="/EsoporsRegistration">
                <Al>
                    Register
                </Al>
            </Link> */}