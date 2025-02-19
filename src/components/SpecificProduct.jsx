import Reviews from "@/ui/Reviews";
import React from "react";

const SpecificProduct = () => {
  return (
    <main className="flex justify-center items-center gap-[70px] h-screen px-10 rounded-xl">
      <section className="w-[450px] h-[95vh] px-5">
        <span className="flex">
          Prime Kicks {">"} Shoes {">"} Nike
        </span>
        <div className="flex flex-col justify-center items-start gap-[30px] h-full">
          <span className="h-[450px] w-[450px] bg-slate-300 rounded-xl bg-[url('https://m.media-amazon.com/images/I/618FhFPg8+L._AC_SX695_.jpg')] bg-cover bg-center shadow-md"></span>
          <div className="flex items-center justify-between w-[450px]">
            <span className="h-[80px] w-[80px] bg-[url('https://m.media-amazon.com/images/I/618FhFPg8+L._AC_SX695_.jpg')] bg-cover bg-center rounded-xl border-2 border-black"></span>
            <span className="h-[80px] w-[80px] bg-[url('https://m.media-amazon.com/images/I/61JJee52mrL._AC_SX695_.jpg')] bg-cover bg-center rounded-xl"></span>
            <span className="h-[80px] w-[80px] bg-[url('https://m.media-amazon.com/images/I/517FivfQhGL._AC_SX695_.jpg')] bg-cover bg-center  rounded-xl"></span>
            <span className="h-[80px] w-[80px] bg-[url('https://m.media-amazon.com/images/I/61ZeiaHrtqL._AC_SX695_.jpg')] bg-cover bg-center  rounded-xl"></span>
            <span className="h-[80px] w-[80px] bg-[url('https://m.media-amazon.com/images/I/519kdQJ8j0L._AC_SX695_.jpg')] bg-cover bg-center  rounded-xl"></span>
          </div>
        </div>
      </section>

      <section className="w-[450px] h-[95vh] px-5">
        <span className="flex justify-between items-center mt-[50px]">
          <h1>Brand</h1>
          <h1>Store Name</h1>
        </span>

        <div className="py-[20px] ">
          <h1 className="font-bold text-[25px] my-2">
            Nike Airforce 1 Tripple White
          </h1>

          <span className="flex gap-2 items-center">
            <ul className="flex gap-1">
              <Reviews />
              <Reviews />
              <Reviews />
              <Reviews />
              <Reviews />
            </ul>
            <p className="text-gray-500">
              <span className="font-bold text-black">4.5</span> (200 Reviews)
            </p>
          </span>

          <p className="font-extrabold text-2xl py-5">Rs. 3500 /-</p>

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
              <li className="h-[30px] w-[90px] border-2 border-black rounded-md">
                41
              </li>
              <li className="h-[30px] w-[90px] border-2 border-black rounded-md">
                42
              </li>
              <li className="h-[30px] w-[90px] border-2 border-black rounded-md">
                43
              </li>
              <li className="h-[30px] w-[90px] border-2 border-black rounded-md">
                44
              </li>
              <li className="h-[30px] w-[90px] border-2 border-black rounded-md">
                45
              </li>
            </ul>
          </span>
          <p className="text-gray-500 pt-2">Size Guide</p>
        </div>
      </section>
    </main>
  );
};

export default SpecificProduct;
