import React from 'react';
import { SiGithub } from 'react-icons/si';
import { SiX } from 'react-icons/si';
import { SiLinkedin } from 'react-icons/si';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const Navbar = ({ className }: { className?: string }) => {
  const socials = [
    {
      link: 'https://www.linkedin.com/in/nmashchenko/',
      label: 'LinkedIn',
      Icon: SiLinkedin,
    },
    {
      link: 'https://twitter.com/nmashchenko_',
      label: 'X',
      Icon: SiX,
    },
    {
      link: 'https://github.com/nmashchenko',
      label: 'GitHub',
      Icon: SiGithub,
    },
  ];

  return (
    <nav className={cn('py-10 flex justify-between items-center animate-move-down', className)}>
      <h1 className='text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2'>
        nmashchenko 🧑🏻‍💻
      </h1>
      <div className='flex items-center gap-5'>
        {socials.map((social, index) => {
          const Icon = social.Icon;

          return (
            <Link href={social.link} key={index} aria-label={social.label}>
              <Icon className='w-5 h-5 hover:scale-125 transition-all' />
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
