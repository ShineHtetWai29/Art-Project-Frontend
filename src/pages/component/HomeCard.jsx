import React from 'react';

const HomeCard = ({id,img,title,para}) => {
  return (
    <>
         <div key={id} className='font-muli'>
        <div className=' w-full relative p-6 flex justify-around'>
          <img src={img} alt="" className=' w-20 m-auto absolute pt-5' />
          <div className='text-black w-[300px] mx-auto rounded-3xl shadow-2xl p-12 bg-green-50'>

            <h3 className='flex items-center justify-center font-muli font-bold pt-20 mb-5'>{title}</h3>
            <div className='w-[200px] flex  gap-5'>
            
              <p className='text-center'>{para}</p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default HomeCard;
