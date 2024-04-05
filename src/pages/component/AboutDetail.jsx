import React from 'react';

const AboutDetail = ({ id, image, title, description }) => {
    return (
        <>
            <div key={id} className='flex'>
                <div className="w-[400px] rounded-3xl overflow-hidden shadow-2xl hover:scale-105">

                    <img className="w-[400px]" src={image} alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-center">{title}</div>
                        <p className="text-gray-700 text-base">
                            {description}
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#artist</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#arts</span>
                    </div>
                </div>
            </div>

        </>
    );
}

export default AboutDetail;
