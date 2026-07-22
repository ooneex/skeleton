import type { SVGProps } from "react";

export const Tag3Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m21.414,11.914L11.5,2H2v9.5l9.914,9.914c.781.781,2.047.781,2.828,0l6.672-6.672c.781-.781.781-2.047,0-2.828Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <circle
        cx="7.5"
        cy="7.5"
        r=".5"
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
      />
      <line
        x1="13"
        y1="10"
        x2="16"
        y2="13"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
      />
      <line
        x1="10"
        y1="13"
        x2="13"
        y2="16"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
      />
    </svg>
  );
};
