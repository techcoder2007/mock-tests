"use client";

import React from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export const ProgressBarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      {children}
      <ProgressBar
        height="3px"
        color="#0000FF"
        options={{ showSpinner: true }}
        shallowRouting
      />
    </>
  );
};
