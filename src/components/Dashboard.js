import React from "react";
import { useNavigate } from "react-router-dom";
import PhotoUpload from "./PhotoUpload";


const AdminDashboard = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const goBack = () => {
    navigate("/"); // Redirect to the main page
  };

  return (
    <div className="min-h-screen bg-customBlue text-white flex flex-col items-center justify-center relative">
      {/* Back Arrow Button */}
      <button
        onClick={goBack}
        className="absolute top-4 left-4 bg-yellow-400 text-blue-900 px-3 py-2 rounded-full flex items-center hover:bg-yellow-500 shadow-lg"
      >
        <span className="text-lg font-bold mr-2">←</span> 
        Back to Home
      </button>

      <h1 className="text-4xl font-bold mb-8 text-black">Welcometo the Admin Dashboard</h1>
      <div className="bg-white text-gray-800 rounded p-6">
        <PhotoUpload />
      </div>
    </div>
  );
};

export default AdminDashboard;
