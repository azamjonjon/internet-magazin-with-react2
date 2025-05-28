import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
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
import axios from "axios";
import "./product.css";
import {
  addToCart,
  addToWishlist,
  filterData,
  get,
  getById,
} from "../../reducers/project";
import FilterProduct from "../../components/filterProduct.jsx/filterProduct";
const Product = () => {
  const data = useSelector((state) => state.counter.users);

  const API = "https://store-api.softclub.tj";
  const [min, setMin] = useState("");
  const [max, setmax] = useState("");

  async function Apply() {
    try {
      let { data: data1 } = await axios.get(
        API + `/Product/get-products?MinPrice=${min}&MaxPrice=${max}`
      );
      dispach(filterData(data1.data.products));
      return data1;
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    dispach(get());
  }, []);

  let navigation = useNavigate();
  let dispach = useDispatch();

  function info(id) {
    dispach(getById({ id, navigation }));
  }

  function info(id) {
    dispach(getById({ id, navigation }));
  }
  return (
    <div className=" md:flex items-start gap-40px  ">
      <div className="">
        <FilterProduct />
      </div>
      <div className="w-[90%] m-auto flex flex-wrap justify-around">
        <div className="flex flex-wrap">
          {data.map((elem) => {
            return (
              <div className="card">
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
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;
