"use client";

import {useEffect} from "react";

export default function HotjarInit() {
  useEffect(() => {
    import("@hotjar/browser").then(({default: Hotjar}) => {
      Hotjar.init(3913468, 6);
    });
  }, []);

  return null;
}
