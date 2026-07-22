import type { SVGProps } from "react";

export const EyeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M12 5C5 5 2 12 2 12C2 12 5 19 12 19C19 19 22 12 22 12C22 12 19 5 12 5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <circle
        cx="12"
        cy="12"
        r="3"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
