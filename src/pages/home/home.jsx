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
} from "../../reducers/counterSlice";
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
  }, []);

  return (
    <div>
      <div className="md:flex justify-around p-[20px]">
        <div className="">
          <p className="text-[20px]">Woman’s Fashion</p>
          <br />
          <p className="text-[20px]">Men’s Fashion</p>
          <br />
          <p className="text-[20px]">Electronics</p>
          <br />
          <p className="text-[20px]">Home & Lifestyle</p>
          <br />
          <p className="text-[20px]">Medicine</p>
          <br />
          <p className="text-[20px]">Sports & Outdoor</p>
          <br />
          <p className="text-[20px]">Baby’s & Toys</p>
          <br />
          <p className="text-[20px]">Groceries & Pets</p>
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
              <div className="w-[90%] h-[400px]">
                <img className="w-[] rounded-4xl" src={img1} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="w-[90%] h-[400px]">
                <img className=" rounded-4xl " src={img2} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[90%] h-[400px]">
                <img className="" src={img3} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[90%] h-[400px]">
                <img className="rounded-4xl " src={img4} alt="" />
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
          <div className="mt-[-600px] flex flex-wrap justify-around">
            {data.map((elem) => {
              return (
                <SwiperSlide className="card" key={elem.id}>
                  <div key={elem.id} className="w-[300px] h-[350px] ">
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
          <Link to="/product">
            <div className="w-[20%] m-auto mb-[50px]">
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
              <div className="card" key={el.id}>
                <div className="h-[400px]">
                  <div key={el.id}>
                    <div className="bg-[#F5F5F5] w-[280px] h-[240px] p-[20px] ">
                      <div className="flex">
                        <img
                          className="w-[200px] h-[200px]"
                          src={`${API}/images/${el.image}`}
                          alt=""
                        />
                        <div className="w-[50px] h-[50px] mt-[-20px]">
                          <img onClick={() => info(el.id)} src={img5} alt="" />
                          <img src={img6} alt="" />
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => dispach(addToCart(el.id))}
                      className="addtocart"
                    >
                      Add To Cart
                    </button>
                    <h1>{el.productName}</h1>
                    <div className="flex justify-between items-center">
                      <p>{el.price}</p>
                      <img src={img14} alt="" />
                    </div>
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
                <div className="card" key={el.id}>
                  <div className="h-[400px]">
                    <div key={el.id}>
                      <div className="bg-[#F5F5F5] w-[280px] h-[240px] p-[20px] ">
                        <div className="flex">
                          <img
                            className="w-[200px] h-[200px]"
                            src={`${API}/images/${el.image}`}
                            alt=""
                          />
                          <div className="w-[50px] h-[50px] mt-[-20px]">
                            <img
                              onClick={() => info(el.id)}
                              src={img5}
                              alt=""
                            />
                            <img src={img6} alt="" />
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => dispach(addToCart(el.id))}
                        className="addtocart"
                      >
                        Add To Cart
                      </button>
                      <h1>{el.productName}</h1>
                      <div className="flex justify-between items-center">
                        <p>{el.price}</p>
                        <img src={img14} alt="" />
                      </div>
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
