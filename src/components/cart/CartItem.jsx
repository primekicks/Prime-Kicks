"use client";

import CartIcon from "@/ui/CartIcon";
import Favourite from "@/ui/Favourite";
import Link from "next/link";

const Card = () => {
  const productDetails = [
    {
      id: 1,
      name: "Nike",
      image: "/sneakers.png",
      price: 20,
      favourite: true,
      details: "This is a hattixap chappal",
    },
    {
      id: 2,
      name: "Vans",
      image: "/vans.png",
      price: 50,
      favourite: false,
      details: "This is a hattixap shoe",
    },
    {
      id: 3,
      name: "Nike",
      image: "/nike.png",
      price: 50,
      favourite: false,
      details: "This is a hattixap shoe",
    },
    {
      id: 4,
      name: "Adidas",
      image: "/adidas.png",
      price: 50,
      favourite: false,
      details: "This is a hattixap shoe",
    },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center">
      {productDetails.map((product) => (
        <div
          key={product.id}
          className="relative w-64 m-6 group bg-red-100 hover:bg-blue-50 group flex rounded-3xl items-center justify-center flex-col shadow-lg p-5 space-y-3 overflow-hidden transition-all duration-500"
        >
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="h-[150px] transition-transform  duration-300 ease-in-out group-hover:scale-110 group-hover:translate-x-5"
            />
          </div>

          <div className="flex items-center justify-between w-full transition-all duration-500 group-hover:pl-[50px]">
            <Link href={"/"} className="cursor-pointer">
              <Favourite />
            </Link>
            <div className="flex items-center flex-col gap-2 justify-between w-full">
              {" "}
              <div>
                <p className="text-red-400 font-semibold -mb-2 text-[12px]">
                  ${product.price}
                </p>
              </div>
              <span>${product.price * 200}</span>
            </div>
            <div className="relative">
              <Link href={"/"}>
                <CartIcon />
              </Link>
            </div>
          </div>

          <div className="absolute  -left-2 h-[400px] bg-gray-800 w-0 transition-all duration-500 ease-in-out group-hover:w-[65px] flex flex-col justify-center items-center text-white text-sm">
            <p className="-rotate-90 whitespace-nowrap ">{product.details}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
