import type { SVGProps } from "react";

export const FacePowderIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <ellipse cx="16" cy="6" rx="10" ry="4" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M16 30C10.4772 30 6 25.5228 6 20C6 14.4772 10.4772 10 16 10C19.2716 10 22.1763 11.5711 24.0007 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M19.5 15.126C18.5149 14.4174 17.3062 14 16 14C12.6863 14 10 16.6863 10 20C10 22.6666 11.7395 24.9268 14.1457 25.708"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <circle
        cx="24"
        cy="24"
        r="6"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
