import type { SVGProps } from "react";

export const LetterBIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M14 20C13.4477 20 13 20.4477 13 21C13 21.5523 13.4477 22 14 22V20ZM14 43V44H28V43V42H14V43ZM28 21V20H14V21V22H28V21ZM39 32H40C40 25.3726 34.6274 20 28 20V21V22C33.5228 22 38 26.4772 38 32H39ZM28 43V44C34.6274 44 40 38.6274 40 32H39H38C38 37.5228 33.5228 42 28 42V43Z"
        fill="currentColor"
        data-cap="butt"
        data-stroke="none"
      />
      <path
        d="M14 43V5H25C29.4183 5 33 8.58172 33 13V13C33 17.4183 29.4183 21 25 21H14.7308"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
