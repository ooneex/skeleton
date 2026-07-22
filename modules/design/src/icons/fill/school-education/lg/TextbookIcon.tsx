import type { SVGProps } from "react";

export const TextbookIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M36 2C39.3137 2 42 4.68629 42 8V40C42 43.3137 39.3137 46 36 46H14V2H36ZM21 5V20.8682L28 16.2012L35 20.8682V5H21Z"
        fill="currentColor"
      />
      <path d="M11 46H6V2H11V46Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
