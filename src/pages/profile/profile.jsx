import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  EditProfile,
  getById,
  getForProfile,
} from "../../reducers/counterSlice";

const Profile = () => {
  const user = useSelector((state) => state.counter.userProfile);
  console.log(user);
  
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [dob, setdob] = useState("");
  const [image, setimage] = useState("");
  let dispach = useDispatch();
  function editUser(e) {
    e.preventDefault();
    let form = new FormData();
    form.append("Image", image);
    form.append("FirstName", firstName);
    form.append("LastName", lastName);
    form.append("Email", email);
    form.append("PhoneNumber", phoneNumber);
    form.append("Dob", dob);
    dispach(EditProfile(form));
  }

  useEffect(() => {
    if (user) {
      setfirstName(user.firstName || "");
      setlastName(user.lastName || "");
      setemail(user.email || "");
      setphoneNumber(user.phoneNumber || "");
      setdob(user.dob || "");
      setimage(user.image || "");
    }
  }, [user]);

  useEffect(() => {
    dispach(getForProfile());
  }, []);
  return (
    <div className="flex justify-around">
      <div className="">
        <p className="text-[20px]">Manage My Account</p>
        <div className="ml-[20px]">
          <p className="text-red-500">My Profile</p>
          <p className="text-gray-500">Address Book</p>
          <p className="text-gray-500">My Payment Options</p>
        </div>
        <p className="text-[20px]">My Orders</p>

        <div className="ml-[20px]">
          <p className="text-gray-500">My Returns</p>
          <p className="text-gray-500">My Cancellations</p>
        </div>
        <p className="text-[20px]">My WishList</p>
      </div>
      <div className="w-[60%] border-2 p-[50px]">
        <p className="text-[30px] text-red-500">Profile</p>
        <br />
        <form onSubmit={editUser}>
          <div className="">
            <input
              value={firstName}
              type="text"
              placeholder="FirstName"
              className="w-[300px] h-[40px] p-[10px] border-1"
              onChange={(e) => setfirstName(e.target.value)}
            />
            <input
              value={lastName}
              type="text"
              placeholder="LastName"
              className="w-[300px] h-[40px] p-[10px] border-1"
              onChange={(e) => setlastName(e.target.value)}
            />
          </div>
          <br />
          <div className="">
            <input
              value={phoneNumber}
              type="text"
              placeholder="FirstName"
              className="w-[300px] h-[40px] p-[10px] border-1"
              onChange={(e) => setphoneNumber(e.target.value)}
            />
            <input
              value={email}
              type="text"
              placeholder="LastName"
              className="w-[300px] h-[40px] p-[10px] border-1"
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <br />
          <div className="">
            <input
              value={dob}
              type="text"
              placeholder="FirstName"
              className="w-[300px] h-[40px] p-[10px] border-1"
              onChange={(e) => setdob(e.target.value)}
            />
            <input
              type="file"
              placeholder="LastName"
              className="w-[300px] h-[40px] p-[10px] border-1"
              onChange={(e) => setimage(e.target.files[0])}
            />
          </div>
          <br />
          <button
            type="submit"
            className="w-[150px] h-[40px] bg-red-400 border-0 text-white"
            onClick={() => dispach(editUser())}
          >
            Save changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
