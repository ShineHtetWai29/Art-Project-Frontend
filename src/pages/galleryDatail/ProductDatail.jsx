import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Card from "../card/Card";
import axios from "axios";
import PaginationButtons from "../../buttons/PaginationButton";
import ReactImageMagnify from "react-image-magnify";
import PaymentForm from "../form/PaymentForm";

const ProductDetail = () => {
  const { id } = useParams();
  const [cardData, setCardData] = useState([]);
  const navigate = useNavigate();
  const userId = sessionStorage.getItem("userId")
  const imageUrl = "../../images/image1.jpg";
  const [isPurchased, setIsPurchased] = useState(false);
  const [showModal, setShowModal] = useState(false);



  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);

  // console.log(location)
  const [detailCards, setDetailCards] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/cards/find?card_id=${id}`)
      .then((response) => {
        // console.log(response.data);
        setDetailCards(response.data);
      })
      .catch((error) => console.log(error));
  }, [id]);
  console.log(detailCards);

  const cardUrl = "http://localhost:8080/cards";
  useEffect(() => {
    axios.get(cardUrl).then((response) => {
      setCardData(response.data);
      // console.log(response.data);
    });
  }, []);

  // CARD BUYING SECTION
  const buyNowHandler = (e) => {
    e.preventDefault();
    if (userId === null) {
      window.location.href = "/login";
    }
    setShowModal(true);
  };

  useEffect(() => {
    setIsPurchased(detailCards.status);
  }, [detailCards.status]);

  const paginate = (pageNumber) => {
    // console.log(pageNumber);
    setCurrentPage(pageNumber);
  };

  // PAGINATION SECTION
  const indexOfLastCard = currentPage * postsPerPage;
  const indexOfFirstCard = indexOfLastCard - postsPerPage;
  const currentPosts = cardData.slice(indexOfFirstCard, indexOfLastCard);

  return (
    <>
      <div className="m-20 font-muli">
        <div className="m-auto w-[1300px]">
          <div className="flex flex-wrap mb-12">
            <div className="">
              <div className="w-[600px]">
                <img src={detailCards.image} alt="cardimage" />
              </div>
              <div className="flex items-center gap-4 mt-[20px]">
                <img
                  className="w-10 h-10 rounded-full"
                  src={
                    detailCards.user ? detailCards.user.profileImage : "Nothing"
                  }
                  alt="image profile"
                />
                <div className="w-full flex justify-between font-medium ">
                  <div className="flex flex-col p-2 font-semibold text-[20px]  ">
                    <span className="mb-1 te">{detailCards.imageTitle}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      By{" "}
                      {detailCards.user ? detailCards.user.userName : "Unknown"}
                    </span>
                  </div>

                  <div className="flex flex-col text-right">
                    <span className="font-semibold text-[20px] pr-4 ">
                      $ {detailCards.price}
                    </span>
                    <button className="bg-[#898121] w-[140px] p-2 rounded-[30px] text-[20px]"
                    onClick={buyNowHandler}
                    disabled={isPurchased}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="pl-8">
              <div className="flex flex-wrap mb-4">
                <h3>Published:</h3>
                <p>12/12/2024</p>
              </div>

              <h3 className="mb-4 font-bold">Contact with artist</h3>
              <div className="flex flex-wrap gap-7 mb-4 ">
                <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#1877f2]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                  </svg>
                </span>
                <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#c13584]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </span>
                <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#6a76ac]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                  >
                    <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
                  </svg>
                </span>

                <svg
                  className="h-8 w-8 text-red-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </div>
              <h3 className="text-[25px] mb-4 font-bold">IDEA OF MY ART</h3>
              <p className="w-[500px] text-[20px] break-all">
                {detailCards.description}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap -mx-[20px]   ">
            {currentPosts.map((item) => (
              <Card
                cardId={item.id}
                image={item.image}
                title={item.imageTitle}
                userName={item.userName}
                price={item.price}
                status={item.status}
              />
            ))}
          </div>

          <PaginationButtons
            postsPerPage={postsPerPage}
            totalPages={cardData.length}
            paginate={paginate}
          />
          <PaymentForm
            onClose={() => setShowModal(false)}
            visible={showModal}
            paymentAmount={detailCards.price}
            card_id={id}
          />
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
