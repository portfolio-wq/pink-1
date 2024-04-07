"use client";
import React from "react";
import RevealTop from "./animation/RevealTop";

function Contact() {
  return (
    <section
      id="contact"
      className="flex  bg-green-200 border-black border-t-2   py-[30px] px-[10px] border  gap-3 justify-around flex-wrap "
    >
      <div className="">
        <RevealTop>
          <h1 className="text-xl font-semibold mb-5">Contact me</h1>
        </RevealTop>
        <div className="flex flex-col gap-4">
          <RevealTop>
            <a className="underline underline-offset-8 hover:decoration-dashed">
              mail@gmail.com
            </a>
          </RevealTop>
          <RevealTop>
            <a
              href=""
              className="underline underline-offset-8 hover:decoration-dashed"
            >
              linkedin
            </a>
          </RevealTop>
          <RevealTop>
            <a
              href=""
              className="underline underline-offset-8 hover:decoration-dashed"
            >
              twitter
            </a>
          </RevealTop>
          <RevealTop>
            <a
              href=""
              className="underline underline-offset-8 hover:decoration-dashed"
            >
              Instagram
            </a>
          </RevealTop>
        </div>
      </div>
      <div>
        <div>
          <RevealTop>
            <h1 className="text-xl font-semibold mb-5">More information</h1>
          </RevealTop>{" "}
        </div>
        <RevealTop>
          <span className="underline underline-offset-8 hover:decoration-dashed">
            N 01, Rabat.
          </span>
        </RevealTop>
        <RevealTop>
          <span className="underline underline-offset-8 hover:decoration-dashed">
            Tel: +212 23232323
          </span>
        </RevealTop>
      </div>
    </section>
  );
}

export default Contact;
