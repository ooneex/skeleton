import type { SVGProps } from "react";

export const FileMinusIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 19H22V21H12V19Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.95711 1.87868C9.51972 1.31607 10.2828 1 11.0784 1H18C19.6569 1 21 2.34315 21 4V17H12C10.8954 17 10 17.8954 10 19V21C10 22.1046 10.8954 23 12 23H6C4.34315 23 3 21.6569 3 20V9.07843C3 8.28278 3.31607 7.51972 3.87868 6.95711L8.95711 1.87868ZM5 9H11V3L5 9Z"
        fill="currentColor"
      />
    </svg>
  );
};
