import type { SVGProps } from "react";

export const CloudIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.183 6C38.0326 6 46 14.0697 46 24C46 33.9303 38.0326 42 28.183 42L12.7627 42C7.31512 41.975 2.74801 37.8646 2.08247 32.4216C1.38293 26.6988 5.20772 21.4477 10.7504 20.3666C12.4401 12.0474 19.6969 6.00438 28.183 6Z"
        fill="currentColor"
      />
    </svg>
  );
};
