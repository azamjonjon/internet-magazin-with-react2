import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  addToWishlist,
  API,
  decrement,
  get,
  getById,
  increament,
} from "../../reducers/project";
import { useNavigate, useParams } from "react-router";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
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
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const ProductById = () => {
  const data = useSelector((state) => state.counter.users);
  const product = useSelector((state) => state.counter.productById);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    dispatch(getById({ id, navigate }));
    dispatch(get());
  }, [dispatch, id, navigate]);

  const handleView = (id) => {
    dispatch(getById({ id, navigate }));
  };

  return (
    <div className="p-6">
      <div className="md:flex justify-center items-start gap-10">
        <div className="w-full md:w-1/2">
          <Swiper
            loop
            spaceBetween={10}
            navigate
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="rounded-xl overflow-hidden mb-4"
          >
            {product.images?.map((img) => (
              <SwiperSlide key={img.id}>
                <img
                  src={`${API}/images/${img.images}`}
                  className="w-full h-[500px] object-cover rounded-xl"
                  alt="product"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            onSwiper={setThumbsSwiper}
            loop
            spaceBetween={10}
            slidesPerView={5}
            freeMode
            watchSlidesProgress
            className="rounded-md overflow-hidden"
          >
            {product.images?.map((img) => (
              <SwiperSlide key={img.id}>
                <img
                  src={`${API}/images/${img.images}`}
                  className="h-[80px] object-cover cursor-pointer rounded"
                  alt="thumb"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-3xl font-semibold">{product.productName}</h1>
          <img src={img15} alt="rating" />
          <h2 className="text-2xl text-red-600 font-bold">${product.price}</h2>
          <p className="border-b-2 border-gray-300 pb-4 text-gray-700">
            {product.description}
          </p>

          <div className="flex gap-4 items-center">
            <p className="text-lg font-medium">Colors:</p>
            <div className="w-8 h-8 rounded-full bg-[#A0BCE0] border"></div>
            <div className="w-8 h-8 rounded-full bg-[#E07575] border"></div>
          </div>

          <div className="flex gap-4 items-center">
            <p className="text-lg font-medium">Size:</p>
            {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
              <div
                key={size}
                className={`w-10 h-10 flex items-center justify-center border rounded-md font-medium ${
                  size === 'M' ? 'bg-red-600 text-white' : ''
                }`}
              >
                {size}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4 mt-6">
            <button
              onClick={() => dispatch(decrement())}
              className="w-10 h-10 border text-2xl rounded-lg hover:bg-gray-200"
            >
              -
            </button>
            <span className="text-xl font-semibold">{product.quantity}</span>
            <button
              onClick={() => dispatch(increament())}
              className="w-10 h-10 bg-red-600 text-white text-2xl rounded-lg hover:bg-red-700"
            >
              +
            </button>
            <button
              onClick={() => dispatch(addToCart())}
              className="ml-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="w-full mt-20">
        <Swiper spaceBetween={10} freeMode>
          <div className="flex flex-wrap gap-6 justify-center">
            {data.map((elem) => (
              <SwiperSlide key={elem.id} className="max-w-xs">
                <div className="bg-gray-100 rounded-xl p-4 shadow hover:shadow-md transition">
                  <div className="relative">
                    <img
                      className="w-full h-48 object-cover rounded"
                      src={`${API}/images/${elem.image}`}
                      alt={elem.productName}
                    />
                    <div className="absolute top-2 right-2 flex flex-col gap-2">
                      <button onClick={() => handleView(elem.id)}>
                        <img src={img6} alt="view" />
                      </button>
                      <button onClick={() => dispatch(addToWishlist(elem))}>
                        <img src={img5} alt="wishlist" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => dispatch(addToCart(elem.id))}
                    className="w-full mt-4 bg-red-600 text-white py-2 rounded hover:bg-red-700"
                  >
                    Add to Cart
                  </button>
                  <div className="mt-2 text-center">
                    <h3 className="text-lg font-semibold">{elem.productName}</h3>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-gray-800">${elem.price}</span>
                      <img src={img14} alt="rating" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default ProductById;
