'use client';
import React, { useEffect, useState } from 'react';
import { Spotlight } from '@/components/ui/spotlight';

const Spotify = () => {
  const [track, setTrack] = useState();
  useEffect(() => {
    // Define the function that makes the API request
    const requestAPI = () => {
      fetch(`/api/spotify`)
        .then(response => response.json())
        .then(data => setTrack(data))
        .catch(error => console.error('Error fetching data:', error));
    };

    // Call the function immediately if you want the API request to be made right away
    requestAPI();

    // Set up the interval to call the requestAPI function every 10 seconds
    const intervalId = setInterval(requestAPI, 10000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

  return (
    <div className='sm:h-[70vh] w-full rounded-md flex md:items-center md:justify-center  antialiased bg-grid-white/[0.02] relative'>
      <Spotlight className='-top-40 left-0 md:left-60 md:-top-20' />
      <div className=' p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0'>
        <h1 className='text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50'>
          Currently listening:
        </h1>
        <div className='flex gap-4 justify-center items-center'>
          <img src={track?.albumImageUrl} className='w-12 h-12 rounded-full'></img>
          <p className='mt-4 font-normal text-base text-neutral-300 max-w-lg text-center'>
            {track?.artist}
          </p>
          <p className='mt-4 font-normal text-base text-neutral-300 max-w-lg text-center'>
            {track?.title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Spotify;
