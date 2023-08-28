import React from 'react';

const InfoCard = ({ img, title, shortInfo, date }) => {
  return (
    <div className='w-full  flex flex-col md:justify-start justify-center md:items-start items-center'>
      <div className='w-[22rem] h-[15rem]'>
        <img src={img} alt='' className='w-full h-full object-cover' />
      </div>
      <h1 className='uppercase text-2xl mt-3'>{title}</h1>
      <p className='font-bold'>{shortInfo}</p>
      <p className='font-bold'>{date}</p>
    </div>
  );
};

export default InfoCard;
