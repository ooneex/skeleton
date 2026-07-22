import type { SVGProps } from "react";

export const EquationIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M14 22V22C14.6321 22 15.2299 21.7127 15.6247 21.2191L20.3753 15.2809C20.7701 14.7873 21.3679 14.5 22 14.5V14.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M21 22V22C20.3845 22 19.8191 21.6608 19.5294 21.1176L16.4706 15.3824C16.1809 14.8392 15.6155 14.5 15 14.5V14.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M22 3H13.5L7.5 20L4.27063 12H2"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
