import React from 'react'
import PassengersInfoHeader from '../Components/PassengersInfoAdultPage/PassengersInfoHeader/PassengersInfoHeader'
import PassengersInfoLowerTab from '../Components/PassengersInfoAdultPage/PassengersInfoLowerTab/PassengersInfoLowerTab'
import PassengersInfoMiddleTab from '../Components/PassengersInfoAdultPage/PassengersInfoMiddleTab/PassengersInfoMiddleTab'

const PassengersInfoAdultPage = () => {
  // Assuming searchDetails is received as a prop from the parent component
  const searchDetails = {}; // Your search details object
  return (
    <>
      <div>
        <PassengersInfoHeader />
        {/* Pass searchDetails as a prop to PassengersInfoMiddleTab */}
        <PassengersInfoMiddleTab searchDetails={searchDetails} />
        <PassengersInfoLowerTab />
      </div>
    </>
  );
}

export default PassengersInfoAdultPage;


