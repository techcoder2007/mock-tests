"use client";

import React from "react";
import { Button } from "../ui/button";

const steps = [
  {
    title: "Part 1",
    id: 0,
    description: "Part One Questions",
  },
  {
    title: "Part 2",
    id: 1,
    description: "Part Two Questions",
  },
  {
    title: "Part 3",
    id: 2,
    description: "Part Three Questions",
  },
];

export const Stepper = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNextStep = () => {
    setActiveStep(() => {
      if (activeStep === steps.length - 1) {
        return activeStep;
      }
      return activeStep + 1;
    });
  };

  const handlePrevStep = () => {
    setActiveStep(() => {
      if (activeStep === 0) {
        return activeStep;
      }
      return activeStep - 1;
    });
  };

  return (
    <React.Fragment>
      <ol className="flex items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg shadow-sm dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 rtl:space-x-reverse">
        <li className="flex items-center text-blue-600 dark:text-blue-500">
          <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
            1
          </span>
          Task One
          <svg
            className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 12 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke-width="2"
              d="m7 9 4-4-4-4M1 9l4-4-4-4"
            />
          </svg>
        </li>
        <li className="flex items-center">
          <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            2
          </span>
          Task Two
          <svg
            className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 12 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke-width="2"
              d="m7 9 4-4-4-4M1 9l4-4-4-4"
            />
          </svg>
        </li>
        <li className="flex items-center">
          <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            3
          </span>
          Task Three
        </li>
      </ol>
    </React.Fragment>
  );
};

Stepper.displayName = "Stepper";
