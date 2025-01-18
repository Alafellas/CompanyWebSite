import React from "react";
import img11 from "../assets/img11.jpg";
import img12 from "../assets/img12.jpg";
import img13 from "../assets/img13.jpg";

function Home() {
  return (
    <section id="home" className="bg-customBlue text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 text-black">The Best Solutions</h1>
        <p className="text-lg mb-8 text-black">Fresh Ideas for Your Business</p>
        <button className="px-6 py-3 bg-yellow-400 text-blue-900 font-bold rounded hover:bg-yellow-500">
          Learn More
        </button>
      </div>

      {/* Image Section */}
      <div className="container mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {/* Styled Image 1 */}
        <div className="relative group">
          <img
            src={img11}
            alt="Business Strategy"
            className="w-full h-64 object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-300"
          />
          {/* <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <p className="text-white text-lg font-bold">
              A well-thought-out strategy that drives success in your business.
            </p>
          </div> */}
        </div>

        {/* Styled Image 2 */}
        <div className="relative group">
          <img
            src={img12}
            alt="Creative Solutions"
            className="w-full h-64 object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-300"
          />
          {/* <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg opacity-0 group-hover:scale-50 transition-opacity duration-300 flex items-center justify-center">
            <p className="text-white text-lg font-bold">
              Innovative approaches that solve complex problems with creativity.
            </p>
          </div> */}
        </div>

        {/* Styled Image 3 */}
        <div className="relative group">
          <img
            src={img13}
            alt="Growth Opportunities"
            className="w-full h-64 object-cover rounded-lg shadow-lg transform group-hover:scale-105 transition-transform duration-300"
          />
          {/* <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <p className="text-black text-lg font-bold left-8">
              Unlocking new paths for expanding your business and reaching new
              heights.
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Home;
