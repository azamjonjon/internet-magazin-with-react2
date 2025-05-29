import { Link, Outlet, useLocation } from "react-router";
import img1 from "../images/Group 1116606595.png";
import img2 from "../images/Cart1.png";
import img3 from "../images/user (1).png";
import img4 from "../images/Wishlist.png";
import img5 from "../images/Frame 741.png";
import img6 from "../images/Vector (6).png";
import img7 from "../images/icon-mallbag.png";
import img8 from "../images/user (2).png";
import img9 from "../images/material-symbols-light_menu.png";
import "../../app/styles/global.css";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
const Layout = () => {
  const getcart = useSelector((state) => state.counter.data);
  let wishlist = JSON.parse(localStorage.getItem("wishlist"));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl1, setAnchorEl1] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleClose1 = () => {
    setAnchorEl1(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const open1 = Boolean(anchorEl1);
  const id1 = open ? "simple-popover" : undefined;

  function LogOutFun() {
    localStorage.removeItem("token");
    alert("вы вышли из аккаунта");
  }
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const location = useLocation();

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"));
  }, [location]);
  return (
    <div>
      <header className="flex justify-around items-center m-[20px]">
        <img
          aria-describedby={id1}
          variant="contained"
          onClick={handleClick1}
          className="block md:hidden"
          src={img9}
          alt=""
        />
        <Popover
          id={id1}
          open={open1}
          anchorEl={anchorEl1}
          onClose={handleClose1}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Typography className="bg-[gray] text-white" sx={{ p: 2 }}>
            <Link to="/">
              <p>Home</p>
            </Link>
            <Link to="/about">
              <p>About</p>
            </Link>
            <Link to="/contact">
              <p>Contact</p>
            </Link>
            <Link to="/signup">
              <p>Sign Up</p>
            </Link>
          </Typography>
        </Popover>
        <img src={img1} alt="" />
        <div className="hidden md:flex md:relative gap-[20px]">
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="/about">
            <p>About</p>
          </Link>
          <Link to="/contact">
            <p>Contact</p>
          </Link>
          <Link to="/signup">
            <p>Sign Up</p>
          </Link>
        </div>
        <div className="flex justify-around items-center">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="hidden bg-gray-300 border-gray-500 h-[40px] w-[250px] p-[20px] md:block"
          />
          {isLoggedIn ? (
            <>
              <Link to="/wishlist">
                <div className="flex text-center">
                  <img src={img4} alt="" />
                  <p className="ml-[-10px] mt-[-10px] w-[20px] h-[20px] rounded-2xl bg-amber-600 text-white">
                    {wishlist?.length ?? 0}
                  </p>
                </div>
              </Link>

              <Link to="/cart">
                <div className="flex text-center">
                  <img src={img2} alt="" />
                  <p className="ml-[-10px] mt-[-10px] w-[20px] h-[20px] rounded-2xl bg-amber-600 text-white">
                    {getcart?.length ?? 0}
                  </p>
                </div>
              </Link>
            </>
          ) : (
            <Link to="/login">
              <button>Login</button>
            </Link>
          )}

          <div className="">
            <img
              aria-describedby={id}
              variant="contained"
              onClick={handleClick}
              src={img3}
              alt=""
            />
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <Typography className="bg-[gray] text-white" sx={{ p: 2 }}>
                <Link to="/profile">
                  <button className="flex gap-[10px] m-[10px]">
                    <img src={img8} alt="" />
                    Profile
                  </button>
                </Link>
                <Link to="/checkout">
                  <button className="flex gap-[10px] m-[10px]">
                    <img src={img7} alt="" />
                    My Order
                  </button>
                </Link>
                <Link to="/signup">
                  <button
                    onClick={() => LogOutFun()}
                    className="flex gap-[10px] m-[10px]"
                  >
                    <img src={img6} alt="" />
                    LogOut
                  </button>
                </Link>
              </Typography>
            </Popover>
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="mt-[100px] bg-black text-white py-10 px-4 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div>
            <h2 className="text-lg font-semibold mb-2">Exclusive</h2>
            <p className="mb-2">Subscribe</p>
            <p className="text-sm mb-4">Get 10% off your first order</p>
            <form className="flex border border-gray-600 rounded overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-black text-white px-3 py-2 w-full focus:outline-none"
              />
              <button
                type="submit"
                className="bg-white text-black px-3 py-2 hover:bg-gray-200"
              >
                ➤
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Support</h2>
            <p className="text-sm mb-2">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </p>
            <p className="text-sm mb-2">exclusive@gmail.com</p>
            <p className="text-sm">+88015-88888-9999</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Account</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#">My Account</a>
              </li>
              <li>
                <a href="#">Cart</a>
              </li>
              <li>
                <a href="#">Wishlist</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Quick Link</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms Of Use</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Social</h2>
            <div className="flex space-x-4 mt-2">
              <img src={img5} alt="" />
            </div>
          </div>
        </div>
        <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-800 pt-5">
          © Copyright Rimel 2022. All right reserved
        </div>
      </footer>
    </div>
  );
};

export default Layout;
