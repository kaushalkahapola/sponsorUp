import React, { useState } from 'react';

const categoriesData = [
  {
    id: 1,
    name: 'Category',
    items: [
      { id: 11, name: 'All' },
      { id: 12, name: 'Trending' },
      { id: 13, name: 'Upcoming' },
      { id: 14, name: 'Music' },
      { id: 15, name: 'Sport' },
      { id: 16, name: 'Exhibition' },
      { id: 17, name: 'Business' },
      { id: 18, name: 'Photography' },
    ],
  },
  {
    id: 2,
    name: 'Pricing',
    items: [
      { id: 21, name: 'Below $100' },
      { id: 22, name: 'Above $100' },
    ],
  },
  {
    id: 3,
    name: 'Type',
    items: [
      { id: 31, name: 'Online' },
      { id: 32, name: 'Outdoor' },
    ],
  },
  {
    id: 4,
    name: 'Language',
    items: [
      { id: 41, name: 'English' },
      { id: 42, name: 'German' },
      { id: 43, name: 'French' },
      { id: 44, name: 'Spanish' },
    ],
  },
];

function Filters() {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryToggle = (itemName) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(itemName)
        ? prevSelected.filter((item) => item !== itemName)
        : [...prevSelected, itemName]
    );
  };

  const handleClearAll = () => {
    setSelectedCategories([]);
  };

  const handleApplyFilters = () => {
    console.log('Selected categories:', selectedCategories);
  };

  return (
    <div className="flex">
      <div className="p-4">
        <div className="border border-gray-300 rounded p-4 mb-4">
          <h2 className="text-lg font-bold mb-2">Filter</h2>
          <hr className="my-4 border-gray-300" />
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
                  onClick={() => console.log('See more clicked for', category.name)}
                >
                  Show more
                </button>
                <hr className="my-4 border-gray-300" />
              </div>
            </div>
          ))}
          <div className="flex justify-start">
            <button
              className="btn bg-gray-100 text-purple-500 md:ml-4 px-3 py-1 rounded duration-50 md:static"
              onClick={handleClearAll}
            >
              Clear all
            </button>
            <button
              className="btn bg-purple-500 text-gray-100 md:ml-4 px-3 py-1 rounded duration-50 md:static"
              onClick={handleApplyFilters}
            >
              Apply
            </button>
          </div>
        </div>
      </div>
      <div className=" p-4">
        {/* The body */}
        <p>Suggestions</p>
      </div>
    </div>
  );
}

export default Filters;
