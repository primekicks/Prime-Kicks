"use client";

import React from "react";
import dynamic from "next/dynamic";
import animationData from "../json/ForAuthAnimation.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const LoginAnimation = ({ width = 600, height = 600, loop = false }) => {
  return (
    <div style={{ width, height }}>
      <Lottie animationData={animationData} loop={loop} />
    </div>
  );
};

export default LoginAnimation;
