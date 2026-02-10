"use client";

import React, {useContext} from "react";
import Link from "next/link";
import Headroom from "react-headroom";
import "./Header.css";
import ToggleSwitch from "@/components/ToggleSwitch/ToggleSwitch";
import StyleContext from "@/contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection
} from "@/portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewSkills = skillsSection.display;

  return (
    <Headroom>
      <header
        className={`header max-w-full py-[15px] px-5 mx-auto ${isDark ? "bg-darkBg text-textDark" : "bg-lightBg1"} md:flex md:items-center md:justify-between max-[960px]:min-[768px]:text-xs`}
      >
        <Link href="/" className="block flex-none float-left text-[1.5em] no-underline mt-[10px] leading-normal">
          <span className="text-subTitle"> &lt;</span>
          <span
            className="font-agustina font-bold px-[10px]"
            style={{fontVariantLigatures: "no-common-ligatures"}}
          >
            {greeting.username}
          </span>
          <span className="text-subTitle">/&gt;</span>
        </Link>
        <input className="menu-btn hidden" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon cursor-pointer inline-block float-right py-7 px-5 relative select-none md:hidden"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span
            className={`navicon block h-[2px] relative transition-colors duration-200 ease-out w-[18px] before:content-[''] before:block before:h-full before:absolute before:transition-all before:duration-200 before:ease-out before:w-full before:top-[5px] after:content-[''] after:block after:h-full after:absolute after:transition-all after:duration-200 after:ease-out after:w-full after:-top-[5px] ${isDark ? "bg-textDark before:bg-textDark after:bg-textDark" : "bg-iconBg before:bg-iconBg after:bg-iconBg"}`}
          ></span>
        </label>
        <ul
          className={`menu m-0 p-0 list-none overflow-hidden clear-both max-h-0 transition-[max-height] duration-200 ease-out md:max-h-none md:overflow-visible ${isDark ? "dark-menu" : ""}`}
        >
          {viewSkills && (
            <li className="md:float-left">
              <a
                href="#skills"
                className={`block py-[15px] px-5 no-underline ${isDark ? "text-textDark hover:bg-button" : "text-textColor hover:bg-headerHoverBg"}`}
              >
                Skills
              </a>
            </li>
          )}
          {viewExperience && (
            <li className="md:float-left">
              <a
                href="#experience"
                className={`block py-[15px] px-5 no-underline ${isDark ? "text-textDark hover:bg-button" : "text-textColor hover:bg-headerHoverBg"}`}
              >
                Work Experiences
              </a>
            </li>
          )}
          <li className="md:float-left">
            <a
              href="#contact"
              className={`block py-[15px] px-5 no-underline ${isDark ? "text-textDark hover:bg-button" : "text-textColor hover:bg-headerHoverBg"}`}
            >
              Contact Me
            </a>
          </li>
          <li className="md:float-left">
            <span className="block py-[15px] px-5">
              <ToggleSwitch />
            </span>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
