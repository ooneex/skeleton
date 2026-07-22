import type { SVGProps } from "react";

export const SimCardIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 19C21 20.6569 19.6569 22 18 22L6 22C4.34315 22 3 20.6569 3 19V9.42239C3 8.61438 3.32594 7.84052 3.90405 7.276L8.43287 2.85361C8.99329 2.30636 9.74552 2 10.5288 2H18C19.6569 2 21 3.34315 21 5L21 19ZM12 13H10V17H8V11H12V13ZM12 15V17H16V11H14V15H12Z"
        fill="currentColor"
      />
    </svg>
  );
};
