import React, { useEffect, useState } from "react";

/**
 * Button component.
 *
 * @param {Object} props - The component props.
 * @param {string} props.id - The id of the button.
 * @param {string} props.text - The text to display on the button.
 * @param {Function} props.onClick - The function to be called when the button is clicked.
 * @param {string} props.variant - The variant of the button (optional).
 * @returns {JSX.Element} The rendered Button component.
 */
const Button = ({ id, text, onClick, variant = "primary" }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    onClick();
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 100); // Adjust the duration as needed
  };

  return (
    <button
      className={`font-normal ${
        variant === "primary"
          ? "text-white bg-primary hover:bg-primary-700"
          : "text-primary bg-gray-200 hover:bg-primary hover:text-white"
      } py-2 px-4 rounded transition duration-150 ease-in-out transform hover:scale-105 shadow-md ${
        clicked
          ? "transition duration-100 ease-in-out transform hover:scale-100"
          : ""
      }`}
      onClick={handleClick}
      id={id}
    >
      {text}
    </button>
  );
};

/**
 * Renders a group of buttons with selectable behavior.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string[]} props.texts - An array of texts to be displayed on the buttons.
 * @param {number} props.selectable_number - The maximum number of buttons that can be selected.
 * @param {number[]} props.selected - An array of indices representing the currently selected buttons.
 * @param {Function} props.setSelected - A function to update the selected buttons.
 * @returns {JSX.Element} The rendered ButtonsGroup component.
 */
const ButtonsGroup = ({ texts, selectable_number, selected, setSelected }) => {
  const handleClick = (index) => {
    if (selected.includes(index)) {
      setSelected(selected.filter((item) => item !== index));
    } else {
      if (selected.length < selectable_number) {
        setSelected([...selected, index]);
      }
    }
  };

  return (
    <div className="flex flex-row space-x-4">
      {texts.map((text, index) => {
        const isSelected = selected.includes(index);
        const isHoverable = selected.length < selectable_number || isSelected;

        return (
          <button
            key={index}
            className={`${
              isSelected ? "bg-primary text-white" : "bg-gray-200 text-gray-400"
            } font-normal py-3 px-6 rounded-full shadow-md transition duration-150 ease-in-out transform ${
              isHoverable
                ? "hover:bg-primary hover:text-white hover:scale-105"
                : ""
            } ${isSelected ? "hover:scale-95" : ""}`}
            onClick={() => handleClick(index)}
            disabled={!isHoverable}
          >
            {text}
          </button>
        );
      })}
    </div>
  );
};

export { Button, ButtonsGroup };
