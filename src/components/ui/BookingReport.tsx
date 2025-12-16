import React from "react";

const BookingReport = () => {
  return (
    <div className="flex justify-center py-20">
      {/* Container with fixed size, padding, and rounded corners */}
      <div
        className="relative flex flex-col lg:flex-row justify-between gap-[30px] p-[50px] rounded-[40px] overflow-hidden"
        style={{ width: "1200px", height: "500.22px", borderWidth: "0.5px" }}
      >
        {/* Gradient border */}
        <div
          className="absolute top-0 left-0 right-0 bottom-0 rounded-[40px] z-[-1]"
          style={{
            background:
              "linear-gradient(180.25deg, #736540 -12.54%, #1D1D1F 46.34%)",
            padding: "1px",
          }}
        ></div>

        {/* Left Side Text */}
        <div className="flex flex-col justify-center items-start space-y-4 w-full lg:w-1/2 px-10">
          <h2
            className="text-white"
            style={{
              fontFamily: "SF Pro",
              fontWeight: 510,
              fontStyle: "Medium",
              fontSize: "40px",
              width: "378px",
              height: "48px",
            }}
          >
            Booking Report
          </h2>

          <p
            style={{
              fontFamily: "SF Pro",
              fontWeight: 400,
              fontStyle: "Regular",
              fontSize: "20px",
              lineHeight: "100%",
              width: "516px",
              height: "24px",
              color: "#E48242",
            }}
          >
            Unearth the most valuable data by intelligently managing your
            dataset
          </p>

          <p
            className="font-light text-lg leading-[28px] tracking-normal text-white"
            style={{ width: "542px", height: "112px" }}
          >
            Scale’s suite of dataset management, testing, model evaluation, and
            model comparison tools enable you to “label what matters.” Maximize
            the value of your labeling budget by identifying the highest value
            data to label, even without ground truth labels.
          </p>

          <button className="w-[187px] h-[41px] bg-gray-800 text-white border border-gray-600 rounded-[12px] text-[16px] leading-[26px] font-medium hover:bg-gray-700">
            Manage my booking
          </button>
        </div>

        {/* Right Side Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center lg:mt-0 mr-10">
          <img
            src="/images/dataManagement/DM-IMG-3.png"
            alt="Big Data Management"
            className="rounded-xl shadow-2xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default BookingReport;
