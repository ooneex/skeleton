import type { SVGProps } from "react";

export const UserHeartIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <circle
        cx="11"
        cy="6"
        r="4"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path
        d="m10.08,13.057c-3.984.457-7.08,3.836-7.08,7.943,2.722.68,5.444,1.009,8.166.995"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path
        d="m18,22.5c1.109-.5,5-3.271,5-5.811,0-1.485-1.206-2.689-2.692-2.689-.98,0-1.712.614-2.308,1.303-.595-.69-1.328-1.303-2.308-1.303-1.487,0-2.692,1.204-2.692,2.689,0,2.54,3.891,5.311,5,5.811Z"
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
