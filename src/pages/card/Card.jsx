import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import axios from "axios";
import PaymentForm from "../form/PaymentForm";

const Card = (props) => {
  const userId = sessionStorage.getItem("userId");
  const navigate = useNavigate();
  const [isLike, setIsLike] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isPurchased, setIsPurchased] = useState(false);
  const { cardId, image, title, userName, price, status, onDetail } = props;

  const favouriteHandler =  (e,cardId) => {
    e.preventDefault();
    setIsLike(!isLike)
    console.log(userId,cardId)
     if(!isLike){
     axios
     .post(`http://localhost:8080/favourites?user_id=${userId}&card_id=${cardId}`,{ favourite: !isLike })
      .then((response) => {
        setIsLike(!isLike)
        console.log(response.data)
        console.log(response.data.data.id)
        sessionStorage.setItem('favourites', JSON.stringify(response.data.data.id))
      })
        
    }
    else{
      const favouriteId = sessionStorage.getItem('favourites')
      console.log(favouriteId)
     axios
        .delete(`http://localhost:8080/favourites?id=${favouriteId}`)
        .then((response) => {
          console.log(response.data)})
        
      }
    
  };

  const buyNowHandler = (e) => {
    e.preventDefault();
    if (userId === null) {
      window.location.href = "/login";
    }
    setShowModal(true);
  };

  useEffect(() => {
    setIsPurchased(status);
  }, [status]);

  return (
    <>
      <div className={`w-1/3 px-[20px] my-8 ${isPurchased ? 'disabled-card' : ''} `}>
        <div className="relative">
          <Link to={`/galleryDetail/${cardId}`}>
            <img
              src={image}
              alt="cardbg"
              className="w-full object-cover aspect-square rounded-t-[20px] h-[300px] bg-cover bg-no-repeat"
            />
          </Link>
          <a
            href="#"
            onClick={(e)=>favouriteHandler(e,cardId)}j
            className={isLike ? "text-red-600" : "text-white"   }
          >
            <FaHeart className="absolute border-2 border-black rounded-lg  size-6 top-6 right-4" />
          </a>
        </div>
        <h4 className="text-[20px] font-semibold mt-2 pl-2">{title}</h4>
        <span className="block mt-2 pl-2">
          by <span className="text-[20px] font-semibold">{userName}</span>
        </span>
        <span className="block text-[18px] font-blue mt-2 pl-2">${price}</span>
        <button
          className="bg-primary w-full text-[22px] text-white font-inter font-medium text-center py-2 mt-2"
          onClick={buyNowHandler}
          disabled={isPurchased}
        >
          Buy Now
        </button>
        <PaymentForm
          onClose={() => setShowModal(false)}
          visible={showModal}
          paymentAmount={price}
          card_id={cardId}
        />
      </div>
    </>
  );
};

export default Card;
