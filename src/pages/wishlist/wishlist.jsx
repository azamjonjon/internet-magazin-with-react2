import React, { useEffect } from "react";
import {
  addToCart,
  addToWishlist,
  API,
  delFromWishlist,
  get,
  getById,
  getFromWishlist,
} from "../../reducers/counterSlice";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import img6 from "../images/Fill Eye.png";
import img7 from "../images/icon-delete.png";
import img14 from "../images/Frame 566.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Wishlist = () => {
  let wishData = JSON.parse(localStorage.getItem("wishlist"));
  console.log(wishData);
  const data = useSelector((state) => state.counter.users);
  let navigation = useNavigate();
  let dispach = useDispatch();

  function info(id) {
    dispach(getById({ id, navigation }));
  }

  useEffect(() => {
    dispach(get());
    dispach(getFromWishlist());
  }, []);

  return (
    <div>
      <div className="">
        <div className="flex m-auto w-[90%] justify-between items-center">
          <p className="text-[30px]">Wishlist ({wishData.length})</p>
          <button className="w-[150px] h-[40px] border-2">
            Move All To Bag
          </button>
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
            {wishData.length>0 && wishData.map((elem) => {
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
                        <div className="w-[40px] h-[40px] mt-[-10px]">
                          <img
                            onClick={() => dispach(delFromWishlist(elem.id))}
                            src={img7}
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
      <div className="flex items-center gap-[20px] w-[90%] m-auto mt-[50px]">
        <div className="w-[30px] h-[50px] bg-[#DB4444] rounded-[10px]"></div>
        <p className="text-[30px]">Just For You</p>
      </div>
      <div className="w-[90%] m-auto">
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
                        <div className="w-[40px] h-[40px] mt-[-10px]">
                          <div onClick={() => info(elem.id)}>
                            <img src={img6} alt="" />
                          </div>
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
                      <p>{elem.price}</p>
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

export default Wishlist;
