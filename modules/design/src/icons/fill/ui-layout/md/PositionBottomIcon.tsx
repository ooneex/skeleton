import type { SVGProps } from "react";

export const PositionBottomIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 19L30 19L30 30L2 30L2 19Z"
        fill="currentColor"
        data-color="color-2"
      />
      <circle cx="3.5" cy="3.5" r="1.5" fill="currentColor" />
      <circle cx="3.5" cy="9.5" r="1.5" fill="currentColor" />
      <circle cx="28.5" cy="9.5" r="1.5" fill="currentColor" />
      <circle cx="3.5" cy="15.5" r="1.5" fill="currentColor" />
      <circle cx="28.5" cy="15.5" r="1.5" fill="currentColor" />
      <circle cx="9.75" cy="3.5" r="1.5" fill="currentColor" />
      <path
        d="M17.5 3.5C17.5 4.32843 16.8284 5 16 5C15.1716 5 14.5 4.32843 14.5 3.5C14.5 2.67157 15.1716 2 16 2C16.8284 2 17.5 2.67157 17.5 3.5Z"
        fill="currentColor"
      />
      <circle cx="22.25" cy="3.5" r="1.5" fill="currentColor" />
      <circle cx="28.5" cy="3.5" r="1.5" fill="currentColor" />
    </svg>
  );
};
