import Footstep from "@/ui/Footstep";
import Ghost from "@/ui/Ghost";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="flex flex-row justify-center items-center divide-x-2 animate-fadeIn">
        <h1 className="flex justify-center items-center px-4 ">
          <span className="text-[68px] font-bold">4</span>
          <Ghost />
          <span className="text-[68px] font-bold">4</span>
        </h1>
        <h2 className="sm:text-[30px] px-4">Page Not Found</h2>
      </div>
      <span>
        <Footstep />
      </span>
      <div className="mt-8">
        <p className="text-lg hidden sm:block">
          Looks like this page has slipped off the rack. Let’s get back on
          track!
        </p>

        <Link href="/" className="text-lg text-blue-900 hover:underline mt-4">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default page;
