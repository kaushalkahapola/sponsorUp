import React, { useState } from 'react';
import { ChevronDownIcon } from '@radix-ui/react-icons';

const dropdownOptions = ['Music', 'Entertainment', 'Movies', 'Arts'];

function Inputdrpd() {
  const [selectedDropdownOption, setSelectedDropdownOption] = useState(dropdownOptions[0]);

  return (
    <div className="flex flex-col items-center p-4">   
      {/* Dropdown */}
      <div className="relative w-full mb-4">
        <select
          value={selectedDropdownOption}
          onChange={(e) => setSelectedDropdownOption(e.target.value)}
          className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-10 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        >
          {dropdownOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <ChevronDownIcon />
        </div>
      </div>
    </div>
  );
}

export default Inputdrpd;
