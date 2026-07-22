import type { SVGProps } from "react";

export const UsersIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <circle
        cx="16.5"
        cy="4.75"
        r="2.75"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
      />
      <path
        d="m15.553,16.5h6.422c.015-.165.025-.331.025-.5,0-3.038-2.462-5.5-5.5-5.5-.825,0-1.604.187-2.306.512"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
      />
      <circle
        cx="7.5"
        cy="10.25"
        r="2.75"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path
        d="m12.975,22c.015-.165.025-.331.025-.5,0-3.038-2.462-5.5-5.5-5.5s-5.5,2.462-5.5,5.5c0,.169.01.335.025.5h10.95Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
    </svg>
  );
};
