import React from 'react';
import './PassengersInfoHeader.css';
import AirwayLogo from '/src/assets/AirwayLogo.svg';
import ProgressBarAdult from '/src/assets/progress-bar-adult.svg';


const PassengersInfoHeader = () => {
    return (
        <div className="main-airway-body-ad">
            <div className="main-container-header-ad">
                <div className="flightImgAndAirway-ad">
                    <img src= {AirwayLogo} alt="Header Plane" />
                    <span className="airwayText-ad">Airway</span>
                </div>

                <div className="flightInfo-ad">
                    <img src= {ProgressBarAdult} alt="progress-bar-adult" />
                </div>
                <div className="homeAboutSign-ad">
                    <div className="homeAbout-ad">
                        <a href="#home" className="homeHeader-ad">Home</a>
                        <div className="aboutAir-ad">
                            <a href="#about" className="aboutUsheader-ad">About us</a>
                        </div>
                    </div>
                    <button className="signUp-ad">Sign Up</button>
                </div>

            </div>
            <div className="flightSelectionStatus-ad">
                <h6>Flight Selection</h6>
                <h6>Passenger Info</h6>
                <h6>Payment</h6>
                <h6>Confirmation</h6>
            </div>
        </div>
    );
}

export default PassengersInfoHeader;
