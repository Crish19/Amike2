import React, { useState } from "react";
import CountryFlag from "react-country-flag";
import BookingForm from "./BookingForm";
import TravelersPopup from "./TravelersPopup";
import TourTicket from "./TourTicket";
import availabilityData from "./AvailabilityData";
import axios from "axios";

function BookingWidget() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [adultsCount, setAdultsCount] = useState(1);
  const [infantsCount, setInfantsCount] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    setSelectedTime(null);
    setSelectedLanguages([]);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setSelectedLanguages([]);
  };

  const toggleLanguageSelection = (language) => {
    if (selectedLanguages.includes(language)) {
      // If the selected language is already in the list, remove it
      setSelectedLanguages([]);
    } else {
      // Otherwise, set the selected language to the new one
      setSelectedLanguages([language]);
    }
  };

  const incrementCount = (type) => {
    if (type === "adults" && adultsCount < 20) {
      setAdultsCount(adultsCount + 1);
    } else if (type === "infants" && infantsCount < 20) {
      setInfantsCount(infantsCount + 1);
    }
  };

  const decrementCount = (type) => {
    if (type === "adults" && adultsCount > 0) {
      setAdultsCount(adultsCount - 1);
    } else if (type === "infants" && infantsCount > 0) {
      setInfantsCount(infantsCount - 1);
    }
  };

  const selectedAvailability = availabilityData.find(
    (availability) => availability.date === selectedDate
  );

  const availableToursCount =
    selectedAvailability &&
    selectedAvailability.times.filter(
      (timeObj) =>
        !selectedLanguages.length ||
        selectedLanguages.some((lang) => timeObj.languages.includes(lang))
    ).length;

  const handleAccept = () => {
    setShowPopup(false); // Close the popup when "Accept" is clicked
  };

  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [, setIsNameValid] = useState(true);
  const [, setIsEmailValid] = useState(true);
  const [, setIsPhoneValid] = useState(true);

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    setIsNameValid(value.trim() !== ""); // Check if the name is not empty
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    // Check if the email matches a basic email pattern
    setIsEmailValid(/^\S+@\S+\.\S+$/.test(value));
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setPhone(value);
    setIsPhoneValid(value.trim() !== ""); // Check if the phone number is not empty
  };

  const isFormValid = () => {
    return (
      selectedDate &&
      selectedTime &&
      selectedLanguages.length > 0 &&
      name.trim() !== "" &&
      /^\S+@\S+\.\S+$/.test(email) && // Check if the email matches a basic email pattern
      phone.trim() !== "" &&
      adultsCount + infantsCount >= 1 // Ensure at least one traveler
    );
  };

  const handleBooking = () => {
    if (isFormValid()) {
      const reservationData = {
        name,
        email,
        phone,
        tour: "Amike Tours",
        date: selectedDate,
        time: selectedTime,
        languages: selectedLanguages,
        travelers: adultsCount + infantsCount,
      };

      //Create a reservation
      axios
        .post("/api/reservations", reservationData)
        .then((reservationResponse) => {
          if (reservationResponse.status === 201) {
            //Reservation created, get the reservation ID
            const reservationId = reservationResponse.data._id;

            // Create a booking associated with the reservation
            const bookingData = {
              name,
              email,
              phone,
              reservationId,
            };
            return axios.post("/api/bookings", bookingData);
          } else {
            throw new Error("failed to create a reservation");
          }
        })
        .then((bookingResponse) => {
          //Handle success and clear form
          alert(
            `Booking confirmed for ${bookingResponse.data.name}. You will receive a confirmation email shortly.`
          );
          setName("");
          setEmail("");
          setPhone("");
          setShowModal(false);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else {
      alert("Please fill in all required fields correctly");
    }
  };

  return (
    <div className="max-w-[30%]">
      <p className="mb-10 font-bold">
        Booking also by{" "}
        <a
          href="https://api.whatsapp.com/send?phone=46729406310"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 font-semibold hover:underline"
        >
          WhatsApp
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
            className="inline-block w-5 h-5 ml-1"
          >
            {/* WhatsApp icon */}
            <path
              fill="currentColor"
              d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
            />
          </svg>
        </a>{" "}
      </p>
      <div className="border border-gray-500 p-4 rounded-3xl shadow-2xl">
        <div className="mt-8">
          <h2 className="font-bold text-2xl mb-3">Book your tour</h2>
          {/* Date Selection */}
          <div className="flex">
            <input
              type="date"
              id="date"
              className="p-2 border border-gray-300 rounded-xl"
              onChange={handleDateChange}
            />
            <div className="mb-4 mr-4">{/* Date input */}</div>

            {/* Travelers Box */}
            <TravelersPopup
              showPopup={showPopup}
              adultsCount={adultsCount}
              infantsCount={infantsCount}
              decrementCount={decrementCount}
              incrementCount={incrementCount}
              handleAccept={handleAccept}
              setShowPopup={setShowPopup} // Pass setShowPopup as a prop
            />
          </div>
          {/* Time Selection */}
          {selectedAvailability && (
            <div className="mb-4 mt-3 mr-4">
              {/* Time select */}
              <select
                id="time"
                className="p-2 border border-gray-300 rounded-xl"
                onChange={(e) => handleTimeSelect(e.target.value)}
                value={selectedTime || ""}
              >
                <option value="">Select a time</option>
                {selectedAvailability.times.map((timeObj) => (
                  <option key={timeObj.time} value={timeObj.time}>
                    {timeObj.time}
                  </option>
                ))}
              </select>
            </div>
          )}
          {/* Available Tours Count */}
          {availableToursCount > 0 && (
            <p>
              <span className="font-bold">{availableToursCount}</span> Available
              tours this day
            </p>
          )}
          {/* Available Languages */}
          {selectedTime && (
            <div>
              <h3 className="font-semibold mb-2">Available Languages:</h3>
              {/* Language options */}
              <div className="flex flex-wrap">
                {selectedAvailability.times
                  .find((t) => t.time === selectedTime)
                  .languages.map((language) => (
                    <div
                      key={language}
                      className={`rounded-full border ${
                        selectedLanguages.includes(language)
                          ? "border-orange-500 bg-orange-100"
                          : "border-gray-300 hover:bg-orange-100 hover:border-orange-500"
                      } p-2 m-1 flex items-center cursor-pointer`}
                      onClick={() => toggleLanguageSelection(language)}
                    >
                      <CountryFlag
                        countryCode={
                          language === "Spanish"
                            ? "ES"
                            : language === "English"
                            ? "GB"
                            : language === "German"
                            ? "DE"
                            : ""
                        }
                        svg
                        style={{
                          width: "24px",
                          height: "24px",
                        }}
                      />
                      <span className="ml-2">{language}</span>
                    </div>
                  ))}
              </div>
            </div>
          )}
          {/* No tours available message */}
          {!selectedAvailability && (
            <p className=" mt-2">No tours available for the selected date.</p>
          )}
        </div>

        <TourTicket
          selectedDate={selectedDate}
          selectedTime={selectedTime}
          selectedLanguages={selectedLanguages}
          adultsCount={adultsCount}
          infantsCount={infantsCount}
        />

        <p className="text-xs text-center mt-3">
          <span className="text-red-500 cursor-pointer">Cancellation</span> is
          recommended 24 hours before your tour.
        </p>

        <button
          onClick={() => {
            if (
              selectedDate &&
              selectedTime &&
              selectedLanguages.length > 0 &&
              adultsCount + infantsCount >= 1
            ) {
              setShowModal(true);
            } else {
              alert(
                "Please select a date, time, number of travelers and a language."
              );
            }
          }}
          className={`bg-blue-500 text-white py-2 px-4 rounded-md w-full mt-6`}
        >
          Reserve Now
        </button>
        <BookingForm
          showModal={showModal}
          setShowModal={setShowModal}
          selectedDate={selectedDate}
          selectedTime={selectedTime}
          selectedLanguages={selectedLanguages}
          handleBooking={handleBooking}
          isFormValid={isFormValid}
          name={name}
          handleNameChange={handleNameChange}
          email={email}
          handleEmailChange={handleEmailChange}
          phone={phone}
          handlePhoneChange={handlePhoneChange}
          setName={setName} // Pass the state updater functions as props
          setEmail={setEmail}
          setPhone={setPhone}
        />
      </div>
    </div>
  );
}

export default BookingWidget;
