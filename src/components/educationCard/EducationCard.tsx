"use client";

import React, {createRef, useContext} from "react";
import {Fade, Slide} from "react-awesome-reveal";
import StyleContext from "@/contexts/StyleContext";
import type {School} from "@/types/portfolio";

interface EducationCardProps {
  school: School;
}

function DescBullets({descBullets}: {descBullets?: string[]}) {
  return descBullets
    ? descBullets.map((item, i) => (
        <li key={i} className="text-subTitle">
          {item}
        </li>
      ))
    : null;
}

export default function EducationCard({school}: EducationCardProps) {
  const imgRef = createRef<HTMLImageElement>();
  const {isDark} = useContext(StyleContext);

  return (
    <div>
      <Fade direction="left" duration={1000} triggerOnce>
        <div className="flex flex-row max-[1380px]:flex-col max-[1380px]:pb-[10px] max-[768px]:text-center group">
          {school.logo && (
            <div>
              <img
                crossOrigin={"anonymous"}
                ref={imgRef}
                className="object-cover mr-8 w-24 h-24 shadow-[0_0.5rem_1rem_rgba(0,0,0,0.3)] rounded-full max-[1380px]:w-16 max-[1380px]:h-16 max-[1380px]:mb-2 max-[1380px]:mr-0 max-[768px]:mt-[10px] max-[768px]:w-16 max-[768px]:h-16 max-[768px]:mb-4 max-[768px]:mr-0"
                src={school.logo}
                alt={school.schoolName}
              />
            </div>
          )}
          <div className="max-w-[70%] max-[1380px]:max-w-[90%] max-[768px]:max-w-full">
            <h5 className="m-0 text-[28px] max-[1380px]:text-[20px] font-bold text-ellipsis overflow-hidden whitespace-nowrap h-[27px] max-[1380px]:h-[23px]">
              {school.schoolName}
            </h5>

            <div>
              <h5
                className={`font-bold text-[19px] max-[1380px]:text-[16px] m-0 pt-[0.8rem] max-[1380px]:pt-2 leading-normal ${
                  isDark ? "text-textDark" : "text-textColor"
                }`}
              >
                {school.subHeader}
              </h5>
              <p
                className={`text-[19px] max-[1380px]:text-[16px] m-0 pt-2 ${
                  isDark ? "text-textDark" : "text-title"
                }`}
              >
                {school.duration}
              </p>
              <p className="mt-2 mb-2">{school.desc}</p>
              <div className="[&>ul]:mt-2 max-[768px]:[&>ul]:max-w-[80%] max-[768px]:[&>ul]:mx-auto">
                <ul>
                  <DescBullets descBullets={school.descBullets} />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <Slide direction="left" duration={2000} triggerOnce>
        <div className="h-[30px] w-[80%] max-[1380px]:w-[90%] max-[768px]:w-full border-t-2 border-lightBorder1 mb-5 transition-[width] duration-[0.6s] ease-in-out group-hover:border-educationCardBorder group-hover:w-full"></div>
      </Slide>
    </div>
  );
}
