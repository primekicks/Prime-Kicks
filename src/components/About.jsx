"use client";

import Link from "next/link";
import React from "react";

const About = () => {
  const ourTeam = [
    {
      photo: "/aboutUs.png",
      name: "Aryan Sharma",
      position: "Developer",
      location: "Kapan, Kathmandu",
    },
    {
      photo: "/aboutUs.png",
      name: "Aryan Sharma",
      position: "Developer",
      location: "Kapan, Kathmandu",
    },
    {
      photo: "/aboutUs.png",
      name: "Aryan Sharma",
      position: "Developer",
      location: "Kapan, Kathmandu",
    },
    {
      photo: "/aboutUs.png",
      name: "Aryan Sharma",
      position: "Developer",
      location: "Kapan, Kathmandu",
    },
  ];

  return (
    <main className="">
      <section className="max-w-[1600px] mx-auto flex flex-col">
        <div className="flex flex-col items-center justify-center h-[300px]">
          <h1 className="text-[50px] font-bold ">We love creators</h1>
          <p>
            Lorem j opayo tei hanku thaknu m pau deso chu go inke ikcha anurup
            app lekh sakte ho
          </p>
          <p>
            Lorem knu mar mar pacha ho pau deso chu go inke ikcha anurup app
            lekh sakte ho
          </p>
        </div>
        <div className="flex">
          <div className=" w-[50%] flex flex-col items-center justify-center">
            <div className="p-5">
              Prime Kicks is a renowned footwear company that specializes in
              designing and producing stylish, high-performance shoes. Known for
              its innovative designs, the company focuses on offering comfort,
              durability, and cutting-edge technology to cater to athletes,
              fashion enthusiasts, and everyday consumers.
            </div>
            <div className="p-5">
              The company's shoes are crafted with the aim of providing optimal
              support for a variety of activities, from running to casual wear.
              At the same time, they maintain a sleek, modern aesthetic,
              ensuring that each pair of shoes not only performs well but also
              looks stylish.
            </div>
          </div>
          <div className="  w-[50%] flex flex-col items-center justify-center">
            <div className="p-5">
              Prime Kicks takes pride in using high-quality materials and
              advanced production techniques to ensure every shoe meets its
              strict standards. The company continually seeks to improve its
              designs and materials, staying ahead of industry trends and
              offering footwear that exceeds customer expectations.{" "}
            </div>
            <div className="p-5">
              With a growing global presence, Prime Kicks has established itself
              as a leading brand in the footwear industry. Its reputation for
              blending functionality with fashion has made it a trusted choice
              for athletes and everyday consumers alike, delivering exceptional
              products that enhance both performance and style.
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mx-5">
          <div className="pl-10 border-l-2 border-l-gray-800 w-[25%]">
            <h1 className="text-[30px] font-semibold">2025</h1>
            <p className="">Business was founded</p>
          </div>
          <div className="pl-10 border-l-2 border-l-gray-800 w-[25%]">
            <h1 className="text-[30px] font-semibold">5+</h1>
            <p>People on team</p>
          </div>
          <div className="pl-10 border-l-2 border-l-gray-800 w-[25%]">
            <h1 className="text-[30px] font-semibold">1M</h1>
            <p>Users on the platform</p>
          </div>
          <div className="pl-10 border-l-2 border-l-gray-800 w-[25%]">
            <h1 className="text-[30px] font-semibold">100M</h1>
            <p>Paid out to creators</p>
          </div>
        </div>

        <div className="flex items-center justify-center mx-5 my-16 rounded-2xl">
          <img
            src="aboutUs.png"
            className="w-full h-full object-cover rounded-2xl"
            alt="About Us"
          />
        </div>

        <div className="flex flex-col justify-center mx-10">
          <h1 className="text-[30px] font-semibold">Our values</h1>
          <p className="text-xl">
            gulio jeri hau timi tw meri hau aru lai pan ko pat
          </p>
          <p className="text-xl">maya lai dhan ko bhat</p>
          <div className="flex flex-col justify-center ">
            <div className="flex justify-between items-center">
              <div className="p-5">
                <h1 className="text-xl font-semibold">Be world class:</h1>
                <p>
                  lorem hankukuku, kuch kuch hota edge di eg teru sabann karpura
                  garuram haina ra
                </p>
              </div>
              <div className="p-5">
                <h1 className="text-xl font-semibold">Take responsibility:</h1>
                <p>
                  lorem hankukuku, kuch kuch hota edge di eg teru sabann karpura
                  garuram haina ra
                </p>
              </div>
              <div className="p-5">
                <h1 className="text-xl font-semibold">Be supportive:</h1>
                <p>
                  lorem hankukuku, kuch kuch hota edge di eg teru sabann karpura
                  garuram haina ra
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="p-5">
                <h1 className="text-xl font-semibold">Always learning:</h1>
                <p>
                  lorem hankukuku, kuch kuch hota edge di eg teru sabann karpura
                  garuram haina ra
                </p>
              </div>
              <div className="p-5">
                <h1 className="text-xl font-semibold">
                  Share everithing you know:
                </h1>
                <p>
                  lorem hankukuku, kuch kuch hota edge di eg teru sabann karpura
                  garuram haina ra
                </p>
              </div>
              <div className="p-5">
                <h1 className="text-xl font-semibold">Enjoy down time:</h1>
                <p>
                  lorem hankukuku, kuch kuch hota edge di eg teru sabann karpura
                  garuram haina ra
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mx-10">
          <h1 className="text-[30px] font-semibold">Our Team</h1>
          <p className="text-xl">
            We're a dynamic group of individuals who are passionate about what
            we do and dedicated to delevering the best result for our client.
          </p>
          <div className="py-5 flex gap-10">
            {ourTeam.map((team, i) => {
              return (
                <div key={i} className="flex flex-col justify-center">
                  <div className="flex flex-col justify-center w-[320px] h-[350px] rounded-2xl overflow-hidden">
                    <img
                      src={team.photo}
                      className="w-full h-full object-cover rounded-2xl mb-3"
                      alt={team.name}
                    />
                    <div>
                      <h1 className="text-2xl font-semibold">{team.name}</h1>
                      <p className="text-[19px] font-semibold">
                        {team.position}
                      </p>
                      <p>{team.location}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mx-10 flex items-center">
          <div className="w-[40%] p-[30px]">
            <img
              src="aboutUs.png"
              className="w-full h-full object-cover rounded-2xl"
              alt="Team"
            />
          </div>
          <div className="w-[60%] flex flex-col justify-center p-[30px]">
            <h1 className="text-[40px] font-semibold">Join Our Team</h1>
            <p className="text-xl mt-3">
              Lorem knu pau deso chu go inke ikcha anurup app lekh sakte ho
            </p>
            <div className="font-semibold mt-9 flex justify-between space-y-4">
              <div className="text-xl w-[48%]">
                <ul className="space-y-4">
                  <li>Competitive salaries</li>
                  <li>30 days of paid vacation</li>
                  <li>Benefits for you and your family</li>
                </ul>
              </div>
              <div className="text-xl w-[48%]">
                <ul className="space-y-4">
                  <li>Flexible work hours</li>
                  <li>Annual team retreats</li>
                  <li>A great work environment</li>
                </ul>
              </div>
            </div>
            <div>
              <button className="text-violet-600 font-semibold">
                See our job posting →
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
