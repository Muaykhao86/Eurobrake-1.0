import React from 'react'
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import EuroIcon from '@material-ui/icons/Euro';
import { Button } from '../Button';




const StyledHotels = styled.div`
    margin: 2rem 0;


    .Accomodation{
        display: flex;
        flex-flow: row;
        justify-content: space-between;
       
       &_icon-box{
           display: flex;
           margin: .2rem 0;
       }

        &_text{
        color: ${props => props.theme.primary};
        font-family: ${props => props.theme.MPLight};
        font-size: 1.3rem;

        &-bold{
            font-size: 1.3rem;
            font-family: ${props => props.theme.MPBold};
            
        }

        &-primary{
            font-size: 1.3rem;
            color: ${props => props.theme.white};

            &-title{
                line-height: 1.1;
                color: ${props => props.theme.white};
                font-family: ${props => props.theme.MPBold};
                font-size: 2rem;
            }
        }
        }
    
        &_hotel{
            max-width: 20rem;

        &-imageBox{
            max-height: 24.3rem;
            overflow: hidden;    
        }

        &-primaryBox{
            padding: 1rem;
            display: flex;
            flex-flow: column;
            background-color: ${props => props.theme.primary};
        }
        &-secondaryBox{
            height: 35rem;
            padding: 1rem;
            display: flex;
            
            flex-flow: column;
            justify-content: space-between;
            background-color: ${props => props.theme.primary2}

        }
        }
    }

`;

export default function HotelBox() {
    return (
        <StyledHotels>
            <div className="Accomodation">

                <div className="Accomodation_hotel">
                    <div className="Accomodation_hotel-imageBox">
                        <img src="/images/hotelSB.png" alt="Hotel SB Diagonal Zero" />
                    </div>
                    <div className="Accomodation_hotel-primaryBox">
                        <Typography className="Accomodation_text-primary-title" >Hotel SB Diagonal Zero</Typography>
                        <Typography className="Accomodation_text-primary" >4 Stars</Typography>
                    </div>
                    <div className="Accomodation_hotel-secondaryBox">
                        <div className="Accomodation_icon-box">
                            <RoomIcon style={{ fontSize: "1.7rem", marginRight: '.7rem' }} />
                            <Typography className="Accomodation_text" >Plaza Llevant, s/n 08019, Barcelona, Spain</Typography>
                        </div>
                        <div className="Accomodation_icon-box">
                            <PhoneIcon style={{ fontSize: "1.7rem", marginRight: '.7rem' }} />
                            <Typography className="Accomodation_text" >+34 935 078 000</Typography>
                        </div>
                        <div className="Accomodation_icon-box">
                            <MailOutlineIcon style={{ fontSize: "1.7rem", marginRight: '.7rem' }} />
                            <Typography className="Accomodation_text" >diagonalzero@sbhotels.es</Typography>
                        </div>
                        <div className="Accomodation_icon-box">
                            <QueryBuilderIcon style={{ fontSize: "1.7rem", marginRight: '.7rem' }} />
                            <div className="">
                                <Typography className="Accomodation_text" >Check-in 15:00</Typography>
                                <Typography className="Accomodation_text" >Check-out 12:00</Typography>
                            </div>
                        </div>
                        <div className="Accomodation_icon-box">

                            <EuroIcon style={{ fontSize: "1.7rem", marginRight: '.7rem' }} />
                            <div className="">
                                <Typography gutterBottom className="Accomodation_text" >Double room for single use: €190.30 inc VAT and breakfast</Typography>
                                <Typography gutterBottom className="Accomodation_text" >City tax: 1.21€ per person per night not included</Typography>
                                <Typography gutterBottom className="Accomodation_text" >Preferential rate available until 01 April 2020</Typography>
                                <Typography gutterBottom className="Accomodation_text-bold" >CODE: EUROBRAKE20</Typography>
                            </div>
                        </div>
                        <Button padding=".5rem" fontSize="1.5rem" br="100rem" bcolor="#134381" background="#134381" >Book Room</Button>
                    </div>
                </div>

                <div className="Accomodation_hotel">
                    <div className="Accomodation_hotel-imageBox">
                        <img src="/images/delMar.png" alt="Hasperia Barcelona Del Mar" />
                    </div>
                    <div className="Accomodation_hotel-primaryBox">
                        <Typography className="Accomodation_text-primary-title" >Hasperia Barcelona Del Mar</Typography>
                        <Typography className="Accomodation_text-primary" >4 Stars</Typography>
                    </div>
                    <div className="Accomodation_hotel-secondaryBox">
                        <div className="Accomodation_icon-box">
                            <RoomIcon style={{ fontSize: "1.7rem", marginRight: '.7rem' }} />
                            <Typography className="Accomodation_text" >Espronceda, 6, 08005, Barcelona, Spain</Typography>
                        </div>
                        <div className="Accomodation_icon-box">
                            <PhoneIcon style={{ fontSize: "1.7rem", marginRight: '.7rem' }} />
                            <Typography className="Accomodation_text" >+34 935 029 700</Typography>
                        </div>
                        <div className="Accomodation_icon-box">
                            <MailOutlineIcon style={{ fontSize: "1.7rem", marginRight: '.7rem' }} />
                            <Typography className="Accomodation_text" >hhdelmar@hesperia.com</Typography>
                        </div>
                        <div className="Accomodation_icon-box">
                            <QueryBuilderIcon style={{ fontSize: "1.7rem", marginRight: '.7rem' }} />
                            <div className="">
                                <Typography className="Accomodation_text" >Check-in 15:00</Typography>
                                <Typography className="Accomodation_text" >Check-out 12:00</Typography>
                            </div>
                        </div>
                        <div className="Accomodation_icon-box">
                            <EuroIcon style={{ fontSize: "1.7rem", marginRight: '.7rem' }} />
                            <div className="">
                                <Typography gutterBottom className="Accomodation_text" >Double room for single use: €174.35 inc VAT and breakfast</Typography>
                                <Typography gutterBottom className="Accomodation_text" >City tax: 1.21€ per person per night not included</Typography>
                                <Typography gutterBottom className="Accomodation_text" >Preferential rate available until 01 April 2020</Typography>
                            </div>
                        </div>
                        <Button padding=".5rem" fontSize="1.5rem" br="100rem" bcolor="#134381" background="#134381">Book Room</Button>
                    </div>
                </div>

                <div className="Accomodation_hotel">
                    <div className="Accomodation_hotel-imageBox">
                        <img src="/images/conMar.png" alt="Hotel Barcelona Condal Mar" />
                    </div>
                    <div className="Accomodation_hotel-primaryBox">
                        <Typography className="Accomodation_text-primary-title" >Hotel Barcelona Condal Mar</Typography>
                        <Typography className="Accomodation_text-primary" >4 Stars</Typography>
                    </div>
                    <div className="Accomodation_hotel-secondaryBox">
                        <div className="Accomodation_icon-box">
                            <RoomIcon style={{ fontSize: "1.7rem", marginRight: '.7rem' }} />
                            <Typography className="Accomodation_text" >Cristobal de Moura, 138, 08019 Barcelona, Spain</Typography>
                        </div>
                        <div className="Accomodation_icon-box">
                            <PhoneIcon style={{ fontSize: "1.7rem", marginRight: '.7rem' }} />
                            <Typography className="Accomodation_text" >+34 933 077 727</Typography>
                        </div>
                        <div className="Accomodation_icon-box">
                            <MailOutlineIcon style={{ fontSize: "1.7rem", marginRight: '.7rem' }} />
                            <Typography className="Accomodation_text" >tryp.condal.mar@melia.com</Typography>
                        </div>
                        <div className="Accomodation_icon-box">
                            <QueryBuilderIcon style={{ fontSize: "1.7rem", marginRight: '.7rem' }} />
                            <div className="">
                                <Typography className="Accomodation_text" >Check-in 15:00</Typography>
                                <Typography className="Accomodation_text" >Check-out 12:00</Typography>
                            </div>
                        </div>
                        <div className="Accomodation_icon-box">

                            <EuroIcon style={{ fontSize: "1.7rem", marginRight: '.7rem' }} />
                            <div className="">
                                <Typography gutterBottom className="Accomodation_text" >Double room for single use: €155.00 + VAT (inc breakfast)</Typography>
                                <Typography gutterBottom className="Accomodation_text" >City tax: 1.21€ per person per night not included</Typography>
                                <Typography gutterBottom className="Accomodation_text" >Preferential rate available until 01 April 2020</Typography>
                            </div>
                        </div>
                        <Button padding=".5rem" fontSize="1.5rem" br="100rem" bcolor="#134381" background="#134381" >Book Room</Button>
                    </div>
                </div>

            </div>


        </StyledHotels>
    )
}
