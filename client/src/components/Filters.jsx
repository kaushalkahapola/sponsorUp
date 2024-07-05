import React, { useState } from "react";
import { Button } from "./Buttons"; // Ensure Button component is correctly imported

const categoriesData = [
  {
    id: 1,
    name: "Category",
    items: [
      { id: 11, name: "All" },
      { id: 12, name: "Trending" },
      { id: 13, name: "Upcoming" },
      { id: 14, name: "Music" },
      { id: 15, name: "Sport" },
      { id: 16, name: "Exhibition" },
      { id: 17, name: "Business" },
      { id: 18, name: "Photography" },
    ],
  },
];

const pricingData = [
  { id: 1, name: "Below $100" },
  { id: 2, name: "Above $100" },
];

const typeData = [
  { id: 1, name: "Online" },
  { id: 2, name: "Offline-indoor" },
  { id: 3, name: "Offline-Outdoor" },
];

const languageData = [
  { id: 1, name: "English" },
  { id: 2, name: "Sinhala" },
  { id: 3, name: "French" },
  { id: 4, name: "German" },
];

function Filters({ onApplyFilters }) {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPricing, setSelectedPricing] = useState("");
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const handleCategoryToggle = (itemName) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(itemName)
        ? prevSelected.filter((item) => item !== itemName)
        : [...prevSelected, itemName]
    );
  };

  const handlePricingChange = (e) => {
    setSelectedPricing(e.target.value);
  };

  const handleTypeToggle = (itemName) => {
    setSelectedTypes((prevSelected) =>
      prevSelected.includes(itemName)
        ? prevSelected.filter((item) => item !== itemName)
        : [...prevSelected, itemName]
    );
  };

  const handleLanguageToggle = (itemName) => {
    setSelectedLanguages((prevSelected) =>
      prevSelected.includes(itemName)
        ? prevSelected.filter((item) => item !== itemName)
        : [...prevSelected, itemName]
    );
  };

  const handleClearAll = () => {
    setSelectedCategories([]);
    setSelectedPricing("");
    setSelectedTypes([]);
    setSelectedLanguages([]);
  };

  const handleApplyFilters = () => {
    onApplyFilters({
      categories: selectedCategories,
      pricing: selectedPricing,
      types: selectedTypes,
      languages: selectedLanguages,
    });
  };

  return (
    <div className="p-4">
      <div className="border border-gray-100 rounded p-4 mb-4 min-w-[250px] text-zinc-500">
        <h2 className="text-lg font-bold mb-2">Filter</h2>
        <hr className="my-4 border-gray-300" />

        {/* Render filters content */}
        {categoriesData.map((category) => (
          <div key={category.id} className="mb-4">
            <div className="flex items-center mb-2">
              <h3 className="text-base font-bold">{category.name}</h3>
            </div>
            <div>
              {category.items.map((item) => (
                <label key={item.id} className="flex items-center">
                  <input
                    type="checkbox"
                    id={item.name}
                    checked={selectedCategories.includes(item.name)}
                    onChange={() => handleCategoryToggle(item.name)}
                    className="mr-2"
                  />
                  <span>{item.name}</span>
                </label>
              ))}
              <button
                className="text-sm text-purple-500 focus:outline-none"
                onClick={() =>
                  console.log("See more clicked for", category.name)
                }
              >
                Show more
              </button>
              <hr className="my-4 border-gray-300" />
            </div>
          </div>
        ))}




          <div className="mb-4">
            <div className="flex items-center mb-2">
              <h3 className="text-base font-bold">Pricing</h3>
            </div>
            <div>
              {pricingData.map((item) => (
                <label key={item.id} className="flex items-center">
                  <input
                    type="radio"
                    name="pricing"
                    value={item.name}
                    checked={selectedPricing === item.name}
                    onChange={handlePricingChange}
                    className="mr-2"
                  />
                  <span>{item.name}</span>
                </label>
              ))}
            </div>
            <hr className="my-4 border-gray-300" />
          </div>

          <div className="mb-4">
            <div className="flex items-center mb-2">
              <h3 className="text-base font-bold">Type</h3>
            </div>
            <div>
              {typeData.map((item) => (
                <label key={item.id} className="flex items-center">
                  <input
                    type="checkbox"
                    id={item.name}
                    checked={selectedTypes.includes(item.name)}
                    onChange={() => handleTypeToggle(item.name)}
                    className="mr-2"
                  />
                  <span>{item.name}</span>
                </label>
              ))}
            </div>
            <hr className="my-4 border-gray-300" />
          </div>

          <div className="mb-4">
            <div className="flex items-center mb-2">
              <h3 className="text-base font-bold">Language</h3>
            </div>
            <div>
              {languageData.map((item) => (
                <label key={item.id} className="flex items-center">
                  <input
                    type="checkbox"
                    id={item.name}
                    checked={selectedLanguages.includes(item.name)}
                    onChange={() => handleLanguageToggle(item.name)}
                    className="mr-2"
                  />
                  <span>{item.name}</span>
                </label>
              ))}
              <button
                className="text-sm text-purple-500 focus:outline-none"
                onClick={() =>
                  console.log("See more clicked for languages")
                }
              >
                Show more
              </button>
              <hr className="my-4 border-gray-300" />
            </div>
          </div>





          <div className="flex justify-center space-x-4">
          <Button
            variant="secondary"
            text="Clear"
            onClick={handleClearAll}
          />
          <Button
            text="Apply"
            onClick={handleApplyFilters}
          />
        </div>
      </div>
    </div>
  );
}

export default Filters;