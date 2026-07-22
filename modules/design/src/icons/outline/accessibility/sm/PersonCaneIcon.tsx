import type { SVGProps } from "react";

export const PersonCaneIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <circle
        cx="10"
        cy="3"
        r="2"
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
      />
      <line
        x1="19"
        y1="16"
        x2="21"
        y2="21"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
      />
      <path
        d="m4,13l.869-2.607c.084-.251.263-.459.5-.578l3.42-1.709c.139-.07.292-.106.447-.106h2.234c.332,0,.642.164.828.439l1.7,2.5c.074.109.169.203.28.275l2.722,1.786"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <line
        x1="7.807"
        y1="17.481"
        x2="6"
        y2="22"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path
        d="m14,22l-.925-4.625c-.049-.24-.185-.453-.381-.6l-2.894-2.175c-.504-.378-.8-.97-.8-1.6v-4.971.971"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
    </svg>
  );
};
