import React, { useState } from 'react';

function InputDescri () {
  
    const [username, setUsername] = useState('');
  
    return (
      <div className="px-4 py-4">
        <div className="relative w-80 h-20 border-2 border-gray-300 rounded-md bg-white p-3">
          
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border-none outline-none text-gray-700 text-sm placeholder-gray-400"
            placeholder="Description"
          />
        </div>
      </div>
    );
  }
  

export default InputDescri ;
