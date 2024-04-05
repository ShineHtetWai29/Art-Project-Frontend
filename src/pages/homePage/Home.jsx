import React, { useEffect, useState } from "react";
import mainvisual1 from "../../images/mainvisual1.png";
import axios from "axios";
import Card from "../card/Card";
import mainvisualbg from "../../images/mainvisual.mp4";
import PaginationButtons from "../../buttons/PaginationButton";
import homelogo2 from "../../images/homelogo2.png";
import homelogo3 from "../../images/homelogo3.jpg";
import homelogo4 from "../../images/homelogo4.jpg";
import homelogo5 from "../../images/homelogo5.webp";
import HomeCard from "../component/HomeCard";
import background from "../../images/background.jpg";

const homeList = [
  {
    id: 1,
    img: homelogo2,
    title: "Arts",
    para: 'lorem ipsum dolor sit amet, consectetur adip'
  },
  {
    id: 2,
    img: homelogo3,
    title: "Arts",
    para: 'lorem ipsum dolor sit amet, consectetur adip'
  },
  {
    id: 3,
    img: homelogo4,
    title: "Arts",
    para: 'lorem ipsum dolor sit amet, consectetur adip'
  },
  {
    id: 4,
    img: homelogo5,
    title: "Arts",
    para: 'lorem ipsum dolor sit amet, consectetur adip'
  },
 
]

const Home = () => {
  const [cardData, setCardData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);

  const cardUrl = "http://localhost:8080/cards";
  useEffect(() => {
    axios.get(cardUrl).then((response) => {
      setCardData(response.data);
    });
  }, []);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const indexOfLastCard = currentPage * postsPerPage;
  const indexOfFirstCard = indexOfLastCard - postsPerPage;
  const currentPosts = cardData.slice(indexOfFirstCard, indexOfLastCard);
  return (
    <>
      <div className="font-muli" >
        <div className="relative h-[500px]" >
          
          <img src={background} alt="" className="blur-sm" />
          
          <div className="flex items-center justify-center font-muli  absolute top-9 left-1/2 transform -translate-x-1/2  ">
            <div className="mt-40">
              <h2 className="font-bold text-[30px] mb-5 text-white text-center ">DIY AND CREATIVE ARTS COMMUNITY</h2>
              <p className=" text-center text-white">
                Said Life to Art—"I love thee best Not when I find in thee My
                very face and form, expressed With dull fidelity, "But when in
                thee my craving eyes Behold continually The mystery of my
                memories And all I long to be.".
              </p>
            </div>
            {/* <div className="w-[200px]">
              <img className="mainvisual p- bg-black" src={mainvisual1} alt="logo" />
            </div> */}
          </div>
        </div>

        {/* About Us */}
        <div className="grid grid-cols-4 gap-2 key={home.id} mb-16 ">
              {
                homeList.map((home) =>
                  <HomeCard id={home.id} img={home.img} title={home.title} para={home.para} />
                )
              }
            </div>


        <div className=" w-[1340px] m-auto">
          <div className="m-auto w-[1340px] mb-2">
            <h2 className="text-center font-bold text-[30px] my-3">OUR ARTS</h2>
          </div>
          <div className="flex justify-end ">
            <button
              className="w-[144px] border-collapse font-inter font-{24px} text-black border-2  border-[#898121]  p-4  rounded-md hover:shadow-xl"
              onClick={() => (window.location.href = "/gallery")}
            >
              View More
            </button>
          </div>

          <div className="flex flex-wrap  ">
            {currentPosts.map((item) => (
              <Card
                cardId={item.id}
                image={item.image}
                title={item.imageTitle}
                userName={item.userName}
                price={item.price}
              />
            ))}
          </div>
        </div>


      </div>
    </>
  );
};

export default Home;
