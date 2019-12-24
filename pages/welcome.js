import React from 'react'
import styled from 'styled-components';
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import HeroSection from '../components/HeroSection';
import { Button } from '../components/Button';
import { StyledBanner, StyledContainer } from '../components/styles/PageStyles';
import {Beach, Cart, ChefHat, Globe, KF, Museum, Music, People, Sun} from '../components/Icons';




const StyledPage = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    width: ${props => props.theme.minWidth};
    background-color: ${props => props.theme.white};
     margin-top: 3rem;

    .Discover{
        color: ${props => props.theme.primary};
        font-family: ${props => props.theme.MPLight};
        font-size: 2rem;
   
    &-title{
        color: ${props => props.theme.primary};
        font-family: ${props => props.theme.MPSemibold};
        font-size: 4.4rem;
        margin-top: 3rem;
        margin-bottom: 3rem;
    }
   
    &-sub-title{
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


export default () => (
    <>
        <HeroSection src="/images/barcelona.png" t="30rem" max="55%">
            Discover Barcelona
    </HeroSection>
        <StyledPage className="Discover">

            <Typography className="Discover-title" >The EuroBrake 2020 Venue</Typography>
            <Typography className="Discover-sub-title" >Barcelona International Convention Centre</Typography>
            <div className="">
                <div className="">
                    <img src="/images/CCIB.png" alt="" />
                </div>
                <div className="">
            <Typography className="Discover" ><span className="Discover-bold">20km </span>to the airport </Typography>
            <Typography className="Discover" ><span className="Discover-bold">5km </span>to the Estació de França train station </Typography>
            <Typography className="Discover" ><span className="Discover-bold">6km </span>to the city centre </Typography>
            <Typography className="Discover" ><span className="Discover-bold">500m </span>from the beach </Typography>
                <div className=""></div>
                </div>
            </div>
            <Typography className="Discover" >The Barcelona International Convention Centre (CCIB) is a leading venue for international events. </Typography>
            <Typography className="Discover" >Enjoying a privileged location in modern, cosmopolitan Barcelona, the CCIB can be found within the city’s new business and technology district, known as Districte de la Innovació or 22@.</Typography>
            <Typography className="Discover" > With its easy access, excellent links to public transport and the airport, and more than 4,500 hotel rooms in its immediate vicinity, the CCIB is a first-class destination within the business tourism sector.</Typography>
            <Button br="100rem" bcolor="#134381" background="#134381" style={{ maxWidth: "24rem", margin: "5rem 0" }}>VIsit CCIB</Button>
            <Typography className="Discover-sub-title" >Discover Barcelona...</Typography>
            {/* MATERIAL GRID IS NOT WORKING SO WILL HAVE TO CHANGE BACK TO CSS GRID */}
            {/* FFS */}
                <Grid 
                container 
                xs={12} 
                spacing={0} 
               justify="space-between" 
                >
                    <Grid xs={3} style={{minWidth: '30rem', minHeight: '25rem',  backgroundColor: '#F9B721', marginBottom: '2rem' }}>
                        <Sun/>
                        <Typography style={{ fontSize: '1.5rem' }}><span className="Discover-it" style={{}}>2,513</span> hours of sunlight a year</Typography>
                    </Grid>
                    <Grid item xs={3} style={{minWidth: '30rem', minHeight: '25rem',  backgroundColor: '#134381', marginBottom: '2rem' }}>
                        <Museum/>
                        <Typography style={{ fontSize: '1.5rem' }}><span className="Discover-it" style={{}}>55</span> museums</Typography>
                    </Grid>
                    <Grid item xs={3} style={{minWidth: '30rem', minHeight: '25rem',  backgroundColor: '#F9B721', marginBottom: '2rem' }}>
                        <Beach/>
                        <Typography style={{ fontSize: '1.5rem' }}><span className="Discover-it" style={{}}>4.5km</span> of beach</Typography>
                    </Grid>
                </Grid>
                <Grid 
                container 
                xs={12} 
                spacing={0} 
                justify="space-between"
                >
                    <Grid item xs={3} style={{ minWidth: '30rem', minHeight: '25rem', backgroundColor: '#134381', marginBottom: '2rem' }}>
                        <Globe/>
                        <Typography style={{ fontSize: '1.5rem' }}><span className="Discover-it" style={{}}>9</span> world heritage sites</Typography>
                    </Grid>
                    <Grid item xs={3} style={{minWidth: '30rem', minHeight: '25rem',  backgroundColor: '#F9B721', marginBottom: '2rem' }}>
                        <ChefHat/>
                        <Typography style={{ fontSize: '1.5rem' }}><span className="Discover-it" style={{}}>24</span> Michelin-starred restuarants</Typography>
                    </Grid>
                    <Grid item xs={3} style={{minWidth: '30rem', minHeight: '25rem',  backgroundColor: '#134381', marginBottom: '2rem' }}>
                        <Cart/>
                        <Typography style={{ fontSize: '1.5rem' }}><span className="Discover-it" style={{}}>43</span> markets</Typography>
                    </Grid>
                </Grid>
                <Grid  
                container 
                xs={12} 
                spacing={0} 
               justify="space-between"
                >
                    <Grid item xs={3} style={{minWidth: '30rem', minHeight: '25rem',  backgroundColor: '#F9B721', marginBottom: '2rem' }}>
                        <People/>
                        <Typography style={{ fontSize: '1.5rem' }}><span className="Discover-it" style={{}}>50</span> theatres</Typography>
                    </Grid>
                    <Grid item xs={3} style={{minWidth: '30rem', minHeight: '25rem',  backgroundColor: '#134381', marginBottom: '2rem' }}>
                        <Music/>
                        <Typography style={{ fontSize: '1.5rem' }}><span className="Discover-it" style={{}}>9</span> music festivals</Typography>
                    </Grid>
                    <Grid item xs={3} style={{minWidth: '30rem', minHeight: '25rem',  backgroundColor: '#F9B721', marginBottom: '2rem'}}>
                        <KF/>
                        <Typography style={{ fontSize: '1.5rem' }}><span className="Discover-it" style={{}}>5,913</span> restaurants</Typography>
                    </Grid>
                </Grid>
            <Typography className="Discover-title" >Accommodation</Typography>
            <Typography className="Discover" >Barcelona has a wide range of hotels to suit all tastes and budgets.</Typography>
            <Typography className="Discover" > Special rates have been negotiated for EuroBrake participants at the following hotels and early booking is advised. Please always use the booking code/link/form and let the hotel know you are part of the EuroBrake group.</Typography>
            <div className="Discover_accomodation">
               <div className="">
                   <div className="">
                       <img src="/images/image3.png" alt="Hotel SB Diagonal Zero"/>
                   </div>
                   <div className="">
            <Typography className="Discover" >Hotel SB Diagonal Zero</Typography>
            <Typography className="Discover" >4 Stars</Typography>
                   </div>
                   <div className="">
            <Typography className="Discover" >Plaza Llevant, s/n 08019, Barcelona, Spain</Typography>
            <Typography className="Discover" >+34 935 078 000</Typography>
            <Typography className="Discover" >diagonalzero@sbhotels.es</Typography>
            <Typography className="Discover" >Check-in 15:00</Typography>
            <Typography className="Discover" >Check-out 12:00</Typography>
            <Typography className="Discover" >Double room for single use: €190.30 inc VAT and breakfast</Typography>
            <Typography className="Discover" >City tax: 1.21€ per person per night not included</Typography>
            <Typography className="Discover" >Preferential rate available until 01 April 2020</Typography>
            <Typography className="Discover" >CODE: EUROBRAKE20</Typography>
            <Button>Book Room</Button>
                   </div>
               </div>
            </div>
            <div className="Discover_accomodation">
               <div className="">
                   <div className="">
                       <img src="/images/image2.png" alt="Hasperia Barcelona Del Mar"/>
                   </div>
                   <div className="">
            <Typography className="Discover" >Hasperia Barcelona Del Mar</Typography>
            <Typography className="Discover" >4 Stars</Typography>
                   </div>
                   <div className="">
            <Typography className="Discover" >Espronceda, 6, 08005, Barcelona, Spain</Typography>
            <Typography className="Discover" >+34 935 029 700</Typography>
            <Typography className="Discover" >hhdelmar@hesperia.com</Typography>
            <Typography className="Discover" >Check-in 15:00</Typography>
            <Typography className="Discover" >Check-out 12:00</Typography>
            <Typography className="Discover" >Double room for single use: €174.35 inc VAT and breakfast</Typography>
            <Typography className="Discover" >City tax: 1.21€ per person per night not included</Typography>
            <Typography className="Discover" >Preferential rate available until 01 April 2020</Typography>
            <Button>Book Room</Button>
                   </div>
               </div>
            </div>
            <div className="Discover_accomodation">
               <div className="">
                   <div className="">
                       <img src="/images/image5.png" alt="Hotel Barcelona Condal Mar"/>
                   </div>
                   <div className="">
            <Typography className="Discover" >Hotel Barcelona Condal Mar</Typography>
            <Typography className="Discover" >4 Stars</Typography>
                   </div>
                   <div className="">
            <Typography className="Discover" >Cristobal de Moura, 138, 08019 Barcelona, Spain</Typography>
            <Typography className="Discover" >+34 933 077 727</Typography>
            <Typography className="Discover" >tryp.condal.mar@melia.com</Typography>
            <Typography className="Discover" >Check-in 15:00</Typography>
            <Typography className="Discover" >Check-out 12:00</Typography>
            <Typography className="Discover" >Double room for single use: €155.00 + VAT (inc breakfast)</Typography>
            <Typography className="Discover" >City tax: 1.21€ per person per night not included</Typography>
            <Typography className="Discover" >Preferential rate available until 01 April 2020</Typography>
            <Button>Book Room</Button>
                   </div>
               </div>
            </div>

            <Typography className="Discover Discover-bold" >Other hotels close to the venue are:</Typography>
            <Typography className="Discover" >AC Hotel Barcelona Forum -  <span className="Discover-it">2 minute walk from venue</span></Typography>
            <Typography className="Discover" >Occidental Atena Mar - <span className="Discover-it">10 minute walk from venue</span></Typography>
            <Typography className="Discover" >Hilton Diagonal Mar Barcelona -  <span className="Discover-it">2 minute walk from venue</span></Typography>
            <Typography className="Discover" >Hotel Barcelona Princess -  <span className="Discover-it">2 minute walk from venue</span></Typography>
            <Typography className="Discover" >Hotel Front Maratim Barcelona -  <span className="Discover-it">10 minute walk from venue</span></Typography>
            <Typography className="Discover" >Hotel Attica21 Barcelona Mar - <span className="Discover-it">10 minute walk from venue</span></Typography>
            <Typography className="Discover" >Hotel Bestrprice Gràcia -  <span className="Discover-it">metro 30 mins</span></Typography>
            <Typography className="Discover" >EuroHotel Barcelona Diagonal Port -  <span className="Discover-it">tram 12 mins or a 20 minute walk</span></Typography>
            <Typography className="Discover" >Travelodge Barcelona Poblenou -  <span className="Discover-it">metro 14 mins</span></Typography>
            <Typography className="Discover" >Holiday Inn Express Barcelona City 22@ - <span className="Discover-it">metro 13 min</span></Typography>
            <Typography className="Discover-title" >Barcelona Travelcard</Typography>
            <Typography className="Discover" >Barcelona has many more hotels around the city that are easily accessible using the metro system. The city offers a travelcard that is very good value and allows for unlimited journeys on the bus, metro, tram, commuter train plus metro ride to / from the airport.</Typography>
            <Button br="100rem" bcolor="#134381" background="#134381" style={{ maxWidth: "24rem", margin: "5rem 0" }}>Find out more</Button>
        </StyledPage>
    </>
);



// const FilledBanner = () => (
//     <StyledBanner>
//         <StyledContainer>

//             <Typography className="banner-heading" >Book your tours and accomodation here</Typography>
//             <Typography className="banner-sub" >Find out about Barcelona</Typography>
//             <div className="banner_bottom">
//                 <ExpandMoreOutlinedIcon className="banner_bottom-icon" />
//                 <Typography varient="h3" className="banner_bottom-details">See below for more details</Typography>
//             </div>
//         </StyledContainer>
//     </StyledBanner>
// )

