import type { SVGProps } from "react";

export const AlertQuestionIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <circle
        cx="12"
        cy="20.5"
        r=".5"
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
      />
      <path
        d="m7.602,6.791c.675-2.572,2.772-3.904,5.12-3.783,2.319.119,4.477,1.395,4.377,4.355-.142,4.208-4.599,3.638-5.098,7.638h.016"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
    </svg>
  );
};
