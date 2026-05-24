import React, { useState } from 'react';

const PostCard = ({ id, userId, title, body }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="flex flex-col p-6 m-4 bg-white border border-gray-200 rounded-lg shadow-sm transition-all duration-300 transform hover:scale-105 hover:bg-[#fff5f5] hover:border-special-red2 w-full text-center justify-between">
      
      <h2 className="text-lg font-bold text-gray-800 mb-4 capitalize">
        {title}
      </h2>

      <p className="text-sm text-gray-500 mb-6 flex-grow">
        {body}
      </p>
      
      <button 
        onClick={() => setClicked(true)}
        className={`
          p-2 rounded-md text-white transition-colors duration-300 font-medium
          ${clicked ? "bg-special-red2" : "bg-gray-500 hover:bg-gray-400"}
        `}
      >
        {clicked ? "Tombol sudah diklik" : "Silakan Klik"}
      </button>

    </div>
  );
};

export default PostCard;