import React from 'react';

const CVModal = ({ isOpen, onClose, onDownload }) => {
  const downloadCV = (language) => {
    onDownload(language);
    onClose();
  };

  return (
    isOpen && (
      <div style={{ zIndex: 1000 }} className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="absolute w-full h-full bg-black bg-opacity-80" onClick={onClose}></div>
        <div className="p-8 rounded-lg font-bold text-center relative bg-[#181818] text-white max-w-md mx-auto">
          <p className="mb-4 text-lg font-semibold">Choose CV language:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => downloadCV('english')}
              className="px-6 py-3 rounded-full font-bold bg-gradient-to-br from-red-700 to-white hover:opacity-80 text-white focus:outline-none focus:ring focus:border-blue-300"
            >
              English
            </button>
            <button
              onClick={() => downloadCV('swedish')}
              className="px-6 py-3 font-bold rounded-full bg-gradient-to-br from-yellow-500 to-blue-700 hover:opacity-80 text-white focus:outline-none focus:ring focus:border-blue-300"
            >
              Swedish
            </button>
          </div>
          <button
            onClick={onClose}
            className="mt-4 px-6 py-3 font-bold rounded-full bg-gradient-to-br from-black to-black hover:opacity-80 text-white focus:outline-none focus:ring focus:border-blue-300"
          >
            Go back
          </button>
        </div>
      </div>
    )
  );
};

export default CVModal;
