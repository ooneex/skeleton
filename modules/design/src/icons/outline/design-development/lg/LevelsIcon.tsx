import type { SVGProps } from "react";

export const LevelsIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M4 39L8 36L12 39"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M20 39L24 36L28 39"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M36 39L40 36L44 39"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M20 30.0001L20 4" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M28 29.9999V19" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M36 30L36 10" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M4 30V10" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M43 30V4" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M12 30V22" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
