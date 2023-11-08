import React, { useState } from "react";
import Pic1 from "../media/stad1.jpg";
import Pic2 from "../media/stad3.jpg";
import Pic3 from "../media/stad5.jpg";
import Pic4 from "../media/stad.JPG";
import Pic5 from "../media/sol.jpg";

function ImageGallery() {
    const Pics = [Pic1, Pic2, Pic3, Pic4, Pic5];
    const [selectedPicIndex, setSelectedPicIndex] = useState(0);
  
    const handlePickClick = (index) => {
      setSelectedPicIndex(index);
    };
  
    const handlePrevClick = () => {
      setSelectedPicIndex((prevIndex) =>
        prevIndex === 0 ? Pics.length - 1 : prevIndex - 1
      );
    };
  
    const handleNextClick = () => {
      setSelectedPicIndex((prevIndex) =>
        prevIndex === Pics.length - 1 ? 0 : prevIndex + 1
      );
    };
  return (
    <div className=" flex">
      <div className="flex flex-col mr-6">
        {Pics.map((smallPic, index) => (
          <img
            key={index}
            src={smallPic}
            alt={`Small Pic ${index}`}
            className={`mb-2 rounded-2xl object-cover ${
              selectedPicIndex === index
                ? " border-2 border-orange-500"
                : " opacity-60"
            }`}
            style={{ width: "150px", height: "101px", cursor: "pointer" }}
            onClick={() => handlePickClick(index)}
          />
        ))}
      </div>

      <div
        className="relative"
        style={{
          height: "77vh",
          width: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src={Pics[selectedPicIndex]}
          alt={`Selected Pic`}
          className=" w-full h-full rounded-2xl object-cover"
        />
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 m-2 rounded-full shadow-md"
          onClick={handlePrevClick}
          style={{ transform: "translateY(-50%)" }}
        >
          &lt;
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 m-2 rounded-full shadow-md"
          onClick={handleNextClick}
          style={{ transform: "translateY(-50%)" }}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default ImageGallery;
