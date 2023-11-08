import React, { useEffect, useState } from "react";
import points from "./point";

function ReadMoreText({ text }) {
  const maxLength = 600;
  const [isTruncated, setIsTruncated] = useState(text.length > maxLength);

  const toggleReadMore = () => {
    setIsTruncated(!isTruncated);
  };

  return (
    <p className="mb-4 text-justify">
      {isTruncated ? `${text.slice(0, maxLength)}...` : text}
      {text.length > maxLength && (
        <button
          onClick={toggleReadMore}
          className="text-blue-500 cursor-pointer focus:outline-none"
        >
          {isTruncated ? "Read More" : "Read Less"}
        </button>
      )}
    </p>
  );
}

function InfoContainer() {
  const [showOverview, setShowOverview] = useState(false);
  const [showMeeting, setShowMeeting] = useState(false);
  const [showExpectations, setShowExpectations] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const isSmallScreen = windowWidth <= 640;

  return (
    <div>
      {/* Overview */}
      <div className="mb-4">
        <h2
          className="font-semibold text-lg cursor-pointer"
          onClick={() => isSmallScreen && setShowOverview(!showOverview)}
        >
          Overview
          {isSmallScreen && (
            <span
              className={`ml-2 ${
                showOverview ? "text-red-500" : "text-green-500"
              }`}
            >
              {showOverview ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 inline"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 inline"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 01-1.06-1.06l-7.5 7.5z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </span>
          )}
        </h2>
      </div>
      <div className={`mb-4 ${isSmallScreen && !showOverview && "hidden"}`}>
        <ReadMoreText
          text={`We stand out by combining our passion for Stockholm's history and
                 culture. We offer a local perspective that adds a deeper insight
                 into the city. Unlike other tours, we go beyond the surface and take
                 you to hidden gems and off-the-beaten-path locations that showcase
                 the authentic side of Stockholm. Join us for a truly unique and
                immersive experience that you won't find elsewhere.`}
          maxLength={800}
        />
      </div>
      {/* Meeting And Pickup */}
      <div className="my-4">
        <h2
          className="font-semibold text-lg cursor-pointer"
          onClick={() => isSmallScreen && setShowMeeting(!showMeeting)}
        >
          Meeting and Pickup
          {isSmallScreen && (
            <span
              className={`ml-2 ${
                showMeeting ? "text-red-500" : "text-green-500"
              }`}
            >
              {showMeeting ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 inline"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.47 7.72a.75.75 0 011.06 0l-7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l6.97-6.97a.75.75 0 01-1.06-1.06l-7.5 7.5z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 inline"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </span>
          )}
        </h2>
      </div>
      <div className={`mb-4 ${isSmallScreen && !showMeeting && "hidden"}`}>
        <div>
          <p className="font-semibold">Meeting point</p>
          <p>Drottninggatan 2</p>
          <p>Drottninggatan 2, 111 51 Stockholm, Sweden</p>
          <a
            href="https://www.google.com/maps/place/Drottninggatan+2,+111+51+Stockholm,+Sweden"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 cursor-pointer"
          >
            Open in Google Maps
          </a>
          <p className="italic text-orange-500">
            Just in front of the parliament, before crossing the bridge.
          </p>
        </div>
      </div>
      {/* What To Expect */}
      <div className="my-4">
        <h2
          className="font-semibold text-lg cursor-pointer"
          onClick={() =>
            isSmallScreen && setShowExpectations(!showExpectations)
          }
        >
          What To Expect
          {isSmallScreen && (
            <span
              className={`ml-2 ${
                showExpectations ? "text-red-500" : "text-green-500"
              }`}
            >
              {showExpectations ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 inline"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.47 7.72a.75.75 0 011.06 0l-7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l-7.5 7.5z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 inline"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 01-1.06-1.06l-7.5 7.5z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </span>
          )}
        </h2>
      </div>
      <div className={`mb-4 ${isSmallScreen && !showExpectations && "hidden"}`}>
        {/* Points */}
        <div id="points-container" className="mb-4">
          <h3 className=" font-semibold mt-4">Itinerary</h3>
          <p className=" mb-8">This is a typical itinerary for this product</p>
          {points.map((point, index) => (
            <div key={index} className="flex items-start mb-2">
              <div className="mr-2 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 
                    19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 
                    8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mt-1">{point.title}</h3>

                <ReadMoreText text={point.text} maxLength={point.maxLength} />
              </div>
            </div>
          ))}
        </div>
      </div>
      {!isSmallScreen && (
  <div className="border-b border-gray-300 my-4"></div>
)}
      {/* Additional Information */}
      <div className="my-4">
        <h2 className="font-semibold text-lg cursor-pointer" onClick={()=> isSmallScreen && setShowInfo(!showInfo)}
        >
          Additional Information
        {isSmallScreen && (
          <span
          className= {`ml-2 ${showInfo ? 'text-red-500' :'text-green-500'}`}
          >
            {showInfo ? (
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 inline"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.47 7.72a.75.75 0 011.06 0l-7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l6.97-6.97a.75.75 0 01-1.06-1.06l-7.5 7.5z"
                    clipRule="evenodd"
                  />
                </svg>
            ) :(
              <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 inline"
            >
              <path
                fillRule="evenodd"
                d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                clipRule="evenodd"
              />
            </svg>
            )}
          </span>
        )}
          </h2>
      </div>
      <div className={`mb-4 ${isSmallScreen && !showInfo && "hidden"}`}>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Tour Donations</h3>
          <ul className="list-disc pl-6">
            <li>Our tours are "Pay What You Want" experiences.</li>
            <li>
              While tours are free, donations of around 10 euros per person are
              appreciated.
            </li>
            <li>Donations support guides and maintain tour quality.</li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Payment Methods</h3>
          <ul className="list-disc pl-6">
            <li>We accept cash donations on-site.</li>
            <li>
              Electronic payments are available:
              <ul className="list-disc pl-6 mt-2">
                <li>Credit cards</li>
                <li>PayPal</li>
                <li>Revolut</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <p className="mb-4 italic text-orange-500">
        Your support helps us share Stockholm's history and culture.
      </p>
    </div>
    {isSmallScreen && <div className="border-b border-gray-300 my-4"></div>}

    </div>
    
  );
  
}

export default InfoContainer;
