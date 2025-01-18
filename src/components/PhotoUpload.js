import React, { useState } from "react";

const PhotoUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file)); // Generate a preview URL
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      // Simulate an upload process
      alert(`Uploading: ${selectedFile.name}`);
    } else {
      alert("Please select a file first.");
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded shadow-md">
      <h2 className="text-lg font-bold mb-4">Upload a Photo</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="block w-full mb-4"
      />
      {preview && (
        <div className="mb-4">
          <img
            src={preview}
            alt="Preview"
            className="w-32 h-32 object-cover rounded"
          />
        </div>
      )}
      <button
        onClick={handleUpload}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Upload Photo
      </button>
    </div>
  );
};

export default PhotoUpload;
