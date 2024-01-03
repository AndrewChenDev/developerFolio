import React from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";

export default function Footer() {
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        {/*<p className={isDark ? "dark-mode footer-text" : "footer-text"}>*/}
        {/*  {emoji("Made with ❤️ by DeveloperFolio Team")}*/}
        {/*</p>*/}
        {/*<p className={isDark ? "dark-mode footer-text" : "footer-text"}>*/}
        {/*  Theme by{" "}*/}
        {/*  <a href="https://github.com/saadpasta/developerFolio">*/}
        {/*    developerFolio*/}
        {/*  </a>*/}
        {/*</p>*/}
      </div>
    </Fade>
  );
}
