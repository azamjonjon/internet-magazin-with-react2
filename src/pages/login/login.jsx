import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { API } from "../../reducers/project";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setpasswordr] = useState("");
  let navigation = useNavigate();

  async function login() {
    try {
      let newUser = {
        userName: userName,
        password: password,
      };
      let { data } = await axios.post(`${API}/Account/login`, newUser);
      localStorage.setItem("token", data.data);
      navigation("/");
      return data;
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <div className="  flex justify-center items-center">
        <div className="w-[400px]">
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
            value={password}
            onChange={(e) => setpasswordr(e.target.value)}
            placeholder="addpassword"
          />
          <br />
          <br />
          <button
            className="w-[90%] m-auto bg-amber-600 border-0 h-[40px] rounded-2xl"
            onClick={() => login(alert("Добро пожаловать"))}
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
