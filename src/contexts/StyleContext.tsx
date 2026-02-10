"use client";

import React from "react";
import type {StyleContextType} from "@/types/portfolio";

const StyleContext = React.createContext<StyleContextType>({
  isDark: false,
  changeTheme: () => {}
});

export const StyleProvider = StyleContext.Provider;
export const StyleConsumer = StyleContext.Consumer;

export default StyleContext;
