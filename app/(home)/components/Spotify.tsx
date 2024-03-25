'use client';
import React, { useEffect, useState } from 'react';
import { Spotlight } from '@/components/ui/spotlight';
import { PinContainer } from '@/components/ui/3d-pin';
import { SiSpotify } from 'react-icons/si';

interface SpotifyTrack {
  album: string;
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
}

const Spotify = () => {
  const [track, setTrack] = useState<SpotifyTrack | null>(null);
  useEffect(() => {
    const requestAPI = () => {
      fetch(`/api/spotify`)
        .then(response => response.json())
        .then(data => setTrack(data))
        .catch(error => console.error('Error fetching data:', error));
    };

    requestAPI();

    const intervalId = setInterval(requestAPI, 10000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='sm:h-[70vh] w-full rounded-md flex md:items-center md:justify-center  antialiased bg-grid-white/[0.02] relative'>
      <Spotlight className='-top-40 left-0 md:left-60 md:-top-20' />
      <div className=' p-4 max-w-7xl  mx-auto relative z-10 w-full pt-20 md:pt-0'>
        <h1 className='text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50'>
          Currently listening:
        </h1>
        <p className='mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto'>
          Try pressing or hovering over it :)
        </p>
        <div className='h-[30rem] w-full flex items-center justify-center'>
          <PinContainer
            title='<mariia is still the best <3 />'
            href='https://instagram.com/temirmary'
          >
            <div className='flex basis-full flex-col p-1 sm:p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[14rem] sm:w-[20rem] h-[20rem] relative'>
              <SiSpotify className='absolute top-0 right-0 text-green-500 w-7 h-7' />
              <h3 className='max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100'>
                {track?.title ?? 'Гимн Украины'}
              </h3>
              <div className='text-base !m-0 !p-0 font-normal'>
                <span className='text-slate-500 '>{track?.artist ?? 'Михаил Вербицкий'}</span>
              </div>
              {track?.albumImageUrl ? (
                <img className='flex flex-1 w-full rounded-lg mt-4' src={track?.albumImageUrl} />
              ) : (
                <div className=' flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-blue-600 to-yellow-300' />
              )}
            </div>
          </PinContainer>
        </div>
      </div>
    </div>
  );
};

export default Spotify;
