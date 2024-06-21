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
const Button = ({
  id = "btn-" + Math.floor(Math.random() * 10000),
  text = "Click Me",
  onClick = () => console.log(text + " clicked"),
  variant = "primary",
}) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    onClick();
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 100); // Adjust the duration as needed
  };

  const baseClasses =
    "font-normal py-2 px-4 rounded transition duration-150 ease-in-out transform shadow-md";
  const primaryClasses = "text-white bg-primary hover:bg-primary-700";
  const secondaryClasses =
    "text-primary bg-gray-100 hover:bg-primary hover:text-white";

  const variantClasses =
    variant === "primary" ? primaryClasses : secondaryClasses;
  const clickEffectClasses = clicked ? "scale-100" : "hover:scale-105";

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${clickEffectClasses}`}
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
const ButtonsGroup = ({
  texts = [],
  selectable_number = 1,
  selected = [],
  setSelected = () => {},
}) => {
  const handleClick = (index) => {
    if (selected.includes(index)) {
      setSelected(selected.filter((item) => item !== index));
    } else {
      if (selected.length < selectable_number) {
        setSelected([...selected, index]);
      }
    }
  };

  // Define class names separately
  const baseClasses =
    "font-normal py-3 px-6 rounded-full shadow-md transition duration-150 ease-in-out transform";
  const selectedClasses = "bg-primary text-white";
  const notSelectedClasses = "bg-gray-100 text-black";
  const hoverableClasses = "hover:bg-primary hover:text-white hover:scale-105";
  const clickedClasses = "hover:scale-95";

  return (
    <div className="flex flex-row space-x-4">
      {texts.map((text, index) => {
        const isSelected = selected.includes(index);
        const isHoverable = selected.length < selectable_number || isSelected;

        return (
          <button
            key={index}
            className={`${baseClasses} ${
              isSelected ? selectedClasses : notSelectedClasses
            } ${isHoverable ? hoverableClasses : ""} ${
              isSelected ? clickedClasses : ""
            }`}
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
