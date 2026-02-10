"use client";

import React, {useEffect} from "react";

export default function Top() {
  function TopEvent() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  useEffect(() => {
    function scrollFunction() {
      const topButton = document.getElementById("topButton");
      if (!topButton) return;
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        topButton.style.visibility = "visible";
      } else {
        topButton.style.visibility = "hidden";
      }
    }

    window.addEventListener("scroll", scrollFunction);
    scrollFunction();

    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  return (
    <button
      onClick={TopEvent}
      id="topButton"
      title="Go to top"
      className="invisible fixed bottom-5 right-[30px] z-[99] border-none outline-none bg-button text-white cursor-pointer p-[15px] rounded-[15px] text-[25px] hover:bg-topButtonHover hover:transition-all hover:duration-200 hover:ease-in-out"
    >
      <i className="fas fa-hand-point-up" aria-hidden="true"></i>
    </button>
  );
}
