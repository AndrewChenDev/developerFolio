"use client";

import React, {useState, createRef} from "react";
import type {WorkExperienceEntry} from "@/types/portfolio";

interface ExperienceCardProps {
  cardInfo: WorkExperienceEntry;
  isDark: boolean;
}

function DescBullets({
  descBullets,
  isDark
}: {
  descBullets?: string[];
  isDark: boolean;
}) {
  return descBullets
    ? descBullets.map((item, i) => (
        <li
          key={i}
          className={`text-subTitle ${isDark ? "!text-textDark" : ""}`}
        >
          {item}
        </li>
      ))
    : null;
}

export default function ExperienceCard({cardInfo, isDark}: ExperienceCardProps) {
  const [colorArrays, setColorArrays] = useState<number[]>([]);
  const imgRef = createRef<HTMLImageElement>();

  function getColorArrays() {
    import("colorthief").then(({default: ColorThief}) => {
      const colorThief = new ColorThief();
      setColorArrays(colorThief.getColor(imgRef.current));
    });
  }

  function rgb(values: number[]) {
    return values.length === 0
      ? undefined
      : "rgb(" + values.join(", ") + ")";
  }

  return (
    <div
      className={`relative rounded-[10px] border border-lightBorder1 shadow-[rgba(0,0,0,0.2)_0px_10px_30px_-15px] ${
        isDark
          ? "bg-darkBg"
          : "bg-[rgb(255,255,255)] hover:shadow-[rgba(0,0,0,0.2)_0px_20px_30px_-10px]"
      }`}
    >
      <div
        style={{background: rgb(colorArrays)}}
        className="bg-experience-banner rounded-t-[10px] blur-0 h-[11rem] flex items-end justify-center"
      >
        <div className="absolute bg-experience-blur blur-[5px] h-[11rem] top-0 left-0 w-full rounded-t-[10px]"></div>
        <div className="absolute bg-transparent h-[9rem] top-0 left-0 w-full flex items-center justify-center">
          <h5 className="text-center p-6 m-0 text-lightBg1 text-[25px] max-[1380px]:text-[22px] max-[768px]:text-[22px] font-bold text-ellipsis overflow-hidden whitespace-nowrap">
            {cardInfo.company}
          </h5>
        </div>

        <img
          crossOrigin={"anonymous"}
          ref={imgRef}
          className="absolute object-cover left-0 right-0 top-[7rem] mx-auto w-32 h-32 max-[1380px]:w-[6.5rem] max-[1380px]:h-[6.5rem] shadow-[0_0.5rem_1rem_rgba(0,0,0,0.3)] rounded-full"
          src={cardInfo.companylogo}
          alt={cardInfo.company}
          onLoad={() => getColorArrays()}
        />
      </div>
      <div className="p-6 mt-8">
        <h5
          className={`text-center font-bold text-[25px] max-[1380px]:text-[22px] max-[1380px]:pt-2 max-[768px]:text-[22px] m-0 pt-6 leading-normal ${
            isDark ? "!text-textDark" : "text-textColor"
          }`}
        >
          {cardInfo.role}
        </h5>
        <h5
          className={`text-center text-[20px] max-[1380px]:text-[18px] max-[768px]:text-[18px] m-0 pt-4 font-semibold ${
            isDark ? "!text-textDark" : "text-textColor"
          }`}
        >
          {cardInfo.date}
        </h5>
        <p
          className={`text-subTitle text-center max-[768px]:text-[16px] ${
            isDark ? "!text-textDark" : ""
          }`}
        >
          {cardInfo.desc}
        </p>
        <ul>
          <DescBullets descBullets={cardInfo.descBullets} isDark={isDark} />
        </ul>
      </div>
    </div>
  );
}
