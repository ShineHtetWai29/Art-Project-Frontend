import React, { useState } from 'react';
import subcribe from '../../images/subcribe.png';
import { RiVisaFill } from "react-icons/ri";
import { CiCreditCard1 } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { SiApplepay } from "react-icons/si";
import { BsCurrencyDollar } from "react-icons/bs";

const Subcribe = () => {

    return (
        <>
            <div className='my-10 '>
                <div className='m-auto w-[1000px] bg-[#F0EDCF] flex flex-wrap '>
                    <div>
                        <img src={subcribe} alt="" />
                    </div>
                    <div>
                        <div>
                            <div className=" p-5 ">
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Choose A Plan</h2>
                                <div className="border border-primary w-[360px]  rounded-lg p-4 mb-6">

                                    <h2 className="text-md text-gray-900 font-medium title-font mb-2">Bronze</h2>

                                    <div className='flex flex-wrap'>
                                    <BsCurrencyDollar />

                                        <p className="leading-relaxed text-base">3.00/5 arts</p>
                                    </div>

                                </div>
                                <div className="border border-primary w-[360px]  rounded-lg p-4 mb-6">

                                    <h2 className="text-md text-gray-900 font-medium title-font mb-2">Silver</h2>

                                    <div className='flex flex-wrap'>
                                    <BsCurrencyDollar />

                                        <p className="leading-relaxed text-base">3.00/5 arts</p>
                                    </div>

                                </div>
                                <div className="border border-primary w-[360px]  rounded-lg p-4 mb-6">

                                    <h2 className="text-md text-gray-900 font-medium title-font mb-2">Gold</h2>

                                    <div className='flex flex-wrap'>
                                    <BsCurrencyDollar />

                                        <p className="leading-relaxed text-base">3.00/5 arts</p>
                                    </div>

                                </div>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Payment Method</h2>
                                <div className="bg-primary border border-primary w-[360px]  rounded-lg p-4 mb-6">


                                    <div className='flex flex-wrap gap-3 border-black border-b-2 mb-4'>
                                    <CiCreditCard1 />

                                        <p className="leading-relaxed text-white">Credit/Debit Card</p>
                                        
                                    </div>
                                    
                                    <div className='flex flex-wrap gap-3 border-b-2 border-black mb-4'>
                                    <RiVisaFill />
                                        <p className="leading-relaxed text-white ">*****3435</p>
                                    </div>
                                    <div className='flex flex-wrap gap-3 border-b-2 border-black mb-4'>
                                    <FaPlus />

                                        <p className="leading-relaxed text-white ">New card</p>
                                    </div>

                                </div>
                                <div className="bg-primary border border-primary w-[360px]  rounded-lg p-4 mb-6">

                                

                                    <div className='flex flex-wrap gap-3'>
                                    <SiApplepay />

                                        <p className="leading-relaxed text-white">Apple Pay</p>
                                    </div>

                                </div>
                                <div>
                                    <button className="bg-primary hover:bg-primary text-white font-bold py-2 px-40 rounded">
                                        Pay
                                    </button>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Subcribe;
