import React, { useEffect } from "react";
import {
  addToCart,
  addToWishlist,
  API,
  delFromWishlist,
  get,
  getById,
  getFromWishlist,
} from "../../reducers/project";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";

import img6 from "../images/Fill Eye.png";
import img7 from "../images/icon-delete.png";
import img14 from "../images/Frame 566.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Wishlist = () => {
  const wishData = JSON.parse(localStorage.getItem("wishlist")) || [];
  const data = useSelector((state) => state.counter.users);
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const info = (id) => {
    dispatch(getById({ id, navigation }));
  };

  useEffect(() => {
    dispatch(get());
    dispatch(getFromWishlist());
  }, []);

  return (
    <div className="pb-20">
      {/* Header */}
      <div className="w-[90%] mx-auto mt-10 flex justify-between items-center">
        <h1 className="text-3xl font-semibold text-gray-800">
          Wishlist ({wishData.length})
        </h1>
        <button className="px-5 py-2 border-2 border-gray-800 rounded-md hover:bg-gray-800 hover:text-white transition">
          Move All To Bag
        </button>
      </div>

      {/* Wishlist Items */}
      <div className="w-[90%] mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {wishData.map((elem) => (
          <div
            key={elem.id}
            className="bg-white rounded-xl shadow-md p-4 flex flex-col justify-between hover:shadow-lg transition"
          >
            <div className="bg-gray-100 rounded-lg p-4 relative">
              <img
                className="w-full h-48 object-contain"
                src={`${API}/images/${elem.image}`}
                alt={elem.productName}
              />
              <button
                className="absolute top-2 right-2"
                onClick={() => dispatch(delFromWishlist(elem.id))}
              >
                <img className="w-6 h-6" src={img7} alt="Delete" />
              </button>
            </div>
            <h2 className="mt-4 text-lg font-semibold">{elem.productName}</h2>
            <div className="flex justify-between items-center mt-2">
              <p className="text-[#DB4444] font-bold">${elem.price}</p>
              <img className="w-5 h-5" src={img14} alt="Rating" />
            </div>
            <button
              onClick={() => dispatch(addToCart(elem.id))}
              className="mt-4 bg-[#DB4444] text-white py-2 rounded-md hover:bg-[#c53737] transition"
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>

      {/* Just For You */}
      <div className="w-[90%] mx-auto mt-20">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-6 h-6 bg-[#DB4444] rounded-md"></div>
          <h2 className="text-2xl font-semibold">Just For You</h2>
        </div>

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          freeMode
          pagination={{ clickable: true }}
        >
          {data.map((elem) => (
            <SwiperSlide key={elem.id}>
              <div className="bg-white rounded-xl shadow-md p-4 flex flex-col justify-between hover:shadow-lg transition h-full">
                <div className="bg-gray-100 rounded-lg p-4 relative">
                  <img
                    className="w-full h-48 object-contain"
                    src={`${API}/images/${elem.image}`}
                    alt={elem.productName}
                  />
                  <button
                    className="absolute top-2 right-2"
                    onClick={() => info(elem.id)}
                  >
                    <img className="w-6 h-6" src={img6} alt="Info" />
                  </button>
                </div>
                <h2 className="mt-4 text-lg font-semibold">{elem.productName}</h2>
                <p className="text-[#DB4444] font-bold">${elem.price}</p>
                <button
                  onClick={() => dispatch(addToCart(elem.id))}
                  className="mt-4 bg-[#DB4444] text-white py-2 rounded-md hover:bg-[#c53737] transition"
                >
                  Add To Cart
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Wishlist;
