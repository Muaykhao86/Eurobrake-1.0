import React from 'react'
import styled from 'styled-components';
import HeroSection from '../components/HeroSection';
import Typography from '@material-ui/core/Typography';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import Grid from '@material-ui/core/Grid';
import { StyledPage, StyledBanner, StyledContainer } from '../components/styles/PageStyles';
import {FixedDates} from '../components/Dates';


const StyledAbout = styled.div`
        color: ${props => props.theme.primary};
        font-family: ${props => props.theme.MPLight};
        font-size: 2rem;
    .about{

        color: inherit;
        font-family: inherit;
        font-size: inherit;

    &-title{
        color: ${props => props.theme.primary};
        font-family: ${props => props.theme.MPSemibold};
        font-size: 4.4rem;
        margin-top: 3rem;
    }
    &_list{
         li{
        position: relative;
        list-style-type: none;
        list-style-position:inside;
        margin-left: 3rem;
        margin-bottom: 1rem;
        line-height: 3.5rem;
        /* list-style: square url('') */
        
            &:before{ 
                content: '■';
                position: absolute;
                font-size: 3.14rem;
                left: -27px;
                top: -6.1px;
                          }
        }
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
    }
`;

const NameBox = styled.div`
    margin-top: 3rem;
    display: flex;
    flex: 1 1 auto;
    justify-content: space-between;
    max-width: 70%;
`;
const ListBox = styled.div`
    margin-top: 3rem;
    display: flex;
    flex: 1 1 auto;
    justify-content: space-between;
    max-width: 80%;
`;

const StyledProfile = styled.div`
        display: flex;
        flex-flow: column;
        max-width: 12.7rem;
        margin: 2rem 0;
.profile{
        line-height: 1.2;
       
        font-size: 1.4rem;
        color: ${props => props.theme.primary};

    &-mediabox{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 16.9rem;
        width: 12.7rem;
        overflow: hidden;

        img{
            object-fit: contain;
           
        }

    }
    &_description{
        display: flex;
        flex-flow: column;
        align-items: center;
       
    &-title{
        font-family: ${props => props.theme.MPBold};
        text-align: center;
        margin: .5rem 0;
    }

    &-subtitle{
        font-family: ${props => props.theme.MPLight};
        text-align: center;
    }
    }
}




`;

export default () => (
    <>
        <HeroSection
            fs="10rem"
            max="57%"
        >
            About EuroBrake
    </HeroSection>
        <StyledPage mt="3rem">
            <FixedDates/>
            <StyledAbout >
                <Typography className="about-title">Welcome</Typography>
                <Typography gutterBottom className="about">The world’s largest conference and exhibition dedicated to braking technology.</Typography>
                <Typography gutterBottom className="about">EuroBrake was created in 2012 to address the profound changes in the demands made by the braking industry’s customers and end-users, and to provide a forum for companies, engineers and academics working in the area of brake technology to come together to share ideas. </Typography>
                <Typography gutterBottom className="about">Following seven years of growth, EuroBrake has become established as the world’s largest technical event of its kind, attended by 1,200 delegates in 2019, with a significant technical programme of 150 technical presentations and featuring 100 international organisations within the exhibition. EuroBrake attracts a global audience of engineers, scientists, academics and executives from the industries of passenger car, commercial vehicle, rail and the wider industrial sectors. </Typography>
                <Typography gutterBottom className="about">We invite you to join us at EuroBrake 2020, which will take place in Barcelona, Spain, one of the world’s leading connected, cultural and historical destinations. </Typography>
                <Typography gutterBottom className="about">EuroBrake 2020 is set to be another record-braking year, so why not come sponsor or exhibit at the event for the opportunity to reach an influential audience of braking specialists, to share knowledge and to connect with decision-makers from leading companies around the world. </Typography>
                <Typography gutterBottom className="about">Offering an enviable climate and world-leading hub for business, Barcelona has direct links with many of the world’s Capital cities, via air, road, rail and sea, making EuroBrake 2020 extremely accessible. </Typography>
                <Typography gutterBottom className="about">Presenting at this international and highly regarded conference is your opportunity to reach an influential audience of braking specialists, to share knowledge and to connect with decision-makers from leading companies around the world. The Call for Papers will be published soon so keep an eye out for its announcement in BrakingNews! </Typography>
                <Typography gutterBottom className="about">On behalf of FISITA and the EuroBrake Steering Committee, we invite you to participate in EuroBrake 2020, and we look forward to welcoming you to Barcelona next year.</Typography>
                <NameBox>
                    <div>
                        <Typography className="about about-bold">Chris Mason</Typography>
                        <Typography className="about">CEO, FISITA</Typography>
                    </div>
                    <div>
                        <Typography className="about about-bold">Harold Abendroth</Typography>
                        <Typography className="about">Chairman, EuroBrake</Typography>
                    </div>
                </NameBox>
                <Typography className="about-title">Who Attends EuroBrake?</Typography>
                <Typography gutterBottom className="about">EuroBrake is an essential learning and networking event for all engineers,
                    scientists and decision makers concerned with braking systems throughout
                    the value-chain, from OEMs to materials suppliers, including:
            </Typography>
                <ListBox>
                    <ul className="about_list">
                        <li><Typography gutterBottom className="about">Rail</Typography></li>
                        <li><Typography gutterBottom className="about">Passenger car</Typography></li>
                        <li><Typography gutterBottom className="about">Commercial Vehical</Typography></li>
                        <li><Typography gutterBottom className="about">Motorcycle</Typography></li>
                        <li><Typography gutterBottom className="about">Aerospace</Typography></li>
                        <li>Industry brakes</li>
                        <li>Wind turbines</li>
                    </ul>
                    <ul className="about_list">
                        <li><Typography gutterBottom className="about">Academia and research</Typography></li>
                        <li><Typography gutterBottom className="about">Application</Typography></li>
                        <li><Typography gutterBottom className="about">Research and development</Typography></li>
                        <li><Typography gutterBottom className="about">Materials</Typography></li>
                        <li><Typography gutterBottom className="about">Quality and process</Typography></li>
                        <li><Typography gutterBottom className="about">Testing and measurement</Typography></li>
                        <li><Typography gutterBottom className="about">Sales and purchasing</Typography></li>
                    </ul>
                </ListBox>
                <Typography className="about-title">Organisation</Typography>
                <Typography gutterBottom className="about">EuroBrake is organised by FISITA, the membership organisation that supports the automotive and mobility systems sector in its quest to advance technological development. </Typography>
                <Typography gutterBottom className="about">Having delivered against this mission for every generation of engineers since 1948, we are uniquely placed to promote excellence in mobility engineering and the development of safe, sustainable and affordable mobility solutions.</Typography>

                <Grid container  style={{display: 'flex', margin: '2.5rem 0', alignSelf: 'flexStart'}}>
                    <Grid item xs={3} >
                        <StyledProfile className="profile">
                            <div className="profile-mediabox">
                                <img  src="/images/AbendrothHarald.png" alt="profilePicture" className="profile-media" />
                            </div>
                            <div className="profile_description">
                                <Typography className="profile profile_description-title">
                                    Harald Abendroth
                                </Typography>
                                <Typography className="profile profile_description-subtitle">
                                    EuroBrake Chairman Consultant
                                </Typography>
                            </div>
                        </StyledProfile>
                    </Grid>
                    <Grid item xs={3}>
                        <StyledProfile className="profile">
                            <div className="profile-mediabox">
                                <img  src="/images/BartonDavid.png" alt="profilePicture" className="profile-media" />
                            </div>
                            <div className="profile_description">
                                <Typography className="profile profile_description-title">
                                   David Barton 
                                </Typography>
                                <Typography className="profile profile_description-subtitle">
                                   University of Leeds
                                </Typography>
                            </div>
                        </StyledProfile>
                    </Grid>
                    <Grid item xs={3}>
                        <StyledProfile className="profile">
                            <div className="profile-mediabox">
                                <img  src="/images/DesplanquesYannick.png" alt="profilePicture" className="profile-media" />
                            </div>
                            <div className="profile_description">
                                <Typography className="profile profile_description-title">
                                    Prof. Yannick Desplanques 
                                </Typography>
                                <Typography className="profile profile_description-subtitle">
                                    Centrale Lille
                                </Typography>
                            </div>
                        </StyledProfile>
                    </Grid>
                    <Grid item xs={3}>
                        <StyledProfile className="profile">
                            <div className="profile-mediabox">
                                <img  src="/images/JK.png" alt="profilePicture" className="profile-media" />
                            </div>
                            <div className="profile_description">
                                <Typography className="profile profile_description-title">
                                    Klaus Jäckel 
                                </Typography>
                                <Typography className="profile profile_description-subtitle">
                                    DAIMLER TRUCK AG
                                </Typography>
                            </div>
                        </StyledProfile>
                    </Grid>
                    <Grid item xs={3}>
                        <StyledProfile className="profile">
                            <div className="profile-mediabox">
                                <img  src="/images/LL.png" alt="profilePicture" className="profile-media" />
                            </div>
                            <div className="profile_description">
                                <Typography className="profile profile_description-title">
                                    Loïc Lelièvre 
                                </Typography>
                                <Typography className="profile profile_description-subtitle">
                                    FLERTEX
                                </Typography>
                            </div>
                        </StyledProfile>
                    </Grid>
                    <Grid item xs={3}>
                        <StyledProfile className="profile">
                            <div className="profile-mediabox">
                                <img  src="/images/MunchhoffJan.png" alt="profilePicture" className="profile-media" />
                            </div>
                            <div className="profile_description">
                                <Typography className="profile profile_description-title">
                                    Jan Münchhoff 
                                </Typography>
                                <Typography className="profile profile_description-subtitle">
                                    AUDI AG
                                </Typography>
                            </div>
                        </StyledProfile>
                    </Grid>
                    <Grid item xs={3}>
                        <StyledProfile className="profile">
                            <div className="profile-mediabox">
                                <img  src="/images/OstermeyerGeorg.png" alt="profilePicture" className="profile-media" />
                            </div>
                            <div className="profile_description">
                                <Typography className="profile profile_description-title">
                                    Prof. Dr. Georg Ostermeyer 
                                </Typography>
                                <Typography className="profile profile_description-subtitle">
                                    TU Braunschweig
                                </Typography>
                            </div>
                        </StyledProfile>
                    </Grid>
                    <Grid item xs={3}>
                        <StyledProfile className="profile">
                            <div className="profile-mediabox">
                                <img  src="/images/VollrathLudwig.png" alt="profilePicture" className="profile-media" />
                            </div>
                            <div className="profile_description">
                                <Typography className="profile profile_description-title">
                                    Ludwig Vollrath 
                                </Typography>
                                <Typography className="profile profile_description-subtitle">
                                    Formula Student Germany 
                                </Typography>
                            </div>
                        </StyledProfile>
                    </Grid>
             <Typography className="about-title">Advisory Board</Typography>
            <Typography gutterBottom className="about">The EuroBrake Advisory Board consists of representatives from major companies and research institutions which lead the field in braking technology today. 
                    The Advisory Board provides strategic advice and helps to ensure that EuroBrake continues to meet the needs of the international braking community.
            </Typography>
   
                    <Grid item xs={3} >
                        <StyledProfile className="profile">
                            <div className="profile-mediabox">
                                <img  src="/images/BijweJayashree.png" alt="profilePicture" className="profile-media" />
                            </div>
                            <div className="profile_description">
                                <Typography className="profile profile_description-title">
                                   Prof. Jayashree Bijwe 
                                </Typography>
                                <Typography className="profile profile_description-subtitle">
                                   Indian Institute of Technology
                                </Typography>
                            </div>
                        </StyledProfile>
                    </Grid>
                    <Grid item xs={3}>
                        <StyledProfile className="profile">
                            <div className="profile-mediabox">
                                <img  src="/images/StefanDorsch.png" alt="profilePicture" className="profile-media" />
                            </div>
                            <div className="profile_description">
                                <Typography className="profile profile_description-title">
                                    Dr. Stefan Dörsch 
                                </Typography>
                                <Typography className="profile profile_description-subtitle">
                                    DB Systemtechnik GmbH
                                </Typography>
                            </div>
                        </StyledProfile>
                    </Grid>
                    <Grid item xs={3}>
                        <StyledProfile className="profile">
                            <div className="profile-mediabox">
                                <img  src="/images/DufrenoyPhilippe.png" alt="profilePicture" className="profile-media" />
                            </div>
                            <div className="profile_description">
                                <Typography className="profile profile_description-title">
                                    Prof. Philippe Dufrénoy 
                                </Typography>
                                <Typography className="profile profile_description-subtitle">
                                    University of Lille
                                </Typography>
                            </div>
                        </StyledProfile>
                    </Grid>
                    <Grid item xs={3}>
                        <StyledProfile className="profile">
                            <div className="profile-mediabox">
                                <img  src="/images/FieldhouseJohn.png" alt="profilePicture" className="profile-media" />
                            </div>
                            <div className="profile_description">
                                <Typography className="profile profile_description-title">
                                   Prof. John Fieldhouse 
                                </Typography>
                                <Typography className="profile profile_description-subtitle">
                                  JDF Consulting
                                </Typography>
                            </div>
                        </StyledProfile>
                    </Grid>
                    <Grid item xs={3}>
                        <StyledProfile className="profile">
                            <div className="profile-mediabox">
                                <img  src="/images/FilipPeter.png" alt="profilePicture" className="profile-media" />
                            </div>
                            <div className="profile_description">
                                <Typography className="profile profile_description-title">
                                    Prof. Peter Filip 
                                </Typography>
                                <Typography className="profile profile_description-subtitle">
                                    Southern Illinois University Carbondal
                                </Typography>
                            </div>
                        </StyledProfile>
                    </Grid>
                    <Grid item xs={3}>
                        <StyledProfile className="profile">
                            <div className="profile-mediabox">
                                <img  src="/images/GraeberJohannes.png" alt="profilePicture" className="profile-media" />
                            </div>
                            <div className="profile_description">
                                <Typography className="profile profile_description-title">
                                    Johannes Gräber 
                                </Typography>
                                <Typography className="profile profile_description-subtitle">
                                    Knorr-Bremse - Systeme für Schienenfahrzeuge GmbH
                                </Typography>
                            </div>
                        </StyledProfile>
                    </Grid>
                    <Grid item xs={3}>
                        <StyledProfile className="profile">
                            <div className="profile-mediabox">
                                <img  src="/images/TheodorosGrigoratos.png" alt="profilePicture" className="profile-media" />
                            </div>
                            <div className="profile_description">
                                <Typography className="profile profile_description-title">
                                    Dr. Theodoros Grigoratos 
                                </Typography>
                                <Typography className="profile profile_description-subtitle">
                                    European Commission, Joint Research Centre
                                </Typography>
                            </div>
                        </StyledProfile>
                    </Grid>
                    <Grid item xs={3}>
                        <StyledProfile className="profile">
                            <div className="profile-mediabox">
                                <img  src="/images/KudoTakashi.png" alt="profilePicture" className="profile-media" />
                            </div>
                            <div className="profile_description">
                                <Typography className="profile profile_description-title">
                                    Takashi Kudo 
                                </Typography>
                                <Typography className="profile profile_description-subtitle">
                                   Akebono Brake Industry Co., Ltd.
                                </Typography>
                            </div>
                        </StyledProfile>
                    </Grid>
                    <Grid item xs={3} >
                        <StyledProfile className="profile">
                            <div className="profile-mediabox">
                                <img  src="/images/LauxmannRalph.png" alt="profilePicture" className="profile-media" />
                            </div>
                            <div className="profile_description">
                                <Typography className="profile profile_description-title">
                                    Ralph Lauxmann 
                                </Typography>
                                <Typography className="profile profile_description-subtitle">
                                    Continental AG
                                </Typography>
                            </div>
                        </StyledProfile>
                    </Grid>
                    <Grid item xs={3}>
                        <StyledProfile className="profile">
                            <div className="profile-mediabox">
                                <img  src="/images/LiebemannEdwin.png" alt="profilePicture" className="profile-media" />
                            </div>
                            <div className="profile_description">
                                <Typography className="profile profile_description-title">
                                    Edwin Liebemann 
                                </Typography>
                                <Typography className="profile profile_description-subtitle">
                                    Robert Bosch GmbH
                                </Typography>
                            </div>
                        </StyledProfile>
                    </Grid>
                    <Grid item xs={3}>
                        <StyledProfile className="profile">
                            <div className="profile-mediabox">
                                <img  src="/images/MichaelLingg.png" alt="profilePicture" className="profile-media" />
                            </div>
                            <div className="profile_description">
                                <Typography className="profile profile_description-title">
                                   Michael Lingg 
                                </Typography>
                                <Typography className="profile profile_description-subtitle">
                                   Volkswagen
                                </Typography>
                            </div>
                        </StyledProfile>
                    </Grid>
                    <Grid item xs={3}>
                        <StyledProfile className="profile">
                            <div className="profile-mediabox">
                                <img  src="/images/LinkRoy.png" alt="profilePicture" className="profile-media" />
                            </div>
                            <div className="profile_description">
                                <Typography className="profile profile_description-title">
                                    Roy Link 
                                </Typography>
                                <Typography className="profile profile_description-subtitle">
                                    Link Engineering
                                </Typography>
                            </div>
                        </StyledProfile>
                    </Grid>
                    <Grid item xs={3}>
                        <StyledProfile className="profile">
                            <div className="profile-mediabox">
                                <img  src="/images/MartinottoLuca.png" alt="profilePicture" className="profile-media" />
                            </div>
                            <div className="profile_description">
                                <Typography className="profile profile_description-title">
                                   Luca Martinotto 
                                </Typography>
                                <Typography className="profile profile_description-subtitle">
                                   ITT Friction Technologies 
                                </Typography>
                            </div>
                        </StyledProfile>
                    </Grid>
                    <Grid item xs={3}>
                        <StyledProfile className="profile">
                            <div className="profile-mediabox">
                                <img  src="/images/NishiwakiMasaaki.png" alt="profilePicture" className="profile-media" />
                            </div>
                            <div className="profile_description">
                                <Typography className="profile profile_description-title">
                                    Prof. Dr. Masaaki Nishiwaki 
                                </Typography>
                                <Typography className="profile profile_description-subtitle">
                                    Kanagawa Institute of Technology
                                </Typography>
                            </div>
                        </StyledProfile>
                    </Grid>
                    <Grid item xs={3}>
                        <StyledProfile className="profile">
                            <div className="profile-mediabox">
                                <img  src="/images/MeyerManfred.png" alt="profilePicture" className="profile-media" />
                            </div>
                            <div className="profile_description">
                                <Typography className="profile profile_description-title">
                                    Manfred Meyer 
                                </Typography>
                                <Typography className="profile profile_description-subtitle">
                                    ZF
                                </Typography>
                            </div>
                        </StyledProfile>
                    </Grid>
                    <Grid item xs={3}>
                        <StyledProfile className="profile">
                            <div className="profile-mediabox">
                                <img  src="/images/JiliangMo.png" alt="profilePicture" className="profile-media" />
                            </div>
                            <div className="profile_description">
                                <Typography className="profile profile_description-title">
                                   Prof. Dr. Jiliang Mo 
                                </Typography>
                                <Typography className="profile profile_description-subtitle">
                                    Southwest Jiaotong University
                                </Typography>
                            </div>
                        </StyledProfile>
                    </Grid>
                    <Grid item xs={3} >
                        <StyledProfile className="profile">
                            <div className="profile-mediabox">
                                <img  src="/images/MODY.png" alt="profilePicture" className="profile-media" />
                            </div>
                            <div className="profile_description">
                                <Typography className="profile profile_description-title">
                                    Parimal Mody 
                                </Typography>
                                <Typography className="profile profile_description-subtitle">
                                    NUCAP Industries
                                </Typography>
                            </div>
                        </StyledProfile>
                    </Grid>
                    <Grid item xs={3}>
                        <StyledProfile className="profile">
                            <div className="profile-mediabox">
                                <img  src="/images/TonyNicol.png" alt="profilePicture" className="profile-media" />
                            </div>
                            <div className="profile_description">
                                <Typography className="profile profile_description-title">
                                    Tony Nicol 
                                </Typography>
                                <Typography className="profile profile_description-subtitle">
                                    Meritor
                                </Typography>
                            </div>
                        </StyledProfile>
                    </Grid>
                    <Grid item xs={3}>
                        <StyledProfile className="profile">
                            <div className="profile-mediabox">
                                <img  src="/images/Rainer.png" alt="profilePicture" className="profile-media" />
                            </div>
                            <div className="profile_description">
                                <Typography className="profile profile_description-title">
                                    Dr. Rainer Müller-Finkeldei 
                                </Typography>
                                <Typography className="profile profile_description-subtitle">
                                    DAIMLER TRUCK AG
                                </Typography>
                            </div>
                        </StyledProfile>
                    </Grid>
                    <Grid item xs={3}>
                        <StyledProfile className="profile">
                            <div className="profile-mediabox">
                                <img  src="/images/PoissonFranck.png" alt="profilePicture" className="profile-media" />
                            </div>
                            <div className="profile_description">
                                <Typography className="profile profile_description-title">
                                   Franck Poisson 
                                </Typography>
                                <Typography className="profile profile_description-subtitle">
                                   SNCF
                                </Typography>
                            </div>
                        </StyledProfile>
                    </Grid>
                    <Grid item xs={3}>
                        <StyledProfile className="profile">
                            <div className="profile-mediabox">
                                <img  src="/images/RheeSeongK.png" alt="profilePicture" className="profile-media" />
                            </div>
                            <div className="profile_description">
                                <Typography className="profile profile_description-title">
                                   Dr. Seong K. Rhee 
                                </Typography>
                                <Typography className="profile profile_description-subtitle">
                                    SKR Consulting LLC
                                </Typography>
                            </div>
                        </StyledProfile>
                    </Grid>
                    <Grid item xs={3}>
                        <StyledProfile className="profile">
                            <div className="profile-mediabox">
                                <img  src="/images/ShiomiYukihiro.png" alt="profilePicture" className="profile-media" />
                            </div>
                            <div className="profile_description">
                                <Typography className="profile profile_description-title">
                                    Yukihiro Shiomi 
                                </Typography>
                                <Typography className="profile profile_description-subtitle">
                                    Toyota Motor Corporation
                                </Typography>
                            </div>
                        </StyledProfile>
                    </Grid>
                    <Grid item xs={3}>
                        <StyledProfile className="profile">
                            <div className="profile-mediabox">
                                <img  src="/images/FabioSquadrani.png" alt="profilePicture" className="profile-media" />
                            </div>
                            <div className="profile_description">
                                <Typography className="profile profile_description-title">
                                    Fabio Squadrani 
                                </Typography>
                                <Typography className="profile profile_description-subtitle">
                                    Applus IDIADA
                                </Typography>
                            </div>
                        </StyledProfile>
                    </Grid>
                    <Grid item xs={3}>
                        <StyledProfile className="profile">
                            <div className="profile-mediabox">
                                <img  src="/images/Tione.png" alt="profilePicture" className="profile-media" />
                            </div>
                            <div className="profile_description">
                                <Typography className="profile profile_description-title">
                                    Roberto Tione
                                </Typography>
                                <Typography className="profile profile_description-subtitle">
                                    WABTEC-Faiveley
                                </Typography>
                            </div>
                        </StyledProfile>
                    </Grid>
                </Grid>
            </StyledAbout>
        </StyledPage>
    </>


) 