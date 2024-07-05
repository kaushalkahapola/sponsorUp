import React, { useState } from 'react';
import OrganizersNavbar from '../components/OrganizersNavbar';
import Footer from '../components/Footer';

const SearchEventPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isFavorite, setIsFavorite] = useState(false); // State to manage favorite status

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        // Implement your search logic here
        console.log('Search query:', searchQuery);
        setSearchQuery('');
        // Simulate search results update
        // setResults([...updatedResults]);
    };

    const handleFavoriteToggle = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <OrganizersNavbar />
            <div className="flex-grow flex flex-col lg:flex-row bg-gray-50 p-4">
                {/* Filter Section */}
                <div className="w-full lg:w-1/4 bg-white p-6 rounded-lg shadow-md mb-4 lg:mb-0 lg:mr-4">
                    <h3 className="text-2xl font-poppins font-semibold text-primary-700 mb-4">Filter</h3>

                    {/* Category */}
                    <div className="mb-6">
                        <h4 className="text-xl font-poppins font-semibold text-gray-700 mb-2">Category</h4>
                        <div className="space-y-2">
                            {['All', 'Trending', 'Upcoming', 'Music', 'Sport', 'Exhibition', 'Business', 'Photography'].map((category) => (
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
                        <h4 className="text-xl font-poppins font-semibold text-gray-700 mb-2">Pricing</h4>
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
                        <h4 className="text-xl font-poppins font-semibold text-gray-700 mb-2">Type</h4>
                        <div className="space-y-2">
                            {['Online', 'Offline-indoor', 'Offline-Outdoor'].map((type) => (
                                <label key={type} className="flex items-center">
                                    <input type="checkbox" className="mr-2" />
                                    {type}
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Language */}
                    <div className="mb-6">
                        <h4 className="text-xl font-poppins font-semibold text-gray-700 mb-2">Language</h4>
                        <div className="space-y-2">
                            {['English', 'Sinhala', 'French', 'German'].map((language) => (
                                <label key={language} className="flex items-center">
                                    <input type="checkbox" className="mr-2" />
                                    {language}
                                </label>
                            ))}
                            <p className="text-primary-500 cursor-pointer">Show more</p>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex space-x-2">
                        <button className="bg-gray-300 text-black py-2 px-4 rounded-md hover:bg-gray-400 transition duration-300">
                            Clear All
                        </button>
                        <button className="bg-primary-500 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition duration-300">
                            Apply
                        </button>
                    </div>
                </div>

                {/* Search Section */}
                <div className="flex-grow flex flex-col items-center justify-center bg-gray-50 p-4">
                    <h2 className="text-3xl font-poppins font-semibold text-primary-700 mb-4">Search Events</h2>
                    <form onSubmit={handleSearchSubmit} className="flex items-center w-full max-w-md bg-white p-6 rounded-lg shadow-md">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={handleSearchInputChange}
                            placeholder="Enter search keyword"
                            className="flex-grow p-2 bg-gray-200 text-black border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                        <button type="submit" className="bg-primary-500 text-white py-2 px-4 rounded-r-md hover:bg-primary-700 transition duration-300">
                            Search
                        </button>
                    </form>
                    {/* Placeholder for Search Results */}
                    <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md mt-6">
                        <h3 className="text-xl font-poppins font-semibold text-gray-700 mb-4">Search Results</h3>
                        
                        {/* First Search Result */}
                        <div className="flex mb-4">
                            {/* Left Part (Image and Favorite Button) */}
                            <div className="w-1/2 pr-4">
                                <img src="/assets/TB.png" alt="Event Thumbnail" className="w-full h-auto" />
                                <button onClick={handleFavoriteToggle} className="absolute top-2 right-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${isFavorite ? 'text-primary-500' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.84 4.646a3.5 3.5 0 00-5.005-.158L12 6.937l-3.835-3.45a3.5 3.5 0 00-5.005.158 3.5 3.5 0 00.158 5.005L12 18.063l8.68-8.254a3.5 3.5 0 00.158-5.005z" />
                                    </svg>
                                </button>
                            </div>
                            {/* Right Part (Event Details) */}
                            <div className="w-1/2">
                                <p className="text-xs text-purple-500">Price range</p>
                                <p className="text-2xl font-semibold text-black">Event Name</p>
                                <div className="flex items-center text-purple-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v3a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm2-2a1 1 0 00-1 1v3a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1H4z" clipRule="evenodd" />
                                        <path fillRule="evenodd" d="M8 10a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd" />
                                        <path fillRule="evenodd" d="M5 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                    </svg>
                                    <p className="text-sm">Date</p>
                                </div>
                                <div className="flex items-center text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM2 10a8 8 0 1116 0 8 8 0 01-16 0z" clipRule="evenodd" />
                                        <path d="M10 4a6 6 0 100 12 6 6 0 000-12z" />
                                    </svg>
                                    <p className="text-xs">Location</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Second Search Result */}
                        <div className="flex mb-4">
                            {/* Left Part (Image and Favorite Button) */}
                            <div className="w-1/2 pr-4">
                                <img src="/assets/TB.png" alt="Event Thumbnail" className="w-full h-auto" />
                                <button onClick={handleFavoriteToggle} className="absolute top-2 right-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${isFavorite ? 'text-primary-500' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.84 4.646a3.5 3.5 0 00-5.005-.158L12 6.937l-3.835-3.45a3.5 3.5 0 00-5.005.158 3.5 3.5 0 00.158 5.005L12 18.063l8.68-8.254a3.5 3.5 0 00.158-5.005z" />
                                    </svg>
                                </button>
                            </div>
                            {/* Right Part (Event Details) */}
                            <div className="w-1/2">
                                <p className="text-xs text-purple-500">Price range</p>
                                <p className="text-2xl font-semibold text-black">Event Name</p>
                                <div className="flex items-center text-purple-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v3a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm2-2a1 1 0 00-1 1v3a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1H4z" clipRule="evenodd" />
                                        <path fillRule="evenodd" d="M8 10a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd" />
                                        <path fillRule="evenodd" d="M5 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                    </svg>
                                    <p className="text-sm">Date</p>
                                </div>
                                <div className="flex items-center text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM2 10a8 8 0 1116 0 8 8 0 01-16 0z" clipRule="evenodd" />
                                        <path d="M10 4a6 6 0 100 12 6 6 0 000-12z" />
                                    </svg>
                                    <p className="text-xs">Location</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Third Search Result */}
                        <div className="flex mb-4">
                            {/* Left Part (Image and Favorite Button) */}
                            <div className="w-1/2 pr-4">
                                <img src="/assets/TB.png" alt="Event Thumbnail" className="w-full h-auto" />
                                <button onClick={handleFavoriteToggle} className="absolute top-2 right-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${isFavorite ? 'text-primary-500' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.84 4.646a3.5 3.5 0 00-5.005-.158L12 6.937l-3.835-3.45a3.5 3.5 0 00-5.005.158 3.5 3.5 0 00.158 5.005L12 18.063l8.68-8.254a3.5 3.5 0 00.158-5.005z" />
                                    </svg>
                                </button>
                            </div>
                            {/* Right Part (Event Details) */}
                            <div className="w-1/2">
                                <p className="text-xs text-purple-500">Price range</p>
                                <p className="text-2xl font-semibold text-black">Event Name</p>
                                <div className="flex items-center text-purple-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v3a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm2-2a1 1 0 00-1 1v3a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1H4z" clipRule="evenodd" />
                                        <path fillRule="evenodd" d="M8 10a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd" />
                                        <path fillRule="evenodd" d="M5 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                    </svg>
                                    <p className="text-sm">Date</p>
                                </div>
                                <div className="flex items-center text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM2 10a8 8 0 1116 0 8 8 0 01-16 0z" clipRule="evenodd" />
                                        <path d="M10 4a6 6 0 100 12 6 6 0 000-12z" />
                                    </svg>
                                    <p className="text-xs">Location</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* View More Button */}
                        <div className="flex justify-center">
                            <button className="bg-gray-200 text-purple-700 py-2 px-4 rounded-md hover:bg-gray-300 transition duration-300 w-full text-center mt-4">
                                View More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default SearchEventPage;






       




