'use client';
import { cn } from '@/lib/utils';
import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react'
import { LiveWaveform } from './ui/live-waveform';

interface SpotifyTrack {
  album: string;
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
  year?: string;
}

export const Spotify = ({className}: {className?: string}) => {
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
    <div
        className={cn(
          "relative w-full max-w-sm overflow-hidden rounded-2xl p-5 text-card-foreground",
          "bg-linear-to-br from-[hsl(var(--muted)/0.4)] to-[hsl(var(--card)/0.8)] backdrop-blur-sm",
          "border",
          className
        )}
      >
        {/* Main content layout */}
        <div className="flex flex-col gap-4">
          {/* Header with Icon and Image */}
          <div className="flex items-start justify-between">
            {
            track?.albumImageUrl ? <img
              src={track?.albumImageUrl}
              alt={track?.title}
              width={96}
              height={96}
              className="h-24 w-24 rounded-lg object-cover"
            /> : 
            <div className='bg-linear-to-br from-blue-600 to-yellow-300 h-24 w-24 rounded-lg'/>
            }
            <div className="rounded-lg p-2">
              <SpotifyLogo />
            </div>
          </div>

          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-bold">{track?.title ?? 'Гимн Украины'}</h2>
            <p className="text-sm text-muted-foreground">
                <span>
                    {track?.artist ?? "Михаил Вербицкий"}
                    {track?.year && <> &bull; {track.year}</>}
                </span>
            </p>
            <LiveWaveform processing={true} />
          </div>
        </div>
      </div>
  );
};

const SpotifyLogo = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className='size-5' fill="#4CAF50" viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288"/>
        </svg>
    )
}