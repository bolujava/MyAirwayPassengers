import React from 'react';
import './ModalPageTrip.css';
import { Link } from 'react-router-dom';
import AeroplaneUp from '/src/assets/AeroplaneUp.svg'
import AeroplaneDown from '/src/assets/AeroplaneDown.svg'

const ModalPageTrip = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="modal-overlay">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="blueplain-content">
        <h3>Your Trip Summary</h3>
        <span className="close" onClick={onClose}>&times;</span>
        </div>
        <div className="trip-details-container">
          <div className="departurespace">
            <img src={AeroplaneUp} alt="Departure Plane" />
            <h2>Departure</h2>
            <h5>Booking Reference Number</h5>
            </div>
              <div className="singleReference">
                <h6>XYZ456</h6>
              </div>
              <div className="departure-info">
                <div className='departure-info-item'>
                  <h4>Departing</h4>
                  <h4>Abuja</h4>
                  <h4>30/12/2023 - 08:45</h4>
                </div>
                <div className='departure-info-item'>
                  <h4>Arrival</h4>
                  <h4>Lagos</h4>
                  <h4>30/12/2023 - 10:00</h4>
                </div>
              </div>
          </div>
          <div className="realArrivalSeparator" /> 
          <div className="realArrival">
            <h4>Flight PYUE423</h4>
            <h4>Cabin Economy</h4>
          </div>
          <div className="planeArrival">
            <img src={AeroplaneDown} alt="Arrival Plane" />
            <h2>Arrival</h2>
          </div>
          <div className="newArrival">
            <h4>Departing</h4>
            <h4>Lagos</h4>
            <h4>01/02/2024 - 08:45</h4>
          </div>
          <div className="newArrivalSeparator" />
          <div className="latestArrival">
            <h4>Arrival</h4> 
            <h4>Abuja</h4>
            <h4>01/02/2024 - 10:00</h4>
          </div>
          <div className="latestArrivalSeparator" /> 
          <div className="anotherArrival">
            <h4>Flight PYUE423</h4>
            <h4>Cabin Economy</h4>
          </div>
        <div className="grid-container-modalsum">
          <div className="grid-item-modalsum">
            <h4>Base fare</h4>
          </div>
          <div className="grid-item-modalsum">
            <h4>100,000.00 NGN</h4>
          </div>
          <div className="grid-item-modalsum">
            <h4>Initial Tax Amount</h4>
          </div>
          <div className="grid-item-modalsum">
            <h4>60,754.00 NGN</h4>
          </div>
          <div className="grid-item-modalsum">
            <h4>Total Surcharge</h4>
          </div>
          <div className="grid-item-modalsum">
            <h4>150,000.00 NGN</h4>
          </div>
          <div className="grid-item-modalsum">
            <h4>Service Charge</h4>
          </div>
          <div className="grid-item-modalsum">
            <h4>2,500.00 NGN</h4>
          </div>
          <div className="grid-item-modalsum">
            <h4>TOTAL</h4>
          </div>
          <div className="grid-item-modalsum">
            <h4>313,254.00 NGN</h4>
          </div>
        </div>
        <div className= "booking-payment">
        <Link to="/booking-confirmation">
        <button className="tripmodal-continue-button" type="submit">
          Confirm Booking
        </button>
        </Link>

        <Link to="/make-payment">
        <button className="tripmodal-continue-button" type="submit">
          Continue to Payment
        </button>
        </Link>
        </div>
        </div>
      </div>
  );
};
export default ModalPageTrip;
