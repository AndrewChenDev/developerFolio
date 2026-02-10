"use client";

import React from "react";
import {skillsSection} from "@/portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div>
        <ul className="pl-0 list-none text-5xl mb-0 mt-0 text-center">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="inline-block mr-5 mb-5 group"
              >
                <i className={`${skills.fontAwesomeClassname} text-subTitle group-hover:text-skills`}></i>
                <p className="text-subTitle group-hover:text-skills text-[10px]">
                  {skills.skillName}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
