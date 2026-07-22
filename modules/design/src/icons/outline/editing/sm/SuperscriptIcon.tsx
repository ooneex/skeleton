import type { SVGProps } from "react";

export const SuperscriptIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M23 11H18V10.75L21.8985 7.88184C22.5911 7.3723 23 6.56372 23 5.70389V5.5C23 4.11929 21.8807 3 20.5 3V3C19.1193 3 18 4.11929 18 5.5V5.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M13.8737 3H14L4 21H4.12891" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M13.8737 21H14L4 3H4.12891" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
