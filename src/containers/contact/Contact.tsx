"use client";

import React, {useContext} from "react";
import SocialMedia from "@/components/socialMedia/SocialMedia";
import {illustration, contactInfo} from "@/portfolio";
import {Fade} from "react-awesome-reveal";
import email from "@/assets/lottie/email.json";
import DisplayLottie from "@/components/displayLottie/DisplayLottie";
import StyleContext from "@/contexts/StyleContext";

export default function Contact() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade direction="up" duration={1000} triggerOnce>
      <div
        className="w-[90%] px-[10px] py-[20px] mx-auto mt-16"
        id="contact"
      >
        <div className="flex [&>*]:flex-1">
          <div>
            <h1 className="text-[65px] font-normal max-[1380px]:text-[40px] max-[1380px]:text-center max-[768px]:text-[40px] max-[768px]:text-center">
              {contactInfo.title}
            </h1>
            <p
              className={`uppercase max-[1380px]:text-[16px] max-[1380px]:leading-normal max-[1380px]:text-center max-[768px]:text-[16px] max-[768px]:leading-normal max-[768px]:text-center ${
                isDark ? "dark-mode" : "text-subTitle"
              }`}
            >
              {contactInfo.subtitle}
            </p>
            <div
              className={`mt-6 max-[1380px]:text-center max-[1380px]:mt-6 max-[768px]:text-center max-[768px]:mt-6 ${
                isDark ? "dark-mode" : ""
              }`}
            >
              {contactInfo.number && (
                <>
                  <a
                    className="mt-[20px] text-[40px] font-normal text-subTitle no-underline hover:text-textColor hover:shadow-[2px_1px_2px_#b5b5b5] hover:transition-all hover:duration-300 max-[1380px]:text-[20px] max-[768px]:text-[20px]"
                    href={"tel:" + contactInfo.number}
                  >
                    {contactInfo.number}
                  </a>
                  <br />
                  <br />
                </>
              )}
              <a
                className="mt-[20px] text-[40px] font-normal text-subTitle no-underline hover:text-textColor hover:shadow-[2px_1px_2px_#b5b5b5] hover:transition-all hover:duration-300 max-[1380px]:text-[20px] max-[768px]:text-[20px]"
                href={"mailto:" + contactInfo.email_address}
              >
                {contactInfo.email_address}
              </a>
              <br />
              <br />
              <SocialMedia />
            </div>
          </div>
          <div className="max-[1380px]:hidden max-[768px]:hidden">
            {illustration.animated ? (
              <DisplayLottie animationData={email} />
            ) : (
              <img
                alt="Man working"
                src={"/images/contactMailDark.svg"}
                className="max-w-full h-auto ml-6 -mt-16"
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
