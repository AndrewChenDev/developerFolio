"use client";

import React from "react";

interface ButtonProps {
  text: string;
  className?: string;
  href: string;
  newTab?: boolean;
}

export default function Button({text, className, href, newTab}: ButtonProps) {
  return (
    <div className={className}>
      <a
        className="bg-button border border-solid border-button text-textDark font-bold w-max py-[13px] px-[22px] mr-[50px] uppercase rounded-md text-center no-underline block mt-5 text-base cursor-pointer transition-all duration-300 ease-in-out hover:bg-white hover:text-button hover:-translate-y-[3px] md:max-[768px]:text-[0.938rem] md:max-[768px]:py-3 md:max-[768px]:px-[18px] md:max-[768px]:mr-0 max-[768px]:text-[0.938rem] max-[768px]:py-3 max-[768px]:px-[18px] max-[768px]:mr-0 max-[320px]:text-xs"
        href={href}
        target={newTab ? "_blank" : undefined}
      >
        {text}
      </a>
    </div>
  );
}
