import React from 'react'
import img2 from "../images/icons-mail.png";
import img1 from "../images/icons-phone.png";
const Contact = () => {
  return (
    <div>
      <div className="md:flex justify-around">
        <div className="shadow-2xl w-[90%] m-auto md:w-[30%] p-[50px]">
            <div className="p-[20px] border-b w-[400px]">
                <div className="flex items-center gap-[10px]">
                    <img src={img1} alt="" />
                    <p className='text-[20px]'>Call To Us</p>
                </div>
                <p>We are available 24/7, 7 days a week.</p>
                <p>Phone: +8801611112222</p>
            </div>
            <div className="p-[20px] border-b w-[400px]">
                <div className="flex items-center gap-[10px]">
                    <img src={img2} alt="" />
                    <p className='text-[20px]'>Write To US</p>
                </div>
                <p>Fill out our form and we will contact you <br />
                     within 24 hours.</p>
                <p>Emails: customer@exclusive.com</p>
                <p>Phone: +8801611112222</p>
            </div>
        </div>
        <div className="w-[90%] m-auto md:w-[60%] shadow-2xl p-[50px]">
            <div className="md:flex m-[20px]">
                <input type="text" placeholder='Name' className='w-[250px] h-[40px] p-[10px] border-1 border-black'/>
                <input type="text" placeholder='Email' className='w-[250px] h-[40px] p-[10px] border-1 border-black'/>
                <input type="text" placeholder='Phone' className='w-[250px] h-[40px] p-[10px] border-1 border-black'/>
            </div>
            <br />
            <br />
            <input type="text" className='border w-[90%] h-[200px] p-[20px]' placeholder='Your Massage'/>
            <br />
            <br />
            <button className='w-[200px] m-auto mb-[50px] h-[50px] rounded-xl bg-[#DB4444] text-white'>Send Massage</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
