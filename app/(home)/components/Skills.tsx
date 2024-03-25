'use client';

import React from 'react';
import Title from '@/app/(home)/components/Title';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import {
  SiJest,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTemporal,
} from 'react-icons/si';

const Skills = () => {
  const skills = [
    { text: 'React', Icon: SiReact },
    { text: 'Tailwind', Icon: SiTailwindcss },
    { text: 'Next', Icon: SiNextdotjs },
    { text: 'Node', Icon: SiNodedotjs },
    { text: 'Postgresql', Icon: SiPostgresql },
    { text: 'Nest', Icon: SiNestjs },
    { text: 'Mongo', Icon: SiMongodb },
    { text: 'Jest', Icon: SiJest },
    { text: 'Temporal', Icon: SiTemporal },
  ];

  return (
    <div className='max-w-5xl mx-auto mt-20 px-8'>
      <Title text='Skills 🧠' className='flex flex-col items-center justify-center -rotate-6' />
      <HoverEffect items={skills}></HoverEffect>
    </div>
  );
};

export default Skills;
