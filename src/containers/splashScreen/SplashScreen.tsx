"use client";

import React, {useContext} from "react";
import DisplayLottie from "@/components/displayLottie/DisplayLottie";
import {greeting, splashScreen} from "@/portfolio";
import StyleContext from "@/contexts/StyleContext";

export default function SplashScreen() {
  const {isDark} = useContext(StyleContext);
  return (
    <div
      className={`flex flex-col justify-center items-center min-h-screen ${isDark ? "bg-darkBg text-white" : ""}`}
    >
      <div className="h-[50vh]">
        <DisplayLottie animationData={splashScreen.animation} />
      </div>
      <div className="text-[2.5rem] no-underline">
        <span className="text-subTitle"> &lt;</span>
        <span className="font-agustina font-bold px-5" style={{fontVariantLigatures: "no-common-ligatures"}}>
          {greeting.username}
        </span>
        <span className="text-subTitle">/&gt;</span>
      </div>
    </div>
  );
}
