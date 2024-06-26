import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './PassengersInfoLowerTab.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';

const nationalities = [
"Afghan",
"Albanian",
"Algerian",
"American",
"Andorra",
"Angolan",
"Anguillan",
"Citizen of Antigua and Barbuda",
"Argentine",
"Armenian",
"Australian",
"Austrian",
"Azerbaijani",
"Bahamian",
"Bahraini",
"Bangladeshi",
"Barbadian",
"Belarusian",
"Belgian",
"Belizean",
"Beninese",
"Bermudian",
"Bhutanese",
"Bolivian",
"Citizen of Bosnia and Herzegovina",
"Botswanan",
"Brazilian",
"British",
"British Virgin Islander",
"Bruneian",
"Bulgarian",
"Burkinan",
"Burmese",
"Burundian",
"Cambodian",
"Cameroonian",
"Canadian",
"Cape Verdean",
"Cayman Islander",
"Central African",
"Chadian",
"Chilean",
"Chinese",
"Colombian",
"Comoran",
"Congolese (Congo)",
"Congolese (DRC)",
"Cook Islander",
"Costa Rican",
"Croatian",
"Cuban",
"Cymraes",
"Cymro",
"Cypriot",
"Czech",
"Danish",
"Djiboutian",
"Dominican",
"Citizen of the Dominican Republic",
"Dutch",
"East Timorese",
"Ecuadorean",
"Egyptian",
"Emirati",
"English",
"Equatorial Guinean",
"Eritrean",
"Estonian",
"Ethiopian",
"Faroese",
"Fijian",
"Filipino",
"Finnish",
"French",
"Gabonese",
"Gambian",
"Georgian",
"German",
"Ghanaian",
"Gibraltarian",
"Greek",
"Greenlandic",
"Grenadian",
"Guamanian",
"Guatemalan",
"Citizen of Guinea-Bissau",
"Guinean",
"Guyanese",
"Haitian",
"Honduran",
"Hong Konger",
"Hungarian",
"Icelandic",
"Indian",
"Indonesian",
"Iranian",
"Iraqi",
"Irish",
"Israeli",
"Italian",
"Ivorian",
"Jamaican",
"Japanese",
"Jordanian",
"Kazakh",
"Kenyan",
"Kittitian",
"Citizen of Kiribati",
"Kosovan",
"Kuwaiti",
"Kyrgyz",
"Lao",
"Latvian",
"Lebanese",
"Liberian",
"Libyan",
"Liechtenstein citizen",
"Lithuanian",
"Luxembourger",
"Macanese",
"Macedonian",
"Malagasy",
"Malawian",
"Malaysian",
"Maldivian",
"Malian",
"Maltese",
"Marshallese",
"Martiniquais",
"Mauritanian",
"Mauritian",
"Mexican",
"Micronesian",
"Moldovan",
"Monegasque",
"Mongolian",
"Montenegrin",
"Montserratian",
"Moroccan",
"Mosotho",
"Mozambican",
"Namibian",
"Nauruan",
"Nepalese",
"New Zealander",
"Nicaraguan",
"Nigerian",
"Nigerien",
"Niuean",
"North Korean",
"Northern Irish",
"Norwegian",
"Omani",
"Pakistani",
"Palauan",
"Palestinian",
"Panamanian",
"Papua",
"New Guinean",
"Paraguayan",
"Peruvian",
"Pitcairn Islander",
"Polish",
"Portuguese",
"Prydeinig",
"Puerto",
"Rican",
"Qatari",
"Romanian",
"Russian",
"Rwandan",
"Salvadorean",
"Sammarinese",
"Samoan",
"Sao Tomean",
"Saudi Arabian",
"Scottish",
"Senegalese",
"Serbian",
"Citizen of Seychelles",
"Sierra Leonean",
"Singaporean",
"Slovak",
"Slovenian",
"Solomon Islander",
"Somali",
"South African",
"South Korean",
"South Sudanese",
"Spanish",
"Sri Lankan",
"St Helenian",
"St Lucian",
"Stateless",
"Sudanese",
"Surinamese",
"Swazi",
"Swedish",
"Swiss",
"Syrian",
"Taiwanese",
"Tajik",
"Tanzanian",
"Thai",
"Togolese",
"Tongan",
"Trinidadian",
"Tristanian",
"Tunisian",
"Turkish",
"Turkmen",
"Turks and Caicos Islander",
"Tuvaluan",
"Ugandan",
"Ukrainian",
"Uruguayan",
"Uzbek",
"Vatican citizen",
"Citizen of Vanuatu",
"Venezuelan",
"Vietnamese",
"Vincentian",
"Wallisian",
"Welsh",
"Yemeni",
"Zambian",
"Zimbabwean"
];

const genders= [
'Male',
'Female'
];

const titles= [
'Mr',
'Mrs',
'Miss',
'Prof',
'Dr',
'King',
'Prince',
'Princess',
'Arch Bishop',
'Hajji',
'Emperor',
'Barrister',
'Vatican',
'Pope',
'Sheikh',
'Engr'
];

const PassengersInfoLowerTab = () => {
const [dob, setDob] = useState('');
const [isValid, setIsValid] = useState(true);

const validateDOB = (value) => {
const regex = /^(0[1-9]|[12]\d|3[01])-(0[1-9]|1[0-2])-\d{2}$/;
setIsValid(regex.test(value));
};
const handleDateChange = (date) => {
setDob(date);
};

  return (
    <div>
    <div className= "infoLowerAdult">
    <div className="blueTabAdult">
    <p>Passenger Information - Passenger 1(Adult)</p>
    </div>
    </div>
    <div className="passenger-form-adult">
          <div className="grid-container-adult">
            <div className="grid-item-adult">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" name="firstName" placeholder= "Enter your first name" className="input-field" />
            </div>
            <div className="grid-item-adult">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" name="lastName" placeholder= "Enter your last name" className="input-field" />
            </div>
            <div className="grid-item-adult">
              <label htmlFor="gender">Gender</label>
              <select id="gender" name="gender" className="input-field">
                            <option value="">Select Your Gender</option>
                            {genders.map((gender, index) => (
                            <option key={index} value={gender}>{gender}</option>
                            ))}
                            </select>
            </div>
            <div className="grid-item-adult">
              <label htmlFor="dob" className="dob-label">Date of Birth</label>
              <div className="input-with-icon-adult">
                          <DatePicker
                            selected={dob ? dob:null}
                            onChange={handleDateChange}
                            dateFormat="dd-MM-yyyy"
                            placeholderText="DD-MM-YYYY"
                            className="input-field dob-input"
                            showYearDropdown
                            scrollableYearDropdown
                            yearDropdownItemNumber={500}
                            minDate={new Date("1890-01-01")}
                          />
                          <FontAwesomeIcon icon={faCalendarAlt} className="calendar-icon" />
                        </div>
            </div>
            <div className="grid-item-adult">
              <label htmlFor="title">Title</label>
              <select id="title" name="title" className="input-field">
                                          <option value="">Select Your Title</option>
                                          {titles.map((title, index) => (
                                          <option key={index} value={title}>{title}</option>
                                          ))}
                                          </select>
            </div>
            <div className="grid-item-adult">
              <label htmlFor="nationality">Nationality</label>
              <select id="nationality" name="nationality" className="input-field">
              <option value="">Select nationality</option>
              {nationalities.map((nationality, index) => (
              <option key={index} value={nationality}>{nationality}</option>
              ))}
              </select>
            </div>
          </div>
        </div>
        <div className="contact-info-headline-adult">
        <h2>Contact Information</h2>
        </div>
        <div className="contact-info-form-adult">
         <div className="grid-container-adult">
                     <div className="grid-item-adult">
                     <label htmlFor="Phone Number">Phone Number</label>
                     <input type="text" id="phone-number" placeholder="Enter your phone number"name="phone-number" className="input-field"/>
                     </div>
                     <div className="grid-item-adult">
                     <label htmlFor="email-address">Email address</label>
                     <input type="text" id="email-address" placeholder="Please enter your valid email address" name="email-address" className="input-field"/>
                     </div>
                     </div>
                     </div>
                     <div className="primary-contact-checkbox">
                     <input type="checkbox" id="myCheckbox" name="myCheckbox" />
                                         <h4 style={{ color: "#00008B" }}>Primary Contact</h4>
                                          </div>
                                          <div className="progress-button-container-adult">
                                         <Link to="/flight-select">
                                          <button className="back-button-adult">Back</button>
                                          </Link>
                                        
                                          <Link to="/infant-info-page">
                                          <button className="continue-button-adult">Continue</button>
                                          </Link>
    </div>
    </div>
  )
}
export default PassengersInfoLowerTab;