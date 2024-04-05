import React from 'react';

const BlogCard = ({id,image,title,description,icon,name,para}) => {
  return (
    <>
     <div key={id} className='w-[600px] flex rounded-3xl shadow-2xl' >
            <div className='w-[]'>
              <img src={image} className='w-[300px] h-[300px] shadow-2xl' alt="" />
            </div>
            <div className='p-10 '>
              <h2 className='text-center font-bold text-xl mb-4'>{title}</h2>
              <p className=' mb-12'>{description}</p>
              <div className='flex flex-wrap'>
                <img src={icon} className='w-8'  alt="" />
                <h3 className='pl-2 font-bold'>{name}</h3>
                <p className='pl-10'>{para}</p>
              </div>
            </div>
          </div>
    </>
  );
}

export default BlogCard;
