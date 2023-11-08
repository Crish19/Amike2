import React from "react";

function TourTicket({
  selectedDate,
  selectedTime,
  selectedLanguages,
  adultsCount,
  infantsCount,
}) {
  return (
    <div className=" rounded-xl p-3 mt-4" style={{ background: "#f8f8f8" }}>
      <div className="bg-blue-500 text-white text-center py-1 rounded-t-xl">
        <h2 className="font-bold">Your Tour Ticket</h2>
      </div>
      <div className="p-4">
        {/* ... Tour ticket details ... */}
        <p className="font-semibold">2-Hour Walking Tour in Stockholm</p>
            <div className="flex justify-between mt-4">
              <div>
                <p className="text-sm">Date:</p>
                <p className="font-semibold">{selectedDate}</p>
              </div>
              <div>
                <p className="text-sm">Time:</p>
                <p className="font-semibold">{selectedTime}</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm">Languages:</p>
              <p className="font-semibold">
                {selectedLanguages || "None selected"}
              </p>
              </div>
              <div className="mt-4">
              <p className="text-sm">Total Travelers:</p>
              <p className="font-semibold">{adultsCount + infantsCount}</p>
            </div>
      </div>
    </div>
  );
}

export default TourTicket;
