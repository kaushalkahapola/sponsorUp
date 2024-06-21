import React, { useState } from 'react';

function Input() {
  
    const [username, setUsername] = useState('');
  
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="relative w-80 h-15 border-2 border-gray-300 rounded-md bg-white p-3">
          <div className="absolute left-3 top-1 text-xs text-black font-bold">
            Email
          </div>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full mt-5 border-none outline-none text-gray-700 text-sm placeholder-gray-400"
            placeholder="example@gmail.com"
          />
        </div>
      </div>
    );
  }
  

export default Input;
