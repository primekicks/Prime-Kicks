import React from "react";

const LandingBanner = () => {
  return (
    <main className="flex justify-center items-center py-10">
      <section className=" bg-[url('/6300675.webp')] bg-cover h-[450px] w-[900px] rounded-xl flex flex-col justify-center items-center max-w-[1200px] mx-auto">
        <h1 className="font-extrabold text-2xl">
          THE BIGGEST FOOTWEARS MARKETPLACE IN NEPAL{" "}
        </h1>
        <p className="my-[20px]">
          Shop the latest and greatest in footwear from your favorite stores.
        </p>

        <div className="w-[400px] h-[40px] bg-slate-100 rounded-[30px] my-[30px] flex justify-between items-center gap-[10px]">
          <span className="px-2">All Brands</span>
          <input
            className="w-[75%] h-[38px] bg-transparent rounded-[30px] px-[10px]"
            placeholder="Search"
          />
        </div>

        <button className="w-[150px] h-[30px] bg-blue-700 text-white flex justify-center items-center my-[20px] rounded-[30px]">
          Shop Now
        </button>
        <div className="absolute z-50  h-[40px] w-[40px] ml-[-650px] mt-[-330px] rounded-md shadow-lg shadow-violet-500 overflow-hidden">
          <img src="/adidaslogo.jpeg" className="h-full w-full" />
        </div>
        <div className="absolute z-50 bg-slate-400 h-[40px] w-[40px] ml-[-650px] mt-[350px] rounded-md shadow-lg shadow-blue-500 overflow-hidden">
          <img src="/nikelogo.jpg" className="h-full w-full" />
        </div>
        <div className=" absolute z-50 bg-slate-400 h-[40px] w-[40px] ml-[600px] mt-[-330px] rounded-md shadow-lg shadow-violet-500 overflow-hidden">
          <img src="/jordanlogo.png" className="h-full w-full" />
        </div>
        <div className=" absolute z-50 bg-slate-400 h-[40px] w-[40px] ml-[-520px] mt-[150px] rounded-md shadow-lg shadow-blue-500 overflow-hidden">
          <img src="/newbalancelogo.png" className="h-full w-full" />
        </div>
        <div className="absolute z-50 bg-slate-400 h-[40px] w-[40px] ml-[520px] mt-[150px] rounded-md shadow-lg shadow-violet-500 overflow-hidden">
          <img src="/converselogo.jpeg" className="h-full w-full" />
        </div>
        <div className="absolute z-50 bg-slate-400 h-[40px] w-[40px] ml-[600px] mt-[350px] rounded-md shadow-lg shadow-blue-500 overflow-hidden ">
          <img src="/adidaslogo.jpeg" className="h-full w-full" />
        </div>
      </section>
    </main>
  );
};
export default LandingBanner;
