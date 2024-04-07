"use client";
import React from "react";
import Image from "next/image";
import hero from "../../public/hero.png";
import { motion } from "framer-motion";
import Reveal from "./animation/Reveal";
import RevealLeft from "./animation/RevealLeft";
function Hero() {
  return (
    <div className="flex justify-center items-center lg:py-[100px] py-[20px] px-[10px] flex-wrap md:flex-nowrap gap-10">
      <div className=" self-start text-4xl mb-10 flex flex-col items-center">
        <Reveal>
          <div>
            <span className="font-thin">IOT</span>{" "}
            <span className="font-extrabold">Engineer</span>{" "}
            <span className="font-thin"></span>{" "}
            <span className="font-extrabold"></span>
          </div>
        </Reveal>

        {/* <hr
          className="w-[80%] h-[2px]   mt-5 "
          style={{ borderTop: "dotted 2px" }}
        ></hr> */}
      </div>
      <motion.div
        className=" relative mx-10 mb-10"
        initial={{ rotateY: "200deg" }}
        animate={{ rotateY: 0 }}
        transition={{ duration: 2 }}
      >
        <div className="egg -rotate-12 bg-[#d9ffb6] border border-black"></div>
        <div className="egg absolute rotate-[221deg] top-2 bg-pink-200 left-10 overflow-hidden border border-black">
          <Image
            src={hero}
            alt=""
            className=" absolute -rotate-[221deg] w-[400px] h-[221px] bottom-0  "
          />
        </div>
      </motion.div>
      <RevealLeft>
        {" "}
        <div className="w-[300px] self-end flex flex-col justify-center items-center">
          <p className="text-center">
            Hello! I&apos;m Salma, an IoT engineer based in Morocco,
            specializing in creating smart solutions to enhance efficiency and
            user experience. Let&apos;s connect and bring your IoT projects to
            life!
          </p>
        </div>
      </RevealLeft>
    </div>
  );
}

export default Hero;
