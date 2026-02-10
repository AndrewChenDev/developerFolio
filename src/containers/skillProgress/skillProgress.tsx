"use client";

import React from "react";
import {illustration, techStack} from "@/portfolio";
import {Fade} from "react-awesome-reveal";
import Build from "@/assets/lottie/build.json";
import DisplayLottie from "@/components/displayLottie/DisplayLottie";

export default function StackProgress() {
  if (techStack.viewSkillBars) {
    return (
      <Fade direction="up" duration={1000} triggerOnce>
        <div className="flex w-[90%] px-[10px] py-[20px] mx-auto mt-8 max-[768px]:flex-col [&>*]:flex-1 [&>*]:mb-[30px]">
          <div className="max-[1456px]:leading-[4rem] max-[768px]:leading-[3rem] max-[768px]:m-[20px]">
            <h1 className="text-[56px] font-normal max-[1380px]:text-[40px] max-[768px]:text-[30px] max-[768px]:text-center">
              Proficiency
            </h1>
            {techStack.experience.map((exp, i) => {
              const progressStyle = {
                width: exp.progressPercentage
              };
              return (
                <div key={i} className="leading-[3.5vw]">
                  <p>{exp.Stack}</p>
                  <div className="h-[20px] relative bg-progressBarBg rounded-[25px]">
                    <span
                      className="block h-full rounded-tr-[6px] rounded-br-[6px] rounded-tl-[20px] rounded-bl-[20px] bg-progressBarSpan relative overflow-hidden"
                      style={progressStyle}
                    ></span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="max-[1456px]:hidden max-[768px]:hidden max-[1456px]:order-2 max-[768px]:order-2">
            {illustration.animated ? (
              <DisplayLottie animationData={Build} />
            ) : (
              <img
                alt="Skills"
                src={"/images/skill.svg"}
                className="ml-[80px] max-w-[90%] h-auto"
              />
            )}
          </div>
        </div>
      </Fade>
    );
  }
  return null;
}
