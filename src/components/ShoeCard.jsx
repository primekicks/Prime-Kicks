import CartIcon from "@/ui/CartIcon";
import Wishlist from "@/ui/Wishlist";
import React from "react";

const ShoeCard = () => {
  return (
    <section className="flex justify-center">
      <div className="bg-green-200 w-[300px] h-[180px] rounded-xl my-[30px] shadow-xl">
        <div className="overflow-hidden">
          <img
            src="https://m.media-amazon.com/images/I/51dm6loN4lL._AC_SY575_.jpg"
            className="object-cover object-center"
          />
        </div>
        <ul className="px-[20px] flex gap-5 items-center justify-between z-50">
          <li>
            <Wishlist />
          </li>
          <li>Rs. 3500</li>
          <li>
            <CartIcon />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ShoeCard;
