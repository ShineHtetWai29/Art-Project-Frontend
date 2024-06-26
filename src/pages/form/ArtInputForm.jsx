import React, { useEffect, useState } from "react";
// import CategoryRequest from "../../fetchData/CategoryRequest";
import axios from "axios";
import { useNavigate } from "react-router";
import { storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import PaymentSlip from "./PaymentSlip";

const ArtInputForm = ({ visible, onClose }) => {
  const navigate = useNavigate();
  const userId = sessionStorage.getItem("userId");
  const [viewModal, setViewModal] = useState([])
  const [artImage, setArtImage] = useState();
  const [cardImageFile, setCardImageFile] = useState([]);
  const [inputArt, setInputArt] = useState({
    imageTitle: "",
    price: "",
    category_id: "",
    description: "",
  });

  const artImageChange = (e) => {
    const file = e.target.files[0];
    setArtImage(file);
  };

  const uploadImage = () => {
    return new Promise((resolve, reject) => {
      if (!artImage) {
        reject("No image selected");
        return;
      }
      const imgRef = ref(storage, `images/${v4()}`);
      uploadBytes(imgRef, artImage)
        .then((snapshot) => {
          getDownloadURL(snapshot.ref)
            .then((url) => {
              setCardImageFile(url);
              resolve(url);
            })
            .catch((error) => {
              reject(error);
            });
        })
        .catch((error) => {
          reject(error);
        });
    });
  };


  // category functions
  const [categoryData, setCategoryData] = useState([]);
  const apiUrlcategory = "http://localhost:8080/categories";

  useEffect(() => {
    axios.get(apiUrlcategory).then((response) => {
      setCategoryData(response.data);
    });
  }, []);
  //   ////////////////////////////////////////////////////////////////////////

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = `http://localhost:8080/cards?user_id=${userId}`;

    const imageUrl = await uploadImage();
    console.log(inputArt);
    axios
      .post(apiUrl, {
        image: imageUrl,
        imageTitle: inputArt.imageTitle,
        description: inputArt.description,
        category_id: inputArt.category_id,
        price: inputArt.price,
      })
      .then((response) => {
        console.log(response);
        navigate("/paymentslip")
        // window.location.href = "/gallery";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const titleChange = (e) => {
    const setWriteTitle = e.target.value;
    setInputArt({ ...inputArt, imageTitle: setWriteTitle });
  };

  const priceChange = (e) => {
    const setWritePrice = e.target.value;
    setInputArt({ ...inputArt, price: setWritePrice });
  };

  const categoryChange = (e) => {
    const setWriteCategoryId = e.target.value;
    setInputArt({ ...inputArt, category_id: setWriteCategoryId });
  };

  const descriptionChange = (e) => {
    const setWriteDescription = e.target.value;
    setInputArt({ ...inputArt, description: setWriteDescription });
  };

  if (!visible) return null;

  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col  w-1/4 bg-white p-6 rounded"
      >
        <h2 className="text-[40px] text-center mb-4">Creation Form</h2>
        <input
          type="file"
          placeholder="Put Your Art Image"
          className="block w-full    text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 mb-5"
          onChange={artImageChange}
        />

        <input
          type="text"
          placeholder="Put Your Art Title"
          className="border border-gray-700 hover:border-2 hover:border-[#898121] p-2 rounded mb-5"
          onChange={titleChange}
        />

        <input
          type="text"
          placeholder="Price"
          className="border border-gray-700 hover:border-2 hover:border-[#898121] p-2 rounded mb-5"
          onChange={priceChange}
        />

        <label>CATEGORY</label>
        <select
          type="text"
          className="border hover:border-2 hover:border-[#898121] border-gray-700 p-2 rounded mb-5"
          onChange={categoryChange}
        >
          {categoryData.map((item) => {
            return (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            );
          })}
        </select>

        <textarea
          type="text"
          placeholder="Description"
          className="border border-gray-700 hover:border-2 hover:border-[#898121] p-2 rounded mb-5"
          onChange={descriptionChange}
        />

        <button className="bg-[#898121] border border-gray-700 p-2 rounded mb-5">
          Enter
        </button>
      </form>
      {/* <PaymentSlip onClose={() => setViewModal(false)} cansee={viewModal} /> */}

    </div>
    
  );
};

export default ArtInputForm;
