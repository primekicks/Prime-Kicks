import Reviews from "@/ui/Reviews";
import Wishlist from "@/ui/Wishlist";
import React from "react";

const SpecificProduct = () => {
  return (
    <main className="flex sm:flex-row flex-col justify-center gap-5 sm:px-10 rounded-xl sm:py-10 py-5">
      <section className="h-[95%] sm:px-5 px-2 flex flex-col gap-3">
        Prime Kicks {">"} Shoes {">"} Nike
        <div className="flex flex-col  items-start gap-[30px] h-full">
          <span className="sm:h-[280px] sm:w-[600px] bg-slate-300 rounded-xl shadow-md overflow-hidden">
            <img
              src="https://m.media-amazon.com/images/I/51dm6loN4lL._AC_SY575_.jpg"
              className="w-full h-full object-cover object-center"
            />
          </span>
          <div className="flex flex-wrap items-center justify-between sm:w-[600px] w-full">
            <span className="sm:h-[90px] sm:w-[90px] h-[70px] w-[70px] bg-[url('https://m.media-amazon.com/images/I/618FhFPg8+L._AC_SX695_.jpg')] bg-cover bg-center rounded-xl border-2 border-black"></span>
            <span className="sm:h-[90px] sm:w-[90px] h-[70px] w-[70px] bg-[url('https://m.media-amazon.com/images/I/61JJee52mrL._AC_SX695_.jpg')] bg-cover bg-center rounded-xl"></span>
            <span className="sm:h-[90px] sm:w-[90px] h-[70px] w-[70px] bg-[url('https://m.media-amazon.com/images/I/517FivfQhGL._AC_SX695_.jpg')] bg-cover bg-center  rounded-xl"></span>
            <span className="sm:h-[90px] sm:w-[90px] h-[70px] w-[70px] bg-[url('https://m.media-amazon.com/images/I/61ZeiaHrtqL._AC_SX695_.jpg')] bg-cover bg-center  rounded-xl"></span>
            <span className="sm:h-[90px] sm:w-[90px] h-[70px] w-[70px] bg-[url('https://m.media-amazon.com/images/I/519kdQJ8j0L._AC_SX695_.jpg')] bg-cover bg-center  rounded-xl"></span>
          </div>
        </div>
      </section>

      <section className="sm:w-[450px] h-[95%] sm:px-5 px-2">
        <span className="flex justify-between items-center">
          <h1>Nike</h1>
          <h1>Nexo Footwears</h1>
        </span>

        <div className="py-[10px] ">
          <h1 className="font-bold text-[25px] my-1">
            Nike Airforce 1 Trippple White
          </h1>

          <span className="flex gap-2 items-center">
            <ul className="flex gap-1">
              <Reviews />
              <Reviews />
              <Reviews />
              <Reviews />
              <Reviews />
            </ul>
            <p className="text-gray-500 py-2">
              <span className="font-bold text-black">4.5</span> (200 Reviews)
            </p>
          </span>

          <p className="font-extrabold text-2xl py-2">Rs. 3500 /-</p>

          <span className="">
            <h1 className="font-bold pb-3 text-[17px]">Color</h1>
            <ul className="flex gap-4">
              <li className="h-[30px] w-[30px] bg-white border-2 border-black rounded-md"></li>
              <li className="h-[30px] w-[30px] bg-black border-2 border-black rounded-md"></li>
              <li className="h-[30px] w-[30px] bg-blue-700 border-2 border-black rounded-md"></li>
            </ul>
          </span>
          <br />

          <span className="">
            <h1 className="font-bold pb-3 text-[17px]">Size</h1>
            <ul className="flex gap-4 flex-wrap text-center">
              <li className="h-[30px] w-[90px] border-2 border-white bg-black text-white rounded-md">
                40
              </li>
              <li className="h-[30px]  w-[90px] border-2 border-black rounded-md">
                41
              </li>
              <li className="h-[30px]  w-[90px] border-2 border-black rounded-md">
                42
              </li>
              <li className="h-[30px] w-[90px] border-2 border-black rounded-md">
                43
              </li>
              <li className="h-[30px]  w-[90px] border-2 border-black rounded-md">
                44
              </li>
              <li className="h-[30px]  w-[90px] border-2 border-black rounded-md">
                45
              </li>
            </ul>
          </span>
          <p className="text-gray-500 pt-2">Size Guide</p>
          <span className="flex gap-4 items-center">
            <button className="bg-black py-[20px] rounded-lg text-white w-[90%] flex justify-center items-center self-center h-[30px]">
              Add to Cart
            </button>
            <button className="shadow-lg h-[40px] w-[40px] flex justify-center items-center rounded-lg">
              <Wishlist />
            </button>
          </span>
        </div>
      </section>
    </main>
  );
};

export default SpecificProduct;
