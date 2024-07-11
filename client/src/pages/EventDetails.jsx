import React, { useState } from 'react';
import { HeartFilledIcon, ChatBubbleIcon } from '@radix-ui/react-icons';
import { MdLocationOn } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import HomeHeader from './assets/components/HomeHeader';
import Footer from './assets/components/Footer';
import EDB from './assets/ED/EDB.png';
import EventCard from './assets/components/EventCard';
import SponsorCard from './assets/components/SponsorCard';
import AlbumCarousel from './assets/components/AlbumCarousel';

const EventDetails = () => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [amounts, setAmounts] = useState({ package1: '', package2: '', package3: '' });
  const [total, setTotal] = useState(0);

  const handleAmountChange = (e, packageName) => {
    const value = parseInt(e.target.value) || 0;
    const newAmounts = { ...amounts, [packageName]: value };
    setAmounts(newAmounts);
    setTotal(
      (newAmounts.package1 * 10) + 
      (newAmounts.package2 * 20) + 
      (newAmounts.package3 * 30)
    );
  };

  const toggleLike = () => {
    setLiked(!liked);
    setLikeCount(likeCount + (liked ? -1 : 1));
  };

  const albumImages = [
    "https://via.placeholder.com/400x200",
    "https://via.placeholder.com/400x200",
    "https://via.placeholder.com/400x200"
  ];


  return (
    <div>
      <HomeHeader />
      <main className="pt-20">
        <div className="relative">
          <img src={EDB} alt="Event" className="w-full h-auto" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg text-center">
          <span className="block mb-4">
            <p className="text-black font-bold text-xl">Date</p><br/>
            <h1 className="text-purple-600 text-4xl font-bold">Rock Revolt: A Fusion of Power and Passion</h1> <br/>
            <p className="text-gray-400">Rock Revolt: A Fusion of Power and Passion is an electrifying rock <br/> music event that brings together a diverse lineup of talented rock <br/> bands and artists.</p><br/>
          </span>
            <div className="flex justify-center items-center space-x-4">
              <div className="flex items-center justify-center space-x-1 bg-red-300 p-2 rounded-full w-20 h-10">
                <HeartFilledIcon 
                  className={`cursor-pointer w-6 h-6 ${liked ? 'text-red-500 fill-current' : 'text-black'}`} 
                  onClick={toggleLike} 
                />
                <span className="text-lg">{likeCount}</span>
              </div>
              <div className="flex items-center justify-center space-x-1 bg-blue-300 p-2 rounded-full w-20 h-10">
                <ChatBubbleIcon className="w-6 h-6 text-blue-500" />
                <span className="text-lg">183</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between px-16 py-8">
          <div className="lg:w-1/2 pr-4">
            <h2 className="text-2xl font-bold mb-4">About Event</h2>
            <div className="flex items-center mb-2 space-x-16">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded">
                  <AiOutlineClockCircle className="text-xl" />
                </div>
                <div className="ml-4">
                  <span className="font-bold block">Duration</span>
                  <span className="block">5 hours</span>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded">
                  <MdLocationOn className="text-xl" />
                </div>
                <div className="ml-4">
                  <span className="font-bold block">Location</span>
                  <span className="block">Place</span>
                </div>
              </div>
            </div>


            <div className="mb-4 mt-4">
              <p>Rock Revolt: A Fusion of Power and Passion is an electrifying rock music event that brings<br/> together a diverse lineup of talented rock bands and artists. The event aims to showcase<br/> the raw energy, intense power...</p>
            </div>
            <a href="#" className="text-purple-600">Read More</a>
            <h2 className="text-2xl font-bold mt-8 mb-4">The Latest Events Album Photos</h2>
            <AlbumCarousel album={albumImages} />
          </div>

          <div className="lg:w-1/2 pl-4 mt-8 lg:mt-0">
            <div className="bg-gray-200 p-4 rounded-lg">
              <div className="bg-white p-4 mb-4 rounded-lg shadow-md">
                <h3 className="font-bold">Package 01</h3>
                <p>Price: $10</p>
                <p>Amount: <input type="number" min="0" value={amounts.package1} onChange={(e) => handleAmountChange(e, 'package1')} className="border border-gray-300 rounded px-2 py-1 w-16" /></p>
              </div>
              <div className="bg-white p-4 mb-4 rounded-lg shadow-md">
                <h3 className="font-bold">Package 02</h3>
                <p>Price: $20</p>
                <p>Amount: <input type="number" min="0" value={amounts.package2} onChange={(e) => handleAmountChange(e, 'package2')} className="border border-gray-300 rounded px-2 py-1 w-16" /></p>
              </div>
              <div className="bg-white p-4 mb-4 rounded-lg shadow-md">
                <h3 className="font-bold">Package 03</h3>
                <p>Price: $30</p>
                <p>Amount: <input type="number" min="0" value={amounts.package3} onChange={(e) => handleAmountChange(e, 'package3')} className="border border-gray-300 rounded px-2 py-1 w-16" /></p>
              </div>
              <div className="bg-white p-4 mb-4 rounded-lg shadow-md">
                <h3 className="font-bold text-2xl">Total </h3>
                <p>${total}</p>
              </div>
              <button className="bg-purple-600 text-white px-4 py-2 rounded w-full">Purchase Tickets</button>
            </div>
            <div className="mt-8">
              <SponsorCard />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 lg:grid-cols-4 lg:gap-8 px-4 mt-8 ">
          <div>
            <EventCard />
          </div>
          <div>
            <EventCard />
          </div>
          <div>
            <EventCard />
          </div>
          <div>
            <EventCard />
          </div>
        </div>


        <Footer />
      </main>
    </div>
  );
};

export default EventDetails;
