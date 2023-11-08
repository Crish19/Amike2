import React, { useEffect } from "react";
import ImageGallery from "../components/ImageGallery";
import InfoContainer from "../components/InfoContainer";
import BookingWidget from "../components/BookingWidget";

function BookingPage() {
    useEffect(() => {
    const containerHeight =
      document.getElementById("points-container").offsetHeight;
    const connectorLine = document.querySelector(".connector-line");

    if (connectorLine) {
      connectorLine.style.height = `${containerHeight}px`;
      connectorLine.style.bottom = `-${containerHeight}px`;
    }
  }, []);

  return (
    <div className="mb-3 p-4 md:my-5 md:flex">
      {/* Gallery */}

      <div className="max-w-full md:max-w-[70%] pr-6">
        <div>
          <h2 className="font-bold text-lg md:text-2xl mb-3">
            2-Hour Walking Tour in Stockholm
          </h2>
          <p className="font-light text-xs md:text-sm mb-5">
            Stockholms län, Sweden
          </p>

        </div>
        <div className=" hidden md:flex">
          <ImageGallery />
        </div>
        <div className=" border-t border-gray-300 my-4 "></div>{" "}
        <div className="flex m-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-Width="1.5"
            stroke="orange"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <p className="text-xs md:text-sm mr-10">2 hours (approx.)</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-Width="1.5"
            stroke="orange"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
            />
          </svg>
          <p className="text-xs">Offered in: English and Spanish</p>
        </div>
        <div className="border-b border-gray-300 my-4"></div>{" "}
        {/* Information */}
        <InfoContainer />
      </div>

      <BookingWidget />
    </div>
  );
}

export default BookingPage;
