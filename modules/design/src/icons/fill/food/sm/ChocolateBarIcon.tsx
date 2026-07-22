import type { SVGProps } from "react";

export const ChocolateBarIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M14.5 1V2.5C14.5 4.70914 16.2909 6.5 18.5 6.5H20V10H4V4C4 2.34315 5.34315 1 7 1H14.5Z"
        fill="currentColor"
      />
      <path
        d="M22 12V17H20.3838L20.2705 16.9736L12 15.0273L3.72949 16.9736L3.61621 17H2V12H22Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        d="M19.8125 18.9209L19.8174 18.9219L19.9307 18.9482L20 18.9639V20C20 21.6569 18.6569 23 17 23H7C5.34315 23 4 21.6569 4 20V18.9639L4.06934 18.9482L4.18262 18.9219L4.1875 18.9209L12 17.082L19.8125 18.9209Z"
        fill="currentColor"
      />
    </svg>
  );
};
