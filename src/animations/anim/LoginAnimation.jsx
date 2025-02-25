"use client";

import React from "react";
import Lottie from "lottie-react";
import animationData from "../json/ForAuthAnimation.json";

const LoginAnimation = ({ width = 600, height = 600, loop = false }) => {
  return (
    <div style={{ width, height }}>
      <Lottie animationData={animationData} loop={loop} />
    </div>
  );
};

export default LoginAnimation;
