import React, { useEffect, useState } from "react";

/**
 * Button component.
 *
 * @param {Object} props - The component props.
 * @param {string} props.id - The id of the button.
 * @param {string} props.text - The text to display on the button.
 * @param {Function} props.onClick - The function to be called when the button is clicked.
 * @param {string} props.variant - The variant of the button (optional).
 * @param {string} props.minWidth - The minimum width of the button (optional).
 * @param {string} props.minHeight - The minimum height of the button (optional).
 * @param {JSX.Element} props.icon - The icon to be displayed on the button (optional).
 * @returns {JSX.Element} The rendered Button component.
 */
const Button = ({
  id = "btn-" + Math.floor(Math.random() * 10000),
  text = "Click Me",
  onClick = () => console.log(text + " clicked"),
  variant = "primary",
  minWidth,
  minHeight,
  icon,
  type = "button",
  disabled = false,
}) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = (e) => {
    if (!disabled) {
      onClick(e);
      setClicked(true);
      setTimeout(() => {
        setClicked(false);
      }, 100); // Adjust the duration as needed
    }
  };

  const baseClasses =
    "font-normal py-2 px-4 rounded transition duration-150 ease-in-out transform shadow-md flex items-center justify-center";
  const primaryClasses = disabled
    ? "text-gray-500 bg-gray-200"
    : "text-white bg-primary hover:bg-primary-700";
  const secondaryClasses = disabled
    ? "text-primary bg-gray-200"
    : "text-primary bg-gray-50 hover:bg-violet-500 hover:text-white";
  const dangerClasses = disabled
    ? "text-white bg-red-300"
    : "text-white bg-red-600 hover:bg-red-900";

  let variantClasses;

  switch (variant) {
    case "primary":
      variantClasses = primaryClasses;
      break;
    case "secondary":
      variantClasses = secondaryClasses;
      break;
    case "danger":
      variantClasses = dangerClasses;
      break;
    default:
      variantClasses = primaryClasses; // or some default classes if needed
      break;
  }

  const clickEffectClasses =
    clicked && !disabled ? "scale-100" : disabled ? "" : "hover:scale-105";

  const style = {
    minWidth: minWidth || undefined,
    minHeight: minHeight || undefined,
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${clickEffectClasses}`}
      onClick={handleClick}
      id={id}
      style={style}
      type={type}
      disabled={disabled}
    >
      {icon && <span className="mr-2">{icon}</span>}
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
 * @param {string} props.minWidth - The minimum width of the buttons (optional).
 * @param {string} props.minHeight - The minimum height of the buttons (optional).
 * @param {boolean} props.swap - If true, swaps the selected button when maximum is reached (default: false).
 * @returns {JSX.Element} The rendered ButtonsGroup component.
 */
const ButtonsGroup = ({
  texts = [],
  selectable_number = 1,
  selected = [],
  setSelected = () => {},
  minWidth,
  minHeight,
  swap = false,
}) => {
  const handleClick = (index) => {
    if (selected.includes(index)) {
      setSelected(selected.filter((item) => item !== index));
    } else {
      if (selected.length < selectable_number) {
        setSelected([...selected, index]);
      } else if (swap) {
        setSelected([...selected.slice(1), index]);
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

  const style = {
    minWidth: minWidth || undefined,
    minHeight: minHeight || undefined,
    whiteSpace: "nowrap", // Ensure text stays on one line
  };

  return (
    <div className="flex flex-wrap gap-x-4 gap-y-4">
      {texts.map((text, index) => {
        const isSelected = selected.includes(index);
        const isHoverable =
          selected.length < selectable_number || swap || isSelected;

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
            style={style}
          >
            {text}
          </button>
        );
      })}
    </div>
  );
};

export { Button, ButtonsGroup };
