import React from 'react'
import styled from 'styled-components';
import MapContainer from './GoogleMaps';

const FooterBar = styled.div`
    color: ${props => props.theme.white};
    background: ${props => props.theme.primary};
    min-width: 100%;
    min-height: 10rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    position: absolute;
    bottom: 0;
    padding: 3rem;

    .ftr_container-1{
        padding: .2rem;
        min-width: 30rem;
        /* border: 1px solid black; */
        
        /* background-color:salmon; */
        
        display: flex;
        flex-flow: column;
        /* align-items: center; */
    }
    .ftr_container-2{
        padding: .2rem;
        min-width: 20rem;
        /* border: 1px solid black; */
        
        /* background-color:orangered; */
        
        display: flex;
        flex-flow: column;
        align-items: center;
    }
    .ftr_container-3{
        /* padding: .2rem;
        min-width: 15rem; */
        /* border: 1px solid black; */
        
        /* background-color:goldenrod; */
        
        display: flex;
        flex-flow: column;
        align-items: center;
       
    }
    .ftr_container-4{
        padding: 1rem;
        min-width: 30rem;
        /* border: 1px solid black; */
        
        /* background-color:steelblue; */
        
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .ftr_container-5{
        padding: 1rem;
        min-width: 40rem;
        border: 1px solid white;
        
        /* background-color: limegreen; */
        min-height: 20rem;
        
        display: flex;
        flex-flow: column;
    }
    .ftr_container-6{
        padding: 1rem;
        min-width: 40rem;
        border: 1px solid white;
        
        /* background-color: hotpink; */
        min-height: 20rem;
        
        display: flex;
        flex-flow: column wrap;
    }
    .ftr_container-7{
        display: flex;
        position: relative;
      
    }

    .social{
        color: ${props => props.theme.white};;
        margin: 1rem;
        font-size: 2rem;
        
    }

    a{
        color: ${props => props.theme.white};
        text-transform: uppercase;
        font-family: ${props => props.theme.MPBold};
        font-size: 2rem;
    }

    h1{
        padding: 1rem;
        text-align: center;
    }

    input{
        max-width: 70%;
        margin-left: auto;
    }

    label{
        font-family: ${props => props.theme.MPBold};
        font-size: 1.6rem;
        text-transform: uppercase;
    }

    
`;

function Footer() {
    return (
        <FooterBar>
            <div className="ftr_container-1">
                <h1>CONFIRMED EUROBRAKE 2020 SPONSORS</h1>
                <div className="ftr_container-6">SPONSOR BOX</div>
            </div>
            <div className="ftr_container-2">
                <a href="">links</a>
                <a href="">links</a>
                <a href="">links</a>
                <a href="">links</a>
                <a href="">links</a>
            <div className="ftr_container-7">
                <a className="social" href="">F</a>
                <a  className="social" href="">T</a>
                <a  className="social" href="">L</a>
            </div>
            </div>
            <div className="ftr_container-3">

            <div className="ftr_container-4">
                <label htmlFor="Newsletter">Newsletter</label>
                <input type="email" name="Newsletter" id=""/>    
            </div>
            <div className="ftr_container-7">
              <MapContainer/>
            </div> 
            </div>
        </FooterBar>
    )
}

export default Footer;

              {/* <div className="ftr_container-5">Map Box</div> */}