import React from "react";
import { Button } from "./Buttons";

function EventsFilters() {
  return (
    <div className="w-full lg:w-100% bg-white p-6 rounded-lg shadow-md mb-4 lg:mb-0 lg:mr-4">
      <h3 className="text-2xl font-poppins font-semibold text-primary-700 mb-4">
        Filter
      </h3>

      {/* Category */}
      <div className="mb-6">
        <h4 className="text-xl font-poppins font-semibold text-gray-700 mb-2">
          Category
        </h4>
        <div className="space-y-2">
          {[
            "All",
            "Trending",
            "Upcoming",
            "Music",
            "Sport",
            "Exhibition",
            "Business",
            "Photography",
          ].map((category) => (
            <label key={category} className="flex items-center">
              <input type="checkbox" className="mr-2" />
              {category}
            </label>
          ))}
          <p className="text-primary-500 cursor-pointer">Show more</p>
        </div>
      </div>

      {/* Pricing */}
      <div className="mb-6">
        <h4 className="text-xl font-poppins font-semibold text-gray-700 mb-2">
          Pricing
        </h4>
        <div className="space-y-2">
          <label className="flex items-center">
            <input type="radio" name="pricing" className="mr-2" />
            Below $100
          </label>
          <label className="flex items-center">
            <input type="radio" name="pricing" className="mr-2" />
            Above $100
          </label>
        </div>
      </div>

      {/* Type */}
      <div className="mb-6">
        <h4 className="text-xl font-poppins font-semibold text-gray-700 mb-2">
          Type
        </h4>
        <div className="space-y-2">
          {["Online", "Offline-indoor", "Offline-Outdoor"].map((type) => (
            <label key={type} className="flex items-center">
              <input type="checkbox" className="mr-2" />
              {type}
            </label>
          ))}
        </div>
      </div>

      {/* Language */}
      <div className="mb-6">
        <h4 className="text-xl font-poppins font-semibold text-gray-700 mb-2">
          Language
        </h4>
        <div className="space-y-2">
          {["English", "Sinhala", "French", "German"].map((language) => (
            <label key={language} className="flex items-center">
              <input type="checkbox" className="mr-2" />
              {language}
            </label>
          ))}
          <p className="text-primary-500 cursor-pointer">Show more</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex space-x-4">
        <Button id={"clear-filter"} variant={"secondary"} text={"Clear"} />
        <Button id={"apply-filter"} text={"Apply"} />
      </div>
    </div>
  );
}

export default EventsFilters;
