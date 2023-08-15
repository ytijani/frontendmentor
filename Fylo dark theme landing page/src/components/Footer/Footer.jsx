import React from "react";
import { FaFacebook, FaTwitter, FaInstagram} from "react-icons/fa"
function Footer() {
  return (
    <section className="bg-[#0c1524] pt-[290px] lg:pt-[200px] pb-[30px]">
      <div className="container">
        <a href="/" className="">
          <img src="/src/assets/images/logo.svg" alt="logo"  className="w-[175px] h-[65px] object-contain pb-[10px]"/>
        </a>
        <div className="text-white grid  grid-cols-1 lg:grid-cols-5  pt-[20px] gap-[30px] ">
          <div className=" flex items-start lg:items-center  gap-[25px] w-[350px] max-w-full  ">
            <img src="/src/assets/images/icon-location.svg" alt="location" />
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div className="element-center  items-start lg:items-center flex-col gap-[30px]">
            <div className="element-center gap-[15px]">
              <img src="/src/assets/images/icon-phone.svg" alt="" />
              <p>+1-543-123-4567</p>
            </div>
            <div className="element-center gap-[10px]">
              <img src="/src/assets/images/icon-email.svg" alt="" />
              <p>example@fylo.com</p>
            </div>
          </div>
          <ul className="element-center items-start lg:items-center flex-col gap-[12px]">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Jobs</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
          <ul className="element-center items-start lg:items-center flex-col gap-[12px]">
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
          </ul>
          <div className=" element-center gap-[12px]">
            <a className="border-[1px] p-[10px] rounded-[50%]" href=""><FaFacebook/></a>
            <a className="border-[1px] p-[10px] rounded-[50%]"  href=""><FaInstagram/></a>
           <a className="border-[1px] p-[10px] rounded-[50%]"  href=""><FaTwitter/></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
