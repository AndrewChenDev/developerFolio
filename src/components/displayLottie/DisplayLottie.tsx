"use client";

import React, {Suspense} from "react";
import Lottie from "lottie-react";
import type {LottieAnimationData} from "@/types/portfolio";

interface DisplayLottieProps {
  animationData: LottieAnimationData;
}

export default function DisplayLottie({animationData}: DisplayLottieProps) {
  return (
    <Suspense fallback={null}>
      <Lottie animationData={animationData} loop={true} />
    </Suspense>
  );
}
