import React, { useState, useEffect } from "react";
import "./FlightSelectionOne.css";
import { useLocation } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {MdChevronLeft, MdChevronRight} from "react-icons/md";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from 'axios';



const SliderWrapper = styled.div`
  margin-top: 20px;

  & > div {
    
      color: black;
      background-color: white;
  }
  .departureslider {
    border: 1px solid #ccc;
    padding: 35px;
    margin-bottom: 10px;
    background-color: #2D9CDB;
    color: white;
    display: flex;
    padding-left: 7rem;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  
  

  .departureslider .day {
    font-weight: bold;
  }
 
  .departureslider .date {
    font-weight: bold;
  }
  
  .returnslider {
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
    background-color: #001F3F;
    color: white;
    display: flex;
    padding-left: 7rem;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .returnslider .day {
    font-weight: bold;
  }
`;

function FlightSelectionOne(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const [departingFlights, setDepartingFlights] = useState([]);
  const [returningFlights, setReturningFlights] = useState([]);
  const [departureTotalFlights, setDepartureTotalFlights] = useState(0);
  const [returningTotalFlights, setReturningTotalFlights] = useState(0);
  const[allDeparture, setAllDeparture]= useState([]);
  const[allReturning, setAllReturning]= useState([]);




  function getDayOfWeek(dateString) {
    const date = new Date(dateString);
    const dayOfWeek = date.getDay();
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return dayNames[dayOfWeek];
  }
  console.log(getDayOfWeek("2024-03-02"));
  console.log(location);

  const routeSearch = (e) => {
    navigate(`/searchflight`);
  };

  const routeLogin = (e) => {
    navigate(`/login`);
  };
  const routeFlightInfo = (e) => {
    navigate(`/flight-information`);
  };

  const routePassengerInformation = (e) => {
    navigate(`/adult-info-page`, { searchDetails: storedSearchDetails });
  };
// console.log(searchDetails)
  const handleDepartingSelectFlight = (classId) => {
    localStorage.setItem("selectedDepartingFlightId", classId);
    alert("DepartingFlight selected successfully!");
    console.log("hello");
  };

  const handleReturningSelectFlight = (classId) => {
    localStorage.setItem("selectedReturningFlightId", classId);
    console.log(classId)
    alert("ReturningFlight selected successfully!");
  };


  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black"   }}
            onClick={onClick}
        />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black" }}
            onClick={onClick}
        />
    );
  }


  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };




  const storedSearchDetails = JSON.parse(localStorage.getItem("searchDetails"))


  console.log("ss",storedSearchDetails)


  useEffect(() => {
    const fetchData = async () => {
      try {
        data = location.state || {};
        console.log(location);
        console.log(data);

        if (data && data["Departing Flights"]) {
          console.log(
            "Departing Flights data:",
            data["Departing Flights"].flights
          );

          setDepartingFlights(data["Departing Flights"].flights || []);
          setDepartureTotalFlights(data["Departing Flights"].totalFlights || 0);
          console.log(departureTotalFlights);
          departingFlights.forEach((flight) => {
            const classes = flight.classes;
            console.log("classes for flight" + flight.flightNo);
            classes.forEach((classItem) => {
              console.log(
                classItem.className,
                classItem.baseFare,
                classItem.availableSeat,
                classItem.id
              );
            });
          });
        }
        if (data && data["Returning Flights"]) {
          console.log(
              "Returning Flights data:",
              data["Returning Flights"].flights
          );

          setReturningFlights(data["Returning Flights"].flights || []);
          setReturningTotalFlights(data["Returning Flights"].totalFlights || 0);
          console.log(returningTotalFlights);
          returningFlights.forEach((flight) => {
            const classes = flight.classes;
            console.log("classes for flight" + flight.flightNo);
            classes.forEach((classItem) => {
              console.log(
                  classItem.className,
                  classItem.baseFare,
                  classItem.availableSeat,
                  classItem.id
              );
            });
          });
        }

      } catch (error) {
        console.error("Error fetching flight data:".error);
      }
    };
    fetchData();
  }, [location.state]);



  useEffect(() => {
    console.log("sott", storedSearchDetails)
    if(!storedSearchDetails) return;
    const fetchDepartingFlights = async () => {
      try {
        const response = await axios.get(
            `http://localhost:8080/api/v1/flights/all-departing-flights?departurePort=${storedSearchDetails?.departurePort}&arrivalPort=${storedSearchDetails?.arrivalPort}&departureDate=${storedSearchDetails?.departureDate}`
        );

      if(response && response.status ===200 )setAllDeparture(response.data);
      else{console.log("departures", response)}
       }catch (error) {
        console.log("Error fetching departing flights:", error);
      }
    };
      fetchDepartingFlights();

  }, [storedSearchDetails]);



  useEffect(() => {
    if(!storedSearchDetails) return;
    console.log(storedSearchDetails)
    const fetchReturningFlights = async () => {

      try {
        const response = await axios.get(
            `http://localhost:8080/api/v1/flights/all-returning-flights?departurePort=${storedSearchDetails?.arrivalPort}&arrivalPort=${storedSearchDetails?.departurePort}&arrivalDate=${storedSearchDetails?.returnDate}`
        );
        if (response && response.status === 200) {
          setAllReturning(response.data);
        } else {
          console.log("Error fetching returning flights:", response);
        }
      } catch (error) {
        console.log("Error fetching returning flights:", error);
      }
    };
    fetchReturningFlights();
  }, [storedSearchDetails]);



  return (
    <div className="parent">
      <div className="headercontainer">
        <div className="flightImgAndAirway">
          <img src="src/assets/planeInMotion.svg" alt="Plane" />{" "}
          <span className="airwayText">Airway</span>
        </div>

        <div className="infoflight">
          <div className="imgflightinfo">
            <img src="src/assets/Group 5.svg" alt="Group" />{" "}
          </div>
          <div className="statusPassengerPaymentConfirmation">
            <div className="flightSel">Flight Selection</div>
            <div className="passenger">Passenger Info</div>
            <div className="passenger">Payment</div>

            <div className="confirm">Confirmation</div>
          </div>
        </div>

        <div className="homeAboutSign">
          <div className="homeAbout">
            <a href="#home" className="homeHeader">
              Home
            </a>
            <div className="aboutAir">
              <a href="#about" className="aboutUsheader">
                About us
              </a>
            </div>
          </div>
          <div className="signbutton">
            <button className="signUp" type="button" onClick={routeLogin}>
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/*hero */}
      <div className="inner">
        <div className="airwayherobody">
          <div className="routesearch">
            <button
              className="searchAirway"
              type="button"
              onClick={routeSearch}
            >
              <img src="src/assets/searchIcon.svg" />
              <span>Search</span>
            </button>
            <div className="routeDatePassTrip">
              {storedSearchDetails &&(

                  <div>
                    <div className="#">
                      {storedSearchDetails?.departurePort} - {storedSearchDetails?.arrivalPort}
                    </div>
                    <div className="#">
                      {storedSearchDetails?.departureDate} - {storedSearchDetails?.returnDate} |{" "}
                      {storedSearchDetails?.noOfAdult} Adult{storedSearchDetails?.noOfAdult > 1 ? "s" : ""},{" "}
                      {storedSearchDetails?.noOfChildren} Child
                      {storedSearchDetails?.noOfChildren > 1 ? "ren" : ""},{" "}
                      {storedSearchDetails?.noOfInfant} Infant
                      {storedSearchDetails?.noOfInfant > 1 ? "s" : ""} | Round Trip
                    </div>
                  </div>
                )}
            </div>

          </div>

          <div className="priceairway">
            <div className="totalPrice">TotalPrice</div>
            <div className="price">0 NGN</div>
          </div>
        </div>


          <div className="departurebody">
            <div className="depart-div">
              <img src="src/assets/smallflight.svg" alt="Flight" />
              <span>Departing Flights</span>
            </div>
            <SliderWrapper>
              <Slider
                  {...settings}
                  className="container grid justify-between pt-[20px] slider-width"
              >
                {allDeparture.map((flight, index) => (
                    <div key={index} className={flight.id == 1 ? "departureslider" : "box-container"}>
                      <div className="day" type= "date" >{getDayOfWeek(flight?.departureDate)}</div>
                      <div className="date">{flight?.departureDate}</div>
                    </div>
                ))}
              </Slider>
            </SliderWrapper>

            <div className="departureflight">
              <div className="nodepflight">
                {"totalFlights: " + departureTotalFlights}
              </div>
              {departingFlights.map((flight, index) => (
              <div className="depinnerbody" key={index}>

                <div className="depflyrouteinfo">
                  <div className="depflightinfo">Flight Information</div>
                  <div className="depandarrivetime">
                    <div className="deptime">
                      <div className="departtime">{flight?.departureTime}</div>
                      <div className="deproute">{flight?.departurePortCity}</div>
                    </div>
                    <img src="src/assets/bigdep.svg" />
                    <div className="arrivetime">
                      <div className="arrivetime">{flight?.arrivalTime}</div>
                      <div className="arriveroute">{flight?.arrivalPortCity}</div>
                    </div>
                  </div>
                  <div className="summary">
                    <div className="departing">
                      <img src="src/assets/smalldep.svg" />
                      <div className="dep">Departure</div>
                    </div>
                    <div className="depflyinfo">
                      <img src="src/assets/Flight-Icon.svg" />
                      <button
                          className="flyinfo"
                          type="button"
                          onClick={routeFlightInfo}
                      >
                        Flight Information
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flyclassesandprices">
                  <div className="flight-classes">
                    <div className="class">Economy</div>
                    <div className="class">Premium</div>
                    <div className="class">Business</div>
                  </div>
                  <div className="flightprices">
                    <div className="economyclass">
                      <div className="price">{flight?.classes[0]?.baseFare}</div>
                      <div className="naira">NGN</div>
                      <button
                          className="select" type ="button"
                          onClick={() => handleDepartingSelectFlight(flight?.classes[0]?.id)}
                      >
                        SELECT
                      </button>
                    </div>
                    <div className="premiumclass">
                      <div className="price">{flight?.classes[1]?.baseFare}</div>
                      <div className="naira">NGN</div>
                      <button
                          className="select"
                          onClick={() => handleDepartingSelectFlight(flight?.classes[1]?.id)}
                      >
                        SELECT
                      </button>
                    </div>
                    <div className="businessclass">
                      <div className="price">{flight?.classes[2].baseFare}</div>
                      <div className="naira">NGN</div>
                      <button
                          className="select"
                          onClick={() => handleDepartingSelectFlight(flight?.classes[2].id)}
                      >
                        SELECT
                      </button>
                    </div>
                  </div>
                </div>
              </div>
                  ))}
            </div>
          </div>

          <div className="arrivalbody">
            <div className="depart-div">
              <img src="src/assets/smallflight.svg" alt="Flight" />
              <span>Returning Flights</span>
            </div>
            <SliderWrapper>
              <Slider
                  {...settings}
                  className="container grid justify-between pt-[20px] slider-width"
              >
                {allReturning.map((flight, index) => (
                    <div key={index} className={flight?.id == 1 ? "returnslider" : "box-container"}>
                      <div className="day">Day:{getDayOfWeek(flight?.arrivalDate)}</div>
                      <div className="date">Date:{flight?.arrivalDate}</div>
                    </div>
                ))}
              </Slider>
            </SliderWrapper>

            <div className="arrivalflight">
              <div className="nodepflight">
                {"totalFlights: " + returningTotalFlights}
              </div>
              {returningFlights.map((flight2, idx) => (
              <div className="arrivedepinnerbody" key={idx}>

                <div className="depflyrouteinfo">
                  <div className="depflightinfo">Flight Information</div>

                  <div className="depandarrivetime">
                    <div className="deptime">
                      <div className="departtime">{flight2?.departureTime}</div>
                      <div className="deproute">{flight2?.departurePortCity}</div>
                    </div>
                    <img src="src/assets/returningplane.svg" />
                    <div className="arrivetime">
                      <div className="arrivetime">{flight2?.arrivalTime}</div>
                      <div className="arriveroute">{flight2?.arrivalPortCity}</div>
                    </div>
                  </div>

                  <div className="summary">
                    <div className="departing">
                      <img src="src/assets/smallreturnplan.svg" />
                      <div className="dep">Departure</div>
                    </div>

                    <div className="depflyinfo">
                      <img src="src/assets/Flight-Icon.svg" />
                      <button
                          className="flyinfo"
                          type="button"
                          onClick={routeFlightInfo}
                      >
                        Flight Information
                      </button>
                    </div>
                  </div>

                </div>

                <div className="flyclassesandprices">
                  <div className="flight-classes">
                    <div className="class">Economy</div>
                    <div className="class">Premium</div>
                    <div className="class">Business</div>
                  </div>

                  <div className="flightprices">
                    <div className="economyclass">
                      <div className="price">{flight2?.classes[0].baseFare}</div>
                      <div className="naira" value={flight2?.classes[0].id}>NGN</div>
                      <button
                          className="select" type="button"
                          onClick={() => handleReturningSelectFlight(flight2?.classes[0].id)}
                      >
                        SELECT
                      </button>
                    </div>
                    <div className="premiumclass">
                      <div className="price">{flight2?.classes[1].baseFare}</div>
                      <div className="naira">NGN</div>
                      <button
                          className="select" type="button"
                          onClick={() => handleReturningSelectFlight(flight2?.classes[1].id)}
                      >
                        SELECT
                      </button>                    </div>
                    <div className="businessclass">
                      <div className="price">{flight2?.classes[2].baseFare}</div>
                      <div className="naira">NGN</div>
                      <button
                          className="select" type="button"
                          onClick={() => handleReturningSelectFlight(flight2?.classes[2].id)}
                      >
                        SELECT
                      </button>
                    </div>
                  </div>
                </div>
              </div>
                  ))}
            </div>
          </div>
          <div className="continue">
            <button
              className="continuebutton"
              type="button"
              onClick={routePassengerInformation}
            >
              Continue
            </button>
          </div>
      </div>
    </div>
  );
}

export default FlightSelectionOne;
