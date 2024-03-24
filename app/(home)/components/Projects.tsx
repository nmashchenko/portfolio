import React from 'react';
import {
  SiAstro,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiReactquery,
  SiStyledcomponents,
  SiSupabase,
  SiTailwindcss,
} from 'react-icons/si';
import Title from '@/app/(home)/components/Title';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover';

const Projects = () => {
  const projects = [
    {
      title: 'Teameights',
      tech: [SiNextdotjs, SiReactquery, SiNestjs, SiReact],
      link: 'https://teameights.com',
      cover: '/images/teameights.png',
      background: 'bg-indigo-500',
    },
    {
      title: 'Streamdal (Landing)',
      tech: [SiAstro, SiTailwindcss, SiReact],
      link: 'https://streamdal.com',
      cover: '/images/streamdal.png',
      background: 'bg-green-500',
    },
    {
      title: 'Candy Market',
      tech: [SiSupabase, SiReact, SiStyledcomponents],
      link: 'https://github.com/nmashchenko/HackathonNovember',
      cover: '/images/marketplace.png',
      background: 'bg-green-500',
    },
    {
      title: 'Code Duels',
      tech: [SiReact, SiSupabase, SiPostgresql, SiNextdotjs],
      link: 'https://github.com/nmashchenko/uncommon-hacks',
      cover: '/images/code_duels.png',
      background: 'bg-indigo-500',
    },
  ];

  return (
    <div className='py-10 p-5 sm:p-0'>
      <Title text='Projects 📦' className='flex flex-col items-center justify-center rotate-6' />
      <div className='grid grid-cols-1 md:grid-cols-2 pt-20 gap-5'>
        {projects.map((project, index) => {
          return (
            <Link href={project.link} key={index}>
              <div className={cn('p-3 rounded-md', project.background)}>
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className='w-full space-y-5 cursor-pointer'
                >
                  <div className='space-y-5 bg-black p-5 rounded-xl'>
                    <h1 className='text-2xl font-bold'>{project.title}</h1>
                    <div className='flex items-center gap-5'>
                      {project.tech.map((Icon, index) => {
                        return <Icon key={index} className='w-8 h-8' />;
                      })}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
