import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router";
import { API } from "../../reducers/counterSlice";
const SignUp = () => {
  let dispach = useDispatch();
  const [userName, setUserName] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const register = createAsyncThunk("counter/register", async () => {
    let newUser = {
      userName: userName,
      phoneNumber: phoneNumber,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };
    try {
      let { data } = await axios.post(`${API}/Account/register`, newUser);
      return data;
    } catch (error) {
      console.error(error);
    }
  });
  return (
    <div>
      <div className="w-[40%] m-auto mt-[50px]">
        <input
          className="w-[90%] h-[40px] m-auto border-2 rounded-xl p-[10px]"
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="addName"
        />
        <br />
        <br />
        <input
          className="w-[90%] h-[40px] m-auto border-2 rounded-xl p-[10px]"
          type="text mt-[10px]"
          value={phoneNumber}
          onChange={(e) => setphoneNumber(e.target.value)}
          placeholder="addphoneNumber"
        />
        <br />
        <br />
        <input
          className="w-[90%] h-[40px] m-auto border-2 rounded-xl p-[10px]"
          type="text"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          placeholder="addemail"
        />
        <br />
        <br />
        <input
          className="w-[90%] h-[40px] m-auto border-2 rounded-xl p-[10px]"
          type="text"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          placeholder="addpassword"
        />
        <br />
        <br />
        <input
          className="w-[90%] h-[40px] m-auto border-2 rounded-xl p-[10px]"
          type="text"
          value={confirmPassword}
          onChange={(e) => setconfirmPassword(e.target.value)}
          placeholder="addconfirmPassword"
        />
        <br />
        <br />
        <button
          onClick={() => dispach(register(),alert("вы успешно создали аккаунт"))}
          className="w-[90%] h-[40px] bg-amber-600 text-white rounded-2xl"
        >
          Create Account
        </button>
        <NavLink to="/login">
          <p>Login</p>
        </NavLink>
      </div>
    </div>
  );
};

export default SignUp;
