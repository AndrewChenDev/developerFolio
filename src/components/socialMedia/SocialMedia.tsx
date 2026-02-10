"use client";

import React from "react";
import {socialMediaLinks} from "@/portfolio";

const iconBaseClasses =
  "text-textDark rounded-[2.6rem] cursor-pointer inline-block text-[1.3rem] h-[2.6rem] leading-[2.6rem] mx-[5px] relative text-center select-none w-[2.6rem] mb-[10px] transition-all duration-200 ease-in hover:bg-textColor";

export default function SocialMedia() {
  if (!socialMediaLinks.display) {
    return null;
  }
  return (
    <div className="text-[2em] md:max-[768px]:text-center max-[768px]:text-center">
      {socialMediaLinks.github ? (
        <a
          href={socialMediaLinks.github}
          className="mb-[10px]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={`fab fa-github ${iconBaseClasses} bg-social-github`}></i>
        </a>
      ) : null}

      {socialMediaLinks.linkedin ? (
        <a
          href={socialMediaLinks.linkedin}
          className="mb-[10px]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={`fab fa-linkedin-in ${iconBaseClasses} bg-social-linkedin`}></i>
        </a>
      ) : null}

      {socialMediaLinks.gmail ? (
        <a
          href={`mailto:${socialMediaLinks.gmail}`}
          className="mb-[10px]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={`fas fa-envelope ${iconBaseClasses} bg-social-google`}></i>
        </a>
      ) : null}

      {socialMediaLinks.gitlab ? (
        <a
          href={socialMediaLinks.gitlab}
          className="mb-[10px]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={`fab fa-gitlab ${iconBaseClasses} bg-social-gitlab`}></i>
        </a>
      ) : null}

      {socialMediaLinks.facebook ? (
        <a
          href={socialMediaLinks.facebook}
          className="mb-[10px]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={`fab fa-facebook-f ${iconBaseClasses} bg-social-facebook`}></i>
        </a>
      ) : null}

      {socialMediaLinks.instagram ? (
        <a
          href={socialMediaLinks.instagram}
          className="mb-[10px]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={`fab fa-instagram ${iconBaseClasses} bg-social-instagram`}></i>
        </a>
      ) : null}

      {socialMediaLinks.twitter ? (
        <a
          href={socialMediaLinks.twitter}
          className="mb-[10px]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={`fab fa-twitter ${iconBaseClasses} bg-social-twitter`}></i>
        </a>
      ) : null}

      {socialMediaLinks.medium ? (
        <a
          href={socialMediaLinks.medium}
          className="mb-[10px]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={`fab fa-medium ${iconBaseClasses} bg-social-medium`}></i>
        </a>
      ) : null}

      {socialMediaLinks.stackoverflow ? (
        <a
          href={socialMediaLinks.stackoverflow}
          className="mb-[10px]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={`fab fa-stack-overflow ${iconBaseClasses} bg-social-stackoverflow`}></i>
        </a>
      ) : null}

      {socialMediaLinks.kaggle ? (
        <a
          href={socialMediaLinks.kaggle}
          className="mb-[10px]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={`fab fa-kaggle ${iconBaseClasses} bg-social-kaggle`}></i>
        </a>
      ) : null}
    </div>
  );
}
