import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaRegPlusSquare } from "react-icons/fa";
import axios from "axios";
import Card from "../card/Card";
import ArtInputForm from "../form/ArtInputForm";
import ReactPaginate from "react-paginate";
import PaginationButtons from "../../buttons/PaginationButton";

const Gallery = () => {
  const userId = sessionStorage.getItem("userId");
  const [cardData, setCardData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  const [showModal, setShowModal] = useState(false);

  const [categoryData, setCategoryData] = useState([]);
  const [categoryTitle, setCategoryTitle] = useState([]);

  const apiUrlcategory = "http://localhost:8080/categories";

  useEffect(() => {
    axios.get(apiUrlcategory).then((response) => {
      setCategoryData(response.data);
      // console.log(response.data);
    });
  }, []);

  const cardUrl = "http://localhost:8080/cards";
  useEffect(() => {
    axios.get(cardUrl).then((response) => {
      setCardData(response.data);
      // console.log(response.data);
    });
  }, []);

  const fetchCardsByCategory = (categoryId) => {
    axios
      .get(`http://localhost:8080/cards/filter?category_id=${categoryId}`)
      .then((response) => {
        setCardData(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching cards:", error);
      });
    
  };

  // Handle category change
  const handleCategoryChange = (e) => {
    const categoryId = e.target.value;
    if (categoryId !== "") {
      fetchCardsByCategory(categoryId);
    } else {
      axios
        .get(cardUrl)
        .then((response) => {
          setCardData(response.data);
          // console.log(response.data);
        })
        .catch((error) => {
          console.error("Error fetching cards:", error);
        });
    }
  };

  const paginate = (pageNumber) => {
    // console.log(pageNumber);
    setCurrentPage(pageNumber);
  };
  const indexOfLastCard = currentPage * postsPerPage;
  const indexOfFirstCard = indexOfLastCard - postsPerPage;
  const currentPosts = cardData.slice(indexOfFirstCard, indexOfLastCard);
  return (
    <div className="w-[1300px] ms:w-full m-auto">
      {/* search and input section */}
      <h2 className="font-robotoSlap text-center text-[50px]">Gallery</h2>
      <div className="flex items-center justify-between pr-4 border-2 ">
        <input
          type="text"
          className=" block py-1.5 pl-7 pr-20 w-full  text-gray-900  placeholder:text-gray-400 focus:ring-1  focus:ring-darkgreen-600 sm:text-sm sm:leading-6"
          placeholder="Search"
        ></input>
        <CiSearch />
      </div>
      {/* category list section */}

      <div className="flex justify-between mt-5">
        <div className="flex">
          <h3 className="text-[35px] font-semibold">CATEGORY</h3>
          <select
            className="border-2 border-black px-2 rounded-lg ml-4 hover:shadow-xl hover:shadow-darkgreen-600 hover:border-blue-700"
            aria-placeholder="Select Category"
            onChange={handleCategoryChange}
          >
            <option value="">All Categories</option>
            {categoryData.map((categories) => (
              <option key={categories.id} value={categories.id}>
                {categories.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <Link
            className="flex border-2 border-black rounded-lg p-4 gap-4 items-center hover:shadow-xl hover:shadow-darkgreen-600 hover:border-blue-700"
            onClick={() => {
              if (userId == null) {
                window.location.href = "/login";
              }
              setShowModal(true);
            }}
          >
            <span>Add Your Creation</span>
            <FaRegPlusSquare />
          </Link>
        </div>
      </div>

      {/* Card Section */}
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

      <ArtInputForm onClose={() => setShowModal(false)} visible={showModal} />

      <PaginationButtons
        postsPerPage={postsPerPage}
        totalPages={cardData.length}
        paginate={paginate}
      />
      
      
    </div>
  );
};

export default Gallery;
