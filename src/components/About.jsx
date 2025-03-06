"use client";

import React from "react";

const About = () => {
  const aboutContent = [
    {
      content1: [
        " Prime Kicks is a renowned footwear company that specializes in designing and producing stylish, high-performance shoes. Known for its innovative designs, the company focuses on offering comfort, durability, and cutting-edge technology to cater to athletes, fashion enthusiasts, and everyday consumers.",
      ],
    },
    {
      content1: [
        "   The company's shoes are crafted with the aim of providing optimal support for a variety of activities, from running to casual wear. At the same time, they maintain a sleek, modern aesthetic, ensuring that each pair of shoes not only performs well but also looks stylish.",
      ],
    },
    {
      content1: [
        " Prime Kicks takes pride in using high-quality materials and advanced production techniques to ensure every shoe meets its strict standards. The company continually seeks to improve its designs and materials, staying ahead of industry trends and offering footwear that exceeds customer expectations.",
      ],
    },
    {
      content1: [
        " With a growing global presence, Prime Kicks has established itself as a leading brand in the footwear industry. Its reputation for  blending functionality with fashion has made it a trusted choice for athletes and everyday consumers alike, delivering exceptional products that enhance both performance and style.",
      ],
    },
  ];

  const stats = [
    { value: "2025", label: "Business was founded" },
    { value: "5+", label: "People on team" },
    { value: "1M", label: "Users on the platform" },
    { value: "100M", label: "Paid out to creators" },
  ];

  const values = [
    {
      title: "Be world class",
      description:
        "lorem hankukuku, kuch kuch hota edge di eg teru sabann karpura garuram haina ra",
    },
    {
      title: "Take responsibility",
      description:
        "lorem hankukuku, kuch kuch hota edge di eg teru sabann karpura garuram haina ra",
    },
    {
      title: "Be supportive",
      description:
        "lorem hankukuku, kuch kuch hota edge di eg teru sabann karpura garuram haina ra",
    },
    {
      title: "Always learning",
      description:
        "lorem hankukuku, kuch kuch hota edge di eg teru sabann karpura garuram haina ra",
    },
    {
      title: "Share everything you know",
      description:
        "lorem hankukuku, kuch kuch hota edge di eg teru sabann karpura garuram haina ra",
    },
    {
      title: "Enjoy down time",
      description:
        "lorem hankukuku, kuch kuch hota edge di eg teru sabann karpura garuram haina ra",
    },
  ];

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

  const workEnvironment = [
    { title: "Competitive salaries" },
    { title: "30 days of paid vacation" },
    { title: "Benefits for you and your family" },
    { title: "Flexible work hours" },
    { title: "Annual team retreats" },
    { title: "A great work environment" },
  ];

  return (
    <main className="">
      <section className="max-w-[1600px] mx-auto flex flex-col">
        <div className="flex flex-col items-center justify-center h-[300px] mx-[20px]">
          <h1 className="text-[50px] font-bold ">We love creators</h1>
          <p>Lorem j opayo tei hanku thaknu m pau deso chu go inke</p>
          <p>Lorem knu mar mar pacha ho pau deso chu go inke</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-3 p-5">
          {aboutContent.map((value, i) => (
            <div key={i} className="">
              {value.content1}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between px-5">
          {stats.map((value, i) => {
            return (
              <div
                key={i}
                className="pl-2 md:pl-10 border-l-2 border-l-gray-800 w-[25%]"
              >
                <h1 className="text-[30px] font-semibold">{value.value}</h1>
                <p className="">{value.label}</p>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-center mx-5 my-16 rounded-2xl">
          <img
            src="aboutUs.png"
            className="w-full h-full object-cover rounded-2xl"
            alt="About Us"
          />
        </div>

        <div className="flex flex-col justify-center p-5">
          <h1 className="text-[30px] font-semibold">Our values</h1>
          <p className="text-xl">gulio jeri hau timi tw meri hau aru lai pan</p>
          <p className="text-xl">maya lai dhan ko bhat</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((value, i) => (
              <div key={i} className="p-5">
                <h1 className="text-xl font-semibold">{value.title}:</h1>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col p-5">
          <h1 className="text-[30px] font-semibold">Our Team</h1>
          <p className="text-xl">
            We're a dynamic group of individuals who are passionate about what
            we do and dedicated to delevering the best result for our client.
          </p>
          <div className="py-5 flex flex-wrap justify-center items-center gap-10">
            {ourTeam.map((team, i) => {
              return (
                <div key={i} className=" flex flex-col justify-center">
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

        <div className="flex flex-col md:flex-row items-start p-5">
          <div className="md:w-[40%] w-full md:p-[30px]">
            <img
              src="aboutUs.png"
              className="w-full h-full object-cover rounded-2xl"
              alt="Team"
            />
          </div>
          <div className="md:w-[60%] flex flex-col justify-start items-start md:p-[30px]">
            <h1 className="text-[40px] font-semibold">Join Our Team</h1>
            <p className="text-md">
              Lorem knu pau deso chu go inke ikcha anurup app lekh sakte ho
            </p>
            <div className="my-5 font-semibold grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {workEnvironment.map((value, i) => {
                return (
                  <div key={i} className="text-xl">
                    <ul className="">
                      <li>{value.title}</li>
                    </ul>
                  </div>
                );
              })}
            </div>
            <div>
              <button className="text-violet-600 font-semibold py-5">
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
