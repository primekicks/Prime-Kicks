import Facebook from "@/ui/Facebook";
import Instagram from "@/ui/Instagram";
import LinkedIn from "@/ui/LinkedIn";
import Twitter from "@/ui/Twiter";
import Link from "next/link";
import React from "react";

const socialMedia = [
  {
    icon: <Facebook />,
  },
  {
    icon: <Instagram />,
  },
  {
    icon: <LinkedIn />,
  },
  {
    icon: <Twitter />,
  },
];

const quickLinks = [
  { label: "Shops" },
  { label: "Men" },
  { label: "Casual" },
  { label: "Sale" },
  { label: "Formal" },
  { label: "Luxury" },
  { label: "Sporting & Running" },
  { label: "New Arrivals" },
  { label: "Contact" },
  { label: "New & Seasonal" },
];

const company = [
  { label: "About" },
  { label: "Contact" },
  { label: "Register" },
  { label: "Shops" },
];

const Footer = () => {
  return (
    <footer className="w-[100%] bg-black text-white  ">
      <div className="max-w-[1600px] mx-auto container w-[100%] flex justify-between flex-wrap gap-5 lg:gap-5 sm:py-[30px] sm:px-0 p-[20px] ">
        <div className="w-[100%] sm:w-[50%] md:w-[50%] lg:w-[30%] xl:w-[30%]  xl:p-4 ">
          <h1 className="text-lg font-bold text-green-600 flex items-center">
            <span>
              <Link href="/" className="flex items-center">
                <img
                  src="PRIME.svg"
                  alt=""
                  height={50}
                  width={50}
                  className="rounded-md"
                />
              </Link>
            </span>
          </h1>
          <p className="text-sm py-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
          </p>
          <h1 className=" font-bold">We Accept</h1>

          <div className="flex gap-14 py-3 ">
            <Link href="#">
              <img
                src="/fonepay.png"
                alt=""
                className=" w-[120px] rounded-sm "
              />
            </Link>
            <Link href="#">
              <img src="/esewa.png" alt="" className=" w-[120px] rounded-sm" />
            </Link>
            <Link href="#">
              <img
                src="/khalti.png"
                alt=""
                className=" w-[120px] rounded-sm "
              />
            </Link>
          </div>
        </div>

        <span className="md:w-[50%] lg:w-[12%] xl:w-[20%] sm:w-[45%] w-[42%] xl:p-5  ">
          <h1 className=" font-bold">Quick Links</h1>
          <ul className="py-3 space-y-2 text-sm">
            {quickLinks.map((value, i) => {
              return (
                <li key={i}>
                  <Link href="#">{value.label}</Link>
                </li>
              );
            })}
          </ul>
        </span>
        <span className="md:w-[40%] lg:w-[10%] xl:w-[20%] sm:w-[40%] w-[40%] xl:p-5  ">
          <h1 className="font-bold">Company</h1>
          <ul className="py-3 space-y-2 text-sm">
            {company.map((value, i) => {
              return (
                <li>
                  <Link href="#">{value.label}</Link>
                </li>
              );
            })}
          </ul>
        </span>
        <div className="md:w-[40%] lg:w-[20%] xl:w-[25%] sm:w-[40%] w-[100%] xl:p-5 ">
          <h1 className="font-bold">Newsletter</h1>
          <p className="py-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div
            className="flex gap-3
        "
          >
            <input
              type="text"
              placeholder="Recipient's username"
              className="w-[70%] px-3 py-2  text-white border bg-gray-800 h-10"
            />
            <button className="px-3 bg-green-500 text-white rounded-md h-10 flex items-center justify-center">
              →
            </button>
          </div>

          <h1 className="font-bold py-3">Follow us on </h1>
          <ul className="flex space-x-5">
            {socialMedia.map((value, i) => {
              return (
                <li key={i}>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium shadow-sm h-9 w-9 group brightness-125 transition hover:bg-black text-black bg-white hover:text-white"
                  >
                    {value.icon}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
