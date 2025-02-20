import Facebook from "@/ui/Facebook";
import Instagram from "@/ui/Instagram";
import Pinterest from "@/ui/Pinterest";
import TikTok from "@/ui/TikTok";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white p-[20px] flex">
      <div className="w-[30%] p-5">
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
          <span className="text-white">PRIME</span>KICKS
        </h1>
        <p className="text-sm py-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
        </p>
        <h1 className="text-lg">We Accept</h1>
        <div className="flex gap-5 py-3 ">
          <Link href="#">
            <img
              src="/fonepay.png"
              alt=""
              className="h-[20px] w-[60px] rounded-sm"
            />
          </Link>
          <Link href="#">
            <img
              src="/esewa.png"
              alt=""
              className="h-[20px] w-[50px] rounded-sm"
            />
          </Link>
          <Link href="#">
            <img
              src="/khalti.png"
              alt=""
              className="h-[20px] w-[50px] rounded-sm "
            />
          </Link>
        </div>
      </div>
      <span className="w-[20%] p-5">
        <h1 className="font-bold">Hosting</h1>
        <ul className="py-3 space-y-2 text-sm">
          <li>Web Hosting</li>
          <li>Cloud Hosting</li>
          <li>CMS Hosting</li>
          <li>WordPress Hosting</li>
          <li>Email Hosting</li>
          <li>VPS Hosting</li>
        </ul>
      </span>
      <span className="w-[20%] p-5">
        <h1 className=" font-bold">Domain</h1>
        <ul className="py-3 space-y-2 text-sm">
          <li>Web Domain</li>
          <li>Cloud Domain</li>
          <li>CMS Domain</li>
          <li>WordPress Domain</li>
          <li>Email Doamin</li>
          <li>VPS Domain</li>
        </ul>
      </span>
      <div className="w-[25%] p-5">
        <h1 className="font-bold">Newsletter</h1>
        <p className="py-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div>
          <input
            type="text"
            placeholder="Recipent's usernsme "
            className="px-3 py-2 rounded-l text-white border border-black-1 "
          ></input>
          <button className="px-3 py-2 bg-green-500 text-white rounded-r">
            →
          </button>
        </div>
        <h1 className="font-bold py-3">Follow us on </h1>
        <ul className="flex space-x-5">
          <li>
            <Link href="#">
              <Facebook />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Instagram />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Pinterest />
            </Link>
          </li>
          <li>
            <Link href="#">
              <TikTok />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
