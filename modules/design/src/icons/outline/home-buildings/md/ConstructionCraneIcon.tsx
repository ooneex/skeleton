import type { SVGProps } from "react";

export const ConstructionCraneIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M24 20V11" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M6.66667 6H4V11H6.66667"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M12 11H28V7L12 5.66667V5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M7 29V3H12V29" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M4 29H15" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M20.5535 21.7238L24.0079 20L27.4479 21.7234C27.7863 21.8929 28 22.239 28 22.6175V24.5H20V22.6186C20 22.2395 20.2143 21.8931 20.5535 21.7238Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
