import Adidas from "@/ui/Adidas";
import Jordan from "@/ui/Jordan";
import NewBalance from "@/ui/NewBalance";
import Nike from "@/ui/Nike";
import Puma from "@/ui/Puma";
import React from "react";

const BrandBanner = () => {
  const brandName = [
    { icon: <Nike /> },
    { icon: <Adidas /> },
    { icon: <NewBalance /> },
    { icon: <Puma /> },
    { icon: <Jordan /> },
  ];
  return (
    <main className="m-2 max-w-[1600px] mx-auto container">
      <ul className=" w-full px-[20px] lg:px-10 py-[20px] flex flex-wrap justify-evenly sm:justify-between items-center gap-5">
        {brandName.map((value, i) => {
          return (
            <li key={i} className="">
              {value.icon}
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default BrandBanner;
