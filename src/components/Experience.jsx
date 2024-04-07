"use client";
import React from "react";
import RevealTop from "./animation/RevealTop";
import Reveal from "./animation/Reveal";

function Experience() {
  const experience = [
    {
      id: 0,
      name: "XYZ Technologies",
      time: "2022 - present",
      role: "IoT Engineer",
      place: "atlanta",
      tools: ["Flutter", "MUI", "Python", "FastAPI"],
      desc: [
        `Spearheaded the development of IoT solutions for smart home automation, including designing sensor networks and developing custom firmware for microcontroller-based devices.`,
      ],
    },
    {
      id: 1,
      name: "ABC Corporation",
      time: "2022 - present",
      role: "Electrical Engineering Intern",
      place: "atlanta",
      tools: ["Flutter", "MUI", "Python", "FastAPI"],
      desc: [
        `Conducted research on emerging technologies and industry trends to support project development.`,
      ],
    },
    {
      id: 3,
      name: "XYZ Technologies",
      time: "2022 - present",
      role: "IoT Engineer",
      place: "atlanta",
      tools: ["Flutter", "MUI", "Python", "FastAPI"],
      desc: [
        `Spearheaded the development of IoT solutions for smart home automation, including designing sensor networks and developing custom firmware for microcontroller-based devices.`,
      ],
    },
  ];
  return (
    <section className="pt-[20px] pb-[20px]" id="experience">
      <div className="bg-pink-100 flex py-[20px] px-[10px] border border-black gap-3 flex-col  items-center">
        <RevealTop>
          <span className=" font-semibold"> Personal Interests</span>{" "}
        </RevealTop>
        <RevealTop>
          {" "}
          <span className="font-[300]">
            Active participation in community hackathons and technology meetups,
            fostering networking opportunities and sharing knowledge with peers.
          </span>{" "}
        </RevealTop>
      </div>
      {/* content */}
      <div className="py-[40px] px-[10px] max-w-[1150px] mx-auto ">
        <div className=" mb-10">
          <h1 className="text-2xl underline underline-offset-8 decoration-dashed">
            <span className="font-thin">My</span> Experience
          </h1>
        </div>
        {/* sub contetnt */}
        <div className=" gap-4 flex flex-col">
          {experience.map((exp) => (
            <div className="flex flex-col gap-2" key={exp.id}>
              <div className="flex justify-between items-center">
                <Reveal>
                  {" "}
                  <span className="font-bold">{exp.name}</span>
                </Reveal>
                <Reveal>
                  {" "}
                  <span>{exp.time}</span>
                </Reveal>
              </div>
              <div className="flex justify-between items-center">
                <Reveal>
                  <span className="">{exp.role}</span>
                </Reveal>

                <Reveal>
                  <span>{exp.place}</span>
                </Reveal>
              </div>
              <Reveal>
                {" "}
                <p className="font-[200]">{exp.desc}</p>
              </Reveal>

              <div className="flex gap-2 mb-2">
                {exp.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="bg-green-100 py-1 px-2 rounded-full text-sm"
                  >
                    <Reveal> {tool}</Reveal>
                  </span>
                ))}
              </div>
              <div className="w-full h-[1px] bg-gray-700 ]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
