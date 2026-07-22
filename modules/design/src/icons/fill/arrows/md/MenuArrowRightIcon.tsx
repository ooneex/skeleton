import type { SVGProps } from "react";

export const MenuArrowRightIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="3" y="4" width="15" height="2" strokeWidth="0" fill="currentColor" />
      <rect x="3" y="26" width="15" height="2" strokeWidth="0" fill="currentColor" />
      <polygon
        points="23 8.586 21.586 10 26.586 15 3 15 3 17 26.586 17 21.586 22 23 23.414 30.414 16 23 8.586"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
    </svg>
  );
};
