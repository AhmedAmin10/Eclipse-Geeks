import React from "react";

const PopupVideo = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-70 z-50">
      <div className="relative max-w-screen-md w-full p-5 bg-white rounded-lg shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-700 hover:text-red-500"
        >
          Close
        </button>
        <div className="flex justify-center">
          <video
            className="w-full p-1 bg-gray-950 h-auto max-w-full border border-gray-700 rounded-lg dark:border-gray-700"
            controls
          >
            <source src="/inro.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default PopupVideo;
