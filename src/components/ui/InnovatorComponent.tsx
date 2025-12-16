import React from "react";

const InnovatorComponent: React.FC = () => {
  return (
    <section
      className="w-full flex flex-col items-center justify-center text-center text-white mt-60"
      style={{
        backgroundImage: 'url("/images/Innovator/innovatorComponent.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh", // you can change to '100vh' for full screen height
      }}
    >
      {/* Heading */}
      <div
        style={{
          height: "400px",
          boxSizing: "border-box", // ensures padding doesn’t increase total height
          padding: "40px", // any padding will stay inside the fixed height
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            maxWidth: "670px",
            fontFamily: "SF Pro, sans-serif",
            fontWeight: "400",
            fontSize: "72px",
            lineHeight: "80px",
            letterSpacing: "-2%",
            marginBottom: "32px",
          }}
        >
          Empower Innovators to Refer Innovators
        </h1>

        {/* Paragraph */}
        <p
          style={{
            maxWidth: "610px",
            fontFamily: "SF Pro, sans-serif",
            fontWeight: "400",
            fontSize: "20px",
            lineHeight: "140%",
            color: "#909DAC",
            marginBottom: "60px",
          }}
        >
          "We believe the best ideas spread through networks of trust. With
          Kavconnect, past clients, partners, and stakeholders can refer peers
          and help bring more ideas to life."
        </p>
      </div>
      <div className="h-[100px] mb-100 border-box">
        {/* Button */}
        <button
          className="text-white font-semibold text-lg rounded-xl transition duration-300 ease-in-out hover:scale-105 "
          style={{
            width: "154px",
            height: "56px",
            background:
              "linear-gradient(0deg, rgba(255, 169, 40, 0.01), rgba(255, 169, 40, 0.01))",
            boxShadow:
              "0px -9.3px 37.2px 0px #FFA9280D inset, 0px 0px 13.95px 0px #FFFFFF14 inset, 0px 61.61px 17.44px 0px #00000003, 0px 39.52px 16.27px 0px #0000000F, 0px 22.09px 12.79px 0px #00000033, 0px 9.3px 9.3px 0px #00000057, 0px 2.32px 5.81px 0px #00000063",
            backdropFilter: "blur(13.7px)",
            border: "1px solid",
            borderImageSource:
              "linear-gradient(176.03deg, #FFFFFF -3.47%, #787878 76.45%)",
          }}
        >
          Refer a Peer
        </button>
      </div>
    </section>
  );
};

export default InnovatorComponent;
