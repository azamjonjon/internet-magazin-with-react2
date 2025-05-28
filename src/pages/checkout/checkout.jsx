import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { API, deleteAll } from "../../reducers/counterSlice";
import img1 from "../images/Frame 834.png";
import { Link } from "react-router";
const Checkout = () => {
  const getcart = useSelector((state) => state.counter.data);
  const cartPrice = useSelector((state) => state.counter.price);
    let dispach = useDispatch();

  return (
    <div>
      <div className="flex justify-around items-center ">
        <div className="w-[30%]">
          <p className="text-[40px]">Billing Details</p>
          <div className="w-[100%] shadow-2xl text-center p-[30px]">
            <input
              className="w-[80%] m-auto border-1 h-[40px] p-[10px] rounded-[5px] mt-[10px]"
              type="text"
              placeholder="First name"
            />
            <input
              className="w-[80%] m-auto border-1 h-[40px] p-[10px] rounded-[5px] mt-[10px]"
              type="text"
              placeholder="First name"
            />
            <input
              className="w-[80%] m-auto border-1 h-[40px] p-[10px] rounded-[5px] mt-[10px]"
              type="text"
              placeholder="First name"
            />
            <input
              className="w-[80%] m-auto border-1 h-[40px] p-[10px] rounded-[5px] mt-[10px]"
              type="text"
              placeholder="First name"
            />
            <input
              className="w-[80%] m-auto border-1 h-[40px] p-[10px] rounded-[5px] mt-[10px]"
              type="text"
              placeholder="First name"
            />
            <input
              className="w-[80%] m-auto border-1 h-[40px] p-[10px] rounded-[5px] mt-[10px]"
              type="text"
              placeholder="First name"
            />
            <input
              className="w-[80%] m-auto border-1 h-[40px] p-[10px] rounded-[5px] mt-[10px]"
              type="text"
              placeholder="First name"
            />
            <br />
            <br />
            <div className="flex gap-[5px]">
              <input className="" type="checkbox" />
              <p>Save this information for faster check-out next time</p>
            </div>
          </div>
        </div>
        <div className="w-[40%] mt-[80px]">
          <div className="w-[100%]">
            {getcart.map((elem) => {
              return (
                <div className="w-[70%] flex justify-between items-center">
                  <div className="flex gap-[20px] items-center">
                    <img
                      src={`${API}/images/${elem.product.image}`}
                      alt={elem.product.productName}
                      className="w-16 h-16 object-cover rounded-md border"
                    />
                    <p>{elem.product.productName}</p>
                  </div>
                  <p>${elem.product.price}</p>
                </div>
              );
            })}
          </div>
          <div className="flex items-end ">
            <div className="w-[400px] h-[320px] p-[10px]">
              <div className="">
                <div className="flex justify-between text-[20px]">
                  <p>Subtotal:</p>
                  <p>${cartPrice}</p>
                </div>
                <br />
                <div className="flex justify-between text-[20px]">
                  <p>Shipping:</p>
                  <p>Free</p>
                </div>
                <br />
                <div className="w-[100%] border-b"></div>
                <div className="flex justify-between text-[25px]">
                  <p>Total:</p>
                  <p>${cartPrice}</p>
                </div>
                <br />
              </div>
            </div>
          </div>
          <div className="mt-[-150px]">
            <div className="flex justify-start gap-[150px]">
              <div className="flex gap-[5px]">
                <input type="radio" value={0} />
                <p>Bank</p>
              </div>
              <img src={img1} alt="" />
            </div>
            <div className="flex gap-[5px]">
              <input type="radio" value={2} />
              <p>Cash on delivery</p>
            </div>
            <div className="flex gap-[20px] mt-[10px]">
              <input
                type="text"
                className="w-[200px] h-[40px] p-[10px] border-1"
                placeholder="Coupon Code"
              />
              <button className="w-[150px] h-[40px] rounded-[5px] border-[#DB4444] border-1 text-[#DB4444]">
                Apply
              </button>
            </div>
            <Link to="/">
              <button onClick={()=>dispach(deleteAll(),alert("Ваш заказ уже отправлен по вашему адрессу"))} className="w-[150px] h-[40px] border-0 bg-[#DB4444] text-white rounded-[5px] mt-[20px]">Place Order</button>
              
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
