import type { SVGProps } from "react";

export const ArrowsInfinityIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M12 12H7C4.23858 12 2 14.2386 2 17V17C2 19.7614 4.23858 22 7 22V22C9.76142 22 12 19.7614 12 17V15V15.5556"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M12 12H17C19.7614 12 22 9.76142 22 7V7C22 4.23858 19.7614 2 17 2V2C14.2386 2 12 4.23858 12 7V9V8.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M15 6L12 9L9 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M9 18L12 15L15 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
