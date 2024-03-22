import './BookingConfirmation.css';
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

const BookingConfirmation = () => {
    const [title, setTitle] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [flightNumber, setFlightNumber] = useState('');
    const [departurePort, setDeparturePort] = useState('');
    const [arrivalPort, setArrivalPort] = useState('');
    const [departureDate, setDepartureDate] = useState('')
    const [arrivalDate, setArrivalDate] = useState('');
    const [bookingRef, setBookingRef] = useState('');
    const [PNRCode, setPNRCode] = useState('');
    const { token} = useParams();
    const [bookingConfirmation, setBookingConfirmation] = useState(null);
    const [pnrCodes, setPnrCodes] = useState([]);



    console.log(token);
    useEffect(() => {
        const fetchData = async () => {
            try {    const response = await axios.get(
                `http://localhost:8080/api/v1/booking/booking-confirmation/${token}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                }
            );
                // console.log(token);
                // setTitle(response.data);
                // setFirstName(response.data);
                // setLastName(response.data);
                // setFlightNumber(response.data);
                // setDeparturePort(response.data);
                // setArrivalPort(response.data);
                // setDepartureDate(response.data);
                // setArrivalDate(response.data);
                // setBookingRef(response.data);
                // setPNRCode(response.data);
                setBookingConfirmation(response.data);
                setPnrCodes(response.data.PNRCodes);
                console.log(response.data);
            }catch (error)  {
                console.error('Error fetching ports:', error);
            }

        };
        fetchData();
    }, []);

    const onClick = () => console.log("clicked");
        const redirectToPayment = () => {
            window.location.href = 'https://paystack.com/pay/airwaypayment';
        };
    return (
        <div className='booking-confirmation-container'>
            <div className='booking-header'>
                <div className='booking-text'>Booking Confirmation</div>
            </div>
            <div className='booking-hero-container'>
                <div className='booking-hero-first'>
                    <div className='booking-hero-first-up'>
                        <div className='booking-hero-first-up-text-up'>Dear {bookingConfirmation && bookingConfirmation.userFullName}  </div>
                        <div className='booking-hero-first-up-text-down'>Your  Reservation has been completed . payment must be made before expiration {bookingConfirmation && bookingConfirmation.expiryDate} / {bookingConfirmation && bookingConfirmation.expiryTime} </div>
                    </div>
                    <div className='booking-hero-first-down'>
                        <div className='booking-hero-first-down-text-up'>Sales Office: INTERNET</div>
                        <div className='booking-hero-first-down-text-down'>USER ; Internet</div>
                    </div>
                </div>
                <div className='booking-hero-second'>
                    <div className='booking-hero-second-text-up'>Booking Reference Number</div>
                    <div className='booking-hero-second-text-down'>{bookingConfirmation&&bookingConfirmation.bookingRef}</div>
                </div>
            </div>





            <div className='booking-table-one'>
                {bookingConfirmation&&bookingConfirmation.flightDetails.map((flight, index)=>(
                <div key={index} className='table-one-first'>
                    <div className='booking-table-one-head'>
                        <div className='booking-table-one-head-text'>
                            <div className='one-head-1'>Flight Number</div>
                            <div className='one-head-2'>Departure port</div>
                            <div className='one-head-3'>Arrival port</div>
                            <div className='one-head-4'>Departure Date/Time</div>
                            <div className='one-head-5'>Arrival Date/Time</div>
                        </div>
                    </div>
                    <div className='booking-table-one-body'>
                        <div className='booking-table-one-body-one'>
                            <div className='booking-table-one-body-one-text'>
                                <div>{flight.flightNo}</div>
                                <div>{flight.departurePortIata}</div>
                                <div>{flight.arrivalPortIata}</div>
                                <div>{flight.departureDate}<br/>{flight.departureTime}</div>
                                <div>{flight.arrivalDate}<br/>{flight.arrivalTime}</div>
                            </div>
                        </div>

                    </div>
                </div>
                    ))}


                <div className='table-one-second'>
                    {bookingConfirmation && bookingConfirmation.PNRCode && bookingConfirmation.PNRCode.map((pnr, index) => (
                        <div >
                            <div key={index} className='table-one-second-top'>
                                <div className='table-one-second-top-text'>PNR</div>
                            </div>
                            <div className='table-one-second-middle'>
                                <div className='table-one-second-middle-text'>{pnr.PNRCodes.PNRCode}</div>
                            </div>
                            {/*<div className='table-one-second-bottom'>*/}
                            {/*    <div className='table-one-second-bottom-text'>{pnr.someProperty}</div>*/}
                            {/*</div>*/}
                        </div>
                    ))}
                </div>
            </div>
            <div
                className='pay-button'
                role="button"
                tabIndex={0}
                onClick={redirectToPayment}

            >
                <div className='pay-button-text'>Pay</div>
            </div>


                <div className='booking-table-two'>
                {bookingConfirmation && bookingConfirmation.flightDetails && bookingConfirmation.flightDetails.map((flight, index) => (
                    <div key={index} className='booking-table-two-head'>
                        <div className='booking-table-two-head-text'>
                            <div className='booking-table-two-head-text-first'>Flight- {index+1}</div>
                            <div className='booking-table-two-head-text-middle'>{flight.departurePortCity} ({flight.departurePortIata}) - {flight.arrivalPortCity}  ({flight.arrivalPortIata})</div>
                            <div className='booking-table-two-head-text-last'>Flight No : {flight.flightNo}</div>
                        </div>
                    </div>
                ))}
            </div>

                <div className='booking-table-two-body'>
                    {bookingConfirmation&&bookingConfirmation.passengerList.map((passenger, index) => (
                        <div key={index}  className='booking-table-two-body-box1'>
                        <div className='booking-table-two-body-box1-blue'>
                            <div className='booking-table-two-body-box1-blue-text'>
                                <div className='blue-text-name'>Name</div>
                                <div className='blue-text-surname'>Surname</div>
                                <div className='blue-text-title'>Title</div>
                                <div className='blue-text-booking'>Ticket</div>
                            </div>
                        </div>
                        <div className='booking-table-two-body-box1-white'>
                            <div className='white-text1'>{passenger.firstName}</div>
                            <div className='white-text2'>{passenger.lastName}</div>
                            <div className='white-text3'>{passenger.title}</div>
                            <div className='white-text4'></div>
                        </div>
                    </div>

                        ))}
                    <div className='booking-table-two-body-key-value'>
                        <div className='booking-table-two-body-key-value-first'>Seat Number : </div>
                        <div className='booking-table-two-body-key-value-second'>Baggage : </div>
                    </div>
                </div>
            {/*<div className='booking-table-three'>*/}
            {/*    <div className='booking-table-three-head'>*/}
            {/*        <div className='booking-table-three-head-text'>*/}
            {/*            <div className='booking-table-three-head-text-first'>Flight-2</div>*/}
            {/*            <div className='booking-table-three-head-text-middle'>ABUJA (ABV)-LAGOS (LOS)</div>*/}
            {/*            <div className='booking-table-three-head-text-last'>Flight No : 24AST9</div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className='booking-table-three-body'>*/}
            {/*        <div className='booking-table-three-body-box1'>*/}
            {/*            <div className='booking-table-three-body-box1-blue'>*/}
            {/*                <div className='booking-table-three-body-box1-blue-text'>*/}
            {/*                    <div className='blue-text-name'>Name</div>*/}
            {/*                    <div className='blue-text-surname'>Surname</div>*/}
            {/*                    <div className='blue-text-title'>Title</div>*/}
            {/*                    <div className='blue-text-booking'>Ticket</div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className='booking-table-three-body-box1-white'>*/}
            {/*                <div className='white-text1'>Chioma</div>*/}
            {/*                <div className='white-text2'>Anaziekwu</div>*/}
            {/*                <div className='white-text3'>Miss</div>*/}
            {/*                <div className='white-text4'>84848484848</div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className='booking-table-three-body-key-value'>*/}
            {/*            <div className='booking-table-three-body-key-value-first'>Seat Number : 4E</div>*/}
            {/*            <div className='booking-table-three-body-key-value-second'>Baggage : 15kg</div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}

export default BookingConfirmation;