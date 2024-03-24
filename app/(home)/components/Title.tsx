import React from 'react';

const Title = ({ text, className }: { text: string; className?: string }) => {
  return (
    <div className={className}>
      <h1 className='text-3xl font-bold group-hover:text-green-400 transition-all'>{text}</h1>
      <div className='w-40 h-2 bg-green-500 rounded-full' />
      <div className='w-40 h-2 bg-indigo-500 rounded-full translate-x-2' />
    </div>
  );
};

export default Title;
