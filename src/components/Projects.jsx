"use client";
import React from "react";
import example from "../../public/example-project.jpg";
import Image from "next/image";
import RevealTop from "./animation/RevealTop";
import RevealLeft from "./animation/RevealLeft";
function Projects() {
  const project = [
    {
      id: 0,
      name: "Project Name",
      tools: ["Flutter", "MUI", "Python", "FastAPI"],
      image: example,
      desc: [
        `Pain.app is a real-time coaching app for students learning to paint. This app is my baby, designed and built on my own.`,
        `The tech stack is based on top of Flutter for the mobile app, connected to a Python & FastAPI backend, with data stored in Postgres, deployed on Heroku.`,
      ],
    },
    {
      id: 1,
      name: "Project Name",
      tools: ["Flutter", "MUI", "Python", "FastAPI"],
      image: example,
      desc: [
        `Pain.app is a real-time coaching app for students learning to paint. This app is my baby, designed and built on my own.`,
        `The tech stack is based on top of Flutter for the mobile app, connected to a Python & FastAPI backend, with data stored in Postgres, deployed on Heroku.`,
      ],
    },
    {
      id: 2,
      name: "Project Name",
      tools: ["Flutter", "MUI", "Python", "FastAPI"],
      image: example,
      desc: [
        `Pain.app is a real-time coaching app for students learning to paint. This app is my baby, designed and built on my own.`,
        `The tech stack is based on top of Flutter for the mobile app, connected to a Python & FastAPI backend, with data stored in Postgres, deployed on Heroku.`,
      ],
    },
    {
      id: 3,
      name: "Project Name",
      tools: ["Flutter", "MUI", "Python", "FastAPI"],
      image: example,
      desc: [
        `Pain.app is a real-time coaching app for students learning to paint. This app is my baby, designed and built on my own.`,
        `The tech stack is based on top of Flutter for the mobile app, connected to a Python & FastAPI backend, with data stored in Postgres, deployed on Heroku.`,
      ],
    },
  ];
  return (
    <section className="pt-[20px]   " id="projects">
      <div className="bg-green-100 flex py-[20px] px-[10px] border border-black gap-3 flex-col   items-center">
        <RevealTop>
          <span className="font-semibold "> Additional skills</span>{" "}
        </RevealTop>
        <RevealTop>
          {" "}
          <span className="font-[300]">
            Familiarity with IoT development platforms such as Arduino,
            Raspberry Pi, and ESP8266/ESP32.
          </span>{" "}
        </RevealTop>
      </div>

      {/* content */}
      <div className="py-[40px] px-[10px] max-w-[1150px] mx-auto">
        <div className="w-fit mb-10">
          <h1 className="text-2xl underline underline-offset-8 decoration-dashed">
            <span className="font-thin">My</span> Projects
            {/* <hr className=" h-[2px]" style={{ borderTop: "dotted 2px" }}></hr> */}
          </h1>
        </div>
        {/* sub contetnt */}
        <div className="gridcols gap-4">
          <RevealLeft>
            {" "}
            <div>
              <Image src={example} alt="" />
            </div>
            <div>
              <h1 className="text-xl underline decoration-line underline-offset-8 mb-5">
                Smart Agriculture System
              </h1>
              <p className="lg:w-[50%]">
                Designed and implemented an IoT solution for monitoring soil
                moisture, temperature, and humidity levels in agricultural
                fields, resulting in a 20% increase in crop yield.
              </p>
              <button className="mt-5">Project Links -&gt;</button>
            </div>
          </RevealLeft>
          <RevealLeft>
            {" "}
            <div>
              <Image src={example} alt="" />
            </div>
            <div>
              <h1 className="text-xl underline decoration-line underline-offset-8 mb-5">
                Home Energy Management System
              </h1>
              <p className="lg:w-[50%]">
                Developed a smart energy monitoring system using IoT sensors and
                cloud-based analytics to optimize energy usage in residential
                buildings, reducing electricity costs by 15%
              </p>
              <button className="mt-5">Project Links -&gt;</button>
            </div>
          </RevealLeft>
          <RevealLeft>
            {" "}
            <div>
              <Image src={example} alt="" />
            </div>
            <div>
              <h1 className="text-xl underline decoration-line underline-offset-8 mb-5">
                project Name
              </h1>
              <p className="lg:w-[50%]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                odio quia neque minima, adipisci aliquid ducimus voluptas optio
                esse blanditiis, amet numquam dolores, placeat itaque. Unde fuga
                non inventore rem!
              </p>
              <button className="mt-5">Project Links -&gt;</button>
            </div>
          </RevealLeft>
          <RevealLeft>
            {" "}
            <div>
              <Image src={example} alt="" />
            </div>
            <div>
              <h1 className="text-xl underline decoration-line underline-offset-8 mb-5">
                project Name
              </h1>
              <p className="lg:w-[50%]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                odio quia neque minima, adipisci aliquid ducimus voluptas optio
                esse blanditiis, amet numquam dolores, placeat itaque. Unde fuga
                non inventore rem!
              </p>
              <button className="mt-5">Project Links -&gt;</button>
            </div>
          </RevealLeft>
        </div>
      </div>
    </section>
  );
}

export default Projects;
