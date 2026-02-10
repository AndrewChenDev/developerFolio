"use client";

import React, {useContext} from "react";
import {Fade} from "react-awesome-reveal";
import emoji from "react-easy-emoji";
import landingPerson from "@/assets/lottie/landingPerson.json";
import DisplayLottie from "@/components/displayLottie/DisplayLottie";
import SocialMedia from "@/components/socialMedia/SocialMedia";
import Button from "@/components/button/Button";

import {illustration, greeting} from "@/portfolio";
import StyleContext from "@/contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade direction="up" duration={1000} triggerOnce>
      <div
        className="w-[90%] px-[10px] py-[20px] mx-auto mt-8 max-[320px]:w-auto"
        id="greeting"
      >
        <div className="flex max-[768px]:block [&>*]:flex-1 [&>*]:mb-[30px]">
          <div>
            <div>
              <h1
                className={`text-[70px] leading-[1.1] !text-textColor max-[1380px]:text-[50px] max-[768px]:text-[30px] max-[768px]:text-center ${
                  isDark ? "dark-mode" : ""
                }`}
              >
                {" "}
                {greeting.title}{" "}
                <span className="inline-block animate-wave origin-[70%_70%]">
                  {emoji("👋")}
                </span>
              </h1>
              <p
                className={`text-[30px] leading-[40px] max-[1380px]:text-[20px] max-[768px]:text-[16px] max-[768px]:leading-normal max-[768px]:text-center ${
                  isDark ? "dark-mode" : "text-subTitle"
                }`}
              >
                {greeting.subTitle}
              </p>
              <SocialMedia />
              <div className="flex mt-[20px] max-[768px]:justify-around">
                <Button text="Contact me" href="#contact" />
                {greeting.resumeLink && (
                  <Button
                    text="See my resume"
                    newTab={true}
                    href={greeting.resumeLink}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="max-[768px]:h-[256px]">
            {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img
                alt="man sitting on table"
                src={"/images/manOnTable.svg"}
                className="max-w-full h-auto"
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
