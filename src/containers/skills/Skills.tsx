"use client";

import React, {useContext} from "react";
import SoftwareSkill from "@/components/softwareSkills/SoftwareSkill";
import {illustration, skillsSection} from "@/portfolio";
import {Fade} from "react-awesome-reveal";
import codingPerson from "@/assets/lottie/codingPerson.json";
import DisplayLottie from "@/components/displayLottie/DisplayLottie";
import StyleContext from "@/contexts/StyleContext";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div
      className={`w-[90%] px-[10px] py-[20px] mx-auto mt-16 ${isDark ? "dark-mode" : ""}`}
      id="skills"
    >
      <div className="flex w-full overflow-hidden max-[768px]:flex-col [&>*]:flex-1 [&>*]:mb-[30px]">
        <Fade direction="left" duration={1000} triggerOnce>
          <div className="max-[768px]:order-2">
            {illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : (
              <img
                alt="Man Working"
                src={"/images/developerActivity.svg"}
                className="max-w-full h-auto"
              ></img>
            )}
          </div>
        </Fade>
        <Fade direction="right" duration={1000} triggerOnce>
          <div className="ml-[50px] max-[768px]:ml-0 max-[768px]:m-[20px]">
            <h1
              className={`text-[56px] font-normal max-[1380px]:text-[40px] max-[768px]:text-[30px] max-[768px]:text-center ${
                isDark ? "dark-mode" : ""
              }`}
            >
              {skillsSection.title}{" "}
            </h1>
            <p
              className={`max-[768px]:text-[16px] max-[768px]:text-center ${
                isDark ? "dark-mode text-subTitle" : "text-subTitle"
              }`}
            >
              {skillsSection.subTitle}
            </p>
            <SoftwareSkill />
            <div>
              {skillsSection.skills.map((skills, i) => {
                return (
                  <p
                    key={i}
                    className={`max-[768px]:text-[16px] ${
                      isDark ? "dark-mode text-subTitle" : "text-subTitle"
                    }`}
                  >
                    {skills}
                  </p>
                );
              })}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
