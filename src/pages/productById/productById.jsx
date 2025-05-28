import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API, get, getById } from "../../reducers/counterSlice";
import { useNavigate, useParams } from "react-router";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";
import img5 from "../images/Wishlist.png";
import img6 from "../images/Fill Eye.png";
import img14 from "../images/Frame 566.png";
import img15 from "../images/Frame 920.png";
import "./productById.css";

import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const ProductById = () => {
  const data = useSelector((state) => state.counter.users);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const product = useSelector((state) => state.counter.productById);
  let dispach = useDispatch();
  const navigation = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    dispach(getById({ id, navigation }));
    dispach(get());
  }, []);
  console.log(product.images);
  function info(id) {
    dispach(getById({ id, navigation }));
  }
  return (
    <div>
      <div className="md:flex justify-center items-center gap-[80px]">
        <div className="w-[80%] m-auto md:w-[40%]">
          {/* Основной слайдер */}
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mb-4 rounded-xl overflow-hidden"
          >
            {product.images?.map((elem) => (
              <SwiperSlide key={elem.id}>
                <img
                  src={`${API}/images/${elem.images}`}
                  className="w-full h-[500px] object-cover"
                  alt=""
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={-10}
            slidesPerView={5}
            freeMode={true}
            watchSlidesProgress={true}
            className="rounded-md overflow-hidden"
          >
            {product.images?.map((elem) => (
              <SwiperSlide key={elem.id}>
                <img
                  src={`${API}/images/${elem.images}`}
                  className="h-[80px] w-full object-cover cursor-pointer"
                  alt=""
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="">
          <p className="text-[40px]">{product.productName}</p>
          <img src={img15} alt="" />
          <h1 className="text-[30px]">${product.price}</h1>
          <p className="border-b-2 border-black p-[20px]">{product.description}</p>
          <div className="mt-[20px] flex gap-[20px] items-center">
            <p className="text-[20px]">Colors:</p>
            <div className="w-[50px] h-[50px] rounded-4xl bg-[#A0BCE0] border-2 border-gray-700"></div>
            <div className="w-[50px] h-[50px] rounded-4xl bg-[#E07575] border-2 border-gray-700"></div>
          </div>
          <div className="mt-[20px] flex gap-[20px] items-center">
            <p className="text-[20px]">Size:</p>
            <div className="w-[40px] h-[40px] rounded-[5px] p-[8px] border-2 border-gray-700 text-center">XS</div>
            <div className="w-[40px] h-[40px] rounded-[5px] p-[8px] border-2 border-gray-700 text-center">S</div>
            <div className="w-[40px] h-[40px] rounded-[5px] bg-[#DB4444] p-[8px]  text-center text-white">M</div>
            <div className="w-[40px] h-[40px] rounded-[5px] p-[8px] border-2 border-gray-700 text-center">L</div>
            <div className="w-[40px] h-[40px] rounded-[5px] p-[8px] border-2 border-gray-700 text-center">XL</div>
          </div>
          <div className="flex gap-[20px] mt-[30px]">
            <button className="text-[30px] w-[50px] h-[50px] rounded-2xl ">-</button>
            <p className="text-[30px]">{product.quantity}</p>
            <button className="text-[30px] w-[50px] h-[50px] rounded-2xl bg-[#DB4444] text-white">+</button>
            <button className="w-[150px] h-[50px] border-0 bg-[#DB4444] text-white rounded-2xl">Buy now</button>
          </div>
        </div>
      </div>
      <div className="w-[90%] m-auto mt-[100px]">
        <Swiper
          spaceBetween={-1000}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
        >
          <div className="mt-[-600px] flex flex-wrap justify-around">
            {data.map((elem) => {
              return (
                <SwiperSlide className="card" key={elem.id}>
                  <div key={elem.id} className="w-[300px] h-[300px] ">
                    <div className="bg-[#F5F5F5] p-[20px]">
                      <div className="flex gap-[20px]">
                        <div className="w-[200px] h-[200px] ">
                          <img
                            className="w-[200px] h-[200px]"
                            src={`${API}/images/${elem.image}`}
                            alt=""
                          />
                        </div>
                        <div className="w-[40px] h-[40px] mt-[-20px]">
                          <div onClick={() => info(elem.id)}>
                            <img src={img6} alt="" />
                          </div>
                          <img
                            onClick={() => dispach(addToWishlist(elem))}
                            src={img5}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => dispach(addToCart(elem.id))}
                      className="addtocart"
                    >
                      Add To Cart
                    </button>
                    <div key={elem.id} className="">
                      <h1>{elem.productName}</h1>
                      <div className="flex justify-between items-center">
                        <p>{elem.price}</p>
                        <img src={img14} alt="" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default ProductById;
