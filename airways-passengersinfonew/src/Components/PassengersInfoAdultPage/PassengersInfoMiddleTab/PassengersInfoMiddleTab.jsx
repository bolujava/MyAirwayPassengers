// import React, { useState } from 'react';
// import './PassengersInfoMiddleTab.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import PropTypes from 'prop-types';

// const PassengersInfoMiddleTab = ({ searchDetails }) => {
//   PassengersInfoMiddleTab.propTypes = {
//     searchDetails: PropTypes.object.isRequired, 
//   };

//   const [noOfAdult, setNoOfAdult] = useState(1); // Default to 1 adult
//   const [noOfChildren, setNoOfChildren] = useState(0); // Default to 0 children
//   const [noOfInfant, setNoOfInfant] = useState(0); // Default to 0 infants

//   if (!searchDetails) {
//     return <div>Loading...</div>;
//   }

//   const { departurePort, arrivalPort, departureDate, returnDate, tripType } = searchDetails;

//   return (
//     <div>
//       <div className="middletab-adult">
//         <input type="text" placeholder="Search..." className="search-input"/>
//         <button className="search-button" type="submit">
//           <FontAwesomeIcon icon={faSearch} />
//         </button>
//         <div className="flightdetails-adult">
//           <h3>{departurePort} - {arrivalPort}</h3>
//           <h4>{departureDate} - {returnDate} | {noOfAdult} Adult, {noOfChildren} Child, {noOfInfant} Infant | {tripType}</h4>
//         </div>
//         <div className="total-price-container-adult">
//           <h1>Total Price</h1>
//           <h4>NGN 200,000</h4>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PassengersInfoMiddleTab;


import React, { useState } from 'react';
import './PassengersInfoMiddleTab.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const PassengersInfoMiddleTab = ({ searchDetails }) => {
  PassengersInfoMiddleTab.propTypes = {
    searchDetails: PropTypes.object.isRequired, 
  };
  const [departurePort, setDeparturePort] = useState('');
  const [arrivalPort, setArrivalPort] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [tripType, setTripType] = useState('ONE_WAY');
  const [noOfAdult, setNoOfAdult] = useState(0); // Default to 1 adult
  const [noOfChildren, setNoOfChildren] = useState(0); // Default to 0 children
  const [noOfInfant, setNoOfInfant] = useState(0); // Default to 0 infants

  if (!searchDetails) {
    return <div>Loading...</div>;
  }


  const handleAdultChange = (e) => {
    setNoOfAdult(parseInt(e.target.value));
  };

  const handleChildrenChange = (e) => {
    setNoOfChildren(parseInt(e.target.value));
  };
  const handleDeparturePortChange = (e) => {
    setDeparturePort(e.target.value);
  };
  const handleArrivalPortChange = (e) => {
    setArrivalPort(e.target.value);
  };
  const handleDepartureDateChange = (e) => {
    setDepartureDate(e.target.value);
  };
  const handleReturnDateChange = (e) => {
    setReturnDate(e.target.value);
  };
  const handleTripTypeChange = (e) => {
    setTripType(e.target.value);
  };


  const handleInfantChange = (e) => {
    setNoOfInfant(parseInt(e.target.value));
  };

  return (
    <div>
      <div className="middletab-adult">
        <input type="text" placeholder="Search..." className="search-input"/>
        <button className="search-button" type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <div className="flightdetails-adult">
          <h3>{departurePort} - {arrivalPort}</h3>
          <h4>{departureDate} - {returnDate} | {noOfAdult} Adult, {noOfChildren} Child, {noOfInfant} Infant | {tripType}</h4>
        </div>
        <div className="total-price-container-adult">
          <h1>Total Price</h1>
          <h4>NGN 200,000</h4>
        </div>
      </div>
    </div>
  );
};

export default PassengersInfoMiddleTab;
