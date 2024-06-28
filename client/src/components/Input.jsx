import React from 'react';
import { ChevronDownIcon } from '@radix-ui/react-icons';

/**
 * InputField component.
 *
 * @param {Object} props - The component props.
 * @param {string} props.label - The label of the input field.
 * @param {string} props.type - The type of the input field (e.g., text, email, password).
 * @param {string} props.placeholder - The placeholder text for the input field.
 * @param {string} props.value - The value of the input field.
 * @param {Function} props.onChange - The function to be called when the input value changes.
 * @param {string} props.className - Additional classes for styling (optional).
 * @returns {JSX.Element} The rendered InputField component.
 */
const InputField = ({
  label,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  className = '',
}) => {
  return (
    <div className={`px-4 py-4 ${className}`}>
      <div className="relative w-80 h-12 border-2 border-gray-300 rounded-md bg-white p-3">
        <div className="absolute left-3 top-1 text-xs text-black font-bold">
          {label}
        </div>
        <input
          type={type}
          value={value}
          onChange={onChange}
          className="w-full mt-2 border-none outline-none text-gray-700 text-sm placeholder-gray-400"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

/**
 * InputDescri component.
 *
 * @param {Object} props - The component props.
 * @param {string} props.value - The value of the description input field.
 * @param {Function} props.onChange - The function to be called when the input value changes.
 * @param {string} props.className - Additional classes for styling (optional).
 * @returns {JSX.Element} The rendered InputDescri component.
 */
const InputDescri = ({ value, onChange, className = '' }) => {
  return (
    <div className={`px-4 py-4 ${className}`}>
      <div className="relative w-80 h-20 border-2 border-gray-300 rounded-md bg-white p-3">
        <input
          type="text"
          value={value}
          onChange={onChange}
          className="w-full border-none outline-none text-gray-700 text-sm placeholder-gray-400"
          placeholder="Description"
        />
      </div>
    </div>
  );
};

/**
 * Inputdrpd component.
 *
 * @param {Object} props - The component props.
 * @param {string} props.name - The name to identify the dropdown.
 * @param {string} props.value - The value of the selected dropdown option.
 * @param {Function} props.onChange - The function to be called when the dropdown value changes.
 * @param {string[]} props.options - The options for the dropdown.
 * @param {string} props.className - Additional classes for styling (optional).
 * @returns {JSX.Element} The rendered Inputdrpd component.
 */
const Inputdrpd = ({ name, value, onChange, options, className = '' }) => {
  return (
    <div className={`flex flex-col items-center p-4 ${className}`}>
      <div className="relative w-full mb-4">
        <select
          value={value}
          onChange={(e) => onChange(name, e.target.value)}
          className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-10 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        >
          {options.map((option) => (
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
};
export { InputField, InputDescri, Inputdrpd };
