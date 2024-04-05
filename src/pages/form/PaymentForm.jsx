import React, { useState } from "react";
import ComboBox from "react-responsive-combo-box";
import kpay from "../../images/kpay.jpg";
import wavepay from "../../images/wavepay.jpg";
import ayapay from "../../images/ayapay.png";
import { useParams } from "react-router";
import axios from "axios";
import PaymentSlip from "./PaymentSlip";

const PaymentForm = ({ visible, onClose, paymentAmount, card_id }) => {
  const userId = sessionStorage.getItem("userId");
  const [amount, setAmount] = useState([]);

  const submithandler = (e) => {
    e.preventDefault();

    axios
      .post(
        `http://localhost:8080/payment?user_id=${userId}&card_id=${card_id}`,
        { amount: amount }
      )
      .then((response) => {
        console.log("Payment successful:", response.data);
        window.location.reload();
      })
      .catch((error) => console.log("Error processing payment:", error));
  };

  if (!visible) return null;

  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };
  return (
    <>
      <div
        id="container"
        onClick={handleOnClose}
        className="fixed inset-0 z-10 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
      >
        <form
          onSubmit={submithandler}
          className="flex flex-col  w-1/4 bg-white p-6 rounded"
        >
          <h2 className="text-[40px] text-center mb-4">Payment Form</h2>
          <input
            type="text"
            value={paymentAmount}
             
            className="border border-gray-700 hover:border-2 hover:border-[#898121] p-2 rounded mb-5"
            onChange={() => setAmount(paymentAmount)}
          />

          <div className="flex flex-col items-start gap-3 ">
            <div className="flex items-center bg-slate-200 p-2 w-full">
              <input
                type="radio"
                id="option1"
                name="option"
                // value="option1"
                // checked={selectedOption === "option1"}
                // onChange={handleOptionChange}
                className="form-radio text-indigo-600 h-5 w-5"
              />
              <label
                htmlFor="option2"
                className="flex items-center justify-between w-full font-medium text-gray-700 ml-3"
              >
                <label htmlFor="">Purchase with WavePay</label>
                <img src={wavepay} alt="wavepay" className="w-10 h-10" />
              </label>
            </div>
            <div className="flex items-center bg-slate-200 p-2 w-full ">
              <input
                type="radio"
                id="option2"
                name="option"
                value="option2"
                // checked={selectedOption === "option2"}
                // onChange={handleOptionChange}
                className="form-radio text-indigo-600 h-5 w-5"
              />
              <label
                htmlFor="option2"
                className="flex items-center justify-between w-full font-medium text-gray-700 ml-3"
              >
                <label htmlFor="">Purchase with Kpay</label>
                <img src={kpay} alt="kpay" className="w-10 h-10" />
              </label>
            </div>
            <div className="flex flex-col items-start gap-3 w-full ">
              <div className="flex items-center bg-slate-200 p-2 w-full">
                <input
                  type="radio"
                  id="option1"
                  name="option"
                  value="option1"
                  // checked={selectedOption === "option1"}
                  // onChange={handleOptionChange}
                  className="form-radio text-indigo-600 h-5 w-5"
                />
                <label
                  htmlFor="option2"
                  className="flex items-center justify-between w-full font-medium text-gray-700 ml-3"
                >
                  <label htmlFor="">Purchase with AyaPay</label>
                  <img src={ayapay} alt="wavepay" className="w-10 h-10" />
                </label>
              </div>
            </div>
          </div>
          <button className="bg-[#898121] border border-gray-700 p-2 rounded mb-5 mt-5">
            Enter
          </button>
        </form>
      </div>
    </>
  );
};

export default PaymentForm;
