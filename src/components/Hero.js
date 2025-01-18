import React from "react";
import { FaReact,FaAngular,FaNodeJs ,FaHtml5,FaSteam} from "react-icons/fa";

function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-customBlue text-white text-center py-20 px-4 overflow-hidden"
    >
      {/* Animated Background Icons */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Circle Icon */}
        <FaNodeJs
          className="absolute text-white opacity-20"
          style={{
            color:"#55cd08",
            fontSize: "8rem",
            top: "20%",
            left: "10%",
            animation: "shake 5s ease-in-out infinite",
          }}
        />
        {/* Star Icon */}
        <FaHtml5
          className="absolute text-yellow-300 opacity-30"
          style={{
            color:"#fc1303",
            fontSize: "10rem",
            opacity:"0.1",
            top: "20%",
            right: "15%",
            animation: "shake 5s ease-in-out infinite",
          }}
        />

        {/* Leaf Icon */}
        <FaAngular
          className="absolute text-green-300 opacity-20"
          style={{
            color:"#cf0144",
            fontSize: "12rem",
            bottom: "10%",
            left: "20%",
            animation: "shake 5s ease-in-out infinite",
          }}
        />
        <FaReact
          className="absolute text-green-300 opacity-20"
          style={{
            color:"#08defc",
            fontSize: "13rem",
            bottom: "1%",
            left: "60%",
            animation: "shake 5s ease-in-out infinite",
          }}
        />
      </div>

      {/* Main Content */}
      <section className="min-h-screen bg-customBlue flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-black">The Best Solutions</h1>
        <p className="text-black mt-4">Fresh Ideas for Your Business</p>
        <button className="mt-6 px-6 py-3 bg-yellow-400 text-blue-900 font-bold rounded hover:bg-yellow-500">
          Learn More
        </button>
      </section>
    </section>
  );
}

export default Hero;
