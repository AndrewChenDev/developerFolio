"use client";

import React, {useContext} from "react";
import ExperienceCard from "@/components/experienceCard/ExperienceCard";
import {workExperiences} from "@/portfolio";
import {Fade} from "react-awesome-reveal";
import StyleContext from "@/contexts/StyleContext";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  if (workExperiences.display) {
    return (
      <div id="experience">
        <Fade direction="up" duration={1000} triggerOnce>
          <div
            className="flex w-[90%] px-[10px] py-[20px] mx-auto mt-8 [&>*]:flex-1"
            id="workExperience"
          >
            <div>
              <h1 className="text-[56px] font-normal max-[1380px]:text-[40px] max-[768px]:text-[30px] max-[768px]:text-center">
                Experiences
              </h1>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-[1rem]">
                {workExperiences.experience.map((card, i) => {
                  return (
                    <ExperienceCard
                      key={i}
                      isDark={isDark}
                      cardInfo={{
                        company: card.company,
                        desc: card.desc,
                        date: card.date,
                        companylogo: card.companylogo,
                        role: card.role,
                        descBullets: card.descBullets
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
