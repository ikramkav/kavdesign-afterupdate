import React from "react";

const ChemcoCard = () => {
  return (
    <div className="max-w-sm bg-gradient-to-r from-indigo-600 to-indigo-900 rounded-lg shadow-lg p-6">
      <div className="flex items-center mb-4">
        <img
          src="https://via.placeholder.com/50"
          alt="Chemco logo"
          className="w-10 h-10 rounded-full mr-3"
        />
        <div className="text-white">
          <h3 className="font-semibold text-lg">Chemco</h3>
          <p className="text-sm">Data management</p>
        </div>
      </div>
      <p className="text-white mb-4 text-sm">
        In the highly competitive landscape of pharmaceutical retail in Ireland,
        an
      </p>
      <div className="flex items-center justify-start space-x-2">
        <span className="w-3 h-3 bg-white rounded-full"></span>
        <span className="w-3 h-3 bg-white rounded-full opacity-50"></span>
        <span className="w-3 h-3 bg-white rounded-full opacity-25"></span>
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600">
        Action
      </button>
    </div>
  );
};

export default ChemcoCard;
