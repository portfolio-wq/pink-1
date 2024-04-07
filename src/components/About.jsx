"use client";
import React from "react";
import RevealTop from "./animation/RevealTop";
import Reveal from "./animation/Reveal";

function About() {
  const atwork = [
    "Python",
    "C/C++  ",
    "Java",
    "MQTT",
    "CoAP",
    "Zigbee",
    "AWS",
    "Data Analytics",
    "PCB Design",
    "Problem-Solving",
  ];
  const forFun = ["arabic", "French", "English"];
  return (
    <section className="pt-[100px] " id="about">
      <div className="bg-pink-200 flex justify-center items-center py-[20px] border border-black gap-3 text-lg flex-col md:flex-row font-semibold">
        <RevealTop>
          <span>Innovative </span>
        </RevealTop>
        <RevealTop>
          <span> Pioneering</span>
        </RevealTop>
        <RevealTop>
          <span>Groundbreaking</span>
        </RevealTop>
      </div>
      {/* content */}
      <div className="py-[40px] px-[10px] max-w-[1150px] mx-auto">
        <div className="w-fit mb-10">
          <h1 className="text-2xl underline underline-offset-8 decoration-dashed">
            About <span className="font-thin">Me</span>
            {/* <hr className=" h-[2px]" style={{ borderTop: "dotted 2px" }}></hr> */}
          </h1>
        </div>
        <div className="mb-10">
          <Reveal>
            <p>
              Dedicated and innovative IoT Engineer with a solid background in
              electrical engineering and a passion for developing cutting-edge
              IoT solutions. Experienced in designing, implementing, and
              troubleshooting IoT systems across various industries. Proficient
              in programming languages such as Python, C++, and Java, with a
              strong understanding of embedded systems and wireless
              communication protocols.
            </p>
            <br />
            <p>
              Proven ability to collaborate effectively with cross-functional
              teams to deliver successful projects on time and within budget.
            </p>
          </Reveal>
        </div>
        {/*  */}
        <div className="gridcols  gap-4 ">
          <div>
            <div className="flex  items-center justify-center w-fit gap-2">
              <span className="smallegg bg-pink-200 border border-black rotate-45"></span>
              <span className="font-semibold">Skills</span>
            </div>
            <Reveal>
              {" "}
              <div className=" flex gap-3 mt-3 flex-wrap relative ">
                {atwork.map((item, i) => (
                  <span
                    key={i}
                    className="bg-pink-100 py-1 px-2 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
          <div>
            <div className="flex  items-center justify-center w-fit gap-2">
              <span className="smallegg bg-[#d9ffb6] border border-black rotate-45"></span>
              <span className="font-semibold">Preferred Languages</span>
            </div>
            <Reveal>
              {" "}
              <div className=" flex gap-3 mt-3 flex-wrap ">
                {forFun.map((item, i) => (
                  <span
                    key={i}
                    className="bg-green-100 py-1 px-2 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
