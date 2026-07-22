import type { SVGProps } from "react";

export const AngleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44 44L3.99999 44L3.99999 4L6.99999 4L6.99999 41L44 41L44 44Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 16C22.1503 16 32 25.8497 32 38H10V16Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
