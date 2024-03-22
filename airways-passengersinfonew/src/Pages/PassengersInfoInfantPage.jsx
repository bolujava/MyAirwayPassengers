import React, { useState } from 'react';
import PassengersInfoHeader from '../Components/PassengersInfoAdultPage/PassengersInfoHeader/PassengersInfoHeader';
import PassengersInfoMiddleTab from '../Components/PassengersInfoAdultPage/PassengersInfoMiddleTab/PassengersInfoMiddleTab';
import PassengersInfoInfantLowerTab from '../Components/PassengersInfoInfantPage/PassengersInfoInfantLowerTab/PassengersInfoInfantLowerTab';
import ModalPageTrip from '../Components/ModalPage/ModalPageTrip';

const PassengersInfoInfantPage = () => {
  const searchDetails = {};

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div>
        <PassengersInfoHeader />
        <PassengersInfoMiddleTab searchDetails={searchDetails} />
        <PassengersInfoInfantLowerTab openModal={openModal} />
        {isOpen && <ModalPageTrip isOpen={isOpen} onClose={closeModal} />}
      </div>
    </>
  );
};

export default PassengersInfoInfantPage;
