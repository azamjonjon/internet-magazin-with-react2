import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import reducer, {
  API,
  decrement,
  deleteAll,
  deleteProduct,
  getCart,
  increament,
  Price,
} from "../../reducers/project";
import img1 from "../images/icon-cancel.png";
import { Link } from "react-router";
const Cart = () => {
  const getcart = useSelector((state) => state.counter.data);
  const cartPrice = useSelector((state) => state.counter.price);
  console.log(getcart);
  console.log(cartPrice);

  let dispach = useDispatch();

  useEffect(() => {
    dispach(getCart());
    dispach(Price());
  }, []);
  return (
    <div>
      <table className="w-[90%] m-auto text-start">
        <thead>
          <tr className="flex justify-around text-start">
            <th className="text-start w-[400px]">Product</th>
            <th className="text-start w-[300px]">Price </th>
            <th className="text-start">Quantity</th>
            <th className="text-start">Subtotal</th>
          </tr>
        </thead>
        <tbody className="">
          {getcart.map((elem) => {
            return (
              <div className="">
                <tr className="border-b-1 h-[80px] flex items-center justify-around">
                  <td className="flex items-center gap-[20px] w-[400px]">
                    <img
                      src={`${API}/images/${elem.product.image}`}
                      alt={elem.product.productName}
                      className="w-16 h-16 object-cover rounded-md border"
                    />
                    <p>{elem.product.productName}</p>
                  </td>
                  <td className="w-[300px]">
                    <p>${elem.product.price}</p>
                  </td>
                  <td>
                    <div className="flex items-center justify-around">
                      <button onClick={() => dispach(increament(elem.id))}>
                        +
                      </button>
                      <p>{elem.quantity}</p>
                      <button onClick={() => dispach(decrement(elem.id))}>
                        -
                      </button>
                    </div>
                  </td>
                  <td className="flex items-center gap-[20px]">
                    <span>
                      ${Math.floor(elem.quantity * elem.product.price)}
                    </span>
                    <button onClick={() => dispach(deleteProduct(elem.id))}>
                      {" "}
                      <img src={img1} alt="" />{" "}
                    </button>
                  </td>
                </tr>
              </div>
            );
          })}
        </tbody>
      </table>
      <div className="w-[90%] m-auto mt-[50px]">
        <div className="flex justify-between">
          <button>Return To Shop</button>
          <button
            className="w-[150px] border-red-500 border-2 h-[50px]"
            onClick={() => dispach(deleteAll())}
          >
            Remove All
          </button>
        </div>
      </div>
      <div className="flex justify-end items-end m-[70px]">
        <div className="w-[400px] h-[320px] border-2 p-[10px]">
          <div className="">
            <p className="text-[35px]">Cart Total</p>
            <br />
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
            <Link to="/checkout">
              <button className="bg-[#DB4444] text-white w-[70%] ml-[50px] h-[50px] rounded-[10px]">
                Procees to checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
