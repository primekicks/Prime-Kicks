"use client";
import LoginAnimation from "@/animations/anim/LoginAnimation";
import ColorfulFB from "@/ui/ColorfulFB";
import ColorfulGoogle from "@/ui/ColorfulGoogle";
import Facebook from "@/ui/Facebook";
import Instagram from "@/ui/Instagram";
import LinkedIn from "@/ui/LinkedIn";
import Lock from "@/ui/Lock";
import LockOpen from "@/ui/LockOpen";
import Mail from "@/ui/Mail";
import Phone from "@/ui/Phone";
import Twitter from "@/ui/Twiter";
import Link from "next/link";
import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";

const Login = () => {
  const [password, setPassword] = useState(true);
  return (
    <main className="w-full flex h-screen bg-black ">
      <section className="shadow-lg sm:w-[500px] bg-white w-full h-full flex flex-col justify-center items-center gap-5 sm:gap-4">
        <span className="flex justify-center flex-col">
          <img src="/logo.png" className="h-[80px]" />
          <p className="pt-[10px] text-xl text-gray-500">
            Login to your account
          </p>
        </span>

        <form className="px-[0px]">
          <div className="flex mt-[30px]">
            <input
              className="h-[50px] sm:h-[40px] sm:w-[250px] w-[300px]  bg-gray-200 rounded-l-lg px-[10px] "
              type="email"
              placeholder="Enter your mail"
            />
            <span className="flex justify-center items-center h-[50px] sm:h-[40px] w-[50px] sm:w-[40px] bg-black rounded-r-lg">
              <Mail />
            </span>
          </div>

          <div className="flex mt-[30px]">
            <input
              className="h-[50px] sm:h-[40px] sm:w-[250px] w-[300px] bg-gray-200 rounded-l-lg px-[10px]"
              type={password ? "password" : "text"}
              placeholder="Enter your password"
            />
            <button
              onClick={(e) => {
                setPassword(!password);
              }}
              className="cursor-pointer flex justify-center items-center h-[50px] sm:h-[40px] w-[50px] sm:w-[40px] bg-black rounded-r-lg"
            >
              {password ? <Lock /> : <LockOpen />}
            </button>
          </div>
          <Link
            href={"#"}
            className="underline text-blue-800 float-end mt-[10px]"
          >
            forgot password?
          </Link>

          <button className="w-full bg-black text-center text-white sm:h-[40px] h-[50px] rounded-lg my-[20px] font-bold">
            Log In
          </button>

          <p className="flex justify-center items-center pb-[15px]">
            Or Sign In with
          </p>

          <div className="flex gap-5 justify-center">
            <button className="w-[100%] gap-5 shadow-sm h-[28px] rounded-full flex items-center">
              <ColorfulFB />
              <p>Facebook</p>
            </button>
            <button className="w-[100%] gap-5 shadow-sm h-[28px] rounded-full flex items-center">
              <ColorfulGoogle />
              <p>Google</p>
            </button>
          </div>

          <span className="flex items-center mt-4">
            <hr className="w-full  border-gray-300" />
            <span className="px-2 text-gray-400">OR</span>
            <hr className="w-full border-gray-300" />
          </span>

          <button className="w-full border-black border-2 text-center text-black sm:h-[40px] h-[50px] rounded-lg my-[20px] font-bold">
            Sign Up Now
          </button>
        </form>
      </section>
      <section className="hidden w-[100%] bg-[url('/bgg.png')] bg-contain bg-no-repeat bg-center md:flex flex-col justify-center items-center gap-5">
        <TypeAnimation
          sequence={[
            "Sign in for exclusive deals and exciting offers! 🎉",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "2em", display: "inline-block" }}
          repeat={Infinity}
          className="mt-[30px] text-white tracking-wide"
        />

        <LoginAnimation />

        <span className="w-full pb-[10px]">
          <div className="flex items-center justify-between w-full px-[20px] text-white">
            <p className="flex items-center gap-2">
              <Mail />
              primekicks27@gmail.com
            </p>
            <div>
              <p className="text-white">Follow us on :</p>
              <ul className="flex space-x-5 pb-[20px] pt-[10px]">
                <li>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium shadow-sm h-9 w-9 group brightness-125 transition hover:bg-black text-black bg-white hover:text-white"
                  >
                    <Facebook />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium shadow-sm h-9 w-9 group brightness-125 transition hover:bg-black text-black bg-white hover:text-white"
                  >
                    <Instagram />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium shadow-sm h-9 w-9 group brightness-125 transition hover:bg-black text-black bg-white hover:text-white"
                  >
                    <Twitter />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium shadow-sm h-9 w-9 group brightness-125 transition hover:bg-black text-black bg-white hover:text-white"
                  >
                    <LinkedIn />
                  </Link>
                </li>
              </ul>
            </div>
            <p className="flex items-center gap-2">
              <Phone />
              +977 9764859910
            </p>
          </div>
        </span>
      </section>
    </main>
  );
};

export default Login;
