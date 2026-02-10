"use client";

import React from "react";
import EducationCard from "@/components/educationCard/EducationCard";
import {educationInfo} from "@/portfolio";

export default function Education() {
  if (educationInfo.display) {
    return (
      <div
        className="flex flex-col w-[90%] py-[20px] px-0 mx-auto mt-8 [&>*]:flex-1 [&>*]:mb-[30px]"
        id="education"
      >
        <h1 className="text-[56px] font-normal max-[1380px]:text-[40px] max-[768px]:text-[30px] max-[768px]:text-center">
          Education
        </h1>
        <div className="flex flex-col pt-[20px] max-[1380px]:pt-0 max-[768px]:pt-0">
          {educationInfo.schools.map((school, index) => (
            <EducationCard key={index} school={school} />
          ))}
        </div>
      </div>
    );
  }
  return null;
}
