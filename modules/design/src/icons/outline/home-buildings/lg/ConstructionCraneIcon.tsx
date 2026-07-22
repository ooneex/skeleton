import type { SVGProps } from "react";

export const ConstructionCraneIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M38 30V18" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M18 18H43V12.5L18 9.5V8.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M10 9L3 11.25V18H10"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M18 42L10.1652 34.9487C10.0769 34.8692 10.0769 34.7308 10.1652 34.6513L17.8348 27.7487C17.9231 27.6692 17.9231 27.5308 17.8348 27.4513L10.1652 20.5487C10.0769 20.4692 10.0769 20.3308 10.1652 20.2513L17.8348 13.3487C17.9231 13.2692 17.9231 13.1308 17.8348 13.0513L10 6"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path d="M10 45V3H18V45" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M7 45H21" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M45 37L45 30L31 30L31 37L45 37Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
