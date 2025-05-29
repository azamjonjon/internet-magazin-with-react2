import { useEffect, useState } from "react";
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./home.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  addToWishlist,
  API,
  get,
  getById,
} from "../../reducers/project";
import img1 from "../images/Frame 560.png";
import img2 from "../images/images (1).jpg";
import img3 from "../images/images.jpg";
import img4 from "../images/Без названия.jpg";
import img5 from "../images/Wishlist.png";
import img6 from "../images/Fill Eye.png";
import img7 from "../images/Category-CellPhone.png";
import img8 from "../images/Category-Camera.png";
import img9 from "../images/Category-Computer.png";
import img10 from "../images/Category-Gamepad.png";
import img11 from "../images/Category-SmartWatch.png";
import img12 from "../images//Category-Headphone.png";
import img13 from "../images/Frame 694.png";
import img14 from "../images/Frame 566.png";
import img15 from "../images/Frame 739.png";
import "./home.css";
import { Link, useNavigate, useParams } from "react-router";
const Home = () => {
    const data = useSelector((state) => state.counter.users);
  console.log(data);
  let navigation = useNavigate();
  let dispach = useDispatch();
  let cnt = 0;
  let res = 0;

  function info(id) {
    dispach(getById({ id, navigation }));
  }

    useEffect(() => {
      dispach(get());
      dispach(addToCart());
    }, []);

  return (
    <div>
      <div className="md:flex justify-around p-[20px]">
        <div className="space-y-4 text-[20px] font-medium text-gray-800">
          <p>Woman’s Fashion</p>
          <p>Men’s Fashion</p>
          <p>Electronics</p>
          <p>Home & Lifestyle</p>
          <p>Medicine</p>
          <p>Sports & Outdoor</p>
          <p>Baby’s & Toys</p>
          <p>Groceries & Pets</p>
        </div>

        <div className="jera">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <div className="w-full max-w-[90%] h-[400px] overflow-hidden rounded-3xl shadow-lg">
                <img className="w-full h-full object-cover" src={img1} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="w-full max-w-[90%] h-[400px] overflow-hidden rounded-3xl shadow-lg">
                <img className="w-full h-full object-cover" src={img2} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full max-w-[90%] h-[400px] overflow-hidden rounded-3xl shadow-lg">
                <img className="w-full h-full object-cover" src={img3} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full max-w-[90%] h-[400px] overflow-hidden rounded-3xl shadow-lg">
                <img className="w-full h-full object-cover" src={img4} alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="hera">
        <Swiper
          spaceBetween={-900}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
        >
          <div className="mt-[-700px] mb-[200px] flex flex-wrap justify-around m-[50px]">
            {data.map((elem) => {
              return (
                <SwiperSlide className="card" key={elem.id}>
                  <div className="bg-white border rounded-xl shadow-md overflow-hidden transition-transform w-[25%] h-[350px] hover:scale-105 duration-300">
                    <div className="bg-[#F5F5F5] p-4 relative">
                      <img
                        className="w-full h-[200px] object-contain"
                        src={`${API}/images/${elem.image}`}
                        alt=""
                      />
                      <div className="absolute top-4 right-4 space-y-2">
                        <button onClick={() => info(elem.id)}>
                          <img className="w-6 h-6" src={img6} alt="View" />
                        </button>
                        <button onClick={() => dispach(addToWishlist(elem))}>
                          <img className="w-6 h-6" src={img5} alt="Wishlist" />
                        </button>
                      </div>
                    </div>
                    <div className="p-4">
                      <h2 className="text-lg font-semibold">
                        {elem.productName}
                      </h2>
                      <div className="flex justify-between items-center mt-2">
                        <p className="text-[#DB4444] font-bold text-md">
                          ${elem.price}
                        </p>
                        <img className="w-32 h-6" src={img14} alt="Rating" />
                      </div>
                      <button
                        onClick={() => dispach(addToCart(elem.id))}
                        className="addtocart"
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </div>
          <Link to="/product">
            <div className="w-[20%] m-auto mt-[50px] mb-[50px]">
              <button className="w-[200px] m-auto mb-[50px] h-[50px] rounded-xl bg-[#DB4444] text-white">
                View All
              </button>
            </div>
          </Link>
        </Swiper>
      </div>

      <div className="flex items-center gap-[10px] w-[90%] m-auto mt-[-250px]">
        <div className="w-[20px] h-[30px] bg-amber-600 border-0 rounded-[5px]"></div>
        <p className="text-amber-600 text-[30px]">This month</p>
      </div>
      <div className="flex items-center justify-between w-[90%] m-auto">
        <p className="text-[40px]">Best Selling Products</p>
        <button className="w-[100px] h-[40px] rounded-xl bg-[#DB4444] text-white">
          View All
        </button>
      </div>
      <br />
      <div className="vera">
        <Swiper
          spaceBetween={-900}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
        >
          <SwiperSlide className="">
            <div className="w-[100px] h-[100px] border-1 flex items-center justify-center">
              <div className="gera">
                <div className="w-[50px] h-[50px] m-auto">
                  <img src={img7} alt="" />
                </div>
                <p>Phones</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="w-[100px] h-[100px] border-1 flex items-center justify-center">
              <div className="gera">
                <div className="w-[50px] h-[50px] m-auto">
                  <img src={img8} alt="" />
                </div>
                <p>Phones</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="w-[100px] h-[100px] border-1 flex items-center justify-center">
              <div className="gera">
                <div className="w-[50px] h-[50px] m-auto">
                  <img src={img9} alt="" />
                </div>
                <p>Phones</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="w-[100px] h-[100px] border-1 flex items-center justify-center">
              <div className="gera">
                <div className="w-[50px] h-[50px] m-auto">
                  <img src={img10} alt="" />
                </div>
                <p>Phones</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="w-[100px] h-[100px] border-1 flex items-center justify-center">
              <div className="gera">
                <div className="w-[50px] h-[50px] m-auto">
                  <img src={img11} alt="" />
                </div>
                <p>Phones</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="w-[100px] h-[100px] border-1 flex items-center justify-center">
              <div className="gera">
                <div className="w-[50px] h-[50px] m-auto">
                  <img src={img12} alt="" />
                </div>
                <p>Phones</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex items-center gap-[10px] w-[90%] m-auto mt-[-200px]">
        <div className="w-[20px] h-[30px] bg-amber-600 border-0 rounded-[5px]"></div>
        <p className="text-amber-600 text-[30px]">This month</p>
      </div>
      <div className="flex items-center justify-between w-[90%] m-auto">
        <p className="text-[40px]">Best Selling Products</p>
        <Link to="/product">
          <button className="w-[100px] h-[40px] rounded-xl bg-[#DB4444] text-white">
            View All
          </button>
        </Link>
      </div>
      <div className="text-center w-[90%] m-auto md:flex justify-around items-center flex-wrap">
        {data.map((el) => {
          cnt++;
          if (cnt <= 4) {
            return (
              <div className="card">
                <div className="bg-white border rounded-xl shadow-md overflow-hidden transition-transform w-[90%] h-[350px] hover:scale-105 duration-300">
                  <div className="bg-[#F5F5F5] p-4 relative">
                    <img
                      className="w-full h-[200px] object-contain"
                      src={`${API}/images/${el.image}`}
                      alt=""
                    />
                    <div className="absolute top-4 right-4 space-y-2">
                      <button onClick={() => info(el.id)}>
                        <img className="w-6 h-6" src={img6} alt="View" />
                      </button>
                      <button onClick={() => dispach(addToWishlist(el))}>
                        <img className="w-6 h-6" src={img5} alt="Wishlist" />
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h2 className="text-lg font-semibold">{el.productName}</h2>
                    <div className="flex justify-between items-center mt-2">
                      <p className="text-[#DB4444] font-bold text-md">
                        ${el.price}
                      </p>
                      <img className="w-32 h-6" src={img14} alt="Rating" />
                    </div>
                    <button
                      onClick={() => dispach(addToCart(el.id))}
                      className="addtocart"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
      <div className="w-[80%] m-auto h-[680px] md:h-[450px] bg-black md:flex justify-around p-[50px] mt-[50px]">
        <div className="">
          <p className="text-green-500">Categories</p>
          <br />
          <p className="text-white text-[40px]">
            Enhance Your <br /> Music Experience
          </p>
          <br />
          <div className="flex items-center justify-around gap-[20px]">
            <div className="w-[100px] h-[100px] bg-white rounded-[50px] flex items-center justify-around text-center flex-wrap">
              <div className="">
                <p>23</p>
                <p>Hours</p>
              </div>
            </div>
            <div className="w-[100px] h-[100px] bg-white rounded-[50px] flex items-center justify-center text-center">
              <div className="">
                <p>23</p>
                <p>Hours</p>
              </div>
            </div>
            <div className="w-[100px] h-[100px] bg-white rounded-[50px] flex items-center justify-center text-center">
              <div className="">
                <p>23</p>
                <p>Hours</p>
              </div>
            </div>
            <div className="w-[100px] h-[100px] bg-white rounded-[50px] flex items-center justify-center text-center">
              <div className="">
                <p>23</p>
                <p>Hours</p>
              </div>
            </div>
          </div>
          <br />
          <button className="w-[150px] h-[50px] bg-[#00FF66] border-0 rounded-[20px] text-black">
            Buy Now!
          </button>
        </div>
        <img src={img13} alt="" />
      </div>
      <div className="">
        <div className="flex items-center justify-between w-[90%] m-auto">
          <p className="text-[40px]">Best Selling Products</p>
          <Link to="/product">
            <button className="w-[100px] h-[40px] rounded-xl bg-[#DB4444] text-white">
              View All
            </button>
          </Link>
        </div>
        <div className="w-[90%] m-auto md:flex gap-[50px] justify-around items-center flex-wrap">
          {data.map((el) => {
            res++;
            if (res <= 8) {
              return (
                <div className="card">
                  <div className="bg-white border rounded-xl shadow-md overflow-hidden transition-transform w-[90%] h-[350px] hover:scale-105 duration-300">
                    <div className="bg-[#F5F5F5] p-4 relative">
                      <img
                        className="w-full h-[200px] object-contain"
                        src={`${API}/images/${el.image}`}
                        alt=""
                      />
                      <div className="absolute top-4 right-4 space-y-2">
                        <button onClick={() => info(el.id)}>
                          <img className="w-6 h-6" src={img6} alt="View" />
                        </button>
                        <button onClick={() => dispach(addToWishlist(el))}>
                          <img className="w-6 h-6" src={img5} alt="Wishlist" />
                        </button>
                      </div>
                    </div>
                    <div className="p-4">
                      <h2 className="text-lg font-semibold">
                        {el.productName}
                      </h2>
                      <div className="flex justify-between items-center mt-2">
                        <p className="text-[#DB4444] font-bold text-md">
                          ${el.price}
                        </p>
                        <img className="w-32 h-6" src={img14} alt="Rating" />
                      </div>
                      <button
                        onClick={() => dispach(addToCart(el.id))}
                        className="addtocart"
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
      <img className="w-[80%] m-auto" src={img15} alt="" />
    </div>
  );
};

export default Home;
