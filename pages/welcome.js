import React from 'react'
import styled from 'styled-components';
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import HeroSection from '../components/HeroSection';
import { Button } from '../components/Button';
import { StyledBanner, StyledContainer } from '../components/styles/PageStyles';
import { Beach, Cart, ChefHat, Globe, KF, Museum, Music, People, Sun } from '../components/Icons';
import HotelBox from '../components/accomodation/HotelBox';



const StyledPage = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    width: ${props => props.theme.minWidth};
    background-color: ${props => props.theme.white};
    margin-top: 3rem;

     @media only screen 
  and (max-device-width: 768px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    width: ${props => props.theme.mobileWidth};    
}

    .CCIBBox{
        max-width: 68rem;
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        margin-bottom: 2rem;
        

    &-image{
        overflow: hidden;
        max-height: 59rem;
        min-width: 100%;

    }

    &-info{
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        background-color: ${props => props.theme.primary};

    }


    .EBIconBox{
        background-color: goldenrod;
        align-self: flex-end;        
        width: 10rem;
        height: 10rem;

    }

    }



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
    }
    &-bold{
        font-family: ${props => props.theme.MPBold};
    }
    &-it{
        font-family: ${props => props.theme.MPLightIt};
    }
    }

        .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 12px;
    grid-row-gap: 12px;

    &_text{
        font-size: 2rem;
        width: 80%;
    &-blue{
            color: ${props => props.theme.primary};
        }
    &-yellow{
            color: ${props => props.theme.secondary};
        }
    }
      
    &_item{
        min-width: 20rem;
        min-height: 20rem; 
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex: 1 1 auto;
        
        &-blue{  
        background-color: ${props => props.theme.primary};
      }

        &-yellow{  
        background-color: ${props => props.theme.secondary}
        }
    
     }
    
}
`;

export default () => (
    <>
        <HeroSection src="/images/barcelona.png" t="30rem" max="55%" banner={FilledBanner}>
            Discover Barcelona
        </HeroSection>
        <StyledPage className="Discover">

            <Typography className="Discover-title" >The EuroBrake 2020 Venue</Typography>
            <Typography className="Discover-sub-title" >Barcelona International Convention Centre</Typography>
            <div className="CCIBBox">
                <div className="CCIBBox-image">
                    <img src="/images/CCIB.png"  alt="CCIB" />
                </div>
                <div className="CCIBBox-info">
                    <div className="">

                    <Typography gutterBottom className="Discover" style={{color: 'white'}}><span className="Discover-bold">20km </span>to the airport </Typography>
                    <Typography gutterBottom className="Discover" style={{color: 'white'}}><span className="Discover-bold">5km </span>to the Estació de França train station </Typography>
                    <Typography gutterBottom className="Discover" style={{color: 'white'}}><span className="Discover-bold">6km </span>to the city centre </Typography>
                    <Typography gutterBottom className="Discover" style={{color: 'white'}}><span className="Discover-bold">500m </span>from the beach </Typography>
                    </div>

                    <div className="EBIconBox"></div>
                </div>
            </div>
            <Typography gutterBottom className="Discover" >The Barcelona International Convention Centre (CCIB) is a leading venue for international events. </Typography>
            <Typography gutterBottom className="Discover" >Enjoying a privileged location in modern, cosmopolitan Barcelona, the CCIB can be found within the city’s new business and technology district, known as Districte de la Innovació or 22@.</Typography>
            <Typography gutterBottom className="Discover" > With its easy access, excellent links to public transport and the airport, and more than 4,500 hotel rooms in its immediate vicinity, the CCIB is a first-class destination within the business tourism sector.</Typography>
            <Button br="100rem" bcolor="#134381" background="#134381" style={{ maxWidth: "24rem", margin: "5rem 0" }}>VIsit CCIB</Button>
            <Typography className="Discover-sub-title" >Discover Barcelona...</Typography>

            <div className="grid ">
                <div className="grid_item grid_item-yellow">
                    <Sun style={{ marginBottom: '2rem' }} />
                    <Typography className="grid_text grid_text-blue"><span className="Discover-bold" >2,513</span> hours of sunlight a year</Typography>
                </div>
                <div className="grid_item grid_item-blue">
                    <Museum style={{ marginBottom: '2rem' }} />
                    <Typography className="grid_text grid_text-yellow"><span className="Discover-bold" >55</span> museums</Typography>
                </div>
                <div className="grid_item grid_item-yellow">
                    <Beach style={{ marginBottom: '2rem' }} />
                    <Typography className="grid_text grid_text-blue" ><span className="Discover-bold" >4.5km</span> of beach</Typography>
                </div>
                <div className="grid_item grid_item-blue">
                    <Globe style={{ marginBottom: '2rem' }} />
                    <Typography className="grid_text grid_text-yellow"><span className="Discover-bold" >9</span> world heritage sites</Typography>
                </div>
                <div className="grid_item grid_item-yellow">
                    <ChefHat style={{ marginBottom: '2rem' }} />
                    <Typography className="grid_text grid_text-blue"><span className="Discover-bold" >24</span> Michelin-starred restuarants</Typography>
                </div>
                <div className="grid_item grid_item-blue">
                    <Cart style={{ marginBottom: '2rem' }} />
                    <Typography className="grid_text grid_text-yellow"><span className="Discover-bold" >43</span> markets</Typography>
                </div>
                <div className="grid_item grid_item-yellow">
                    <People style={{ marginBottom: '2rem' }} />
                    <Typography className="grid_text grid_text-blue"><span className="Discover-bold" >50</span> theatres</Typography>
                </div>
                <div className="grid_item grid_item-blue">
                    <Music style={{ marginBottom: '2rem' }} />
                    <Typography className="grid_text grid_text-yellow"><span className="Discover-bold" >9</span> music festivals</Typography>
                </div>
                <div className="grid_item grid_item-yellow">
                    <KF style={{ marginBottom: '2rem' }} />
                    <Typography className="grid_text grid_text-blue"><span className="Discover-bold" >5,913</span> restaurants</Typography>
                </div>
            </div>
            <div className="">

            <Typography as="h1" className="Discover-title" >Accommodation</Typography>
            <Typography className="Discover" >Barcelona has a wide range of hotels to suit all tastes and budgets.</Typography>
            <Typography className="Discover" > Special rates have been negotiated for EuroBrake participants at the following hotels and early booking is advised. Please always use the booking code/link/form and let the hotel know you are part of the EuroBrake group.</Typography>
            
            </div>
            <HotelBox />
            <Typography className="Discover-title" style={{fontSize: "2rem", marginBottom: "1rem"}} >Other hotels close to the venue are:</Typography>
            <Typography gutterBottom className="Discover" >AC Hotel Barcelona Forum -  <span className="Discover-it">2 minute walk from venue</span></Typography>
            <Typography gutterBottom className="Discover" >Occidental Atena Mar - <span className="Discover-it">10 minute walk from venue</span></Typography>
            <Typography gutterBottom className="Discover" >Hilton Diagonal Mar Barcelona -  <span className="Discover-it">2 minute walk from venue</span></Typography>
            <Typography gutterBottom className="Discover" >Hotel Barcelona Princess -  <span className="Discover-it">2 minute walk from venue</span></Typography>
            <Typography gutterBottom className="Discover" >Hotel Front Maratim Barcelona -  <span className="Discover-it">10 minute walk from venue</span></Typography>
            <Typography gutterBottom className="Discover" >Hotel Attica21 Barcelona Mar - <span className="Discover-it">10 minute walk from venue</span></Typography>
            <Typography gutterBottom className="Discover" >Hotel Bestrprice Gràcia -  <span className="Discover-it">metro 30 mins</span></Typography>
            <Typography gutterBottom className="Discover" >EuroHotel Barcelona Diagonal Port -  <span className="Discover-it">tram 12 mins or a 20 minute walk</span></Typography>
            <Typography gutterBottom className="Discover" >Travelodge Barcelona Poblenou -  <span className="Discover-it">metro 14 mins</span></Typography>
            <Typography gutterBottom className="Discover" >Holiday Inn Express Barcelona City 22@ - <span className="Discover-it">metro 13 min</span></Typography>

            <Typography className="Discover-title" >Barcelona Travelcard</Typography>
            <Typography className="Discover" >Barcelona has many more hotels around the city that are easily accessible using the metro system. The city offers a travelcard that is very good value and allows for unlimited journeys on the bus, metro, tram, commuter train plus metro ride to / from the airport.</Typography>
            <Button br="100rem" bcolor="#134381" background="#134381" style={{ maxWidth: "24rem", margin: "5rem 0" }}>Find out more</Button>

        </StyledPage>


    </>
);



const FilledBanner = () => (
    <StyledBanner>
        <StyledContainer>

            <Typography className="banner-heading" >Book your tours and accomodation here</Typography>
            <Typography className="banner-sub" >Find out about Barcelona</Typography>
            <div className="banner_bottom">
                <ExpandMoreOutlinedIcon className="banner_bottom-icon" />
                <Typography varient="h3" className="banner_bottom-details">See below for more details</Typography>
            </div>
        </StyledContainer>
    </StyledBanner>
)

