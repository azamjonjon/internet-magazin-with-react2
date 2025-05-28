import React from "react";
import img1 from "../images/Side Image.png";
import img2 from "../images/Services.png";
import img3 from "../images/Frame 874.png";
import img4 from "../images/Frame 877.png";
import "./about.css"
const About = () => {
  return (
    <div>
      <div className="w-[90%] m-auto md:flex items-center justify-around">
        <div className="text-start md:w-[40%]">
          <p className="text-[50px]">Our Story</p>
          <br />
          <p className="text-[20px]">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.{" "}
          </p>
          <br />
          <p className="text-[15px]">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <img src={img1} alt="" />
      </div>
      <br />
      <div className="flex justify-around flex-wrap mt-[50px]">
        <div className="gaga">
          <div className="w-[200px] h-[200px] border-1 flex items-center justify-center text-center">
            <div className="">
              <img className="pl-[30px]" src={img2} alt="" />
              <p className="text-[30px]">10.5k </p>
              <p>Sallers active our site</p>
            </div>
          </div>
        </div>
        <div className="gaga">
          <div className="w-[200px] h-[200px] border-1 flex items-center justify-center text-center">
            <div className="">
              <img className="pl-[30px]" src={img2} alt="" />
              <p className="text-[30px]">10.5k </p>
              <p>Sallers active our site</p>
            </div>
          </div>
        </div>
        <div className="gaga">
          <div className="w-[200px] h-[200px] border-1 flex items-center justify-center text-center">
            <div className="">
              <img className="pl-[30px]" src={img2} alt="" />
              <p className="text-[30px]">10.5k </p>
              <p>Sallers active our site</p>
            </div>
          </div>
        </div>
        <div className="gaga">
          <div className="w-[200px] h-[200px] border-1 flex items-center justify-center text-center">
            <div className="">
              <img className="pl-[30px]" src={img2} alt="" />
              <p className="text-[30px]">10.5k </p>
              <p>Sallers active our site</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-around mt-[50px] flex-wrap">
        <div className="w-[400px] ">
          <img src={img3} alt="" />
          <br />
          <p className="text-[30px]">Tom Cruise</p>
          <p>Founder & Chairman</p>
          <img src={img4} alt="" />
        </div>
        <div className="w-[400px] ">
          <img src={img3} alt="" />
          <br />
          <p className="text-[30px]">Tom Cruise</p>
          <p>Founder & Chairman</p>
          <img src={img4} alt="" />
        </div>
        <div className="w-[400px] ">
          <img src={img3} alt="" />
          <br />
          <p className="text-[30px]">Tom Cruise</p>
          <p>Founder & Chairman</p>
          <img src={img4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
