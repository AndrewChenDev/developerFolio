"use client";

import React, {useState, useContext} from "react";
import emoji from "react-easy-emoji";
import StyleContext from "@/contexts/StyleContext";
import "./ToggleSwitch.css";

const ToggleSwitch = () => {
  const {isDark} = useContext(StyleContext);
  const [isChecked, setChecked] = useState(isDark);
  const styleContext = useContext(StyleContext);

  return (
    <label className="relative inline-block w-[50px] h-[26px]">
      <input
        className="toggle-input scale-50"
        type="checkbox"
        checked={isDark}
        onChange={() => {
          styleContext.changeTheme();
          setChecked(!isChecked);
        }}
      />
      <span className="toggle-slider absolute cursor-pointer inset-0 bg-toggleSliderBg rounded-[34px] flex items-center transition-all duration-[0.4s]">
        <span className="z-10 flex items-center ml-[2px] toggle-emoji">
          {isChecked ? emoji("\uD83C\uDF1C") : emoji("\u2600\uFE0F")}
        </span>
      </span>
    </label>
  );
};
export default ToggleSwitch;
