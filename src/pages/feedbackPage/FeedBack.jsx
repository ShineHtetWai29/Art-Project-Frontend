import axios from 'axios';
import React, { useState } from 'react';

const FeedBack = () => {
  const userId = sessionStorage.getItem('userId');
  const [inputData, setInputData] = useState({
    comment: '',
  });

  const commentHandler = (e) => {
    const comment = e.target.value;
    setInputData({
      ...inputData,
      comment: comment
    });
  };
  console.log(userId)

  const submitHandler = (e) => {
    e.preventDefault();
    if (!inputData.comment) {
      alert('Please enter comment');
      return;
    }
    
    const feedbackApi = `http://localhost:8080/feedback?user_id=${userId}`;
    

    axios
      .post(feedbackApi, { 
        
        comment: inputData.comment 
      })
      .then((response) => {
        window.location.reload();
        console.log(response);
      })
      .catch((error) => {
        console.error('Error submitting feedback:', error);
      });
  };
  const cancelHandler = () => {
    alert("Successfully Cancel")
    console.log('Cancel button clicked');
  };

  return (
    <>
      <div className='font-muli'>
        <h2 className='text-center font-bold text-[30px] mb-5'>Feedback Form</h2>
        <div className='bg-primary mb-6 text-white h-[300px]'>
          <div className='bg-primary mb-6 text-white h-[300px]'>
            <h3 className='text-[25px] m-auto text-center pt-7'>Send Us Your Feedback</h3>
            <p className='m-auto text-center pt-10 text-[22px]'>Do you have a suggestion or found some bug?
              Let us know in the field bellow.</p>
          </div>
          

        </div>
        <div>
          <div className='m-auto w-[1340px] leading-6 mb-8'>
            <label htmlFor="message" className="block mb-2 text-md font-medium text-gray-900  ">Your message</label>
            <textarea id="message" rows="10" className="bg-secondary block p-2.5 w-full text-sm text-gray-900  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mb-6" placeholder="Write your thoughts here..." onChange={commentHandler}></textarea>
            <div className='flex items-center justify-center gap-20'>
              <button className="bg-primary hover:bg-secondary text-white font-bold py-2 px-12 border border-secondary rounded" onClick={cancelHandler}>
                Cancel
              </button>
              <button className="bg-primary hover:bg-secondary text-white font-bold py-2 px-12 border border-secondary rounded" onClick={submitHandler}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedBack;
