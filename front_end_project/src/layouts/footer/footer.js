import React from 'react';
import Deakin from '../../assets/Footer/deakin.png';
import ChameleonLogo from '../../assets/Footer/Logoo.png';
import FaceBook from '../../assets/Footer/facebook.png';
import Insta from '../../assets/Footer/insta.png';
import Twitter from '../../assets/Footer/twitter.png';
import Mail from '../../assets/Footer/Mail.png';

const SocialImages = [
  { img: Insta, alt: 'Instagram' },
  { img: FaceBook, alt: 'FaceBook' },
  { img: Twitter, alt: 'Twitter' },
  { img: Mail, alt: 'Mail' },
];

function Footer() {
  return (
    <div className='w-full max-w-[1320px] max-h-[16rem] mx-auto h-full md:h-[10rem] bg-blue py-2 px-4'>
      <div className='grid md:grid-cols-2 '>
        <div className='w-full h-full flex gap-2 items-center'>
          <div className='w-[100px] h-[100px]'>
            <img
              src={ChameleonLogo}
              alt='ChameleonLogo'
              className='w-full h-full object-contain'
            />
          </div>
          <div className='w-full h-full flex flex-col justify-start items-start'>
            <div className='flex  md:justify-start justify-center'>
              {SocialImages?.map((itm, idx) => {
                return (
                  <img
                    key={idx}
                    src={itm.img}
                    alt={itm.alt}
                    className='w-[40px] h-[40px] object-contain rounded-md'
                  />
                );
              })}
            </div>
            <div>
              <h1 className='text-white text-base flex md:justify-start justify-center'>
                &copy;2023 Copyright reserved by Chameleon
              </h1>
            </div>
          </div>
        </div>
        <div className='w-full h-full flex justify-between items-center'>
          <div className='w-full h-full pt-3 flex flex-col justify-start items-start font-semibold text-white'>
            <div>
              <h1 className='text-xl text-center mb-2'>Contact Us</h1>
              <p className='text-lg text-center'>PH: 03 59756586</p>
              <p className='text-lg text-center'>E:info@chameleon.com</p>
            </div>
          </div>
          <div className='w-[100px] h-[100px]'>
            <img
              src={Deakin}
              alt='Deakin University'
              className='w-full h-full object-contain'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
