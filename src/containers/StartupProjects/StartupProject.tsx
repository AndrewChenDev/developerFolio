"use client";

import React, {useContext} from "react";
import {bigProjects} from "@/portfolio";
import {Fade} from "react-awesome-reveal";
import StyleContext from "@/contexts/StyleContext";

export default function StartupProject() {
  function openUrlInNewTab(url: string) {
    if (!url) {
      return;
    }
    const win = window.open(url, "_blank");
    win?.focus();
  }

  const {isDark} = useContext(StyleContext);
  if (!bigProjects.display) {
    return null;
  }
  return (
    <Fade direction="up" duration={1000} triggerOnce>
      <div className="w-[90%] px-[10px] py-[20px] mx-auto mt-16" id="projects">
        <div>
          <h1 className="text-[56px] font-normal max-[1380px]:text-[40px] max-[768px]:text-[30px] max-[768px]:text-center">
            {bigProjects.title}
          </h1>
          <p
            className={`max-[768px]:text-[16px] max-[768px]:text-center ${
              isDark ? "dark-mode" : "text-subTitle"
            }`}
          >
            {bigProjects.subtitle}
          </p>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[1rem]">
            {bigProjects.projects.map((project, i) => {
              return (
                <div
                  key={i}
                  className={`flex flex-col p-6 rounded-[10px] border border-lightBorder1 justify-center ${
                    isDark
                      ? "dark-mode bg-lightBg2 shadow-[0px_10px_30px_-15px_#d9dbdf] transition-all duration-[0.25s] ease-in-out hover:shadow-[0px_20px_30px_-10px_#d9dbdf]"
                      : "bg-lightBg2 shadow-[rgba(0,0,0,0.2)_0px_10px_30px_-15px] transition-all duration-300 ease-in-out hover:shadow-[rgba(0,0,0,0.2)_0px_20px_30px_-10px]"
                  }`}
                >
                  {project.image ? (
                    <div className="relative h-[250px] overflow-hidden flex justify-center items-center">
                      <img
                        src={project.image}
                        alt={project.projectName}
                        className="max-w-full h-auto w-[250px]"
                      ></img>
                    </div>
                  ) : null}
                  <div className="text-center">
                    <h5
                      className={`text-title text-[22px] leading-[24px] font-bold mt-[15px] mb-0 mx-0 ${
                        isDark ? "dark-mode" : ""
                      }`}
                    >
                      {project.projectName}
                    </h5>
                    <p
                      className={`text-cardSubtitle text-[17px] leading-6 ${
                        isDark ? "dark-mode" : ""
                      }`}
                    >
                      {project.projectDesc}
                    </p>
                    {project.footerLink ? (
                      <div>
                        {project.footerLink.map((link, i) => {
                          return (
                            <span
                              key={i}
                              className={`bg-button text-lightBg3 align-middle items-center rounded-[4px] inline-flex text-[0.75rem] h-[2em] justify-center whitespace-nowrap leading-[1.5] mr-2 mb-2 px-[0.75em] cursor-pointer transition-all duration-200 ease-in ${
                                isDark ? "dark-mode" : ""
                              }`}
                              onClick={() => openUrlInNewTab(link.url)}
                            >
                              {link.name}
                            </span>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
