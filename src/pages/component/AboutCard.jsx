import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const AboutCard = ({ id, img, name, phone, email }) => {
  return (
    <>
      <div key={id} className='font-muli'>
        <div className=' w-full relative p-6 flex justify-around'>
          <img src={img} alt="" className=' w-20 m-auto absolute pt-5' />
          <div className='text-black w-[300px] mx-auto rounded-3xl shadow-2xl p-12'>

            <h3 className='flex items-center justify-center font-muli font-bold pt-20 mb-5'>{name}</h3>
            <div className='w-[200px] flex  gap-5'>
            <FaPhoneAlt className=''/>
              <p className=''>{phone}</p>
            </div>

            <div className='w-[200px] flex gap-5'>
              <MdEmail />
              <p className=''>{email}</p>
            </div>
          </div>

        </div>
      </div>

    </>
  );
}

export default AboutCard;
