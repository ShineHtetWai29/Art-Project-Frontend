import React, { useEffect, useState } from "react";
import vdBg from "../../images/favouritePageBg.mp4";
import axios from "axios";
import Card from "../card/Card";

const Favourite = () => {
  const [favouriteData, setFavouriteData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [userData, setUserData] = useState([]);

  const userId = sessionStorage.getItem("userId");
  const apiUrl = "http://localhost:8080/favourites";
  console.log(userId);
  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        console.log(response.data.data); 
        const filteredData = response.data.data.filter((item) => userId == item.user.id);
        console.log(filteredData)
        setFavouriteData(filteredData);
        setFilterData(filteredData); // Set filterData here
      })
      .catch((error) => console.log(error));
  }, [userId]); // Include userId in the dependency array
  
  return (
    <div className="relative ">
      <video
        src={vdBg}
        autoPlay
        loop
        muted
        className="w-full h-[1200px] object-cover "
      ></video>
      <div className="flex w-[1340px] absolute left-[5rem] top-7 flex-wrap -mx-[20px]   ">
        {
          filterData.map((item) => (
            <Card
              key={item.card.id}
              cardId={item.card.id}
              image={item.card.image}
              title={item.card.imageTitle}
              userName={item.card.userName}
              price={item.card.price}
              status={item.card.status}
            />
          ))
        }
      </div>
    </div>
  );
};

export default Favourite;
