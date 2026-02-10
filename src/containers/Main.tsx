"use client";

import React, {useEffect, useState} from "react";
import Header from "@/components/header/Header";
import Greeting from "@/containers/greeting/Greeting";
import Skills from "@/containers/skills/Skills";
import StackProgress from "@/containers/skillProgress/skillProgress";
import WorkExperience from "@/containers/workExperience/WorkExperience";
import StartupProject from "@/containers/StartupProjects/StartupProject";
import Education from "@/containers/education/Education";
import Contact from "@/containers/contact/Contact";
import ScrollToTopButton from "@/containers/topbutton/Top";
import SplashScreen from "@/containers/splashScreen/SplashScreen";
import HotjarInit from "@/components/HotjarInit/HotjarInit";
import {splashScreen} from "@/portfolio";
import {StyleProvider} from "@/contexts/StyleContext";
import {useLocalStorage} from "@/hooks/useLocalStorage";

const Main = () => {
  const darkPref =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-color-scheme: dark)")
      : {matches: false};
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode bg-darkBg text-white transition-colors duration-100" : "transition-colors duration-100"}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        <HotjarInit />
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <>
            <Header />
            <Greeting />
            <Skills />
            <StackProgress />
            <Education />
            <WorkExperience />
            <StartupProject />
            <Contact />
            <ScrollToTopButton />
          </>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;
