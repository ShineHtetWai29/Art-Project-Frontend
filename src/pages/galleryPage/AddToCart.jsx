import React from 'react'
import cardBg from '../../images/cardBg.png'
const AddToCart = () => {
  return (
    <div className='innerwidth w-[1300px] m-auto mt-6 flex'>
        <div className='w-3/4 border-r-2 border-black'>
            <div className='p-2'>
                <h3 className='text-[32px] font-bold'>Your Cart</h3>
            </div>
            <div className='flex gap-5 mt-3 border-b-2 pb-4 border-black mr-[50px]'>
                <div className='w-[150px] '>
                    <img src={cardBg} alt="card photo" className='w-full rounded-lg' />
                </div>
                <span className='mt-3 text-[20px]'>Title</span>
                <span className=''>$3000</span>
            </div>
        </div>
        
        <div className='w-1/4'>
            <div className='ml-2'>
                <h3 className='border-b-2 p-2 text-[32px] font-bold'>Card Total</h3>
                <div className='flex justify-around'>
                    <span className='text-[20px] font-medium'>Name</span>
                    <span className='text-[20px] font-medium'>Price</span>
                </div>
                <div className='flex border-b-4 border-black py-4 '>
                    <div className='w-3/4 -mr-5 pl-2'>
                        <span>Little Angle</span>
                    </div>
                    <div>
                        <span>$3000</span>
                    </div>
                </div>
                <div className='flex border-b-4 border-black py-4'>
                    <div className='w-3/4 -mr-5 pl-2'>
                        <span>Total</span>
                    </div>
                    <div>
                        <span>$3000</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddToCart