import type { SVGProps } from "react";

export const TextbookIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 1C19.6569 1 21 2.34315 21 4V20C21 21.6569 19.6569 23 18 23H3V1H18ZM8 11.8682L12 9.20117L16 11.8682V3H8V11.8682Z"
        fill="currentColor"
      />
    </svg>
  );
};
